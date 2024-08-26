import { Component, inject } from "@angular/core";
import {
	Firestore,
	type FirestoreDataConverter,
	collection,
	collectionData,
} from "@angular/fire/firestore";
import { ModalController } from "@ionic/angular";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import type { Observable } from "rxjs";
import { PersonalModalComponent } from "src/app/components/content/modal/personal/personal.component";
import { ProgramModalComponent } from "src/app/components/content/modal/program/program.component";
import type { IPersonal } from "src/models/content/personal.interface";
import type { IProgram } from "src/models/content/program.interface";

const personalConverter: FirestoreDataConverter<IPersonal> = {
	toFirestore: (personal: IPersonal) => personal,
	fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>): IPersonal => {
		const data = snapshot.data();
		return {
			name: data["name"],
			description: data["description"],
			picture: data["picture"],
			startTime: data["startTime"],
			endTime: data["endTime"],
			workDays: data["workDays"],
		};
	},
};

const programConverter: FirestoreDataConverter<IProgram> = {
	toFirestore: (program: IProgram) => program,
	fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>): IProgram => {
		const data = snapshot.data();
		return {
			name: data["name"],
			description: data["description"],
			picture: data["picture"],
		};
	},
};

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage {
	menuState = true;
	personals$: Observable<IPersonal[]>;
	programs$: Observable<IProgram[]>;

	private firestore: Firestore = inject(Firestore);

	constructor(private modalController: ModalController) {
		this.personals$ = this.createCollectionObservable<IPersonal>(
			"personal",
			personalConverter,
		);
		this.programs$ = this.createCollectionObservable<IProgram>(
			"program",
			programConverter,
		);
	}

	private createCollectionObservable<T>(
		path: string,
		converter: FirestoreDataConverter<T>,
	): Observable<T[]> {
		const collectionRef = collection(this.firestore, path).withConverter(
			converter,
		);
		return collectionData(collectionRef);
	}

	onMenuToggle(menuState: boolean): void {
		this.menuState = menuState;
	}

	async openPersonalModal(personal: IPersonal): Promise<void> {
		const modal = await this.modalController.create({
			component: PersonalModalComponent,
			componentProps: {
				personal,
			},
		});
		await modal.present();
	}

	async openProgramModal(program: IProgram): Promise<void> {
		const modal = await this.modalController.create({
			component: ProgramModalComponent,
			componentProps: {
				program,
			},
		});
		await modal.present();
	}
}

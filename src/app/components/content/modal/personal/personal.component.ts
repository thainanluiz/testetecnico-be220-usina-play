import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import type { IPersonal } from "src/models/content/personal.interface";

@Component({
	selector: "app-personal-modal",
	templateUrl: "./personal.component.html",
	styleUrls: ["./personal.component.scss"],
})
export class PersonalModalComponent {
	@Input() personal: IPersonal | undefined;

	dayTranslations: Record<string, string> = {
		Monday: "Segunda-feira",
		Tuesday: "Terça-feira",
		Wednesday: "Quarta-feira",
		Thursday: "Quinta-feira",
		Friday: "Sexta-feira",
		Saturday: "Sábado",
		Sunday: "Domingo",
	};

	constructor(private modalController: ModalController) {}

	dismiss() {
		this.modalController.dismiss();
	}

	translatedWorkDays(): string[] {
		return (
			this.personal?.workDays.map((day) => this.dayTranslations[day] || day) ||
			[]
		);
	}
}

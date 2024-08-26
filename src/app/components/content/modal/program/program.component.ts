import { Component, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import type { IProgram } from "src/models/content/program.interface";

@Component({
	selector: "app-program-modal",
	templateUrl: "./program.component.html",
	styleUrls: ["./program.component.scss"],
})
export class ProgramModalComponent {
	@Input() program: IProgram | undefined;

	constructor(private modalController: ModalController) {}

	dismiss() {
		this.modalController.dismiss();
	}
}

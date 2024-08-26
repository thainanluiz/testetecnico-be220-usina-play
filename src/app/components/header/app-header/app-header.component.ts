import { Component, EventEmitter, Output } from "@angular/core";
import { environment } from "src/environments/environment.prod";

@Component({
	selector: "app-header",
	templateUrl: "./app-header.component.html",
	styleUrls: ["./app-header.component.scss"],
})
export class AppHeaderComponent {
	@Output() onMenuToggle = new EventEmitter<boolean>();
	menuState = true;

	clientLogo: string = environment.clientLogo;

	toggleMenu(): void {
		this.menuState = !this.menuState;
		this.onMenuToggle.emit(this.menuState);
	}
}

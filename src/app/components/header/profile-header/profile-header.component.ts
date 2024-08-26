import { Component } from "@angular/core";
import { ToastService } from "src/app/handlers/toast.service";
import { environment } from "src/environments/environment.prod";

@Component({
	selector: "app-profile-header",
	templateUrl: "./profile-header.component.html",
	styleUrls: ["./profile-header.component.scss"],
})
export class ProfileHeaderComponent {
	clientLogo: string = environment.clientLogo;
	menuState = false;

	constructor(private toastService: ToastService) {}

	toggleMenu(): void {
		this.menuState = !this.menuState;
	}

	showToast(title: string, message: string): void {
		this.toastService.success({
			title,
			message,
		});
	}
}

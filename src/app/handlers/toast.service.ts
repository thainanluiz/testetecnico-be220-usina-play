import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

interface ToastOptions {
	message: string;
	title: string;
	timeout?: number;
}

@Injectable({
	providedIn: "root",
})
export class ToastService {
	constructor(private toastr: ToastrService) {}

	success({ message, title, timeout = 3000 }: ToastOptions) {
		this.toastr.success(message, title, {
			timeOut: timeout,
			progressBar: true,
			extendedTimeOut: 1,
		});
	}

	error({ message, title, timeout = 3000 }: ToastOptions) {
		this.toastr.error(message, title, {
			timeOut: timeout,
			progressBar: true,
			extendedTimeOut: 1,
		});
	}

	warning({ message, title, timeout = 3000 }: ToastOptions) {
		this.toastr.warning(message, title, {
			timeOut: timeout,
			progressBar: true,
			extendedTimeOut: 1,
		});
	}
}

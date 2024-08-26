import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import {
	ScreenTrackingService,
	getAnalytics,
	provideAnalytics,
} from "@angular/fire/analytics";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { getStorage, provideStorage } from "@angular/fire/storage";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(),
	],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		provideFirebaseApp(() =>
			initializeApp({
				projectId: "usinaplay",
				appId: "1:705419215432:web:66c7952084347b94118e7d",
				storageBucket: "usinaplay.appspot.com",
				apiKey: "AIzaSyDwMCwt_12CmrdZuKbsZXkIt8Ky3JrhfYk",
				authDomain: "usinaplay-c5a34.firebaseapp.com",
				messagingSenderId: "705419215432",
			}),
		),
		provideAnalytics(() => getAnalytics()),
		ScreenTrackingService,
		provideFirestore(() => getFirestore()),
		provideStorage(() => getStorage()),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

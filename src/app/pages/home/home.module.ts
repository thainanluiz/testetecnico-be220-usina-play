import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CardComponent } from "src/app/components/content/card/card.component";
import { ContentSectionComponent } from "src/app/components/content/content-section/content-section.component";
import { PersonalModalComponent } from "src/app/components/content/modal/personal/personal.component";
import { ProgramModalComponent } from "src/app/components/content/modal/program/program.component";
import { AppHeaderComponent } from "src/app/components/header/app-header/app-header.component";
import { ProfileHeaderComponent } from "src/app/components/header/profile-header/profile-header.component";
import { HomePageRoutingModule } from "./home-routing.module";
import { HomePage } from "./home.page";

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [
		HomePage,
		AppHeaderComponent,
		ProfileHeaderComponent,
		ContentSectionComponent,
		CardComponent,
		PersonalModalComponent,
		ProgramModalComponent,
	],
})
export class HomePageModule {}

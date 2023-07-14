import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { DiscordComponent } from './discord/discord.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { StepperComponent } from './stepper/stepper.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    HowToUseComponent,
    LeaderBoardComponent,
    DiscordComponent,
    MyAccountComponent,
    AboutUsComponent,
    ContactComponent,
    StepperComponent,
    PageLayoutComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

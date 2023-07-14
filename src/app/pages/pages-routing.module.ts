import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { DiscordComponent } from './discord/discord.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
// import { StepperComponent } from './stepper/stepper.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: StepperComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'how-to-use',
        component: HowToUseComponent,
      },
      {
        path: 'leader-board',
        component: LeaderBoardComponent,
      },
      {
        path: 'discord',
        component: DiscordComponent,
      },
      {
        path: 'my-account',
        component: MyAccountComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

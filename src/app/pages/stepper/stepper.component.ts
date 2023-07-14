import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  buildImgURL: any;
  hideButton: boolean;
  activityImgURL: any;
  characterImgURL: any;
  stepIndex: number = 1;
  playingCharacterList = [
    { img: 'assets/sorc.png', text: 'Sorcerer' },
    { img: 'assets/druid.png', text: 'Necro' },
    { img: 'assets/barb.png', text: 'Barb' },
    { img: 'assets/druid.png', text: 'Druid' },
    { img: 'assets/rogue.png', text: 'Rogue' },
  ];

  playingBuild = [
    { img: 'assets/nightmare.png', text: 'Blood Surge' },
    { img: 'assets/nightmare.png', text: 'Bone Spear' },
    { img: 'assets/nightmare.png', text: 'Bone Spirit' },
    { img: 'assets/nightmare.png', text: 'Infinimist' },
    { img: 'assets/nightmare.png', text: 'Sever' },
    { img: 'assets/nightmare.png', text: 'Summoner' },
  ];

  playingActivity = [
    { img: 'assets/nightmare.png', text: 'NM Dungeons' },
    { img: 'assets/helltide.png', text: 'Helltides' },
    { img: 'assets/split-renown-dungeons.png', text: 'Split Renown Dungeons' },
    { img: 'assets/early-game-leveling.png', text: 'PvP' },
  ];

  activityRanges = [
    { range: '31 - 35', disabled: false },
    { range: '36 - 40', disabled: false },
    { range: '41 - 50', disabled: false },
    { range: '51 - 60', disabled: true },
    { range: '61 - 70', disabled: true },
    { range: '71 - 80', disabled: true },
    { range: '81 - 90', disabled: true },
    { range: '91 - 10', disabled: true },
  ];

  stepBackward() {
    this.stepIndex--;
    if (this.stepIndex == 1) {
      this.hideButton = false;
    }
  }

  stepForward() {
    if (this.stepIndex == 7) {
      return;
    }
    this.stepIndex++;
    if (this.stepIndex > 1) {
      this.hideButton = true;
    }
  }

  characterImg(event) {
    this.characterImgURL = event.target.src;
  }

  activityImg(event) {
    this.activityImgURL = event.target.src;
  }

  buildImg(event) {
    this.buildImgURL = event.target.src;
  }
}

import { Component, OnInit } from '@angular/core';
import { IonAvatar } from '@ionic/angular';
import { AvatarPageModule } from './avatar.module';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  constructor(private AvatarPageModule: AvatarPageModule) { }

  ngOnInit() {
  }

}

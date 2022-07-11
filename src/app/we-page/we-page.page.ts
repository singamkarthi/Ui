import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-we-page',
  templateUrl: './we-page.page.html',
  styleUrls: ['./we-page.page.scss'],
})
export class WePagePage implements OnInit {
  we : boolean=false;
  constructor(private navCtrl : NavController) { 
    this.we = true;
  }

  ngOnInit() {
  }

  goto(view){
    this.navCtrl.navigateRoot(view);
  }
}

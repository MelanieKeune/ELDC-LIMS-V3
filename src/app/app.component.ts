import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ELDC-LIMS-V3';
  elem=document.documentElement;
  
  Enterfullscreen()
  {
    if(this.elem.requestFullscreen){
      this.elem.requestFullscreen();
    }

  }

  Exitfullscreen()
  {

    if(document.exitFullscreen){
      document.exitFullscreen();
    }

  }
  
  responsiveMenu:any;
  defaultStatus=true;
  leftNavMargin = '0px';
  openNav(status:any)
  {
    if(status===this.defaultStatus)
    {
      this.responsiveMenu = { 'display': 'block' };
      this.leftNavMargin = '150px';
      this.defaultStatus = false;
    }
    else
    {
      this.responsiveMenu = { 'display': null };
      this.leftNavMargin = '0';
      this.defaultStatus = true;
    }
  }
}





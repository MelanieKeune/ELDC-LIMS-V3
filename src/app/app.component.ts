import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ELDC-LIMS-V3';








  responsiveMenu:any;
  defaultStatus=true;
  openNav(status:any)
  {
    if(status===this.defaultStatus)
    {
      this.responsiveMenu=
      {
        'display':'block'
      }
      this.defaultStatus = false;
    }
    else
    {
      this.responsiveMenu =
      {
       'display':null
      }
      this.defaultStatus=true;
    }
  }


}





// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import {jsPDF} from 'jspdf';


import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  GeneratePdf(){ 
    const doc = new jsPDF();

    doc.text('test pdf voor grafiek!', 10, 10);

    doc.save('Grafiek.pdf');

  }

}

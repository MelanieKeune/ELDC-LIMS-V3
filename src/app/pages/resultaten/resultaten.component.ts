import { Component, OnInit } from '@angular/core';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-resultaten',
  templateUrl: './resultaten.component.html',
  styleUrls: ['./resultaten.component.css']
})
export class ResultatenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  GeneratePdf(){ 
    const doc = new jsPDF();

    doc.text('test pdf voor grafiek!', 10, 10);

    doc.save('Grafiek.pdf');

  }

}

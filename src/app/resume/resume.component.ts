import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }
  pdfSource =  "https://raw.githubusercontent.com/oXCookiXo/CarlosRAyala.com/master/CAyala-Resume-2020.pdf";
  ngOnInit(): void {
  }

}

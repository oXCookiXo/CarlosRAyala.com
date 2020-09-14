import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {open,save} from '../home/scripts.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = 'Look jQuery Animation working in action!';

  public ngOnInit()
  {
    $.getScript('./assets/scripts.js');
  }

  public  open()
  {
    open();
  }

}

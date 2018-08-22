import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  users = ['Jack', 'John', 'Jim', 'Jane']


  constructor() { }

  condition(){

  }

  getName(){
    return "Olivier"
  }

  getContent(){
    return "no quote quote needed"
  }

  getImpressiveStyle(){
    return 'impressive';
  }

  clearUsers(){
    this.users = [];
  }

  ngOnInit() {
  }

}

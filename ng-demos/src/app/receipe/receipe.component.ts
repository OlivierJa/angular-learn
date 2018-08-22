import {Component, OnInit} from '@angular/core';

type Ingredient = {
  name: string,
  done: boolean
}

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {

  ingredients = [
    {name: 'flour', good: false},
    {name: 'milk', good: true},
    {name: 'eggs', good: true},
    {name: 'sugar', good: false},
    {name: 'salt', good: false},
    {name: 'rum', good: true},
    {name: 'butter', good: false}
  ];


  constructor() {
  }

  ngOnInit() {
  }


  toggle(i: Ingredient) {
    i.done = !i.done;
  }

  isDone(i: Ingredient) {
    return i.done;
  }
}

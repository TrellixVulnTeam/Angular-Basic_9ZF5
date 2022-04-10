import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  myString1: string = "Supun Rasanga";

  myString2: string = "Hello World";

  amount: number = 45684.241;

  currentDate = new Date();

  total: number = 56.25458;

  percentageVal: number = 0.12456;

  myObject: any[]=[
    {
      id: 1, name: "Abc"
    },
    {
      id: 2, name: "Def"
    },
    {
      id: 1, name: "Egh"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }


}

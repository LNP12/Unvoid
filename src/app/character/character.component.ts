import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
 data: any;
  constructor() { }

  ngOnInit(): void {
    this.data=  (sessionStorage.getItem("data"));
    this.data = JSON.parse(this.data);
  }

}

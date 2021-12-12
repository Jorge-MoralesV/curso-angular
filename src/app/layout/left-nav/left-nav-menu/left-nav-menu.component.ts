import { Component, Input, OnInit } from '@angular/core';
import { ILeeftNavMenu } from '@data/interfaces';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.scss']
})
export class LeftNavMenuComponent implements OnInit {

@Input() data!:ILeeftNavMenu;

  constructor() { }

  ngOnInit(): void {
  }

}

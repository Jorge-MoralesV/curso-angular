import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LEFT_NAV_MENUS } from '@data/constants/left-nav-menu.const';
import { ILeeftNavMenu } from '@data/interfaces';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  @Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public name = 'Fernanda Larios';
  public position = 'Gerente';
  public avatar = '../../assets/img/persona6.jpg';
  public logo = '../../assets/img/iconocurso.png';

public menus: ILeeftNavMenu[]=LEFT_NAV_MENUS;

  constructor() { }

  ngOnInit(): void {
  }

}

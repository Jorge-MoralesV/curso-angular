import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faBell, faComment } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public faBell = faBell;
  public faComment = faComment;
  public avatar = '../../assets/img/persona6.jpg'
  public logo = '.../../assets/img/iconocurso.png'
  constructor() { }

  ngOnInit(): void {
  }

}

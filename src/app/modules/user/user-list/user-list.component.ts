import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: ICardUser[] = [{
    name: 'Jorge Morales',
    age: 22,
    description: 'Desarrollador fullstack',
    avatar: '../../../assets/img/What-is-an-End.png',
  },
  {
    name: 'Alma Salinas',
    age: 22,
    description: 'Desarrollador fullstack',
    avatar: '../../../assets/img/What-is-an-End.png'
  },
  {
    name: 'Raul Enrique',
    age: 22,
    description: 'Desarrollador fullstack',
    avatar: '../../../assets/img/What-is-an-End.png'
  },
  {
    name: 'Jose Sanchez',
    age: 22,
    description: 'Desarrollador fullstack',
    avatar: '../../../assets/img/What-is-an-End.png'
  },
  {
    name: 'Jesus Saenz',
    age: 22,
    description: 'Desarrollador fullstack',
    avatar: '../../../assets/img/What-is-an-End.png'
  },
  ]
  constructor() { }

  ngOnInit() {
  }

}

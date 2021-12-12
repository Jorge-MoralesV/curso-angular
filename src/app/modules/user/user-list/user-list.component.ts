import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { ICarouselItem } from '@shared/components/carousel/Icarousel-item.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  public users: ICardUser[] = USERS_DATA;

  public tasks: { title: string }[] = [
    {
      title: 'Lavar trastes'
    },
    {
      title: 'Estudiar'
    },
    {
      title: 'Pasear al perro'
    }
  ];

  public options = [
    'un',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'doce',
    'veinte',
    'ningun',
  ];

  constructor(
    //private userService: UserService
  ) {
    /* this.userService.getAllUsers().subscribe(
       r => {
         if (!r.error) {
           this.users = r.data;
         }
       }
     );*/
  }

  trackByUserId(_index: any, item: any) {
    return item.id;
  }

  newUser() {
    this.users.push({
      id: 23,
      age: 30,
      avatar: '../../assets/img/persona6.jpg',
      description: 'Soy trabajador',
      name: 'Sofia',
      gender:'F',
      work: 'Consultor'
    }
    );
  }

  ngOnInit() {
  }

}

import { UsersService } from './users.service';
import { Component } from '@angular/core';

interface User {
  user: string;
  pass: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicios con Angular';
  nombre = 'Robert Rocky Balboa';
  usersService: UsersService;
  dataUsers: User[];

  constructor(){

    this.usersService = new UsersService('admin','121212');
    this.dataUsers = this.usersService.getUsers();

    console.log('%c' + this.dataUsers, 'background-color: red; color: yellow;');
  }
}

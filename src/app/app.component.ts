import { UsersService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicios con Angular';
  nombre = 'Robert Rocky Balboa';

  constructor(){
    
    const usersService = new UsersService();

    console.log('%c' + usersService.getUsers(), 'background-color: red; color: yellow;');
  }
}

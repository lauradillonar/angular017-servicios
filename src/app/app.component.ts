import { CService } from './c.service';
import { BService } from './b.service';
import { UsersService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BService, CService]
})
export class AppComponent {
  title = 'Servicios con Angular';

  constructor(private serviceB: BService, private serviceC: CService){
  }
}

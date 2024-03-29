import { Component, Input } from '@angular/core';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() navUser?: UserModel;
}

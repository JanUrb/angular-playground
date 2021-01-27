import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  title = 'default-testing-app';

  users: User[] = [];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.loadCachedUser().then((user) => {
      this.users.push(...user);
    });
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}

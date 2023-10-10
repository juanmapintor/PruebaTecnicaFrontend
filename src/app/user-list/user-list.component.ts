import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersList: any[] = []

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsersList().subscribe(usersList => {
      this.usersList = usersList
    });
  }

}

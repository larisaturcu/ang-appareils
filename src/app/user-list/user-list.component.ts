import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../model/User.model';
import { UserService } from '../services/user.service';

@ Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {


  private users: User[];
  userSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this .userSubscription = this .userService.userSubject.subscribe(
      (users: User[]) => {
        this .users = users;
      }
    );
    this .userService.emitUsers();
  }

  ngOnDestroy(): void {
    this .userSubscription.unsubscribe();
  }
}

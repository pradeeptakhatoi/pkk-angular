import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ UserService ]
})
export class UsersComponent implements OnInit {
 users: any[];

 constructor(private userService : UserService) {

 }


 ngOnInit() {
   this.userService.getUsers().subscribe(
     data => {
       this.users = data;
     },
     error => {
       console.log(error);
     }
   );
 }

}
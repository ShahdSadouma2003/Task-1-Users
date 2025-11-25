import { Component } from "@angular/core";
import { ViewUsersComponent } from "../view-users/view-users";

@Component({
  selector: 'app-home',
  imports: [ViewUsersComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

}

// ....................
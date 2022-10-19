import { Component, OnInit } from '@angular/core';
import { User } from './Interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'news_manager_web';

  user: User = {
    username: '',
    password: '',
  }

  constructor () {}

  login (): void {
    this.user.username = "";
    this.user.password = "";
  }

  ngOnInit(): void {
    
  }
}

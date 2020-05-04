import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username;
  password;
  title = 'crypto-storage';

  login(){
    alert(`Login ${this.username} ${this.password}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { LocalService } from './core/services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public name: string = '';
  public lastName: string = '';

  constructor(private localService: LocalService) {

  }

  login() {
    this.setLocalStorage(this.name, this.lastName);
  }


  setLocalStorage(name: string, lastname: string) {
    // Set the User data
    let user = {
      name: name,
      lastname: lastname
    }
    this.localService.setJsonValue('user', user);
  }
  getLocalStorage() {
    // Get the user data
    let userdata = this.localService.getJsonValue('user');
    console.log(userdata)
  }
  ngOnInit() {
    // this.setLocalStorage();
    // this.getLocalStorage();
  }
}

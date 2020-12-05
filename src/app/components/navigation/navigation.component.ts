import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {}

  text: string = 'Login';

  ngOnInit() {
    if (localStorage.getItem('session')) this.text = 'Logout';
  }

}

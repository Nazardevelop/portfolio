import { Component, OnInit } from '@angular/core';
import { Icon } from './Icon';
import { ICONS } from './mock-icons';

@Component({
  selector: 'app-name-icons',
  templateUrl: './name-icons.component.html',
  styleUrls: ['./name-icons.component.css']
})
export class NameIconsComponent implements OnInit {
  icons = ICONS;
  constructor() { 

  }

  ngOnInit() {
  }

}

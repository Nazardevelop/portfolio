import { Component, OnInit } from '@angular/core';
import { Image } from './Image';
import { IMAGES } from './mock-images';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images = IMAGES;
  image: Image;
  constructor() { }
  backWard() {
    this.image = this.images.pop();
    this.images.unshift(this.image);
  }
  forWard() {
    this.image = this.images.shift();
    this.images.push(this.image);
  }
  isActive(index: number): boolean {
    if (index === this.images[0].index) {
      return true;
    }
    else {
      console.log(index);
      return false;
    }
    
  }
  ngOnInit() {
  }

}

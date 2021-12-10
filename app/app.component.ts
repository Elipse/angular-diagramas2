import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  canvas: any;

  ngOnInit() {
    this.canvas = new fabric.Canvas('myCanvas', );

    this.canvas.add(new fabric.IText('Hello Fabric!'));

    fabric.Image.fromURL('https://upload.wikimedia.org/wikipedia/commons/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg', (image) => {
      image.set({
        left: 50,
        top: 70,
      });
      
      this.canvas.add(image);
    });
  }
}

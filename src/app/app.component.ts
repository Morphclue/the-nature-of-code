import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {P5Component} from './p5/p5.component';
import {noise, randomNumberDistribution, walkerSketch} from './p5/sketches';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, P5Component, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'the-nature-of-code';
  sketches: any = [
    {name: 'Noise', sketch: noise},
    {name: 'Random Number Distribution', sketch: randomNumberDistribution},
    {name: 'Walker', sketch: walkerSketch},
  ];
  selectedSketch = walkerSketch;

  selectSketch(selection: any) {
    this.selectedSketch = selection.sketch;
  }
}

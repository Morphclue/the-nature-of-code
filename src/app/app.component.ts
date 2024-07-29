import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {P5Component} from './p5/p5.component';
import {randomNumberDistribution, walkerSketch} from './p5/sketches';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, P5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'the-nature-of-code';
  sketches: any = {
    walkerSketch,
    randomNumberDistribution,
  };
  selectedSketch = this.sketches.walkerSketch;

  selectSketch(sketchName: string) {
    this.selectedSketch = this.sketches[sketchName];
  }
}

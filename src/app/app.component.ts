import {Component} from '@angular/core';
import {P5Component} from './p5/p5.component';
import {bouncingBall, gravityBalls, noise, randomNumberDistribution, walkerSketch} from './p5/sketches';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [P5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  sketches: any = [
    {name: 'Bouncing Ball', sketch: bouncingBall},
    {name: 'Gravity Balls', sketch: gravityBalls},
    {name: 'Noise', sketch: noise},
    {name: 'Random Number Distribution', sketch: randomNumberDistribution},
    {name: 'Walker', sketch: walkerSketch},
  ];
  selectedSketch = walkerSketch;
  query = '';

  selectSketch(selection: any) {
    this.selectedSketch = selection.sketch;
  }

  onQuery(event: Event) {
    const target = event.target as HTMLInputElement | null;
    this.query = target ? target.value : '';
  }

  get filteredSketches() {
    const q = (this.query || '').toLowerCase();
    return this.sketches.filter((s: any) => s.name.toLowerCase().includes(q));
  }
}

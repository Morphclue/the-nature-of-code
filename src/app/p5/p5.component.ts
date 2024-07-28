import {AfterViewInit, Component, Inject, Input, OnDestroy, PLATFORM_ID, ViewChild} from '@angular/core';
import p5 from 'p5';

@Component({
  selector: 'app-p5',
  standalone: true,
  imports: [],
  templateUrl: './p5.component.html',
  styleUrl: './p5.component.scss',
})
export class P5Component implements AfterViewInit, OnDestroy {
  @Input() sketch!: (p: any) => void;
  @ViewChild('p5container') p5container: any;
  private p5instance!: p5;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
  }

  ngAfterViewInit() {
    this.createCanvas();
  }

  ngOnDestroy() {
    this.p5instance.remove();
  }

  private createCanvas() {
    this.p5instance = new p5(this.sketch, this.p5container.nativeElement);
  }
}

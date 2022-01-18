import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {
  @Input() name: string;
  @Input() data: string[];
  @Input() datas: Observable<any>;
  fruitList: string[] = [];
  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.datas.subscribe(item => {
      this.fruitList = [...this.fruitList, ...item];
      this.cd.markForCheck();
    });
  }
  update() {
    console.log('detect changes .....');
    this.cd.detectChanges();
  }
}

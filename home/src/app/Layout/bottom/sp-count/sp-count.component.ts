import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-sp-count',
  templateUrl: './sp-count.component.html',
  styleUrls: ['./sp-count.component.scss']
})
export class SpCountComponent {
  @Input () checkHiden :boolean  =false

}

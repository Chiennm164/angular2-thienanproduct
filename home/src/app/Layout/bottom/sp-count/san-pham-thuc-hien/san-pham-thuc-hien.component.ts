import { Component, Input, ɵɵNgOnChangesFeature } from '@angular/core';

@Component({
  selector: 'app-san-pham-thuc-hien',
  templateUrl: './san-pham-thuc-hien.component.html',
  styleUrls: ['./san-pham-thuc-hien.component.scss'],
})
export class SanPhamThucHienComponent {
  @Input() listItem: any;

  list: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listItem.forEach((item: any) => {
      if (item.active) {
        this.list = item.list;
      }
    });
  }

  changeList(event: Event, id: any) {
    event.preventDefault();
    this.listItem.forEach((item: any) => {
      if (item.id === id) {
        this.list = item.list;
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}

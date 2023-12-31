import { Component } from '@angular/core';

@Component({
  selector: 'app-diem-khac-biet',
  templateUrl: './diem-khac-biet.component.html',
  styleUrls: ['./diem-khac-biet.component.scss'],
})
export class DiemKhacBietComponent {
  data: any = [
    {
      img: 'https://vietstarmax.vn/wp-content/uploads/2022/06/1000kh.webp',
      num: '1000',
      text: ['Khách hàng', 'đã và đang hợp tác'],
    },
    {
      img: 'https://vietstarmax.vn/wp-content/uploads/2022/06/12namkn.webp',

      num: '12',
      text: ['Năm kinh nghiệm', 'truyền thông quảng cáo'],
    },
    {
      img: 'https://vietstarmax.vn/wp-content/uploads/2022/06/300cdtt.webp',
      num: '300',
      text: ['Chiến dịch', 'truyền thông'],
    },
    {
      img: 'https://vietstarmax.vn/wp-content/uploads/2022/06/giai-thuong.webp',
      num: '2016',
      text: ['Giải thưởng TVC Golden Bell', 'quả chuông vàng'],
    },
  ];
}

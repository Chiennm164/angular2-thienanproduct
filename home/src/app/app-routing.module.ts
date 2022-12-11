import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { DichVuComponent } from './page/dich-vu/dich-vu.component';
import { SanXuatPhimHinhAnhComponent } from './page/dich-vu/san-xuat-phim-hinh-anh/san-xuat-phim-hinh-anh.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  {
    path: 'dichvu/:id',
    component: DichVuComponent,
    children: [
      { path: 'sanxuatphimhinhanh', component: SanXuatPhimHinhAnhComponent },
    ],
  },
  // { path: 'sanpham', component: IndexComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

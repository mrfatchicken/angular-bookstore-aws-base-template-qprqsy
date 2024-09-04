import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { BookStoreRoutingModule } from './book-store-routing.module';

@NgModule({
  imports: [CommonModule, BookStoreRoutingModule],
  declarations: [BookStoreComponent],
})
export class BookStoreModule {}

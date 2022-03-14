import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Book } from '../models/book';
import { BookService } from '../services/books/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  booksAwaiting: Book[] = [];
  booksAwaitingSubscription: Subscription;
  booksPending: Book[] = [];
  booksPendingSubscription: Subscription;
  booksRead: Book[] = [];
  booksReadSubscription: Subscription;
  newPageNumber: number;

  constructor(private bookService: BookService) {}

  onAddBook(form: NgForm) {
    const body: Book = new Book(
      this.bookService.idGiven++,
      form.value.title,
      form.value.author,
      0,
      false
    );
    console.log(body);

    this.bookService.addBook(body);
    form.reset();
  }

  onResetForm(form: NgForm) {
    form.reset();
  }

  onDeleteBookAwaiting(id: number) {
    this.bookService.deleteBookAwaiting(id);
    console.log(this.booksAwaiting);
  }

  onDeleteBookPending(id: number) {
    this.bookService.deleteBookPending(id);
    console.log(this.booksPending);
  }

  onDeleteBookRead(id: number) {
    this.bookService.deleteBookRead(id);
    console.log(this.booksRead);
  }

  onMoveToPending(id: number) {
    this.bookService.moveToPending(id);
    console.log(this.booksAwaiting);
    console.log(this.booksPending);
    console.log(this.booksRead);
  }

  onMarkAsRead(id: number) {
    this.bookService.markAsRead(id);
    console.log(this.booksAwaiting);
    console.log(this.booksPending);
    console.log(this.booksRead);
  }

  onGetBookBack(id: number) {
    this.bookService.getBookBack(id);
    console.log(this.booksAwaiting);
    console.log(this.booksPending);
    console.log(this.booksRead);
  }

  onEditPageNumber(id: number) {
    this.bookService.editPageNumber(id, this.newPageNumber);
    console.log(this.booksPending);
  }

  ngOnInit(): void {
    this.booksAwaitingSubscription = this.bookService
      .getBooksAwaiting()
      .subscribe((booksAwaiting: Book[]) => {
        this.booksAwaiting = booksAwaiting;
      });
    console.log(this.booksAwaiting);

    this.booksPendingSubscription = this.bookService
      .getBooksPending()
      .subscribe((booksPending: Book[]) => {
        this.booksPending = booksPending;
      });
    console.log(this.booksPending);

    this.booksReadSubscription = this.bookService
      .getBooksRead()
      .subscribe((booksRead: Book[]) => {
        this.booksRead = booksRead;
      });
    console.log(this.booksAwaiting);
  }

  ngOnDestroy(): void {
    this.booksAwaitingSubscription.unsubscribe();
    this.booksPendingSubscription.unsubscribe();
    this.booksReadSubscription.unsubscribe();
  }
}

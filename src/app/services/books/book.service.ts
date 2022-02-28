import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  idGiven: number = 1;
  booksAwaiting: Book[] = [];
  booksPending: Book[] = [];
  booksRead: Book[] = [];

  constructor() { }

  addBook(book: Book) {
    this.booksAwaiting.push(book);
    console.log(this.booksAwaiting);
  }

  deleteBookAwaiting(bookId: number) {
    const index = this.booksAwaiting.findIndex((i) => i.id === bookId);
    this.booksAwaiting.splice(index, 1);
  }

  deleteBookPending(bookId: number) {
    const index = this.booksPending.findIndex((i) => i.id === bookId);
    this.booksPending.splice(index, 1);
  }

  deleteBookRead(bookId: number) {
    const index = this.booksRead.findIndex((i) => i.id === bookId);
    this.booksRead.splice(index, 1);
  }

  moveToPending(bookId: number) {
    const index = this.booksAwaiting.findIndex((i) => i.id === bookId);
    this.booksPending.push(this.booksAwaiting[index]);
    this.booksAwaiting.splice(index, 1);
  }

  markAsRead(bookId: number) {
    const index = this.booksPending.findIndex((i) => i.id === bookId);
    this.booksRead.push(this.booksPending[index]);
    this.booksPending.splice(index, 1);
  }

  getBookBack(bookId: number) {
    const index = this.booksRead.findIndex((i) => i.id === bookId);
    this.booksAwaiting.push(this.booksRead[index]);
    this.booksRead.splice(index, 1);
  }

  getBooksAwaiting() {
    const booksAwaitingObservable = new Observable((observer) => {
      observer.next(this.booksAwaiting);
    });
    return booksAwaitingObservable;
  }

  getBooksPending() {
    const booksPendingObservable = new Observable((observer) => {
      observer.next(this.booksPending);
    });
    return booksPendingObservable;
  }

  getBooksRead() {
    const booksReadObservable = new Observable((observer) => {
      observer.next(this.booksRead);
    });
    return booksReadObservable;
  }

  editPageNumber(bookId: number, newPageNumber: number) {
    const index = this.booksPending.findIndex((i) => i.id === bookId);
    this.booksPending[index].bookPageNumber = newPageNumber;
    console.log(this.booksPending)
  }
}

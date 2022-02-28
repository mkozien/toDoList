export class Book {
    id: number;
    title: string;
    author: string;
    bookPageNumber?: number;

    constructor(id: number, title: string, author: string, bookPageNumber: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.bookPageNumber = bookPageNumber;
    }
}
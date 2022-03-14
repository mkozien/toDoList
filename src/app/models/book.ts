export class Book {
    id: number;
    title: string;
    author: string;
    bookPageNumber?: number;
    pageEditMode?: boolean;

    constructor(id: number, title: string, author: string, bookPageNumber: number, pageEditMode: boolean) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.bookPageNumber = bookPageNumber;
        this.pageEditMode = pageEditMode;
    }
}
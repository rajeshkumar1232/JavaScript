class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
            return `${this.title} was writter by ${this.author} in year ${this.year}`;
     }

    static topBookStore() {
        return 'rich dad and poor dad';
    }
}

//Initilizing object
const book1 = new Book('book one', 'zazzel a', '2018');

console.log(book1);
console.log(Book.topBookStore());
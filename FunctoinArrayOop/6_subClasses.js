class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
            return `${this.title} was writter by ${this.author} in year ${this.year}`;
     }
}

//magzine Sub class

class Magzine extends Book{
    constructor(title , author, year, month) {
        super(title , author, year);
        this.month = month;
    }
}

//Initilizing object
const book1 = new Book('book one', 'zazzel a', '2018','FEB');

console.log(book1);
console.log(book1.getSummary());
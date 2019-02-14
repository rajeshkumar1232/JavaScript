//Constructor
function Book( title , author, year) {
   this.title = title;
   this.author = author;
   this.year = year;
   this.getSummary = function(){
         return `${this.title} was writter by ${this.author} in year ${this.year}`;
    }   
}

const book1 = new Book('book one', 'zazzel a','2016');
const book2 = new Book('book two', 'zazzel b','2017');

console.log(book1);
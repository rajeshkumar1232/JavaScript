function Book( title , author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    }
 
Book.prototype.getSummary = function(){
    return `${this.title} was writter by ${this.author} in year ${this.year}`;
};

//Magzine Constructor
function Magzine( title, author, year, month){
    Book.call(this, title, author, year);

    this.month = month;
}

//Inoder to inherit we have to explicitly define
Magzine.prototype = Object.create(Book.prototype);

//instantiating magzine object
const mag1 = new Magzine('mag one', 'zazzel a', '2018','jan');

console.log(mag1);
console.log(mag1.getSummary());
// const s = 'hello';
// console.log(typeof s);

// const s2 = new String('hello');
// console.log(typeof s2);

// console.log(window);
// console.log(navigator.appVersion);

//CREATING OBJECT
const book1 = {
    title: 'Book One',
    author: 'Zazzel',
    year: '2018',
    getSummary: function(){
        return `${this.title} was writter by ${this.author} in year ${this.year}`;
    }
}

const book2 = {
    title: 'Book two',
    author: 'Zazzel b',
    year: '2019',
    getSummary: function(){
        return `${this.title} was writter by ${this.author} in year ${this.year}`;
    }
}

console.log(book1.title);
console.log(book2.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));

const myLibrary = [];

function Book(author, title, pages, status) {
    this.id = crypto.randomUUID()
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages}, ${status}`
    } 
}

function addBook(author, title, pages, status) {
        const book = new Book(author, title, pages, status);
        myLibrary.push(book)
        return book;
    }


addBook("MWTHEKING", "THE KING OF NOTHING", "100000", "Read")
addBook("test", "test", "test", "test")

console.table(myLibrary)
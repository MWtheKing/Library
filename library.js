const myLibrary = [];

function Book(author, title, pages, status) {
    this.id = crypto.randomUUID()
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages}, ${status}`
    };
};

function addBook(author, title, pages, status) {
        const book = new Book(author, title, pages, status);
        myLibrary.push(book)
        return book;
    };


addBook("MWTHEKING", "THE KING OF NOTHING", "100000", "Read")
addBook("Nobody", "Test", "0", "Not Read")

console.table(myLibrary)

function createCards() {

    let books = myLibrary.length
    let bookGrid = document.querySelector(".bookGrid")


    myLibrary.forEach(book => {

            let bookCard = document.createElement("div")
            bookCard.classList.add("book");

            let title = document.createElement("div")
            title.classList.add("title");
            title.textContent = book.title

            let author = document.createElement("div")
            author.classList.add("author");
            author.textContent = `by ${book.author}`

            let pages = document.createElement("div")
            pages.classList.add("pages");
            pages.textContent = `${book.pages} pages`

            let status = document.createElement("div")
            status.classList.add("status");
            status.textContent = book.status

            bookCard.appendChild(title)
            bookCard.appendChild(author)
            bookCard.appendChild(pages)
            bookCard.appendChild(status)


            bookGrid.appendChild(bookCard)
    });
};

function newBookForm() {
    
}


createCards();




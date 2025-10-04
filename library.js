let myLibrary = [];

// function Book(author, title, pages, status) {
//     this.id = crypto.randomUUID()
//     this.author = author;
//     this.title = title;
//     this.pages = pages;
//     this.status = status;     
// };

class Book {
    constructor(author, title, pages, status) {
    this.id = crypto.randomUUID()
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;    
    }
    toggleStatus() {
        this.status = this.status === "Read" ? "Have Not Read" : "Read";
    }
}

// function addBook(author, title, pages, status) {
//         const book = new Book(author, title, pages, status);
//         myLibrary.push(book)
//         return book;
//     };

class addBook extends Book {
    constructor(author, title, pages, status) {
        const book = new Book(author, title, pages, status);
        myLibrary.push(book)
        return book;
    }
}

new addBook("MWTHEKING", "THE KING OF NOTHING", "100000", "Read")
new addBook("Nobody", "Test", "0", "Have Not Read")
new addBook("Nobody", "Test", "0", "Have Not Read")
new addBook("Nobody", "Test", "0", "Have Not Read")
new addBook("Nobody", "Test", "0", "Have Not Read")
new addBook("Nobody", "Test", "0", "Have Not Read")

console.table(myLibrary)

class createCards {

    constructor() {
        this.forEach()
    };
  

    createNewCard() {

        let bookGrid = document.querySelector(".book-grid")

        bookGrid.innerHTML = ""

        new createCards();
        new removeBook()
    };

    forEach() {
        let bookGrid = document.querySelector(".book-grid")
        
        myLibrary.forEach(book => {

                let bookCard = document.createElement("div")
                bookCard.classList.add("book");
                bookCard.dataset.id = book.id;

                let title = document.createElement("h3")
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

                let remove = document.createElement("button")
                remove.classList.add("remove-book")
                let removeText = `<span>Remove Book</span>`
                let removeSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-circle-outline</title><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" /></svg>`
                remove.innerHTML = `${removeText} ${removeSvg}`

                let toggle = document.createElement("button");
                toggle.classList.add("toggle-status");
                toggle.textContent = "Toggle Status";

                toggle.addEventListener("click", () => {
                    book.toggleStatus();
                    this.createNewCard()
                });

                
                bookCard.append(remove, title, author, pages, status, toggle)

                bookGrid.appendChild(bookCard)

                new removeBook()
        });
    }
   
};


class newBookForm {
    
    constructor() {
    this.formData();
    };

    createNewCard() {

        let bookGrid = document.querySelector(".book-grid")

        bookGrid.innerHTML = ""

        new createCards();
        new removeBook()
    };

    formData() {
        let addBookBtn = document.querySelector(".add-book")
        let formShow = document.querySelector(".form-container")
        let formClose = document.querySelector(".close")
        let formSubmit = document.querySelector("form")

            addBookBtn.addEventListener("click", () => {
                formShow.classList.add("active")

                formClose.addEventListener("click", () => {
                    formShow.classList.remove("active")
                });
        });

            formSubmit.addEventListener("submit", (e) => {
                e.preventDefault();
                const formInfo = new FormData(formSubmit);
                
                const formEntries = Object.fromEntries(formInfo)

                const newBook = new addBook(
                    formEntries.author,
                    formEntries.title,
                    formEntries.pages,
                    formEntries.status === "true" ? "Read" : "Not Read"
                );
                formShow.classList.remove("active");
                formSubmit.reset(); 

                this.createNewCard()
            });   
    };

};

class removeBook {
    constructor() {

        let removeBtn = document.querySelectorAll(".remove-book")

        removeBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                let bookCard = e.target.closest(".book")
                let bookId = bookCard.dataset.id;

                myLibrary = myLibrary.filter(book => book.id !== bookId);

                bookCard.remove()
            });
        });
    };  
};


new newBookForm();
new createCards();
new removeBook()

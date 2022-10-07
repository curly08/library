// Book Object

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleReadStatus() {
    this.read = this.read === 1 ? 0 : 1;
  }

  getInfo() {
    if (this.read) {
      return (
        this.title + " by " + this.author + ", " + this.pages + " pages, read"
      );
    } else {
      return (
        this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages, not read yet"
      );
    }
  }
}

// Add, Delete, and Display library functions

function addToLibrary(...args) {
  myLibrary.push(...args);
}

function displayBooks() {
  const library = document.querySelector(".library");

  myLibrary.forEach((book, index) => {
    const article = document.createElement("article");
    library.appendChild(article);
    const title = document.createElement("h2");
    title.textContent = book.title;
    const list = document.createElement("ul");
    const liAuthor = document.createElement("li");
    liAuthor.textContent = `Author: ${book.author}`;
    const liPages = document.createElement("li");
    liPages.textContent = `Number of Pages: ${book.pages}`;
    const liRead = document.createElement("li");
    liRead.textContent = `Status: ${book.read ? "Read" : "Not Read Yet"}`;
    list.append(liAuthor, liPages, liRead);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.index = index;
    deleteBtn.addEventListener("click", () => {
      deleteBook(deleteBtn.dataset.index);
    });
    const editBtn = document.createElement("button");
    editBtn.textContent = "Change Read Status";
    editBtn.dataset.index = index;
    editBtn.addEventListener("click", () => {
      changeReadStatus(editBtn.dataset.index);
    });
    article.append(title, list, deleteBtn, editBtn);
  });
}

function deleteBook(index) {
  removeArticles();
  myLibrary.splice(index, 1);
  displayBooks();
}

function changeReadStatus(index) {
  removeArticles();
  myLibrary[index].toggleReadStatus();
  displayBooks();
}

// mock data
let myLibrary = [];

const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 295, 1);
const theFellowship = new Book(
  "The Fellowship of the Ring",
  "J. R. R. Tolkien",
  423,
  1
);
const theTowers = new Book("The Two Towers", "J. R. R. Tolkien", 352, 0);
const theReturn = new Book(
  "The Return of the King",
  "J. R. R. Tolkien",
  416,
  0
);

addToLibrary(theHobbit, theFellowship, theTowers, theReturn);

displayBooks();

// Add Book Form

const newBookForm = document.getElementById("new-book-form");

function showForm() {
  if (newBookForm.style.display === "block") {
    newBookForm.style.display = "none";
  } else {
    newBookForm.style.display = "block";
  }
}

function removeArticles() {
  const articles = document.querySelectorAll("article");
  articles.forEach((article) => {
    article.remove();
  });
}

newBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  removeArticles();
  addToLibrary(
    new Book(
      newBookForm.elements["title"].value,
      newBookForm.elements["author"].value,
      newBookForm.elements["pages"].value,
      newBookForm.elements["read-status"].checked
    )
  );
  displayBooks();
  this.reset();
});

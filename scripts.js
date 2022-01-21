let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

function addToLibrary(...args) {
  myLibrary.push(...args);
};

Book.prototype.getInfo = function() {
  if (this.read) {
    return this.title + " by " + this.author + ", " + this.pages + " pages, read";
  } else {
    return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
  };
};

function displayBooks() {
  const library = document.querySelector('.library');

  myLibrary.forEach((book) => {
    const article = document.createElement('article');
    library.appendChild(article);
    const title = document.createElement('h2');
    title.textContent = book.title;
    const list = document.createElement('ul');
    const liAuthor = document.createElement('li');
    liAuthor.textContent = `Author: ${book.author}`;
    const liPages = document.createElement('li');
    liPages.textContent = `Number of Pages: ${book.pages}`;
    const liRead = document.createElement('li');
    liRead.textContent = `Status: ${book.read ? 'Read' : 'Not Read'}`;
    article.append(title, list);
    list.append(liAuthor, liPages, liRead);
  });
};

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295, 1);
const theFellowship = new Book('The Fellowship of the Ring', 'J. R. R. Tolkien', 423, 1);
const theTowers = new Book('The Two Towers', 'J. R. R. Tolkien', 352, 0);
const theReturn = new Book('The Return of the King', 'J. R. R. Tolkien', 416, 0);

addToLibrary(theHobbit, theFellowship, theTowers, theReturn);
displayBooks();

// Add Book Form
function showForm() {
  const newBookForm = document.getElementById('new-book-form');

  if (newBookForm.style.display === "block") {
    newBookForm.style.display = "none";
  } else {
    newBookForm.style.display = "block";
  };
};

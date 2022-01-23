// Book Object
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

function displayBooks(...args) {
  const library = document.querySelector('.library');

  args.forEach((book) => {
    const title = document.createElement('h2');
    title.textContent = book.title;
    const article = document.createElement('article');
    library.appendChild(article);
    const list = document.createElement('ul');
    const liAuthor = document.createElement('li');
    liAuthor.textContent = `Author: ${book.author}`;
    const liPages = document.createElement('li');
    liPages.textContent = `Number of Pages: ${book.pages}`;
    const liRead = document.createElement('li');
    liRead.textContent = `Status: ${book.read ? 'Read' : 'Not Read Yet'}`;
    article.append(title, list);
    list.append(liAuthor, liPages, liRead);
  });
};

// mock data
let myLibrary = [];

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295, 1);
const theFellowship = new Book('The Fellowship of the Ring', 'J. R. R. Tolkien', 423, 1);
const theTowers = new Book('The Two Towers', 'J. R. R. Tolkien', 352, 0);
const theReturn = new Book('The Return of the King', 'J. R. R. Tolkien', 416, 0);

addToLibrary(theHobbit, theFellowship, theTowers, theReturn);

myLibrary.forEach((book) => {
  displayBooks(book);
})

// Add Book Form
const newBookForm = document.getElementById('new-book-form');

function showForm() {
  if (newBookForm.style.display === "block") {
    newBookForm.style.display = "none";
  } else {
    newBookForm.style.display = "block";
  };
};

newBookForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addToLibrary(new Book(newBookForm.elements['title'].value,
               newBookForm.elements['author'].value,
               newBookForm.elements['pages'].value,
               newBookForm.elements['read-status'].checked));
  displayBooks(myLibrary[myLibrary.length - 1]);
  this.reset();
});

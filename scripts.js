function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

Book.prototype.getInfo = function() {
  if (this.read) {
    return this.title + " by " + this.author + ", " + this.pages + " pages, read";
  } else {
    return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
  };
};

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(hobbit.getInfo());
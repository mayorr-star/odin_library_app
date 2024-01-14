const addBookButton = document.querySelector("#add_book_btn");

const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${isRead}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
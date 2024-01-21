const booksContainer = document.querySelector(".library");
const newBookButton = document.getElementById("new_book_btn");
const formInputs = document.querySelectorAll("input");
const body = document.querySelector("body");
let wrongInput = true;
const myLibrary = [
  {
    title: "The Alchemist",
    author: "Paulo Coehlo",
    pages: "2345",
    datePublished: "12th June 2003",
    readStatus: "I have read"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coehlo",
    pages: "2345",
    datePublished: "12th June 2003",
    readStatus: "I have read"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coehlo",
    pages: "2345",
    datePublished: "12th June 2003",
    readStatus: "I have read"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coehlo",
    pages: "2345",
    datePublished: "12th June 2003",
    readStatus: "I have read"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coehlo",
    pages: "2345",
    datePublished: "12th June 2003",
    readStatus: "Yes, I have read this book"
  }
];

window.addEventListener("DOMContentLoaded", displayBook);
newBookButton.addEventListener("click", showForm);
form.addEventListener("submit", e => {
  e.preventDefault();
  validateFormInputs();
  if (!wrongInput) {
    addBookToLibrary(getBookDetails());
    displayBook();
    removeForm();
  }
});

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function Book(title, author, pages, datePublished, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.datePublished = datePublished;
  this.readStatus = readStatus;
}

function displayBook() {
  let book = "";
  for (let i = 0; i < myLibrary.length; i++) {
    book += ` <div class="book">
    <span class="book_title">Book Title: ${myLibrary[i].title}</span>
    <span class="book_author">Book Author: ${myLibrary[i].author}</span>
    <span class="book_pages">Pages: ${myLibrary[i].pages} pages</span>
    <span class="date_published">Date Pubished: ${myLibrary[i].datePublished}</span>
    <span class="status">Read Status: ${myLibrary[i].readStatus}</span>
</div>`
  };
  booksContainer.innerHTML = book;
}

function showForm() {
  body.classList.toggle("show")
}

function removeForm() {
  body.classList.remove("show")
}

function setError(element, message) {
  const inputControl = element.parentNode;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element.parentNode;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.textContent = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
}

function validateFormInputs() {
  const bookTitle = document.getElementById("book_title");
  const bookAuthor = document.getElementById("book_author");
  const bookPages = document.getElementById("book_pages");
  const datePublished = document.getElementById("date_published");
  const yesRead = document.getElementById("yes");
  const noRead = document.getElementById("no");
  const stillRead = document.getElementById("on_it");

  const bookTitleValue = document.getElementById("book_title").value.trim();
  const bookAuthorValue = document.getElementById("book_author").value.trim();
  const bookPagesValue = document.getElementById("book_pages").value.trim();
  const datePublishedValue = document.getElementById("date_published").value.trim();
  if (bookTitleValue === "") {
    wrongInput = true;
    setError(bookTitle, "Book title is required")
  } else {
    setSuccess(bookTitle)
    wrongInput = false;
  }

  if (bookAuthorValue === "") {
    wrongInput = true;
    setError(bookAuthor, "Book author is required")
  } else {
    wrongInput =  false;
    setSuccess(bookAuthor)
  }

  if (bookPagesValue === "") {
    wrongInput = true;
    setError(bookPages, "Book pages is required")
  } else if (bookPagesValue < 1) {
    wrongInput = true;
    setError(bookPages, "Pages can't be less than 1")
  }  else {
    wrongInput = false;
    setSuccess(bookPages)
  }
  
  if (datePublishedValue === "") {
    wrongInput = true;
    setError(datePublished, "Date published is required")
  } else {
    wrongInput = false;
    setSuccess(datePublished)
  }

  if (!yesRead.checked && !noRead.checked && !stillRead.checked) {
    wrongInput = true;
    alert("Please check")
  }
}

function getBookDetails() {
  let BookTitle = null;
  let BookAuthor = null;
  let BookPages = null;
  let DatePublished = null;
  let ReadStatus = null;
  formInputs.forEach(input => {
    switch(input.dataset.id) {
      case "title":
        BookTitle = input.value;
        break;
      case "author":
        BookAuthor = input.value;
        break;
      case "pages":
        BookPages = input.value;
        break;
      case "date":
        DatePublished = input.value;
    }
    if (input.dataset.id === "radio" && input.checked) {
      ReadStatus = input.value;
      console.log(ReadStatus)
    }
  })
  return new Book(BookTitle, BookAuthor, BookPages, DatePublished, ReadStatus)
}
const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    };
}

//create library card
function createLibraryCard(currentBook) {
  let library = document.querySelector('.header');
  const book = document.createElement('div');
  book.innerHTML = `Book ${currentBook + 1}: <br />
  Title: ${myLibrary[currentBook].title} <br />
  Author: ${myLibrary[currentBook].author} <br />
  # Pages: ${myLibrary[currentBook].pages} <br />
  Have I read this book? ${myLibrary[currentBook].read} <br />
  `
  book.classList.add(`book${myLibrary.length - 1}`);
  library.append(book);
  return ;

}

// your JavaScript file
const container = document.querySelector('.card');



function createForm() {
const cardContainer = document.createElement('form');
cardContainer.action = "/";
cardContainer.method = "GET";
cardContainer.classList.add('cardContainer');

const content = document.createElement('form');
content.classList.add('content');
content.textContent = 'Add a book below to continue!';

container.appendChild(cardContainer);

// Define input types
const inputClasses = ['title', 'author', 'pages'];

// Loop through input types, create, and append inputs

inputClasses.forEach(cls => {
  const input = document.createElement('input');
  const inputTitle = document.createElement('p');
  inputTitle.innerHTML = `enter the ${cls}`
  input.classList.add(cls);
  cardContainer.appendChild(inputTitle)
  cardContainer.appendChild(input);
  if (cls === "pages") {
    input.type = 'number';
  }
});

const page = cardContainer.querySelector('.pages')
const readButton = document.createElement('select');
readButton.setAttribute('id', 'readButton')
const labelRead = document.createElement('label');
labelRead.setAttribute('for','readButton');
labelRead.innerText = 'Have you read the book?'
const readValueOne = document.createElement('option');
readValueOne.value = "Yes";
readValueOne.innerHTML = "Yes";
const readValueTwo = document.createElement('option');
readValueTwo.value = "No";
readValueTwo.innerHTML = "No";
readButton.appendChild(readValueOne);
readButton.appendChild(readValueTwo);

const submit = document.createElement('button');
submit.type = 'submit'
submit.innerText = 'SUBMIT'
cardContainer.appendChild(labelRead);
cardContainer.appendChild(readButton);
cardContainer.appendChild(submit);

//submit book and send to library
submit.addEventListener('click', function(event) {
  event.preventDefault();
  let title = document.querySelector('.title').value;
  let pages = document.querySelector('.author').value;
  let author = document.querySelector('.pages').value;
  let read = document.querySelector('#readButton').value;
  addBookToLibrary(title,pages,author,read);
  cardContainer.remove();
  createLibraryCard(myLibrary.length - 1);
  
  // Add delete button
  if (myLibrary.length > 0) {
    let latestBook = document.querySelector(`.book${myLibrary.length - 1}`)
    let addButton = document.querySelector('#add-book')
    let body = document.body;
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete Last Book'
    body.appendChild(deleteButton);
    deleteButton.addEventListener('click',() => {
      myLibrary.pop();
      latestBook.remove();
      if (myLibrary.length === 0) {
        deleteButton.remove();
      }
    })
  }
})

}

//select the button & have form pop up
document.getElementById('add-book').addEventListener('click', function() {
    createForm()
})


function addBookToLibrary(title,pages,author,read){
  const newBook = new Book(title,pages,author,read);
  myLibrary.push(newBook);
  }
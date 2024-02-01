const myLibrary = [{
    title: "Dance with dragons",
    author: "George R R Martin",
    pages: "Loads",
    read: "Yes"}];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
    };
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

submit.addEventListener('click', function() {
    cardContainer.remove;
})

}

//select the button & have form pop up
document.getElementById('add-book').addEventListener('click', function() {
    console.log('hello')
    createForm()
})


function addBookToLibrary() {
    myLibrary.push(this.Book)
  }

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not yet read")
myLibrary.push(theHobbit)

console.log(theHobbit.info())

console.log(theHobbit.__proto__)
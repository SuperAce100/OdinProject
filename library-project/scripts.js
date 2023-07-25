let library = [];

function Book(author, title, numPages, isRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

function deleteBookAtID(id) {
  library.splice(id, 1);
  displayLibrary();
}

function toggleIsRead(i) {
  library[i].isRead = !library[i].isRead;
  displayLibrary();
}

function displayLibrary() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  console.log(content.id);
  for (let i = 0; i < library.length; i++) {
    let book = library[i];

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", i);

    const title = document.createElement("h3");
    title.innerText = book.title;
    const author = document.createElement("h5");
    author.innerText = book.author;
    const numPages = document.createElement("p");
    numPages.innerText = book.numPages + " pages";

    const isRead = document.createElement("div");

    const isReadIcon = document.createElement("i");
    isRead.classList.add("isRead");
    isReadIcon.classList.add("far");
    let newClass = book.isRead ? "fa-check" : "fa-square";
    isReadIcon.classList.add(newClass);
    isReadIcon.addEventListener(
      "click",
      function () {
        toggleIsRead(i);
      },
      false
    );

    const deleteButton = document.createElement("i");
    deleteButton.classList.add("fas");
    deleteButton.classList.add("fa-trash");
    deleteButton.classList.add("delete");
    deleteButton.addEventListener(
      "click",
      function () {
        deleteBookAtID(i);
      },
      false
    );

    const isReadText = document.createElement("p");
    isReadText.innerText = "Read?";

    isRead.appendChild(isReadText);
    isRead.appendChild(isReadIcon);
    isRead.appendChild(deleteButton);

    const topDiv = document.createElement("div");
    const bottomDiv = document.createElement("div");

    topDiv.appendChild(title);
    topDiv.appendChild(author);
    bottomDiv.appendChild(numPages);
    bottomDiv.appendChild(isRead);

    card.appendChild(topDiv);
    card.appendChild(bottomDiv);

    content.appendChild(card);
  }
}

function displayBookForm() {
  document.getElementById("bookForm").style.display = "block";
}

function closeForm() {
  document.getElementById("bookForm").style.display = "none";
}

function addBookFromForm() {
  const author = document.getElementById("author").value;
  const title = document.getElementById("title").value;
  const numPages = document.getElementById("numPages").value;
  const isRead = document.getElementById("isRead").checked;

  const newBook = new Book(author, title, numPages, isRead);
  addBookToLibrary(newBook);

  // Clear form inputs after adding the book
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("numPages").value = "";
  document.getElementById("isRead").checked = false;

  // Close the form
  closeForm();

  // Update the displayed library
  displayLibrary();
}

closeForm();

addBookToLibrary(
  new Book("J. K. Rowling", "Harry Potter and the Philosopher's Stone", "483", true)
);
addBookToLibrary(
  new Book("J. K. Rowling", "Harry Potter and the Prizoner of Azkaban", "483", false)
);
addBookToLibrary(new Book("J. K. Rowling", "Harry Potter and the Chamber of Secrets", "483", true));
addBookToLibrary(new Book("J. K. Rowling", "Harry Potter and the Goblet of Fire", "483", false));

displayLibrary();

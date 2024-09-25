const myLibrary = [];

const booksContainer = document.querySelector('.book-container');
const newBookBtn = document.querySelector('.new-book-btn');
const modal = document.querySelector('.modal');
const submitBtn = document.querySelector('.submit-btn');
const modalForm = document.querySelector('.modal-form');

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

function addBookToLibrary() {
	const title = document.querySelector('#book-title').value;
	const author = document.querySelector('#book-author').value;
	const pages = document.querySelector('#book-pages').value;
	const isRead = Boolean(
		document.querySelector('input[name="is-read"]:checked').value
	);

	const newBook = new Book(title, author, pages, isRead);
	myLibrary.unshift(newBook);

	modal.close();
	modalForm.reset();

	booksContainer.innerHTML = myLibrary
		.map((book) => {
			return `<section class='book' id='${myLibrary.indexOf(book)}'>
	                <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <div class='read-label'>${
						book.isRead ? 'Read' : 'Unread'
					}</div>
	            </section>`;
		})
		.join(' ');
}

newBookBtn.addEventListener('click', () => {
	modal.showModal();
});

submitBtn.addEventListener('click', addBookToLibrary);

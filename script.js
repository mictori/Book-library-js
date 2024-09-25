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

function renderBooks() {
	booksContainer.innerHTML = myLibrary
		.map((book) => {
			const bookId = myLibrary.indexOf(book);
			book.id = bookId;

			return `<section class="book">
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Pages: ${book.pages}</p>
                    <div class="read-label">
						<button
							type="button"
							class="read-toggle"
							onClick="toggleRead(${bookId})"
						>
							Mark as ${book.isRead ? 'UNREAD' : 'READ'}
						</button>
					</div>
                    <button 
                        type="button" 
                        class="remove-book-btn" 
                        onClick="removeBook(${bookId})"
                        >
                            REMOVE FROM LIBRARY
                    </button>
                </section>`;
		})
		.join(' ');
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

	renderBooks();
}

function toggleRead(id) {
	myLibrary.forEach((book) => {
		if (book.id === id) {
			book.isRead = !book.isRead;
		}
	});

	renderBooks();
}

function removeBook(id) {
	myLibrary.splice(id, 1);

	renderBooks();
}

newBookBtn.addEventListener('click', () => {
	modal.showModal();
});

submitBtn.addEventListener('click', addBookToLibrary);

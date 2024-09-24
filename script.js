const myLibrary = [
	{
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J. K. Rowling',
		pages: 251,
		isRead: false,
		id: 1,
	},
	{
		title: 'Harry Potter and the Chamber of Secrets',
		author: 'J. K. Rowling',
		pages: 251,
		isRead: false,
		id: 1,
	},
];

const booksContainer = document.querySelector('.book-container');

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

function addBookToLibrary() {
	booksContainer.innerHTML = myLibrary
		.map((book) => {
			return `<section class='book'>
	                <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <p>${book.pages}</p>
	            </section>`;
		})
		.join(' ');
}

addBookToLibrary();

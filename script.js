// Sample book data array
const books = [
    {
        id:1,
        image: 'social_system.png',
        name: 'The Social System in Islam',
        author: 'Taqiuddin an-Nabhani',
        pages: 198,
        pdf: 'social_system.pdf',
        indexPages: [3, 4],
        language: 'English'
    },
    {
        id:2,
        image: 'economic_system.png',
        name: 'The Economic System of Islam',
        author: 'Taqiuddin an-Nabhani',
        pages: 357,
        pdf: 'economic_system.pdf',
        indexPages: [4,5,6,7],
        language: 'English'
    },
    {
        id:3,
        image: 'ht_bangla.png',
        name: 'হিযবুত তাহ্‌রীর',
        author: '',
        pages: 71,
        pdf: 'ht_bangla.pdf',
        indexPages: [3,4],
        language: 'Bangla'
    },
    {
        id:4,
        image: 'draft_constitution_bn.png',
        name: 'খিলাফত রাষ্টের খসড়া সংবিধান',
        author: '',
        pages: 44,
        pdf: 'draft_constitution_bn.pdf',
        indexPages: [4],
        language: 'Bangla'
    },
    {
        id:5,
        image: 'draft_constitution_evidence.png',
        name: 'The Draft Constitution or the Necessary Evidences for it',
        author: '',
        pages: 305,
        pdf: 'draft_constitution_evidence.pdf',
        indexPages: [3,4],
        language: 'English'
    },
    {
        id:6,
        image: 'pilkhana_masacree.png',
        name: 'পিলখানা হত্যাকান্ডঃ বাংলাদেশের প্রতিরক্ষা ব্যবস্থা  ধ্বংসের ভারতীয় ষড়যন্ত্র',
        author: '',
        pages: 18,
        pdf: 'pilkhana_masacree.pdf',
        indexPages: [1],
        language: 'Bangla'
    },
    {
        id:7,
        image: 'islami_state_bn.png',
        name: 'ইসলামী রাষ্ট্র',
        author: 'শায়খ তাকীউদ্দিন আন্‌-নাবাহানী ',
        pages: 131,
        pdf: 'islami_state_bn.pdf',
        indexPages: [2],
        language: 'Bangla'
    },
    {
        id:8,
        image: 'punishment_system.png',
        name: 'THE PUNISHMENT SYSTEM',
        author: 'Abdurrahman Al-Maliki',
        pages: 106,
        pdf: 'punishment_system.pdf',
        indexPages: [3,4],
        language: 'English'
    },
    {
        id:9,
        image: 'ruling_system.png',
        name: 'The Ruling System in Islam',
        author: '302',
        pages: 131,
        pdf: 'ruling_system.pdf',
        indexPages: [2,3,4],
        language: 'English'
    },
    // Add more books here
];

function generateBookCards() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear existing content

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const indexPagesString = JSON.stringify(book.indexPages);

        bookCard.innerHTML = `
            <img src="book_img/${book.image}" alt="${book.name} Image">
            <h2>${book.name}</h2>
            <p><b> <i>${book.author}</i> </b></p>
            <p><b>Pages: </b> ${book.pages}</p>
            <p><b>Language: </b> ${book.language}</p>
            <div class="book-actions">
                <button onclick="downloadBook('book/${book.pdf}')">Download</button>
                <button onclick="viewIndex('book/${book.pdf}', ${indexPagesString})">See Index</button>
                <button onclick="readBook('book/${book.pdf}')">Read</button>
            </div>
        `;

        bookList.appendChild(bookCard);
    });
}



function downloadBook(file) {
    const link = document.createElement('a');
    link.href = file;
    link.download = file.split('/').pop(); // Extracts the filename from the path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}



function viewIndex(pdfPath, pages) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = ''; // Clear previous content

    // Load the PDF document
    const loadingTask = pdfjsLib.getDocument(pdfPath);
    loadingTask.promise.then(pdf => {
        // Render pages sequentially
        renderPagesSequentially(pdf, pages, 0, popupContent);
    });

    popup.style.display = 'flex';
}

function renderPagesSequentially(pdf, pages, currentIndex, popupContent) {
    if (currentIndex >= pages.length) {
        return; // All pages rendered
    }

    const pageNumber = pages[currentIndex];
    pdf.getPage(pageNumber).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });

        // Create canvas for each page
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render the page on the canvas
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext).promise.then(() => {
            popupContent.appendChild(canvas);
            // Recursively render the next page
            renderPagesSequentially(pdf, pages, currentIndex + 1, popupContent);
        });
    });
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}


function readBook(file) {
    window.open(file);
}

document.getElementById('search-bar').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.name.toLowerCase().includes(searchQuery)
    );
    displayBooks(filteredBooks);
});

document.getElementById('sort-options').addEventListener('change', function() {
    const sortBy = this.value;
    let sortedBooks = [];

    if (sortBy === 'name') {
        sortedBooks = books.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'author') {
        sortedBooks = books.sort((a, b) => a.author.localeCompare(b.author));
    } else if (sortBy === 'pages') {
        sortedBooks = books.sort((a, b) => a.pages - b.pages);
    } else if (sortBy === 'Bangla') {
        sortedBooks = books.filter(book => book.language.includes('Bangla'));
    } else if (sortBy === 'English') {
        sortedBooks = books.filter(book => book.language == 'English');
    } else if (sortBy === 'default') {
        sortedBooks = books;
    }

    displayBooks(sortedBooks);
});

function displayBooks(bookArray) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear existing content

    bookArray.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const indexPagesString = JSON.stringify(book.indexPages);

        bookCard.innerHTML = `
            <img src="book_img/${book.image}" alt="${book.name} Image">
            <h2>${book.name}</h2>
            <p><b> <i>${book.author}</i> </b></p>
            <p><b>Pages: </b> ${book.pages}</p>
            <p><b>Language: </b> ${book.language}</p>
            <div class="book-actions">
                <button onclick="downloadBook('book/${book.pdf}')">Download</button>
                <button onclick="viewIndex('book/${book.pdf}', ${indexPagesString})">See Index</button>
                <button onclick="readBook('book/${book.pdf}')">Read</button>
            </div>
        `;

        bookList.appendChild(bookCard);
    });
}

// Initialize book cards on page load
generateBookCards();

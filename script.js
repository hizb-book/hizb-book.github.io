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
        author: '',
        pages: 131,
        pdf: 'ruling_system.pdf',
        indexPages: [2,3,4],
        language: 'English'
    },
    {
        id:10,
        image: 'Islamic manifesto.png',
        name: 'ইসলামী ইশতেহার - খিলাফতঃ দেশের জন্য একমাত্র সঠিক নেতৃত্ব অ সরকার ব্যবস্থা',
        author: '',
        pages: 37,
        pdf: 'Islamic manifesto.pdf',
        indexPages: [3],
        language: 'Bangla'
    },
    {
        id:11,
        image: 'Gradualism.png',
        name: 'ইসলামের দাওয়াত - ক্রোন্বময় ইসলামের বাস্তবায়ন',
        author: '',
        pages: 24,
        pdf: 'Gradualism.pdf',
        indexPages: [1],
        language: 'Bangla'
    },
    {
        id:12,
        image: 'gold_based_economy.png',
        name: 'অর্থনৈতিক মুক্তি ও বিশ্ব নেতৃত্বের পুনরুদ্ধারে স্বর্ণভিত্তিক মুদ্রানীতির ভূমিকা',
        author: '',
        pages: 12,
        pdf: 'gold_based_economy.pdf',
        indexPages: [1],
        language: 'Bangla'
    },
    {
        id:13,
        image: 'Geo-Political Myth(bangla).png',
        name: 'ভূ-রাজনীতির কল্পকথা',
        author: 'আদনান খান',
        pages: 143,
        pdf: 'Geo-Political Myth(bangla).pdf',
        indexPages: [3,4],
        language: 'Bangla'
    },
    {
        id:14,
        image: 'Foreign-Policy.png',
        name: 'ইসলামী খিলাফত সরকারের পররাষ্ট্রনীতির মডেল',
        author: '',
        pages: 15,
        pdf: 'Foreign-Policy.pdf',
        indexPages: [1],
        language: 'Bangla'
    },
    {
        id:15,
        image: 'Fiqhstudies.png',
        name: 'STUDIES IN USUL UL FIQH',
        author: 'IYAD HILAL',
        pages: 64,
        pdf: 'Fiqhstudies.pdf',
        indexPages: [3],
        language: 'English'
    },
    {
        id:16,
        image: 'Etai Amar Path.png',
        name: 'এটাই আমার পথ',
        author: 'শেখ ওমর রাসেল',
        pages: 92,
        pdf: 'Etai Amar Path.pdf',
        indexPages: [4],
        language: 'Bangla'
    },
    {
        id:17,
        image: 'Democracy is a system of Kufr.png',
        name: 'Democracy is a system of Kufr',
        author: 'IYAD HILAL',
        pages: 51,
        pdf: 'Democracy is a system of Kufr.pdf',
        indexPages: [3],
        language: 'English'
    },
    {
        id:18,
        image: 'Dawah to Islam Full Bangla.png',
        name: 'ইসলামের দাওয়াত  Dawah to Islam',
        author: 'শায়খ আহমদ মাহমুদ',
        pages: 182,
        pdf: 'Dawah to Islam Full Bangla.pdf',
        indexPages: [2,3],
        language: 'Bangla'
    },
    {
        id:19,
        image: 'Daleel of khilafah.png',
        name: 'খিলাফত কেন ফরজ?',
        author: '',
        pages: 4,
        pdf: 'Daleel of khilafah.pdf',
        indexPages: [1],
        language: 'Bangla'
    },
    {
        id:20,
        image: 'bn_political thought edited.png',
        name: 'Political Thought',
        author: '',
        pages: 28,
        pdf: 'bn_political thought edited.pdf',
        indexPages: [1],
        language: 'Bangla'
    },
    {
        id:21,
        image: 'ben-IslamsModelForIndustrialization.png',
        name: 'ইসলামী খিলাফত সরকারের শিল্পায়ন মডেল',
        author: '', 
        pages: 18,
        pdf: 'ben-IslamsModelForIndustrialization.pdf',
        indexPages: [2],
        language: 'Bangla'
    },
    {
        id:22,
        image: 'ben-IslamsEconomicModel.png',
        name: 'ইসলামী খিলাফত সরকারের অর্থনৈতিক মডেল',
        author: '',
        pages: 18,
        pdf: 'ben-IslamsEconomicModel.pdf',
        indexPages: [2],
        language: 'Bangla'
    },
    {
        id:23,
        image: 'Ben_Political_Thoughts_Of_Islam.png',
        name: 'ইসলামের রাজনৈতিক চিন্তা',
        author: '', 
        pages: 58,
        pdf: 'Ben_Political_Thoughts_Of_Islam.pdf',
        indexPages: [2],
        language: 'Bangla'
    },
    {
        id:24,
        image: 'Ban-Oppression Of Women.png',
        name: 'Oppression of Women',
        author: '', 
        pages: 22,
        pdf: 'Ban-Oppression Of Women.pdf',
        indexPages: [1],
        language: 'Bangla'
    },
    {
        id:25,
        image: 'Ban-Islamic Manifesto2.png',
        name: 'ইসলামী ইশতেহার',
        author: '',
        pages: 34,
        pdf: 'Ban-Islamic Manifesto2.pdf',
        indexPages: [2],
        language: 'Bangla'
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
        sortedBooks = bookssort((a, b) => a.id - b.id);
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

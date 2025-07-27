const productsData = [
    {
        id: 1,
        name: "Apă Minerală Borsec",
        category: "Apă",
        store: "Mega Image",
        image: "https://depozituldeapa.ro/wp-content/uploads/2022/04/depozituldeapaapaplata26.jpg",
        description: "Apă minerală naturală carbogazificată, bogată în minerale esențiale. Perfectă pentru hidratare zilnică sau pentru a însoți mesele.",
        location: "HARGHITA"
    },
    {
        id: 2,
        name: "Apă Plată Aqua Carpatica",
        category: "Apă",
        store: "Carrefour",
        image: "https://placehold.co/150x150/ADD8E6/FFFFFF?text=Aqua+Carpatica",
        description: "Apă minerală naturală plată, cu un conținut scăzut de sodiu, ideală pentru bebeluși și persoanele cu dietă specială. Pură și echilibrată.",
        location: "SUCEAVA"
    },
    {
        id: 3,
        name: "Pâine Albă Feliată",
        category: "Pâine",
        store: "Lidl",
        image: "https://placehold.co/150x150/F0E68C/000000?text=Paine+Alba",
        description: "Pâine albă feliată, proaspătă și pufoasă, ideală pentru sandvișuri sau toast.",
        location: "BUCURESTI"
    },
    {
        id: 4,
        name: "Pâine Integrală",
        category: "Pâine",
        store: "Kaufland",
        image: "https://placehold.co/150x150/DAA520/FFFFFF?text=Paine+Integrala",
        description: "Pâine integrală bogată în fibre, preparată din cereale integrale. Contribuie la o digestie sănătoasă și oferă energie pe termen lung.",
        location: "CLUJ"
    },
    {
        id: 5,
        name: "Bere Ursus Premium",
        category: "Băuturi",
        store: "Auchan",
        image: "https://placehold.co/150x150/FFA07A/FFFFFF?text=Ursus",
        description: "Bere lager românească, cu gust echilibrat și răcoritor. Perfectă pentru a te relaxa după o zi lungă sau pentru a o savura alături de prieteni.",
        location: "CLUJ"
    },
    {
        id: 6,
        name: "Vin Roșu Fetească Neagră",
        category: "Băuturi",
        store: "Profy",
        image: "https://placehold.co/150x150/8B0000/FFFFFF?text=Feteasca+Neagra",
        description: "Vin roșu sec, cu arome intense de fructe de pădure și note subtile de condimente. Ideal pentru a însoți preparate din carne roșie sau brânzeturi maturate.",
        location: "VRANCEA"
    },
    {
        id: 7,
        name: "Lapte 3.5% grăsime",
        category: "Lactate",
        store: "Mega Image",
        image: "https://placehold.co/150x150/E0FFFF/000000?text=Lapte",
        description: "Lapte proaspăt, integral, cu 3.5% grăsime. O sursă excelentă de calciu și proteine, ideal pentru micul dejun sau în cafea.",
        location: "BRASOV"
    },
    {
        id: 8,
        name: "Iaurt Natural",
        category: "Lactate",
        store: "Lidl",
        image: "https://placehold.co/150x150/F5DEB3/000000?text=Iaurt",
        description: "Iaurt cremos, fără aditivi, preparat din lapte proaspăt. Perfect pentru o gustare sănătoasă sau ca bază pentru sosuri și dressing-uri.",
        location: "SIBIU"
    },
    {
        id: 9,
        name: "Salam de Sibiu",
        category: "Carne",
        store: "ORICE MAGAZIN",
        image: "https://placehold.co/150x150/8B4513/FFFFFF?text=Salam+Sibiu",
        description: "Salam tradițional românesc, afumat și maturat, cu o aromă distinctă și o textură fină. O delicatesă apreciată în toată țara.",
        location: "SIBIU"
    },
    {
        id: 10,
        name: "Cârnați de Pleșcoi",
        category: "Carne",
        store: "ORICE MAGAZIN",
        image: "https://placehold.co/150x150/A0522D/FFFFFF?text=Carnati+Plescoi",
        description: "Cârnați picanți, specifici zonei Buzăului, preparați după o rețetă autentică. Ideali pentru grătar sau fierți, alături de o mămăliguță.",
        location: "BUZAU"
    },
    {
        id: 11,
        name: "Telemea de Ibănești",
        category: "Lactate",
        store: "Mega Image",
        image: "https://placehold.co/150x150/D2B48C/000000?text=Telemea+Ibanesti",
        description: "Telemea maturată, cu gust intens și sărat, specifică zonei Ibănești. Excelentă în salate sau ca aperitiv.",
        location: "MURES"
    },
    {
        id: 12,
        name: "Mici de Grătar",
        category: "Carne",
        store: "Lidl",
        image: "https://placehold.co/150x150/8B0000/FFFFFF?text=Mici",
        description: "Mici tradiționali românești, pregătiți pentru grătar. Un preparat iconic, perfect pentru orice ocazie festină.",
        location: "BUCURESTI"
    },
    {
        id: 13,
        name: "Făină Albă de Grâu",
        category: "Făină și Zahăr",
        store: "Kaufland",
        image: "https://placehold.co/150x150/F5F5DC/000000?text=Faina+Alba",
        description: "Făină albă de grâu, tip 000, ideală pentru patiserie și cofetărie. Asigură o textură fină și pufoasă preparatelor.",
        location: "BRAILA"
    },
    {
        id: 14,
        name: "Zahăr Cristal",
        category: "Făină și Zahăr",
        store: "Auchan",
        image: "https://placehold.co/150x150/FFFFFF/000000?text=Zahar+Cristal",
        description: "Zahăr alb cristal, perfect pentru îndulcirea băuturilor și prepararea deserturilor.",
        location: "GALATI"
    },
    {
        id: 15,
        name: "Ulei de Floarea Soarelui",
        category: "Ulei și Oțet",
        store: "Carrefour",
        image: "https://placehold.co/150x150/FFD700/000000?text=Ulei+Floarea+Soarelui",
        description: "Ulei rafinat de floarea soarelui, ideal pentru gătit și prăjit. Un ingredient esențial în orice bucătărie.",
        location: "IASI"
    },
    {
        id: 16,
        name: "Oțet de Vin",
        category: "Ulei și Oțet",
        store: "Profy",
        image: "https://placehold.co/150x150/800000/FFFFFF?text=Otet+Vin",
        description: "Oțet de vin roșu, cu o aromă bogată și aciditate echilibrată. Perfect pentru salate și marinade.",
        location: "CONSTANTA"
    },
    {
        id: 17,
        name: "Ciocolata ROM",
        category: "Dulciuri",
        store: "ORICE MAGAZIN",
        image: "https://www.delumani.de/cdn/shop/files/kandia-dulce-dulciuri-si-snacks-default-title-rom-baton-de-ciocolata-29423435776118.jpg?v=1727463628",
        description: "Producția are loc la fabrica Kandia Dulce din București, pe Șoseaua Viilor nr.20, Sector 5. Kandia Dulce este cel mai mare producător român de dulciuri, deținând brandul ROM încă de la lansarea acestuia în 1964, iar batoanele și toate sortimentele ROM continuă să fie fabricate local pe linia de producție dedicată din București.",
        location: "BUCURESTI"
    },
    {
        id: 18,
        name: "Carne de Porc Comtim",
        category: "Carne",
        store: "Comtim",
        image: "https://www.comtim.ro/images/PP_cotlet.png",
        description: "Aceste produse provin integral din fermele proprii Comtim din România și nu se găsesc în alte magazine sau lanțuri naționale. Magazinul oferă o gamă variată: carne proaspătă, produse marinate, toate garantând trasabilitate și prospețime, dedicate exclusiv clienților acestui punct de vânzare.",
        location: "TIMISOARA"
    }
];

let selectedCategory = 'Toate';
let isCategoryNavExpanded = false;
let searchTerm = '';

let wishlist = [];
const WISHLIST_STORAGE_KEY = 'buy_from_romania_wishlist';
const FOOD_CATEGORIES = ["Pâine", "Lactate", "Carne", "Dulciuri", "Făină și Zahăr", "Ulei și Oțet", "Băuturi"];

let currentRightClickedProductId = null;

function loadWishlist() {
    const storedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (storedWishlist) {
        try {
            wishlist = JSON.parse(storedWishlist);
        } catch (e) {
            console.error("Failed to parse wishlist from localStorage:", e);
            wishlist = [];
        }
    }
}

function saveWishlist() {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    updateWishlistCountBadge();
}

function isProductInWishlist(productId) {
    return wishlist.includes(productId);
}

function addToWishlist(productId) {
    if (!isProductInWishlist(productId)) {
        wishlist.push(productId);
        saveWishlist();
        const currentModalProductId = document.getElementById('modal-add-to-wishlist-btn').getAttribute('data-product-id');
        if (parseInt(currentModalProductId) === productId) {
            updateModalWishlistButton(productId);
        }
        renderProducts();
    }
}

function removeFromWishlist(productId) {
    const itemToRemoveElement = document.querySelector(`#wishlist-items-container .wishlist-item-card button[data-product-id="${productId}"]`);
    

    if (itemToRemoveElement) {
        itemToRemoveElement.classList.add('button-active-animation');
        setTimeout(() => {
            itemToRemoveElement.classList.remove('button-active-animation');
        }, 200); 
    }

    if (itemToRemoveElement && itemToRemoveElement.closest('.wishlist-item-card')) {
        const parentCard = itemToRemoveElement.closest('.wishlist-item-card');
        parentCard.classList.add('wishlist-item-removing');

        parentCard.addEventListener('animationend', () => {
            parentCard.remove();
            wishlist = wishlist.filter(id => id !== productId);
            saveWishlist();
            const modalButton = document.getElementById('modal-add-to-wishlist-btn');
            if (modalButton && parseInt(modalButton.getAttribute('data-product-id')) === productId) {
                updateModalWishlistButton(productId);
            }
            if (wishlist.length === 0) {
                document.getElementById('empty-wishlist-message').classList.remove('hidden');
            }
            renderProducts();
        }, { once: true });
    } else {
        wishlist = wishlist.filter(id => id !== productId);
        saveWishlist();
        const modalButton = document.getElementById('modal-add-to-wishlist-btn');
        if (modalButton && parseInt(modalButton.getAttribute('data-product-id')) === productId) {
            updateModalWishlistButton(productId);
        }
        renderProducts();
    }
}

function createProductCard(product) {
    const cardDiv = document.createElement('div');
    cardDiv.className = `product-card-container relative bg-white rounded-xl shadow-lg overflow-hidden
                         transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                         flex flex-col items-center p-4 group`;
    cardDiv.setAttribute('data-product-id', product.id);
    cardDiv.onclick = () => showProductModal(product);

    cardDiv.innerHTML = `
        <img src="${product.image}"
             alt="${product.name}"
             class="w-32 h-32 object-cover rounded-lg mb-4 transform transition-transform duration-300 group-hover:rotate-2"
             onerror="this.onerror=null;this.src='https://placehold.co/150x150/CCCCCC/666666?text=Produs';"
        />
        <h3 class="text-lg font-semibold text-gray-800 text-center mb-1">${product.name}</h3>
        <div class="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            ${product.store}
        </div>
    `;

    if (isProductInWishlist(product.id)) {
        const wishlistTag = document.createElement('div');
        wishlistTag.className = `absolute top-10 right-2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`;
        wishlistTag.textContent = 'Wishlist';
        cardDiv.appendChild(wishlistTag);
    }

    return cardDiv;
}

function normalizeString(str) {
    if (!str) return '';
    str = str.toLowerCase();
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return str;
}

function renderProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    const productsSectionTitle = document.getElementById('products-section-title');

    let currentProducts = productsData;

    if (selectedCategory !== 'Toate') {
        currentProducts = currentProducts.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
        const processedSearchTerm = normalizeString(searchTerm);
        const searchKeywords = processedSearchTerm.split(/\s+/).filter(word => word.length > 0);

        currentProducts = currentProducts.filter(product => {
            const normalizedProductName = normalizeString(product.name);
            return searchKeywords.every(searchKeyword => {
                return normalizedProductName.includes(searchKeyword);
            });
        });
    }

    productsSectionTitle.textContent = selectedCategory === 'Toate' ? 'Toate Produsele' : `Produse din categoria: ${selectedCategory}`;
    if (searchTerm) {
        productsSectionTitle.textContent += ` (Căutare: "${searchTerm}")`;
    }

    if (currentProducts.length === 0) {
        productsContainer.innerHTML = '<p class="text-center text-gray-600 dark:text-gray-400 text-xl col-span-full">Nu s-au găsit produse care să corespundă criteriilor.</p>';
    } else {
        currentProducts.forEach(product => {
            productsContainer.appendChild(createProductCard(product));
        });
    }
}

function renderCategoryButtons() {
    const categoryButtonsContainer = document.getElementById('category-buttons-container');
    const mobileSelectedCategorySpan = document.getElementById('mobile-selected-category');
    categoryButtonsContainer.innerHTML = '';

    const uniqueCategories = [...new Set(productsData.map(p => p.category))];
    const sortedCategories = uniqueCategories.sort();
    const categories = ["Toate", ...sortedCategories];

    mobileSelectedCategorySpan.textContent = selectedCategory;

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = `px-5 py-2 rounded-full font-medium text-lg select-none
                             transition-all duration-300 ease-in-out transform hover:scale-105`;
        if (selectedCategory === category) {
            button.classList.add('bg-blue-600', 'text-white', 'shadow-md');
        } else {
            button.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
        }
        button.onclick = () => {
            selectedCategory = category;
            searchTerm = '';
            document.getElementById('mobile-search-input').value = '';
            document.getElementById('desktop-search-input').value = '';

            document.getElementById('clear-mobile-search-btn').classList.add('hidden');
            document.getElementById('clear-desktop-search-btn').classList.add('hidden');
            renderCategoryButtons();
            renderProducts();
            if (window.innerWidth < 768) {
                toggleCategoryNav();
            }
        };
        categoryButtonsContainer.appendChild(button);
    });
}

function updateModalWishlistButton(productId) {
    const modalWishlistBtn = document.getElementById('modal-add-to-wishlist-btn');
    const isInWishlist = isProductInWishlist(productId);

    modalWishlistBtn.onclick = null; 

    if (isInWishlist) {
        modalWishlistBtn.textContent = 'Elimină din Wishlist';
        modalWishlistBtn.classList.remove('bg-pink-500', 'bg-gray-400', 'cursor-not-allowed');
        modalWishlistBtn.classList.add('bg-red-500', 'hover:bg-red-600');
        modalWishlistBtn.disabled = false;
        modalWishlistBtn.onclick = () => {

            modalWishlistBtn.classList.add('button-active-animation');
            setTimeout(() => {
                modalWishlistBtn.classList.remove('button-active-animation');
            }, 200); 
            removeFromWishlist(productId);
            updateModalWishlistButton(productId);
        };
    } else {
        modalWishlistBtn.textContent = 'Adaugă la Wishlist';
        modalWishlistBtn.classList.remove('bg-red-500', 'hover:bg-red-600', 'bg-gray-400', 'cursor-not-allowed');
        modalWishlistBtn.classList.add('bg-pink-500', 'hover:bg-pink-600');
        modalWishlistBtn.disabled = false;
        modalWishlistBtn.onclick = () => {
            addToWishlist(productId);
            modalWishlistBtn.classList.add('button-active-animation');
            setTimeout(() => {
                modalWishlistBtn.classList.remove('button-active-animation');
            }, 200); 
            updateModalWishlistButton(productId);
        };
    }
    modalWishlistBtn.setAttribute('data-product-id', productId);
}


function showProductModal(product) {
    const modal = document.getElementById('product-modal');
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-image').alt = product.name;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-store').textContent = `Magazin: ${product.store}`;
    
    const modalProductLocation = document.getElementById('modal-product-location');
    if (product.location) {
        modalProductLocation.innerHTML = `<b>LOCAȚIE:</b> ${product.location}`;
        modalProductLocation.classList.remove('hidden');
    } else {
        modalProductLocation.classList.add('hidden');
    }

    document.getElementById('modal-product-description').textContent = product.description;

    updateModalWishlistButton(product.id);

    const generateRecipeBtn = document.getElementById('generate-recipe-btn');
    if (FOOD_CATEGORIES.includes(product.category)) {
        generateRecipeBtn.classList.remove('hidden');
        generateRecipeBtn.onclick = () => {
            generateRecipe(product.name);
            generateRecipeBtn.classList.add('button-active-animation');
            setTimeout(() => {
                generateRecipeBtn.classList.remove('button-active-animation');
            }, 200); 
        };
    } else {
        generateRecipeBtn.classList.add('hidden');
        generateRecipeBtn.onclick = null;
    }

    modal.classList.remove('hidden');
}

function hideProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.add('hidden');
}

function updateWishlistCountBadge() {
    const badge = document.getElementById('wishlist-count-badge');
    const productCountText = document.getElementById('wishlist-product-count');
    const count = wishlist.length;

    if (count > 0) {
        badge.textContent = count;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
    productCountText.textContent = `Număr produse: ${count}`;
}

function renderWishlistItems() {
    const wishlistItemsContainer = document.getElementById('wishlist-items-container');
    const emptyWishlistMessage = document.getElementById('empty-wishlist-message');
    wishlistItemsContainer.innerHTML = '';

    updateWishlistCountBadge();

    if (wishlist.length === 0) {
        emptyWishlistMessage.classList.remove('hidden');
        return;
    } else {
        emptyWishlistMessage.classList.add('hidden');
    }

    wishlist.forEach(productId => {
        const product = productsData.find(p => p.id === productId);
        if (product) {
            const wishlistItemDiv = document.createElement('div');
            wishlistItemDiv.className = `wishlist-item-card bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex items-center space-x-4 shadow-sm`;
            wishlistItemDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-md"
                     onerror="this.onerror=null;this.src='https://placehold.co/64x64/CCCCCC/666666?text=Produs';"/>
                <div class="flex-grow">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">${product.name}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Magazin: ${product.store}</p>
                </div>
                <button class="remove-from-wishlist-btn bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200 transform hover:scale-105" data-product-id="${product.id}">
                    &times;
                </button>
            `;
            wishlistItemsContainer.appendChild(wishlistItemDiv);

            wishlistItemDiv.querySelector('.remove-from-wishlist-btn').addEventListener('click', (event) => {
                const productIdToRemove = parseInt(event.currentTarget.getAttribute('data-product-id'));
                removeFromWishlist(productIdToRemove);
            });
        }
    });
}

function clearWishlist() {
    wishlist = [];
    saveWishlist();
    renderWishlistItems();
    renderProducts();
}

async function generateRecipe(productName) {
    const recipeModal = document.getElementById('recipe-modal');
    const recipeContent = document.getElementById('recipe-text');
    const loader = document.querySelector('#recipe-modal .loader');

    recipeContent.textContent = '';
    loader.classList.remove('hidden');
    recipeModal.classList.remove('hidden');

    const prompt = `Generează o rețetă simplă și scurtă (maxim 100 de cuvinte) folosind "${productName}" ca ingredient cheie. Rețeta trebuie să fie în limba română și să includă ingrediente și pași. Te rog să nu folosești niciun fel de formatare Markdown (ex: asteriscuri pentru bold, linii pentru liste etc.), ci doar text simplu.`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = "AIzaSyDe9JFtcK_xdix412bsD3KwJ5x-nTdmb3Q";

    try {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            recipeContent.textContent = text;
        } else {
            recipeContent.textContent = "Nu am putut genera o rețetă. Te rog să încerci din nou.";
        }
    } catch (error) {
        console.error("Eroare la apelul Gemini API:", error);
        recipeContent.textContent = "A apărut o eroare la generarea rețetei. Verifică conexiunea la internet sau încearcă mai târziu.";
    } finally {
        loader.classList.add('hidden');
    }
}

async function generateWishlistRecipe() {
    const recipeModal = document.getElementById('recipe-modal');
    const recipeContent = document.getElementById('recipe-text');
    const loader = document.querySelector('#recipe-modal .loader');

    recipeContent.textContent = '';
    loader.classList.remove('hidden');
    recipeModal.classList.remove('hidden');

    if (wishlist.length === 0) {
        recipeContent.textContent = "Wishlist-ul tău este gol. Adaugă produse pentru a genera o rețetă!";
        loader.classList.add('hidden');
        return;
    }

    const wishlistProductNames = wishlist.map(id => {
        const product = productsData.find(p => p.id === id);
        return product ? product.name : null;
    }).filter(name => name !== null);

    if (wishlistProductNames.length === 0) {
        recipeContent.textContent = "Nu s-au găsit produse valide în wishlist pentru a genera o rețetă.";
        loader.classList.add('hidden');
        return;
    }

    const ingredientsList = wishlistProductNames.join(', ');
    const prompt = `Generează o rețetă simplă și scurtă (maxim 100 de cuvinte) care combină următoarele ingrediente din wishlist-ul meu: ${ingredientsList}. Rețeta trebuie să fie în limba română și să includă ingrediente și pași. Te rog să nu folosești niciun fel de formatare Markdown (ex: asteriscuri pentru bold, linii pentru liste etc.), ci doar text simplu.`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = "AIzaSyDe9JFtcK_xdix412bsD3KwJ5x-nTdmb3Q";

    try {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            recipeContent.textContent = text;
        } else {
            recipeContent.textContent = "Nu am putut genera o rețetă cu aceste produse. Te rog să încerci din nou sau să adaugi mai multe ingrediente relevante.";
        }
    } catch (error) {
        console.error("Eroare la apelul Gemini API pentru wishlist:", error);
        recipeContent.textContent = "A apărut o eroare la generarea rețetei. Verifică conexiunea la internet sau încearcă mai târziu.";
    } finally {
        loader.classList.add('hidden');
    }
}

document.getElementById('close-modal-btn').addEventListener('click', hideProductModal);
document.getElementById('close-recipe-modal-btn').addEventListener('click', () => {
    document.getElementById('recipe-modal').classList.add('hidden');
});

document.getElementById('product-modal').addEventListener('click', (event) => {
    if (event.target.id === 'product-modal') {
        hideProductModal();
    }
});
document.getElementById('wishlist-modal').addEventListener('click', (event) => {
    if (event.target.id === 'wishlist-modal') {
        document.getElementById('wishlist-modal').classList.add('hidden');
    }
});
document.getElementById('recipe-modal').addEventListener('click', (event) => {
    if (event.target.id === 'recipe-modal') {
        document.getElementById('recipe-modal').classList.add('hidden');
    }
});


const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

function setTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

function toggleCategoryNav() {
    const categoryButtonsContainer = document.getElementById('category-buttons-container');
    const categoryToggleBtn = document.getElementById('category-toggle-btn');
    isCategoryNavExpanded = !isCategoryNavExpanded;

    if (isCategoryNavExpanded) {
        categoryButtonsContainer.classList.add('is-expanded');
        categoryToggleBtn.classList.add('rotated');
    } else {
        categoryButtonsContainer.classList.remove('is-expanded');
        categoryToggleBtn.classList.remove('rotated');
    }
}

const sparkCanvas = document.getElementById('sparkCanvas');
const sparkCtx = sparkCanvas.getContext('2d');
let sparks = [];

function resizeSparkCanvas() {
    sparkCanvas.width = window.innerWidth;
    sparkCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeSparkCanvas);
resizeSparkCanvas();

class Spark {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.life = 30 + Math.random() * 20;
        this.maxLife = this.life;
        this.color = `hsl(${Math.random() * 60 + 20}, 100%, 70%)`;
        this.vx = (Math.random() * 10 - 7);
        this.vy = (Math.random() * -10 - 5);
        this.gravity = 0.3;
        this.friction = 0.95;
    }

    update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;

        this.x += this.vx;
        this.y += this.vy;

        this.life--;
    }

    draw() {
        sparkCtx.save();
        sparkCtx.beginPath();
        sparkCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        sparkCtx.fillStyle = this.color;
        sparkCtx.globalAlpha = this.life / this.maxLife;
        sparkCtx.fill();
        sparkCtx.restore();
    }
}

function animateSparks() {
    sparkCtx.clearRect(0, 0, sparkCanvas.width, sparkCanvas.height);

    for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.update();
        spark.draw();

        if (spark.life <= 0) {
            sparks.splice(i, 1);
        }
    }

    requestAnimationFrame(animateSparks);
}

animateSparks();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    loadWishlist();
    renderCategoryButtons();
    renderProducts();
    updateWishlistCountBadge();

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else {
        setTheme(false);
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        setTheme(!isDarkMode);

        themeToggleBtn.classList.add('button-active-animation');
        themeIcon.classList.add('icon-active-rotation');

        setTimeout(() => {
            themeToggleBtn.classList.remove('button-active-animation');
            themeIcon.classList.remove('icon-active-rotation');
        }, 400);

        const rect = themeToggleBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 20; i++) {
            sparks.push(new Spark(centerX, centerY));
        }
    });

    document.getElementById('category-toggle-btn').addEventListener('click', toggleCategoryNav);

    document.getElementById('view-wishlist-btn').addEventListener('click', () => {
        renderWishlistItems();
        document.getElementById('wishlist-modal').classList.remove('hidden');
    });

    document.getElementById('close-wishlist-modal-btn').addEventListener('click', () => {
        document.getElementById('wishlist-modal').classList.add('hidden');
    });

    const generateWishlistRecipeBtn = document.getElementById('generate-wishlist-recipe-btn');
    const clearWishlistBtn = document.getElementById('clear-wishlist-btn');

    generateWishlistRecipeBtn.addEventListener('click', () => {
        generateWishlistRecipe();
        // Add subtle click animation
        generateWishlistRecipeBtn.classList.add('button-active-animation');
        setTimeout(() => {
            generateWishlistRecipeBtn.classList.remove('button-active-animation');
        }, 200); 
    });

    clearWishlistBtn.addEventListener('click', () => {
        if (wishlist.length === 0) {
 
            clearWishlistBtn.classList.add('shake-animation');
            setTimeout(() => {
                clearWishlistBtn.classList.remove('shake-animation');
            }, 300);
        } else {

            clearWishlist();
            clearWishlistBtn.classList.add('button-active-animation');
            setTimeout(() => {
                clearWishlistBtn.classList.remove('button-active-animation');
            }, 200); 
        }
    });

    const customContextMenu = document.getElementById('custom-context-menu');
    const contextProductName = document.getElementById('context-product-name');
    const contextAddToWishlistBtn = document.getElementById('context-add-to-wishlist');
    const contextSuggestRecipeBtn = document.getElementById('context-suggest-recipe');
    const contextViewDetailsBtn = document.getElementById('context-view-details');
    const productsContainer = document.getElementById('products-container');

    productsContainer.addEventListener('contextmenu', (event) => {
        const productCard = event.target.closest('.product-card-container');
        if (productCard) {
            event.preventDefault();

            currentRightClickedProductId = parseInt(productCard.getAttribute('data-product-id'));
            const product = productsData.find(p => p.id === currentRightClickedProductId);

            if (product) {
                contextProductName.textContent = product.name;
            } else {
                contextProductName.textContent = '';
            }

            customContextMenu.style.left = `${event.clientX}px`;
            customContextMenu.style.top = `${event.clientY}px`;

            const menuWidth = customContextMenu.offsetWidth;
            const menuHeight = customContextMenu.offsetHeight;
            if (event.clientX + menuWidth > window.innerWidth) {
                customContextMenu.style.left = `${window.innerWidth - menuWidth - 10}px`;
            }
            if (event.clientY + menuHeight > window.innerHeight) {
                customContextMenu.style.top = `${window.innerHeight - menuHeight - 10}px`;
            }

            if (isProductInWishlist(currentRightClickedProductId)) {
                contextAddToWishlistBtn.textContent = 'Elimină din Wishlist';
                contextAddToWishlistBtn.classList.add('bg-red-500', 'text-white', 'hover:bg-red-600');
                contextAddToWishlistBtn.classList.remove('text-gray-800', 'hover:bg-blue-100'); 
                if (body.classList.contains('dark-mode')) {
                    contextAddToWishlistBtn.classList.remove('dark:text-gray-200', 'dark:hover:bg-gray-600');
                }
            } else {
                contextAddToWishlistBtn.textContent = 'Adaugă la Wishlist';
                contextAddToWishlistBtn.classList.remove('bg-red-500', 'text-white', 'hover:bg-red-600');
                contextAddToWishlistBtn.classList.add('text-gray-800', 'hover:bg-blue-100'); 
                if (body.classList.contains('dark-mode')) {
                    contextAddToWishlistBtn.classList.add('dark:text-gray-200', 'dark:hover:bg-gray-600');
                }
            }

            if (product && FOOD_CATEGORIES.includes(product.category)) {
                contextSuggestRecipeBtn.classList.remove('hidden');
                contextSuggestRecipeBtn.onclick = () => {
                    generateRecipe(product.name);
                    customContextMenu.classList.remove('show');
                };
            } else {
                contextSuggestRecipeBtn.classList.add('hidden');
                contextSuggestRecipeBtn.onclick = null;
            }
            
            customContextMenu.classList.add('show');
        }
    });

    document.addEventListener('click', (event) => {
        if (customContextMenu.classList.contains('show') && !customContextMenu.contains(event.target)) {
            customContextMenu.classList.remove('show');
        }
    });

    contextAddToWishlistBtn.addEventListener('click', () => {
        if (currentRightClickedProductId !== null) {
            if (isProductInWishlist(currentRightClickedProductId)) {
                removeFromWishlist(currentRightClickedProductId);
            } else {
                addToWishlist(currentRightClickedProductId);
            }
            customContextMenu.classList.remove('show');
        }
    });

    contextViewDetailsBtn.addEventListener('click', () => {
        if (currentRightClickedProductId !== null) {
            const product = productsData.find(p => p.id === currentRightClickedProductId);
            if (product) {
                showProductModal(product);
            }
            customContextMenu.classList.remove('show');
        }
    });

    const mobileSearchInput = document.getElementById('mobile-search-input');
    const desktopSearchInput = document.getElementById('desktop-search-input');
    const clearMobileSearchBtn = document.getElementById('clear-mobile-search-btn');
    const clearDesktopSearchBtn = document.getElementById('clear-desktop-search-btn');

    const handleSearchInput = (event) => {
        searchTerm = event.target.value;
        selectedCategory = 'Toate';
        renderCategoryButtons();
        renderProducts();
        if (event.target.id === 'mobile-search-input') {
            if (searchTerm.length > 0) {
                clearMobileSearchBtn.classList.remove('hidden');
            } else {
                clearMobileSearchBtn.classList.add('hidden');
            }
        } else if (event.target.id === 'desktop-search-input') {
            if (searchTerm.length > 0) {
                clearDesktopSearchBtn.classList.remove('hidden');
            } else {
                clearDesktopSearchBtn.classList.add('hidden');
            }
        }
    };

    const clearSearch = (inputElement, clearButtonElement) => {
        inputElement.value = '';
        searchTerm = '';
        clearButtonElement.classList.add('hidden');
        selectedCategory = 'Toate';
        renderCategoryButtons();
        renderProducts();
    };

    mobileSearchInput.addEventListener('input', handleSearchInput);
    desktopSearchInput.addEventListener('input', handleSearchInput);

    clearMobileSearchBtn.addEventListener('click', () => clearSearch(mobileSearchInput, clearMobileSearchBtn));
    clearDesktopSearchBtn.addEventListener('click', () => clearSearch(desktopSearchInput, clearDesktopSearchBtn));


    if (mobileSearchInput.value.length > 0) {
        clearMobileSearchBtn.classList.remove('hidden');
    }
    if (desktopSearchInput.value.length > 0) {
        clearDesktopSearchBtn.classList.remove('hidden');
    }
});

window.addEventListener('resize', () => {
    const categoryButtonsContainer = document.getElementById('category-buttons-container');
    const mobileToggleDiv = document.querySelector('.md\\:hidden');
    const mobileSearchContainer = document.getElementById('mobile-search-container');
    const desktopSearchContainer = document.getElementById('desktop-search-container');
    const mobileSearchInput = document.getElementById('mobile-search-input');
    const desktopSearchInput = document.getElementById('desktop-search-input');
    const clearMobileSearchBtn = document.getElementById('clear-mobile-search-btn');
    const clearDesktopSearchBtn = document.getElementById('clear-desktop-search-btn');


    if (window.innerWidth < 768) {
        mobileToggleDiv.classList.remove('hidden');
        mobileToggleDiv.classList.add('flex');
        mobileSearchContainer.classList.remove('hidden');
        desktopSearchContainer.classList.add('hidden');
        if (!isCategoryNavExpanded) {
            categoryButtonsContainer.classList.remove('is-expanded');
            document.getElementById('category-toggle-btn').classList.remove('rotated');
        }

        if (mobileSearchInput.value.length > 0) {
            clearMobileSearchBtn.classList.remove('hidden');
        } else {
            clearMobileSearchBtn.classList.add('hidden');
        }
        clearDesktopSearchBtn.classList.add('hidden'); 
    } else {
        mobileToggleDiv.classList.add('hidden');
        mobileToggleDiv.classList.remove('flex');
        mobileSearchContainer.classList.add('hidden');
        desktopSearchContainer.classList.remove('hidden');
        categoryButtonsContainer.classList.remove('is-expanded');
        document.getElementById('category-toggle-btn').classList.remove('rotated');
        isCategoryNavExpanded = false;

        if (desktopSearchInput.value.length > 0) {
            clearDesktopSearchBtn.classList.remove('hidden');
        } else {
            clearDesktopSearchBtn.classList.add('hidden');
        }
        clearMobileSearchBtn.classList.add('hidden');
    }
});

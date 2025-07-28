const productsData = [
   {
        id: 1,
        name: "Apă Borsec",
        category: "Apă",
        store: "ORICE MAGAZIN",
        image: "https://lituanicawholesale.com/image/cache/catalog/litaunica-image/Borsec_-_Mineral_Still_Water_0.5_L-600x600.png",
        description: "Apă naturală carbogazificată, bogată în minerale esențiale. Perfectă pentru hidratare zilnică sau pentru a însoți mesele.",
        location: "HARGHITA"
    },
    {
        id: 2,
        name: "Apă Perla Harghitei",
        category: "Apă",
        store: "ORICE MAGAZIN",
        image: "https://devincebeau.ro/wp-content/uploads/2025/02/Perla-Harghitei-apa-plata-5-litri.png",
        description: "Produsă în zona Harghita, izvorul este captat și monitorizat riguros conform standardelor de calitate",
        location: "HARGHITA"
    },
    {
        id: 3,
        name: "Apă La Fântâna",
        category: "Apă",
        store: "ONLINE",
        image: "https://lafantana.ro/media/magefan_blog/1-5-apa-plata-necarbo.png",
        description: "Se comandă exclusiv pe site-ul lafantana.ro, unde poți opta pentru livrare lunară acasă sau la birou. Produsă la Tălmaciu (județul Sibiu), testată permanent pentru conformitate și puritate; este un brand românesc important pentru apa plată și minerală.",
        location: "SIBIU"
    },
    {
        id: 4,
        name: "Apă Cumpana",
        category: "Apă",
        store: "ONLINE",
        image: "https://cumpana.ro/cdn/shop/files/11L_720x.png?v=1726754312",
        description: "Se poate comanda direct de pe site-ul oficial cumpana.ro. Companie românească, cu capital 100% românesc, oferind apă de izvor pură, cu pH usor alcalin (8.2).",
        location: "ILFOV, Ștefăneștii de Jos"
    },
    {
        id: 5,
        name: "Bere Ciucaș",
        category: "Băuturi",
        store: "ORICE MAGAZIN",
        image: "https://www.alexim.ro/wp-content/uploads/2024/03/BERE-CIUCAS-STICLA-SGR-0.33L-4.6-24-BBAX1728-BUCPALET.png",
        description: "Bere lejeră, foarte populară pentru prețul accesibil și gustul proaspăt.",
        location: "BRASOV"
    },
    {
        id: 6,
        name: "Bere Timișoreana",
        category: "Băuturi",
        store: "ORICE MAGAZIN",
        image: "https://www.profi.ro/wp-content/uploads/2025/05/TIMISOREANA-BERE-PET-2.25L-339x260.png?x84925",
        description: "Cea mai veche bere din România, gust echilibrat, ingredient 100% natural.",
        location: "TIMISOARA, BUZAU, BRASOV"
    },
    {
        id: 7,
        name: "Vin Cotnari",
        category: "Băuturi",
        store: "ORICE MAGAZIN",
        image: "https://www.cotnari.ro/continut/uploads/2017/07/Feteasca-Alba-demidulce-COTNARI-SA.png",
        description: "Cei mai faimoși pentru Grasă de Cotnari, vin alb dulce/ demidulce, aromat, celebru internațional; alte soiuri: Fetească Albă, Busuioacă de Bohotin.",
        location: "IASI"
    },
    {
        id: 8,
        name: "Vin Jidvei",
        category: "Băuturi",
        store: "ORICE MAGAZIN",
        image: "https://www.jidvei.ro/wp-content/uploads/2020/04/spumant-jidvei-extra-dry-2023-600x800-1.png",
        description: "Cel mai mare producător de vin alb, recunoscut pentru premium și spumante, game precum Owner's Choice, Mysterium sau Clasic. Soiuri: Fetească Regală, Sauvignon Blanc, Traminer, Riesling, Chardonnay. Vinuri seci, demi-seci sau dulci.",
        location: "Valea Târnavelor, județul Alba (comuna Jidvei)"
    },
    {
        id: 9,
        name: "Lapte Napolact",
        category: "Lactate",
        store: "ORICE MAGAZIN",
        image: "https://supereco.ro/932-home_default/lapte-35-cutie-1-l-napolact.jpg",
        description: "Fabrica fondată la Cluj în 1905, astăzi parte a FrieslandCampina, colectează lapte exclusiv din Ardeal, folosind rețete tradiționale și metode moderne. Produs 100% din lapte românesc, prelucrat la standarde europene.",
        location: "CLUJ, MURES"
    },
    {
        id: 10,
        name: "Zahăr Mărgăritar",
        category: "Făină și Zahăr",
        store: "ORICE MAGAZIN",
        image: "https://auchan.vtexassets.com/arquivos/ids/160361-800-800?v=637980663879170000&width=800&height=800&aspect=true",
        description: "Cârnați picanți, specifici zonei Buzăului, preparați după o rețetă autentică. Ideali pentru grătar sau fierți, alături de o mămăliguță.",
        location: "NEAMT, orasul ROMAN"
    },
    {
        id: 11,
        name: "Lapte Zuzu",
        category: "Lactate",
        store: "ORICE MAGAZIN",
        image: "https://www.alexim.ro/wp-content/uploads/2023/04/ALB-LAPTE-1L-ZUZU-3.5-ROSU.png",
        description: "Zuzu este cel mai vândut brand de lapte din România, produs la Alba Iulia cu materie primă colectată de la ferme locale. Lapte proaspăt, pasteurizat, cu mai multe variante de grăsime.",
        location: "ALBA"
    },
    {
        id: 12,
        name: "Făina Pambac",
        category: "Făină și Zahăr",
        store: "ORICE MAGAZIN",
        image: "https://odorest.ro/files/image/2018-02-23-10-22-03_145a8fcf2b929f2.png.png",
        description: "Companie fondată în 1968, cu una dintre cele mai apreciate mori de grâu din țară. Fabrica Pambac din Bacău folosește tehnologii avansate pentru a produce făină, paste și alte produse de panificație cu materie primă locală.",
        location: "BACAU"
    },
    {
        id: 13,
        name: "Făină Băneasa",
        category: "Făină și Zahăr",
        store: "ORICE MAGAZIN",
        image: "https://odorest.ro/files/image/2018-02-21-10-29-07_205a8d2dd376a2c.png.png",
        description: "Producător lider pe piața de morărit, cu moară modernă în București. Oferă făină 100% din grâu românesc de cea mai bună calitate, fără aditivi. Folosită în panificație și cofetărie, certificată și recunoscută pentru standardul înalt de siguranță alimentară.",
        location: "BUCURESTI"
    },
    {
        id: 14,
        name: "Ciocolata Făgăraș",
        category: "Dulciuri",
        store: "ORICE MAGAZIN",
        image: "https://pravalie.store/pub/media/catalog/product/cache/39e4a8825328a53d6e1f854af38fe862/1/0/100283.png",
        description: "Este un brand produs de Kandia Dulce, unul dintre cei mai mari și vechi producători de dulciuri din România. Compania are facilități în București iar batoanele Făgăraș sunt fabricate local, având o rețetă consacrată din anii '60, apreciată de generații de români.",
        location: "BUCURESTI"
    },
    {
        id: 15,
        name: "Eugenia",
        category: "Dulciuri",
        store: "ORICE MAGAZIN",
        image: "https://auchan.vtexassets.com/arquivos/ids/168524/biscuiti-eugenia-cu-crema-de-cacao-36g-8841662529566.png?v=637988335033530000",
        description: "Marca originală este produsă de compania Dobrogea (fabrica din Constanța), cu tradiție încă din 1947. Rețeta, producția și ingredientele rămân 100% românești, iar produsul este considerat un simbol al gustărilor din copilăria românilor.",
        location: "CONSTANTA"
    },
    {
        id: 16,
        name: "Cârnați de Porc Comtim",
        category: "Carne",
        store: "COMTIM",
        image: "https://www.comtim.ro/images/PP_tara.png",
        description: "Aceste produse provin integral din fermele proprii Comtim din România și nu se găsesc în alte magazine sau lanțuri naționale. Magazinul oferă o gamă variată: carne proaspătă, produse marinate, toate garantând trasabilitate și prospețime, dedicate exclusiv clienților acestui punct de vânzare.",
        location: "TIMISOARA"
    },
    {
        id: 17,
        name: "Ciocolata ROM",
        category: "Dulciuri",
        store: "ORICE MAGAZIN",
        image: "https://i0.wp.com/romprod.uk/wp-content/uploads/2023/10/autentic-ciocolata-lapte-36g.png?fit=600%2C600&ssl=1",
        description: "Producția are loc la fabrica Kandia Dulce din București, pe Șoseaua Viilor nr.20, Sector 5. Kandia Dulce este cel mai mare producător român de dulciuri, deținând brandul ROM încă de la lansarea acestuia în 1964, iar batoanele și toate sortimentele ROM continuă să fie fabricate local pe linia de producție dedicată din București.",
        location: "BUCURESTI"
    },
    {
        id: 18,
        name: "Carne de Porc Comtim",
        category: "Carne",
        store: "COMTIM",
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
const ANIMATIONS_STORAGE_KEY = 'buy_from_romania_animations_enabled';
const BLACK_AND_WHITE_STORAGE_KEY = 'buy_from_romania_black_and_white_mode';
const FOOD_CATEGORIES = ["Pâine", "Lactate", "Carne", "Dulciuri", "Făină și Zahăr", "Ulei și Oțet", "Băuturi"];

let currentRightClickedProductId = null;
let animationsEnabled = true; 
let isBlackAndWhiteMode = false;
let animationFrameId = null;
let notificationTimeoutId = null; 
let previousWishlistState = []; 

const ROMANIAN_FLAG_COLORS = ['#002B7F', '#FCD116', '#CE1126'];

function loadAnimationsState() {
    const storedState = localStorage.getItem(ANIMATIONS_STORAGE_KEY);
    if (storedState !== null) {
        animationsEnabled = JSON.parse(storedState);
    } else {
        animationsEnabled = true; 
    }
    const animationsToggleButton = document.getElementById('context-toggle-animations');
    if (animationsToggleButton) {
        animationsToggleButton.textContent = animationsEnabled ? 'Dezactivează Animații' : 'Activează Animații';
    }
    toggleAnimations(animationsEnabled);
}

function saveAnimationsState() {
    localStorage.setItem(ANIMATIONS_STORAGE_KEY, JSON.stringify(animationsEnabled));
}

function toggleAnimations(enable) {
    animationsEnabled = enable;
    saveAnimationsState();

    const body = document.body;
    const animationsToggleButton = document.getElementById('context-toggle-animations');

    if (animationsEnabled) {
        body.classList.remove('no-animations');
        if (animationsToggleButton) {
            animationsToggleButton.textContent = 'Dezactivează Animații';
        }
        if (!animationFrameId) {
            animateSparks();
        }
    } else {
        body.classList.add('no-animations');
        if (animationsToggleButton) {
            animationsToggleButton.textContent = 'Activează Animații';
        }
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
        sparks = [];
        sparkCtx.clearRect(0, 0, sparkCanvas.width, sparkCanvas.height);
    }
}

function loadBlackAndWhiteState() {
    const storedState = localStorage.getItem(BLACK_AND_WHITE_STORAGE_KEY);
    if (storedState !== null) {
        isBlackAndWhiteMode = JSON.parse(storedState);
    } else {
        isBlackAndWhiteMode = false;
    }
    const blackAndWhiteToggleButton = document.getElementById('context-toggle-black-and-white');
    if (blackAndWhiteToggleButton) {
        blackAndWhiteToggleButton.textContent = isBlackAndWhiteMode ? 'Dezactivează Alb/Negru' : 'Activează Alb/Negru';
    }
    toggleBlackAndWhiteMode(isBlackAndWhiteMode);
}

function saveBlackAndWhiteState() {
    localStorage.setItem(BLACK_AND_WHITE_STORAGE_KEY, JSON.stringify(isBlackAndWhiteMode));
}

function toggleBlackAndWhiteMode(enable) {
    isBlackAndWhiteMode = enable;
    saveBlackAndWhiteState();
    const body = document.body;
    const blackAndWhiteToggleButton = document.getElementById('context-toggle-black-and-white');

    if (isBlackAndWhiteMode) {
        body.classList.add('black-and-white-mode');
        if (blackAndWhiteToggleButton) {
            blackAndWhiteToggleButton.textContent = 'Dezactivează Alb/Negru';
        }
    } else {
        body.classList.remove('black-and-white-mode');
        if (blackAndWhiteToggleButton) {
            blackAndWhiteToggleButton.textContent = 'Activează Alb/Negru';
        }
    }
}


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
    
    if (itemToRemoveElement && animationsEnabled) {
        itemToRemoveElement.classList.add('button-active-animation');
        setTimeout(() => {
            itemToRemoveElement.classList.remove('button-active-animation');
        }, 300);
    }

    if (itemToRemoveElement && itemToRemoveElement.closest('.wishlist-item-card')) {
        const parentCard = itemToRemoveElement.closest('.wishlist-item-card');
        if (animationsEnabled) {
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
        }
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
            if (animationsEnabled) {
                modalWishlistBtn.classList.add('button-active-animation');
                setTimeout(() => {
                    modalWishlistBtn.classList.remove('button-active-animation');
                }, 300);
            }
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
            if (animationsEnabled) {
                modalWishlistBtn.classList.add('button-active-animation');
                setTimeout(() => {
                    modalWishlistBtn.classList.remove('button-active-animation');
                }, 300);
            }
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
            if (animationsEnabled) {
                generateRecipeBtn.classList.add('button-active-animation');
                setTimeout(() => {
                    generateRecipeBtn.classList.remove('button-active-animation');
                }, 300);
            }
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

function clearWishlistWithUndo() {
    if (wishlist.length === 0) {
        showNotification('Wishlist-ul este deja gol!');
        if (animationsEnabled) {
            document.getElementById('clear-wishlist-btn').classList.add('shake-animation');
            setTimeout(() => {
                document.getElementById('clear-wishlist-btn').classList.remove('shake-animation');
            }, 300);
        }
        return;
    }


    previousWishlistState = [...wishlist];


    wishlist = [];
    saveWishlist(); 
    renderWishlistItems();
    renderProducts();


    showNotification('Wishlist-ul a fost golit! Anulează?', true, undoClearWishlist);

    if (animationsEnabled) {
        document.getElementById('clear-wishlist-btn').classList.add('button-active-animation');
        setTimeout(() => {
            document.getElementById('clear-wishlist-btn').classList.remove('button-active-animation');
        }, 300);
    }
}


function undoClearWishlist() {
    wishlist = [...previousWishlistState]; 
    saveWishlist(); 
    renderWishlistItems();
    renderProducts();
    showNotification('Golitrea wishlist-ului a fost anulată!');
}

/**
 * @param {string} message
 * @param {boolean} showUndoButton
 * @param {function} undoCallback
 */
function showNotification(message, showUndoButton = false, undoCallback = null) {
    const notificationMessage = document.getElementById('notification-message');
    const notificationText = document.getElementById('notification-text');
    const progressBar = document.getElementById('notification-progress-bar');
    const undoButton = document.getElementById('notification-undo-btn');
    const notificationDuration = 5000;

    if (notificationTimeoutId) {
        clearTimeout(notificationTimeoutId);
    }

    notificationText.innerHTML = message; 

    if (showUndoButton) {
        undoButton.classList.remove('hidden');
        undoButton.onclick = () => {
            if (undoCallback) {
                undoCallback();
            }
            notificationMessage.classList.remove('show');
            undoButton.classList.add('hidden');
            if (notificationTimeoutId) {
                clearTimeout(notificationTimeoutId);
            }

            progressBar.style.animation = 'none';
        };
    } else {
        undoButton.classList.add('hidden');
        undoButton.onclick = null; 
    }

    notificationMessage.classList.add('show');


    progressBar.style.animation = 'none';
    void progressBar.offsetWidth; 
    progressBar.style.animation = `progressBarFill ${notificationDuration / 1000}s linear forwards`;


    notificationTimeoutId = setTimeout(() => {
        notificationMessage.classList.remove('show');
        undoButton.classList.add('hidden'); 
    }, notificationDuration);
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
        this.size = Math.random() * 3 + 1.5;
        this.life = 90 + Math.random() * 80;
        this.maxLife = this.life;
        this.color = ROMANIAN_FLAG_COLORS[Math.floor(Math.random() * ROMANIAN_FLAG_COLORS.length)];
        this.vx = (Math.random() - 0.5) * 25;
        this.vy = (Math.random() * -18 - 8);
        this.gravity = 0.4;
        this.friction = 0.96;
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
    if (!animationsEnabled) {
        sparkCtx.clearRect(0, 0, sparkCanvas.width, sparkCanvas.height);
        animationFrameId = null;
        return;
    }
    sparkCtx.clearRect(0, 0, sparkCanvas.width, sparkCanvas.height);

    for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.update();
        spark.draw();

        if (spark.life <= 0) {
            sparks.splice(i, 1);
        }
    }

    animationFrameId = requestAnimationFrame(animateSparks);
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    loadWishlist();
    loadAnimationsState();
    loadBlackAndWhiteState();
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

        if (animationsEnabled) {
            themeToggleBtn.classList.add('button-active-animation');
            themeIcon.classList.add('icon-active-rotation');

            setTimeout(() => {
                themeToggleBtn.classList.remove('button-active-animation');
                themeIcon.classList.remove('icon-active-rotation');
            }, 400);

            const rect = themeToggleBtn.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            for (let i = 0; i < 100; i++) {
                sparks.push(new Spark(centerX, centerY));
            }
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
        if (animationsEnabled) {
            generateWishlistRecipeBtn.classList.add('button-active-animation');
            setTimeout(() => {
                generateWishlistRecipeBtn.classList.remove('button-active-animation');
            }, 300);
        }
    });


    clearWishlistBtn.addEventListener('click', () => {
        clearWishlistWithUndo();
    });

    const customContextMenu = document.getElementById('custom-context-menu');
    const contextProductName = document.getElementById('context-product-name');
    const contextAddToWishlistBtn = document.getElementById('context-add-to-wishlist');
    const contextSuggestRecipeBtn = document.getElementById('context-suggest-recipe');
    const contextViewDetailsBtn = document.getElementById('context-view-details');
    const contextToggleAnimationsButton = document.getElementById('context-toggle-animations');
    const contextToggleBlackAndWhiteButton = document.getElementById('context-toggle-black-and-white');

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();

        const productCard = event.target.closest('.product-card-container');

        contextProductName.classList.add('hidden');
        contextAddToWishlistBtn.classList.add('hidden');
        contextSuggestRecipeBtn.classList.add('hidden');
        contextViewDetailsBtn.classList.add('hidden');
        contextToggleAnimationsButton.classList.remove('hidden');
        contextToggleBlackAndWhiteButton.classList.remove('hidden');

        if (productCard) {
            currentRightClickedProductId = parseInt(productCard.getAttribute('data-product-id'));
            const product = productsData.find(p => p.id === currentRightClickedProductId);

            if (product) {
                contextProductName.textContent = product.name;
                contextProductName.classList.remove('hidden');
            } else {
                contextProductName.textContent = '';
            }

            contextAddToWishlistBtn.classList.remove('hidden');
            contextViewDetailsBtn.classList.remove('hidden');

            if (isProductInWishlist(currentRightClickedProductId)) {
                contextAddToWishlistBtn.textContent = 'Elimină din Wishlist';
                contextAddToWishlistBtn.classList.add('bg-red-500', 'text-white', 'hover:bg-red-600');
                contextAddToWishlistBtn.classList.remove('text-gray-800', 'hover:bg-blue-100'); 
                if (body.classList.contains('dark-mode')) {
                    contextAddToWishlistBtn.classList.remove('dark:text-gray-200', 'dark:hover:bg-gray-600');
                }
            } else {
                contextAddToWishlistBtn.textContent = 'Adaugă la Wishlist';
                contextAddToWishlistBtn.classList.remove('bg-red-500', 'hover:bg-red-600', 'bg-gray-400', 'cursor-not-allowed');
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
            
        } else {
            currentRightClickedProductId = null;
        }

        contextToggleBlackAndWhiteButton.textContent = isBlackAndWhiteMode ? 'Dezactivează Alb/Negru' : 'Activează Alb/Negru';


        customContextMenu.style.visibility = 'hidden';
        customContextMenu.classList.add('show'); 
        
        const menuWidth = customContextMenu.offsetWidth;
        const menuHeight = customContextMenu.offsetHeight;

        let posX = event.clientX;
        let posY = event.clientY;


        posX -= menuWidth / 2;
        posY -= menuHeight / 2;


        if (posX + menuWidth > window.innerWidth) {
            posX = window.innerWidth - menuWidth - 10;
        }
        if (posY + menuHeight > window.innerHeight) {
            posY = window.innerHeight - menuHeight - 10;
        }
        if (posX < 0) {
            posX = 10;
        }
        if (posY < 0) {
            posY = 10;
        }

        customContextMenu.style.left = `${posX}px`;
        customContextMenu.style.top = `${posY}px`;
        customContextMenu.style.visibility = 'visible'; 
    });

    document.addEventListener('click', (event) => {
        if (customContextMenu.classList.contains('show') && !customContextMenu.contains(event.target)) {
            customContextMenu.classList.remove('show');
            customContextMenu.style.visibility = 'hidden'; 
        }
    });

    contextToggleAnimationsButton.addEventListener('click', () => {
        toggleAnimations(!animationsEnabled);
        customContextMenu.classList.remove('show');
        customContextMenu.style.visibility = 'hidden';
    });

    contextToggleBlackAndWhiteButton.addEventListener('click', () => {
        toggleBlackAndWhiteMode(!isBlackAndWhiteMode);
        customContextMenu.classList.remove('show');
        customContextMenu.style.visibility = 'hidden';
    });

    contextAddToWishlistBtn.addEventListener('click', () => {
        if (currentRightClickedProductId !== null) {
            if (isProductInWishlist(currentRightClickedProductId)) {
                removeFromWishlist(currentRightClickedProductId);
            } else {
                addToWishlist(currentRightClickedProductId);
            }
            customContextMenu.classList.remove('show');
            customContextMenu.style.visibility = 'hidden';
        }
    });

    contextViewDetailsBtn.addEventListener('click', () => {
        if (currentRightClickedProductId !== null) {
            const product = productsData.find(p => p.id === currentRightClickedProductId);
            if (product) {
                showProductModal(product);
            }
            customContextMenu.classList.remove('show');
            customContextMenu.style.visibility = 'hidden';
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

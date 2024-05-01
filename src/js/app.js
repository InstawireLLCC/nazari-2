
// Function to update content based on selected language
function get_i18n(item, lang) {
    const element = document.getElementById(item);
    if (element && article[item] && article[item][lang]) {
        element.textContent = article[item][lang];
    }
}

// Function to initialize page content based on initial language
// Function to initialize page content based on default language (English)
// Function to initialize page content based on default language (English)


// Call initializePage function to set initial language and populate content
function initializePage() {
    document.querySelectorAll('.nav-link').forEach(link => {
        const item = link.getAttribute('data-item');
        if (item && article[item] && article[item]['en']) {
            link.textContent = article[item]['en'];
        }
    });
}

// Event listener for language selection
const languageItems = document.querySelectorAll('.dropdown-item');
languageItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const selectedLanguage = event.target.getAttribute('data-lang');
        document.getElementById('languageDropdown').textContent = event.target.textContent;
        Object.keys(article).forEach(item => {
            get_i18n(item, selectedLanguage);
        });
    });
});

// Initialize page content
initializePage();

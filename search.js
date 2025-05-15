// Grab elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const galleryItems = document.querySelectorAll('.gallery-btn');
const historyList = document.getElementById('historyList');

// Function to perform the search
function performGallerySearch(term = null) {
  const searchTerm = term !== null ? term.toLowerCase().trim() : searchInput.value.toLowerCase().trim();
  
  // Skip logging empty searches
  if (term === null && searchTerm !== '') {
    logSearch(searchTerm);
    console.log(`Search term logged: ${searchTerm}`);
  }

  galleryItems.forEach(item => {
    const name = item.querySelector('h3').innerText.toLowerCase();
    console.log(`Checking item: ${name} against search term: ${searchTerm}`);
    
    if (name.includes(searchTerm) || searchTerm === '') {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

// Log search to history list
function logSearch(term) {
  console.log(`Logging search term: ${term}`);
  // Prevent duplicate entries
  const existing = Array.from(historyList.children).find(li => li.innerText.toLowerCase() === term);

  //Not allow numbers
  if (/\d/.test(term)) {
    console.log(`Search term contains numbers: ${term}`)
    alert('Search term cannot contain numbers');
    return;
  }

  else if (existing) return;

  const li = document.createElement('li');
  li.innerText = term;
  li.style.cursor = 'pointer';
  li.addEventListener('click', () => {
    searchInput.value = term;
    performGallerySearch(term);
  });
  historyList.appendChild(li);
}

// Trigger search on button click
searchButton.addEventListener('click', () => {
  console.log('Search button clicked');
  performGallerySearch();
});

// Trigger search on Enter key
searchInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    performGallerySearch();
  }
});

// Real-time search (no logging)
searchInput.addEventListener('input', () => {
  performGallerySearch(searchInput.value);
});

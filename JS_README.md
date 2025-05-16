# JavaScript Implementation Checklist with Examples 

## 1. Variable Naming & Indentation
This code uses clear and descriptive variable names to show what each element represents. It follows proper indentation and formatting for readability. Each variable stores a reference to a specific HTML element on the page.
```
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const galleryItems = document.querySelectorAll('.gallery-btn');
const historyList = document.getElementById('historyList');
```

## 2. Function Naming & Modularity
This function is named `createSlides` and is used to generate image slides from the ChandlerPics array. It creates a slide for each image and adds it to the slide container. The function is modular, making it reusable and easy to manage.
```
function createSlides() {
  ChandlerPics.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    console.log(src);
    slide.innerHTML = `
              <img src="${src}">
          `;
        slidesContainerChandler.appendChild(slide);
  });
  updateSlide()
}
```

## 3. Arrays & Objects Usage
This code defines an array called `Pics` that holds file paths to lacrosse images. Each item in the array is a string representing an image location. Arrays like this are useful for storing and organizing related data.

```
    const Pics = ["Photos/Galleries/Lacrosse/IMG_0306.jpg", "Photos/Galleries/Lacrosse/IMG_5388.jpg", "Photos/Galleries/Lacrosse/IMG_5780.jpg", "Photos/Galleries/Lacrosse/IMG_5810.jpg", "Photos/Galleries/Lacrosse/IMG_5961.jpg", "Photos/Galleries/Lacrosse/IMG_7771.jpg", "Photos/Galleries/Lacrosse/IMG_6669.jpg", "Photos/Galleries/Lacrosse/IMG_6614.jpg", "Photos/Galleries/Lacrosse/IMG_6795.jpg", "Photos/Galleries/Lacrosse/IMG_6031.jpg", "Photos/Galleries/Lacrosse/IMG_6850.jpg",  "Photos/Galleries/Lacrosse/IMG_6988.jpg"];

```

## 4. Array Methods
This code creates an array called `Pics` that stores file paths to lacrosse photos. Each item in the array is a string representing the location of an image. The array can be used to display or loop through the photos in a gallery.
```
    const Pics = ["Photos/Galleries/Lacrosse/IMG_0306.jpg", "Photos/Galleries/Lacrosse/IMG_5388.jpg", "Photos/Galleries/Lacrosse/IMG_5780.jpg", "Photos/Galleries/Lacrosse/IMG_5810.jpg", "Photos/Galleries/Lacrosse/IMG_5961.jpg", "Photos/Galleries/Lacrosse/IMG_7771.jpg", "Photos/Galleries/Lacrosse/IMG_6669.jpg", "Photos/Galleries/Lacrosse/IMG_6614.jpg", "Photos/Galleries/Lacrosse/IMG_6795.jpg", "Photos/Galleries/Lacrosse/IMG_6031.jpg", "Photos/Galleries/Lacrosse/IMG_6850.jpg",  "Photos/Galleries/Lacrosse/IMG_6988.jpg"];

```
## 5. Looping/Iteration
This code tracks how long a user stays on the page using `setInterval`. It updates the timer every second and saves the time in local storage. The time is shown in hours, minutes, and seconds in an element with the ID "timer".

```
   setInterval(() => {
  timeOnPage += 1;
  localStorage.setItem("timeOnPage", timeOnPage);

  const hours = Math.floor(timeOnPage / 3600);
  const minutes = Math.floor((timeOnPage % 3600) / 60);
  const seconds = timeOnPage % 60;

  const timeElement = document.getElementById("timer");
  if (timeElement) {
    timeElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);
```

## 6. JSON Data Handling
This line saves a JavaScript object called `formData` as a cookie in the browser. It converts the object to a string using `JSON.stringify`. The cookie will expire after 1000 seconds.
```
document.cookie = formData=${JSON.stringify(formData)}; max-age=1000;
```

## 7. Web Storge
This line stores the value `1` in the browser's localStorage with the key `Alt`. The data will persist even after the page is closed or refreshed.
```
   localStorage.setItem("Alt", 1);
```

## 8. Saving & Retruevubg User Data
This line retrieves the value stored in `localStorage` under the key `searchHistory`. It assigns the stored data as a string to the variable `history`. If no data is found, `history` will be `null`.

```
const history = localStorage.getItem('searchHistory');
```

## 9. Cookies with Expiry
These lines save the values of `name`, `email`, and `message` as cookies that expire after 1000 seconds.
```
    document.cookie = `name=${name}, max-age=1000`;
    document.cookie = `email=${email}, max-age=1000`;
    document.cookie = `message=${message}, max-age=1000`;
```
## 10. DOM Manipulation
This function creates slide elements for each image in the `Pics` array. It adds a "slide" class to each and sets the first slide as active. Each slide contains an image and is added to the slide container, then calls `updateSlide()`
```
function createSlides() {
  Pics.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    console.log(src);
    slide.innerHTML = `
              <img src="${src}">
          `;
        slidesContainer.appendChild(slide);
  });
  updateSlide()
}
```
## 11. CSS Manipulation via JS
These lines set the slide’s display to visible and move it horizontally using a CSS transform with a percentage value.
```
slide.style.display = "block";
      slide.style.transform = `translateX(${translateX}%)`;
```
## 12. Theme Prefernece
This function toggles between two color themes by updating CSS variables in a stylesheet named "main-stylesheet". It deletes existing `:root` and `footer` rules, then inserts new ones with different color values based on the stored `Alt` value in localStorage. It switches the `Alt` value between "0" and "1" to track the current theme.
```
function ColorChange(){
  if (localStorage.getItem("Alt") === "0") {
    console.log("Alt Key");


    const stylesheet = Array.from(document.styleSheets).find(sheet => sheet.title === "main-stylesheet");

    if (stylesheet) {
        for (let i = 0; i < stylesheet.cssRules.length; i++) {
            if (stylesheet.cssRules[i].selectorText === ":root") {
                stylesheet.deleteRule(i);
                break;
            }
        }

        if (stylesheet) {
        for (let i = 0; i < stylesheet.cssRules.length; i++) {
            if (stylesheet.cssRules[i].selectorText === "footer") {
                stylesheet.deleteRule(i);
                console.log("Footer Rule Deleted");
                break;
            }
        }

        stylesheet.insertRule(`
          :root {
            --yellow: #fbc02d; /* Vibrant Yellow */
            --orange: #fb8c00; /* Bold Orange */
            --dark-bg: #D3D3D3; /* Dark Background for contrast */
            --light-bg: #FFFFFF; /* Light Background for sections */
            --dark-text: #212121; /* Dark Text */
            --light-text: #212121; /* Light Text */
            --accent: #f57c00; /* Accent color */
            --border-color: #bdbdbd; /* Border color for structure */
            --black: #D3D3D3; /* Black for text and backgrounds */
          }


        `, 0);
       
        stylesheet.insertRule(`
          footer {
            background-color: #FFFFFF;
            color: var(--light-text);
padding: 20px 0;
text-align: center;
          }


        `, 0);

        
    }
}

localStorage.setItem("Alt", 1);
}

  else if (localStorage.getItem("Alt") === "1") {

    const stylesheet = Array.from(document.styleSheets).find(sheet => sheet.title === "main-stylesheet");

    if (stylesheet) {
        for (let i = 0; i < stylesheet.cssRules.length; i++) {
            if (stylesheet.cssRules[i].selectorText === ":root") {
                stylesheet.deleteRule(i);
                break;
            }
        }

        if (stylesheet) {
        for (let i = 0; i < stylesheet.cssRules.length; i++) {
            if (stylesheet.cssRules[i].selectorText === "footer") {
                stylesheet.deleteRule(i);
                console.log( "Footer Rule Deleted")
                break;
            }
        }

        stylesheet.insertRule(`
          :root {
                    --yellow: #fbc02d; /* Vibrant Yellow */
        --orange: #fb8c00; /* Bold Orange */
        --dark-bg: #121212; /* Dark Background for contrast */
        --light-bg: #f5f5f5; /* Light Background for sections */
        --dark-text: #212121; /* Dark Text */
        --light-text: #ffffff; /* Light Text */
        --accent: #f57c00; /* Accent color */
        --border-color: #bdbdbd; /* Border color for structure */
        --black: #000000; /* Black for text and backgrounds */
          }


        `, 0);
       
        stylesheet.insertRule(`
          footer {
            background-color: var(--black);
            color: var(--light-text);
        padding: 20px 0;
        text-align: center;
          }


        `, 0);

        
    }
}
localStorage.setItem("Alt", 0);};

}
```
## 13. Comments & Code Readbility
This comment indicates that the following code will retrieve the search history data stored in local storage.
```
// Load search history from local storage
```
## 14. Error Handling
This function `handleError` logs an error message to the console and shows an alert to the user when an error occurs.

```
function handleError(error) {
  console.error('An error occurred:', error);
  alert('An error occurred. Please try again.');
}
```
## 15. Regex Validation
This line defines a regular expression `emailRegex` to validate email addresses by checking for a pattern with characters before and after an "@" symbol and a domain extension.
```
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
## 16. Timer & Date Object
This code runs every second to increase `timeOnPage` by 1 and saves it in localStorage. It calculates hours, minutes, and seconds from the total time. Then it updates the HTML element with ID `timer` to show the elapsed time.
```
setInterval(() => {
  timeOnPage += 1;
  localStorage.setItem("timeOnPage", timeOnPage);

  const hours = Math.floor(timeOnPage / 3600);
  const minutes = Math.floor((timeOnPage % 3600) / 60);
  const seconds = timeOnPage % 60;

  const timeElement = document.getElementById("timer");
  if (timeElement) {
    timeElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);
```
## 17. Math, String, Random Methods
This line sets the HTML content of `slide` to an image element, using the `src` and `alt` properties from the `img` object.

```
slide.innerHTML = `<img src="${img.src}" alt="${img.alt}">`
```
## 18. Event Listeners & Shortcuts
This code listens for a key press event and calls the `ColorChange` function when the "Alt" key is pressed.

```
document.addEventListener("keydown", (event) => {

    if (event.key === "Alt") {
      ColorChange()
    }});
```
## 19. Real-Time Search & History
This function performs a search in the gallery using a given term or input value. It logs non-empty searches and filters gallery items by showing those that match the search term and hiding others. It also ignores empty search terms when logging.
```
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
```
## 20. CRUD
This function clears the search history by removing it from localStorage, clears the displayed history list, and logs a confirmation message.
```
function clearSearchHistory() {
  localStorage.removeItem('searchHistory');
  historyList.innerHTML = '';
  console.log('Search history cleared');
}
```
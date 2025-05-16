# CSS Capstone Web App Checklist

## 1. Global Reset
This CSS sets the body’s background and text colors using CSS variables. It also defines the font, removes default margin and padding, ensures vertical scrolling, and sets the cursor to default.
```
 body {
    background-color: var(--dark-bg);
    color: var(--dark-text);
    font-family: "Baloo 2", sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    cursor: default;
  }
```
## 2. Use of CSS Variables
These are CSS custom properties (variables) defining colors used throughout the site, including yellows, background colors, text colors, accent, border, and black.
```
    --yellow: #fbc02d;
    --orange: #fb8c00;
    --dark-bg: #121212;
    --light-bg: #f5f5f5;
    --dark-text: #212121;
    --light-text: #ffffff;
    --accent: #f57c00;
    --border-color: #bdbdbd;
    --black: #000000;
```
## 3. Organized CSS Structure
This comment labels the section of CSS where color variables are defined.
```
/* Color Variables */
```
## 4. Responive Design
This CSS applies styles for screens 480px wide or smaller. It changes the navbar layout to vertical, centers the title, shows a hamburger icon, hides the menu by default, and displays it when open. It also adjusts menu item spacing and sets categories to a two-column grid.
```
@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
  }

  #title {
    font-size: 24px;
    text-align: center;
    margin: 10px 0;
  }

  .hamburger {
    display: block;
    align-self: center;
    color: var(--yellow);
  }

  .menu {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .menu.open {
    display: flex !important;
  }

  .menu li {
    margin: 10px 0;
    font-size: 20px;
  }

   .categories {
    grid-template-columns: repeat(2, 1fr);
  }
}
```
## 5. Typography Styling
This CSS styles the body with a background and text color from variables. It sets the font, removes default margins and padding, enables vertical scrolling, and uses the default cursor.
```
body {
    background-color: var(--dark-bg);
    color: var(--dark-text);
    font-family: "Baloo 2", sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    cursor: default;
  }
```
## 6. Color Scheme & Contrast
These CSS variables define colors for dark and light backgrounds and text used in the design.
```
--dark-bg: #121212;
    --light-bg: #f5f5f5;
    --dark-text: #212121;
    --light-text: #ffffff;
```
## 7. Flexbox / Grid Usage
This CSS sets the element to use flexbox layout for arranging its children.
```
display: flex;  
```
## 8. Button & Input Styling
This CSS styles `.nav-buttons` to be positioned in the middle vertically, stretch full width, use flexbox to space items evenly, disable pointer events, and stay above other elements with a high z-index.
```
.nav-buttons {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 10;
  }
```
## 9. Component Reusability
This CSS styles the `.navbar` with a black background, padding, sticky positioning at the top, and high stacking order. It uses flexbox to space items between, align them center, and allow wrapping.
```
.navbar {
  background: var(--black);
  padding: 16px;
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
```
## 10. CSS Transitions
This CSS rule smoothly animates color changes over 0.3 seconds. It’s commonly used for hover effects or dynamic theme switches.
```
transition: color 0.3s;
```
## 11. Hover Effects
Changes nav link color to `--orange` on hover for better interactivity.
```
li.navButton a:hover{
  color: var(--orange);
}
```
## 12. Layout Containers
Centers content and applies light background with top padding.
```
.container{
  flex-direction: center;
  background-color: var(--light-bg);
  padding-top: 5%;
}
```
## 13. Layering with Z-Idex
Sets element stacking order to 99, keeping it above most other elements.
```
 z-index: 99;
```
## 14. Utility Classes
Styles the hamburger menu icon.  
It is hidden by default, has a large font size, pointer cursor, padding, and uses the accent color.
```
.hamburger {
  display: none;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
  color: var(--accent);
}
```
## 15. Use of Pseudo Classes
Adds a transparent overlay before each gallery button. The overlay smoothly changes background on hover with a transition effect.
```
.gallery-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.0); /* Transparent initially */
    transition: background 0.5s ease;
    z-index: 0;
  }
```
## 16. Shadows & Borders
Adds a solid border with the color set to the yellow variable.
```
#border{
  border-style: solid;
  border-color: var(--yellow);
}
```
## 17. Theme Customization
Toggles between two color themes by dynamically updating CSS variables in the main stylesheet.  
- Checks the current theme state stored in `localStorage` under key `"Alt"`.  
- If `"Alt"` is `"0"`, switches to a light-themed palette and updates footer styling accordingly.  
- If `"Alt"` is `"1"`, switches back to a dark-themed palette and updates footer styling accordingly.  
- Uses `insertRule` to add CSS variable definitions and footer styles.  
- Deletes existing `:root` and `footer` rules before inserting new ones to avoid duplicates.  
- Updates `"Alt"` in `localStorage` to track current theme state.  
- Logs actions like "Alt Key" and "Footer Rule Deleted" for debugging.
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
## 18. Naming Conventions
Changes nav link color to `--orange` on hover for improved user feedback.
```
li.navButton a:hover{
  color: var(--orange);
}
```
## 19. Cleanliness & Commenting
Styles for the footer element, including background color, text color, padding, and text alignment
```
  /* Footer */
```
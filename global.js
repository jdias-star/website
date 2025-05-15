localStorage.setItem("Alt", 0);
const stylesheet = Array.from(document.styleSheets).find(sheet => sheet.title === "main-stylesheet");

document.addEventListener("keydown", (event) => {

    if (event.key === "Alt") {
      ColorChange()
    }});

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


let timeOnPage = parseInt(localStorage.getItem("timeOnPage") || "0");

// Update the timer every second
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

function toggleMenu() {
  const navHam = document.getElementById('navHam');
  if (navHam.style.display === 'block') {
    navHam.style.display = 'none';
  } else {
    navHam.style.display = 'block';
  }
}

navLeft = document.getElementById('navMenuLeft');
navRight = document.getElementById('navMenuRight');


window.onload = function() {
  if (window.matchMedia("(max-width: 480px)").matches) {
    navLeft.remove();
    navRight.remove();
  }
}


// Import modules
import './modules/_toggleDarkMode.js'

// functions generate random
function randomColorLight() {
    let h = (Math.floor(Math.random()*(360))); 
      let colorLight = ("hsl(" + h + "100%, 95%)");
      return(colorLight)
}

function rand10() {
    let min = Math.ceil(1);
    let max = Math.floor(10);

    alert (Math.floor(Math.random()*(max-min) + min));
}

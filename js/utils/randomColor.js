export function randomColorLight() {
    let h = (Math.floor(Math.random()*(360))); 
      let colorLight = ("hsl(" + h + ", 100%, 92%)");
      return(colorLight)
}
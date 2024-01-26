export function randomColorLight() {
    let h = (Math.floor(Math.random()*(360))); 
      let colorLight = ("hsl(" + h + ", 100%, 95%)");
      return(colorLight)
}
console.log("Hello World");
const pronombres = ["The", "our"];
const adjetivos = ["great", "big"];
const sustantivos = ["Jogger", "racoon"];

function generarDominios() {
  const dominios = [];

  pronombres.forEach((pronombre) => {
    adjetivos.forEach((adjetivo) => {
      sustantivos.forEach((sustantivo) => {
        const dominio = pronombre + adjetivo + sustantivo  + ".com";
        dominios.push(dominio);
      });
    }); 
  });

  return dominios;
}

const listaDominios = generarDominios();
console.log(listaDominios);

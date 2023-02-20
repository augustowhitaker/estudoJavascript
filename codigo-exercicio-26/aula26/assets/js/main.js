function imc() {
  const form = document.querySelector("#formulario");
  const resultado = document.querySelector("#resultado");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const peso = form.querySelector("#peso");
    const altura = form.querySelector("#altura");
    const calculoIMC = peso.value / (altura.value * altura.value);

    if (calculoIMC < 18){
      resultado.innerHTML += ` <p>
       Seu IMC e ${calculoIMC.toFixed(2)} abaixo do peso </p> `;
    } else if (calculoIMC < 29) {
      resultado.innerHTML += `<p style: color red > Seu IMC e ${calculoIMC} peso normal </p>`;
    } else if (calculoIMC < 35) {
      resultado.innerHTML += `<p> Seu IMC e ${calculoIMC} sobrepeso </p>`;
    } else if (calculoIMC < 39) {
      resultado.innerHTML += `<p> Seu IMC e ${calculoIMC} obesidade grau 2 </p>`;
    } else {
      resultado.innerHTML += `<p> Seu IMC e ${calculoIMC} obesidade grau 3 </p>`;
    }

    form.reset();
  });
}

imc();

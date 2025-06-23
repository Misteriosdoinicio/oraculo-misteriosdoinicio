function revelarCarta() {
  const cartas = [
    "O Construtor - Arquitetando sua nova realidade.",
    "O Espelho Sagrado - Reflita o que deseja manifestar.",
    "O Visionário - Veja além da ilusão.",
    "O Desbravador Divino - Caminhe onde ninguém ousa.",
    "O Guardião das Portas - Escolha seu portal.",
    "O Chamado - O momento chegou. Responda."
  ];
  const sorteio = cartas[Math.floor(Math.random() * cartas.length)];
  document.getElementById("cartaResultado").innerText = sorteio;
}
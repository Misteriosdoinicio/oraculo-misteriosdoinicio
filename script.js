function revelarCarta() {
  const cartas = [
    {
      nome: "O Construtor",
      mensagem: "Ajustando sua nova realidade.",
      imagem: "OConstrutor.png"
    },
    {
      nome: "O Espelho Sagrado",
      mensagem: "Reflita o que deseja manifestar.",
      imagem: "OEspelhoSagrado.png"
    },
    {
      nome: "O Visionário",
      mensagem: "Veja além da ilusão.",
      imagem: "OVisionario.png"
    },
    {
      nome: "O Desbravador Dimensional",
      mensagem: "Caminhe onde ninguém ousa.",
      imagem: "ODesbravadorDimensional.png"
    },
    {
      nome: "O Guardião De Portais",
      mensagem: "Escolha seu portal.",
      imagem: "OGuardiaoDePortais.png"
    },
    {
      nome: "O Chamado Do Destino",
      mensagem: "O momento chegou. Responda.",
      imagem: "OChamadoDoDestino.png"
    },
    {
      nome: "O Guerreiro da Verdade",
      mensagem: "Empunhe a espada da consciência.",
      imagem: "OGuerreiroDaVerdade.png"
    },
    {
      nome: "O Mestre Invisível",
      mensagem: "Ensina sem ser visto, guia sem ser notado.",
      imagem: "OMestreInvisivel.png"
    },
    {
      nome: "O Iniciador",
      mensagem: "A porta está aberta. Dê o primeiro passo.",
      imagem: "OIniciador.png"
    },
    {
      nome: "O Observador Dimensional",
      mensagem: "Observe sem se apegar. Veja entre os véus.",
      imagem: "OObservadorDimensional.png"
    },
    {
      nome: "O Curador de Linhagens",
      mensagem: "Cure o passado, liberte o futuro.",
      imagem: "OCuradorDeLinhagens.png"
    },
    {
      nome: "O Mago das Realidades",
      mensagem: "O impossível é apenas mal configurado.",
      imagem: "OMagoDasRealidades.png"
    },
    {
      nome: "O Diplomata Cósmico",
      mensagem: "Palavras moldam mundos.",
      imagem: "ODiplomataCosmico.png"
    }
  ];

  const sorteio = cartas[Math.floor(Math.random() * cartas.length)];

  // Atualiza o texto
  document.getElementById("cartaResultado").innerText = `${sorteio.nome} - ${sorteio.mensagem}`;

  // Atualiza ou insere a imagem
  let imagemExistente = document.getElementById("imagemCarta");
  if (!imagemExistente) {
    imagemExistente = document.createElement("img");
    imagemExistente.id = "imagemCarta";
    imagemExistente.style.maxWidth = "400px";
    imagemExistente.style.marginTop = "20px";
    document.getElementById("cartaResultado").after(imagemExistente);
  }

  imagemExistente.src = sorteio.imagem;
  imagemExistente.alt = sorteio.nome;
}

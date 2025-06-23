function revelarCarta() {
  const cartas = [
    {
      nome: "O Construtor",
      frase: "Arquitetando sua nova realidade.",
      imagem: "OConstrutor.png",
      significado: "Você está no momento de estruturar suas bases. A carta do Construtor revela que suas ações agora determinarão os alicerces do que virá. Planeje com sabedoria."
    },
    {
      nome: "O Espelho Sagrado",
      frase: "Refita o que deseja manifestar.",
      imagem: "OEspelhoSagrado.png",
      significado: "Tudo ao seu redor é um reflexo do seu interior. A carta sugere que você observe seus padrões e crenças, pois eles estão moldando sua realidade."
    },
    {
      nome: "O Visionário",
      frase: "Veja além da ilusão.",
      imagem: "OVisionario.png",
      significado: "Você tem a capacidade de enxergar o que ainda não existe. Use sua visão criativa para guiar o futuro com sabedoria e inovação."
    },
    {
      nome: "O Desbravador Divino",
      frase: "Caminhe onde ninguém ousa.",
      imagem: "ODesbravadorDimensional.png",
      significado: "É hora de ir além do conhecido. Esta carta chama você para trilhar novos caminhos, explorar territórios internos e externos com coragem e fé."
    },
    {
      nome: "O Guardião de Portais",
      frase: "Escolha seu portal.",
      imagem: "OGuardiaoDePortais.png",
      significado: "Grandes escolhas estão à sua frente. O Guardião alerta: cada decisão abrirá um portal para uma realidade diferente. Faça sua escolha com o coração alinhado."
    },
    {
      nome: "O Chamado",
      frase: "O momento chegou. Responda.",
      imagem: "OChamadoDoDestino.png",
      significado: "Você está sendo convocado pelo destino. Esta carta representa um ponto de virada. Atenda ao chamado com prontidão, coragem e responsabilidade."
    },
    {
      nome: "O Diplomata Cósmico",
      frase: "Alinhe sua missão universal.",
      imagem: "ODiplomataCosmico.png",
      significado: "Você faz parte de um plano maior. Esta carta confirma seu papel como agente de transformação coletiva. Assuma sua posição no grande tabuleiro cósmico."
    },
    {
      nome: "O Guerreiro da Verdade",
      frase: "Empunhe sua espada interior.",
      imagem: "OGuerreiroDaVerdade.png",
      significado: "Você está sendo chamado a agir com integridade. Defenda sua verdade mesmo que isso signifique romper com velhos padrões. Seja o guerreiro da luz."
    },
    {
      nome: "O Curador de Linhagens",
      frase: "Liberte seus ancestrais.",
      imagem: "OCuradorDeLinhagens.png",
      significado: "Você carrega padrões herdados que agora podem ser curados. Essa carta te convida a libertar sua linhagem de dores e limitações. Honre e transforme."
    },
    {
      nome: "O Mago das Realidades",
      frase: "Transmute o invisível.",
      imagem: "OMagoDasRealidades.png",
      significado: "Você tem acesso às chaves da criação. Este é o momento de manipular as energias sutis para manifestar algo extraordinário no plano físico."
    },
    {
      nome: "O Iniciador",
      frase: "Dê o primeiro passo no caminho sagrado.",
      imagem: "OIniciador.png",
      significado: "Toda jornada começa com um primeiro passo. A carta do Iniciador marca o início de um novo ciclo. Mantenha a pureza de intenção e a coragem da alma."
    },
    {
      nome: "O Mestre Invisível",
      frase: "Aprenda com o silêncio que guia.",
      imagem: "OMestreInvisivel.png",
      significado: "Nem todo mestre aparece em forma visível. Esta carta revela que você está sendo orientado por forças sutis e silenciosas. Confie no invisível."
    }
  ];

  const sorteio = cartas[Math.floor(Math.random() * cartas.length)];

  document.getElementById("cartaResultado").innerText = `${sorteio.nome} – ${sorteio.frase}`;
  document.getElementById("cartaImagemContainer").innerHTML = `<img src="${sorteio.imagem}" alt="${sorteio.nome}" style="max-width: 100%; margin-top: 20px;">`;
  document.getElementById("significado").innerText = sorteio.significado;
}

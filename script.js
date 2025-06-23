function revelarCarta() {
  const cartas = [
    {
      nome: "O Iniciador",
      frase: "Ativando sua nova realidade.",
      imagem: "OIniciador.png",
      significado: "Você está no limiar de um novo ciclo. O Iniciador representa um chamado para despertar o seu potencial oculto. É hora de tomar atitudes ousadas e dar o primeiro passo em direção àquilo que você deseja construir."
    },
    {
      nome: "O Espelho Sagrado",
      frase: "Reflita o que deseja manifestar.",
      imagem: "OEspelhoSagrado.png",
      significado: "Esta carta revela a necessidade de autoanálise. Tudo que está ao seu redor é um reflexo do seu mundo interior. O Espelho Sagrado convida você a limpar suas crenças limitantes para criar a realidade que deseja."
    },
    {
      nome: "O Visionário",
      frase: "Veja além da ilusão.",
      imagem: "OVisionario.png",
      significado: "Você foi escolhido para enxergar além das aparências. O Visionário inspira clareza de propósito e visão estratégica. Siga sua intuição e planeje com sabedoria."
    },
    {
      nome: "O Desbravador Divino",
      frase: "Caminhe onde ninguém ousa.",
      imagem: "ODesbravadorDimensional.png",
      significado: "Esta carta traz coragem. O Desbravador Divino é aquele que explora o desconhecido. Mesmo que o caminho pareça incerto, você está sendo guiado por forças superiores. Vá em frente."
    },
    {
      nome: "O Guardião de Portais",
      frase: "Escolha seu portal.",
      imagem: "OGuardiaoDePortais.png",
      significado: "Você está diante de múltiplas possibilidades. Esta carta indica que portais estão se abrindo. Faça sua escolha com consciência, pois ela determinará o rumo da sua jornada."
    },
    {
      nome: "O Chamado",
      frase: "O momento chegou. Responda.",
      imagem: "OChamadoDoDestino.png",
      significado: "Você está sendo convocado para uma missão maior. Ignore as distrações e ouça sua alma. Esta carta é um sinal claro de que você deve agir agora."
    },
    {
      nome: "O Mestre Invisível",
      frase: "Aprenda com o que não pode ser visto.",
      imagem: "OMestreInvisivel.png",
      significado: "O Mestre Invisível revela que há ensinamentos ocultos guiando sua vida. Confie na sabedoria que vem do silêncio, das sincronicidades e dos sonhos."
    },
    {
      nome: "O Mago das Realidades",
      frase: "Transmute com intenção.",
      imagem: "OMagoDasRealidades.png",
      significado: "Você tem o poder de mudar sua realidade. O Mago lembra que pensamento, palavra e ação são ferramentas criadoras. Use-as com consciência."
    },
    {
      nome: "O Iniciador Cósmico",
      frase: "Ative sua missão universal.",
      imagem: "ODiplomataCosmico.png",
      significado: "Você faz parte de um plano maior. Essa carta confirma seu papel como agente de transformação coletiva. Assuma sua posição no grande tabuleiro cósmico."
    },
    {
      nome: "O Guerreiro da Verdade",
      frase: "Empunhe a lâmina da clareza.",
      imagem: "OGuerreiroDaVerdade.png",
      significado: "Você é chamado a cortar ilusões. O Guerreiro da Verdade traz coragem para defender seus valores, mesmo diante de oposição. Fale e aja com integridade."
    },
    {
      nome: "O Guardador de Linhagens",
      frase: "Honre seus ancestrais.",
      imagem: "OCuradorDeLinhagens.png",
      significado: "Suas raízes sustentam sua força. Esta carta é um lembrete para buscar sabedoria na ancestralidade e curar padrões herdados. Você é o elo de evolução de sua linhagem."
    },
    {
      nome: "O Diplomata Cósmico",
      frase: "Concilie os mundos em você.",
      imagem: "ODiplomataCosmico.png",
      significado: "Você é um mediador entre dimensões, ideias e pessoas. Essa carta pede equilíbrio e empatia. Use sua habilidade de diálogo para unir forças opostas."
    }
  ];

  const sorteio = cartas[Math.floor(Math.random() * cartas.length)];

  // Exibir nome e frase
  document.getElementById("cartaResultado").innerText = `${sorteio.nome} - ${sorteio.frase}`;

  // Exibir imagem
  document.getElementById("cartaImagemContainer").innerHTML = `<img src="${sorteio.imagem}" alt="${sorteio.nome}" style="max-width: 100%; margin-top: 20px;">`;

  // Exibir significado
  document.getElementById("significado").innerText = sorteio.significado;
}

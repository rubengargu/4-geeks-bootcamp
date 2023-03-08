const excuses = [
    "Mi gato se comió a mi perro",
    "Estaba procastinando",
    "Estaba cocinando. Quieres risotto?",
    "Quien es usted?",
    "Estaba midiendo mi bonsai",
    "No tenía su teléfono y no lo quise buscar",
    "Estaba jugando a juegos de mesa",
    "No es por no hacerlo, pero hacerlo pa ná, me pareció tontería",
    "No quise encender el PC",
    "Para que le voy a engañar. No quise hacerlo"
  ];

  const btnGenerate = document.getElementById('btn-generate');
  const excuse = document.getElementById('excuse');

  function generateExcuse() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    excuse.textContent = excuses[randomIndex];
  }

  btnGenerate.addEventListener('click', generateExcuse);
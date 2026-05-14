import React, { useState } from "react";

const JOKES = [
  "¿Qué le dice un 0 a un 8? Bonito cinturón.",
  "¿Cómo se despiden los químicos? Ácido un placer.",
  "¿Qué hace una abeja en el gimnasio? Zumba.",
  "—¡Ojalá fuera un chip! —Decía la patata.",
  "¿Qué le dice un semáforo a otro? No me mires, me estoy cambiando.",
  "—Mamá, en el cole me llaman Facebook. —¿Y eso? —Porque me gusta tu muro.",
  "¿Qué hace un pez en el cine? Nemo.",
  "—¡Mecánico, mi coche hace pipí! —No se preocupe, es que tiene un pedal para mear.",
  "—Doctor, tengo 3 brazos. —Pues vístase y calle.",
  "¿Qué hace una foca en una obra? Foca-pá.",
  "—Doctor, me duele todo. —Póngase recto. —Ay, ahora me duele más. —Ya, pero antes le dolía torcido.",
  "—Oye, ¿tienes WiFi? —Sí. —¿Y contraseña? —Comer y callar.",
  "Llama un señor a una pizzería: —¿Me trae una pizza? —¿Entera o en porciones? —¿No va a venir usted solo?",
  "¿Cómo se llama una italiana con bigote? Mafalda.",
  "—¿Qué haces? —Leyendo. —¿El Quijote? —No, la carta de un restaurante.",
  "¿Qué le dice un jaguar a otro? Jaguar tú.",
  "—¿Por qué los pájaros no usan WhatsApp? —Porque ya tienen Twitter.",
  "—¿En qué se parece una ballena a un policía? —En que los dos echan el chorro cuando están de servicio.",
  "—Hola, ¿está Pepe? —No, soy su contestador. Diga algo. —Vale, adiós.",
  "¿Cómo se llaman los primos de Tarzán? Los primos del monte.",
  "—¿Cuál es el colmo de un electricista? —Que su mujer le dé calabazas.",
  "—¿Qué es verde y habla por los codos? —Un perejil parlante.",
  "—¡He visto un coche con ruedas cuadradas! —¿Y cómo iba? —Dando tumbos.",
  "¿Cómo se dice camarero en chino? Sumenú.",
  "—Si 2 son multitud y 3 son multitud... ¿cuánto son 4? —Multitud al cuadrado.",
  "—¿Cuál es el animal que más tarda en quitarse los zapatos? —El ciempiés.",
  "—¡He perdido 20€! —¿Dónde? —Donde perdí los primeros 50.",
  "¿Qué hace un perro con un taladro? Taladrando.",
  "—¿Qué son 50 caracoles? —Cincuenta centímetros.",
  "Esto es un hombre que entra en un bar y dice: —¡Un café! Y el camarero le dice: —Se le ve bien.",
];

const DICE_FACES = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Hub({ onSelect }) {
  const items = [
    { key: "dice", label: "Dado", icon: "🎲" },
    { key: "coin", label: "Moneda", icon: "🪙" },
    { key: "rps", label: "Piedra,\nPapel,\nTijera", icon: "✂️" },
    { key: "random", label: "Número\nal azar", icon: "🔢" },
    { key: "joke", label: "Chiste", icon: "💡" },
    { key: "pepe", label: "Pepe\nGame", icon: "🎮" },
  ];

  return (
    <div className="ent-hub">
      <h3 className="ent-hub-title">Entretenimiento</h3>
      <div className="ent-grid">
        {items.map((item) => (
          <button key={item.key} className="ent-card" onClick={() => onSelect(item.key)}>
            <span className="ent-card-icon">{item.icon}</span>
            <span className="ent-card-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Dice() {
  const [face, setFace] = useState(null);
  const [num, setNum] = useState(null);
  return (
    <div className="ent-sub">
      <h3>🎲 Dado</h3>
      <div className="ent-result">{face && <><span className="ent-dice">{face}</span><span className="ent-big-num">{num}</span></>}</div>
      <button className="generate-btn" onClick={() => { const n = rng(1, 6); setFace(DICE_FACES[n - 1]); setNum(n); }}>Lanzar dado</button>
    </div>
  );
}

function Coin() {
  const [result, setResult] = useState(null);
  return (
    <div className="ent-sub">
      <h3>🪙 Moneda</h3>
      <div className="ent-result">{result && <span className="ent-coin">{result === "cara" ? "🪙 Cara" : "🪙 Cruz"}</span>}</div>
      <button className="generate-btn" onClick={() => setResult(rng(0, 1) ? "cara" : "cruz")}>Lanzar moneda</button>
    </div>
  );
}

function RPS() {
  const choices = [
    { key: "rock", label: "Piedra", icon: "🪨", beats: "scissors" },
    { key: "paper", label: "Papel", icon: "📄", beats: "rock" },
    { key: "scissors", label: "Tijera", icon: "✂️", beats: "paper" },
  ];
  const [player, setPlayer] = useState(null);
  const [machine, setMachine] = useState(null);
  const [result, setResult] = useState(null);

  const play = (p) => {
    const m = choices[rng(0, 2)];
    setPlayer(p);
    setMachine(m.key);
    if (p === m.key) setResult("🤝 Empate");
    else if (choices.find((c) => c.key === p).beats === m.key) setResult("🎉 ¡Ganaste!");
    else setResult("😢 Perdiste");
  };

  const reset = () => { setPlayer(null); setMachine(null); setResult(null); };

  return (
    <div className="ent-sub">
      <h3>✂️ Piedra, Papel o Tijera</h3>
      {!player ? (
        <div className="ent-rps-btns">
          {choices.map((c) => (
            <button key={c.key} className="rps-btn" onClick={() => play(c.key)}>
              <span className="rps-icon">{c.icon}</span>
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="ent-rps-result">
          <div className="ent-rps-row">
            <div className="ent-rps-col"><span className="rps-icon">{choices.find((c) => c.key === player).icon}</span><span>Tú</span></div>
            <span className="ent-vs">VS</span>
            <div className="ent-rps-col"><span className="rps-icon">{choices.find((c) => c.key === machine).icon}</span><span>App</span></div>
          </div>
          <div className="ent-result"><span className="ent-rps-outcome">{result}</span></div>
          <button className="generate-btn" onClick={reset}>Otra vez</button>
        </div>
      )}
    </div>
  );
}

function RandomNum() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [result, setResult] = useState(null);
  return (
    <div className="ent-sub">
      <h3>🔢 Número al azar</h3>
      <div className="conv-row" style={{ marginTop: 0 }}>
        <input className="cf-input" type="number" placeholder="Mín" value={min} onChange={(e) => setMin(e.target.value)} />
        <span className="conv-arrow">→</span>
        <input className="cf-input" type="number" placeholder="Máx" value={max} onChange={(e) => setMax(e.target.value)} />
      </div>
      <div className="ent-result">{result !== null && <span className="ent-big-num">{result}</span>}</div>
      <button className="generate-btn" onClick={() => setResult(rng(parseInt(min) || 0, parseInt(max) || 100))}>Generar</button>
    </div>
  );
}

function Joke() {
  const [joke, setJoke] = useState("");
  return (
    <div className="ent-sub">
      <h3>💡 Chiste</h3>
      <div className="ent-joke-box">{joke && <p className="ent-joke-text">{joke}</p>}</div>
      <button className="generate-btn" onClick={() => setJoke(JOKES[rng(0, JOKES.length - 1)])}>Nuevo chiste</button>
    </div>
  );
}

function PepeGame() {
  return (
    <div className="ent-sub">
      <h3>🎮 Pepe Game</h3>
      <p style={{ color: "#64748b", fontSize: 14, marginBottom: 16, textAlign: "center" }}>Abrir Pepe Game en nueva pestaña</p>
      <a className="generate-btn" href="https://jlrmaster-creator.github.io/pepe_game/1.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "flex" }}>Abrir juego</a>
    </div>
  );
}

const SUB_VIEWS = {
  dice: Dice,
  coin: Coin,
  rps: RPS,
  random: RandomNum,
  joke: Joke,
  pepe: PepeGame,
};

export default function Entertainment() {
  const [view, setView] = useState(null);
  const SubComponent = view ? SUB_VIEWS[view] : null;

  return (
    <div className="entertainment">
      {view ? (
        <>
          <button className="ent-back" onClick={() => setView(null)}>← Volver</button>
          <SubComponent />
        </>
      ) : (
        <Hub onSelect={setView} />
      )}
    </div>
  );
}

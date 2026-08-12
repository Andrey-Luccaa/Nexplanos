// ======================================================
// DADOS DOS PLANOS
// ======================================================

const dados = [
  { m: "200", n: "200 MEGA", r: "74", c: "62", turbo: true },
  { m: "300", n: "300 MEGA", r: "89", c: "90" },
  { m: "500", n: "500 MEGA", r: "99", c: "90" },
  { m: "700", n: "700 MEGA", r: "129", c: "90" },
  { m: "1000", n: "1 GIGA", r: "149", c: "90" },
];

// ======================================================
// APPS MOSTRADOS NOS CARDS
// ======================================================

const apps = [
  "Fluid",
  "SKY+",
  "+Qnutri",
  "TV+",
  "HBO Max",
  "Disney+",
  "Globoplay",
  "tv",
];

const beneficiosCard = [
  "UBOOK",
  "KINDLE PASS",
  "NÃO TEM TV",
  "1 APP À ESCOLHA",
  "ESTUDA+",
  "PLAY LIST",
  "NUTRI +",
  "HUB VANTAGENS",
  "FLUID",
];

// ======================================================
// LINKS
// ======================================================

const links = {
  estuda:
    "https://drive.google.com/file/d/1CIQ73KFDk9qJ2WuE9OrJD6I3aW6WYA9h/view",

  playlist:
    "https://drive.google.com/file/d/14I1XvpGgMzuDW6dfVUtYRTIwjSgWZ7iZ/view?usp=sharing",

  nutri:
    "https://drive.google.com/file/d/1gjhR3wwzXVanlBNX09Vfk2Uw-rsvEbqP/view?usp=sharing",

  hub: "https://drive.google.com/file/d/1K3nND-5FhHjgy6Fr1rjTgeA_MxwXy1m0/view?usp=sharing",

  fluid:
    "https://drive.google.com/file/d/15Y1Lu0X_T7y0AnSViaSrYx0RfzZKocgZ/view?usp=sharing",

  skyLight:
    "https://drive.google.com/file/d/1WYwmdAgYqBWkkdXHDPhX2s6XUc7cv6zb/view?usp=sharing",

  socialComies:
    "https://drive.google.com/file/d/1tLQHv7-LZRSltJZlxdyTKW8CzuVSytcz/view?usp=sharing",

  kaspersky:
    "https://drive.google.com/file/d/1mSMAhnWeNGOzcYcnp0McRcMu9T1fY5-f/view?usp=sharing",

  looke:
    "https://drive.google.com/file/d/17Ff3Napy__-zsf91fbFrw3qWh-BgumrF/view?usp=sharing",

  playkids:
    "https://drive.google.com/file/d/19x_vCao5otJ3c4iOgTAd-Pg5mWGKrhxj/view?usp=sharing",

  exitlag:
    "https://drive.google.com/file/d/1sNzJrxk3NqL35hzmuyl98L4tO_XtxfLU/view?usp=sharing",

  pequenosLeitores:
    "https://drive.google.com/file/d/10CuaGHhyS45mu4l40b4YtoCPmYwoTRJP/view?usp=sharing",

  revistaria:
    "https://drive.google.com/file/d/1n7L35FIavyN1GY72xufYfN0dpF2sci8M/view?usp=sharing",

  ubookPlus:
    "https://drive.google.com/file/d/11eayIdVhnyIBzWoUDMXQZkP5zOV2BoJR/view?usp=sharing",

  deezer:
    "https://drive.google.com/file/d/1XN5nND6ss9BiYMjSVdGl2FJL36NfgV7V/view?usp=sharing",

  leitura360:
    "https://drive.google.com/file/d/1Py0vnhEFwkDTgM-vcih7EhPDSsn-Gnc0/view?usp=sharing",

  kiddlePass:
    "https://drive.google.com/file/d/13OeIaP1Y6cG0L62O2QjfZl7dQNBGw3DI/view?usp=sharing",

  hotgo:
    "https://drive.google.com/file/d/1ydxI75FLJcAfhJJjqvrBPnSjrzaHigYb/view?usp=sharing",

  docway:
    "https://drive.google.com/file/d/1GaK4vPvtGrtWxjoVZef0MTiLjVHU4MXw/view?usp=sharing",

  curtaOn:
    "https://drive.google.com/file/d/1-XeUba3c141TSTrLABf4CQAOBAmYTqK3/view?usp=sharing",

  jornalista:
    "https://drive.google.com/file/d/1sMGxriEwMXPyY-38qXFycUimFnIQ6yo2/view?usp=sharing",

  zen: "https://drive.google.com/file/d/1epd-OU_mq18EiacXzOaV7OjpiP-ZAcP6/view?usp=sharing",

  appleTV:
    "https://drive.google.com/file/d/1HF2wJDPy16U3VKgYzU1Z7faP5AemKBR7/view?usp=sharing",

  globoplay:
    "https://drive.google.com/file/d/1hA4-eEH9-f29dl-pC-mqfkLPSwjfoOrc/view?usp=sharing",

  disney:
    "https://drive.google.com/file/d/1y-No6_BNg0-vS5gN6ytR1x-4uuCo-i1m/view?usp=sharing",

  hbo: "https://drive.google.com/file/d/1hlc6OgAdAHrCm0VV96mRfxqc4KRFaQmy/view?usp=sharing",

  cindie:
    "https://drive.google.com/file/d/1gq5KPpkR5_5ckUvB_XISp2bFfHszbTTA/view?usp=sharing",

  queimaDiaria:
    "https://drive.google.com/file/d/1o9CNxL6fttPNYwMCq8tsApKw0g6BQx_1/view?usp=sharing",

  smartContent:
    "https://drive.google.com/file/d/1pVKepwpQo9z3TwZkbOtY0TEYfINUAbEQ/view?usp=sharing",
};

// ======================================================
// GRUPOS DE BENEFÍCIOS
// ======================================================

const beneficiosBasicos = [
  ["ESTUDA+", links.estuda],
  ["PLAY LIST", links.playlist],
  ["NUTRI +", links.nutri],
  ["HUB VANTAGENS", links.hub],
  ["FLUID", links.fluid],
];

const beneficios300 = [
  ...beneficiosBasicos,

  ["SKY+ LIGHT", links.skyLight],
  ["SOCIAL COMIES", links.socialComies],
  ["KASPERSKY STANDARD 1", links.kaspersky],
];

const beneficios500 = [
  ...beneficios300,

  ["LOOKE", links.looke],
  ["PLAYKIDS +", links.playkids],
  ["EXITLAG", links.exitlag],
  ["PEQUENOS LEITORES", links.pequenosLeitores],
  ["REVISTARIA", links.revistaria],
  ["UBOOK PLUS", links.ubookPlus],
  ["DEEZER", links.deezer],
  ["LEITURA 360", links.leitura360],
  ["KIDDLE PASS", links.kiddlePass],
];

const beneficios700 = [
  ...beneficiosBasicos,

  ["SKY+ LIGHT", links.skyLight],
  ["SOCIAL COMIES", links.socialComies],

  ["KASPERSKY STANDARD 3", links.kaspersky],

  ["LOOKE", links.looke],
  ["PLAYKIDS +", links.playkids],
  ["EXITLAG", links.exitlag],
  ["PEQUENOS LEITORES", links.pequenosLeitores],
  ["REVISTARIA", links.revistaria],
  ["UBOOK PLUS", links.ubookPlus],
  ["DEEZER", links.deezer],
  ["KIDDLE PASS", links.kiddlePass],
  ["LEITURA 360", links.leitura360],

  ["HOTGO", links.hotgo],
  ["DOCWAY", links.docway],
  ["CURTA ON", links.curtaOn],
  ["O JORNALISTA", links.jornalista],
  ["ZEN", links.zen],

  ["SKY+ LIGHT / GLOBO E PRIME", ""],

  ["APPLE TV", links.appleTV],
  ["GLOBO PLAY", links.globoplay],
];

// ======================================================
// MODAIS
// ======================================================

const modais = {
  // --------------------------------------------------
  // 200 MB
  // --------------------------------------------------

  200: {
    titulo: "CLASSIC <strong>200MB</strong>",

    caracteristicas: [
      "UBOOK",
      "KINDLE PASS",
      "NÃO TEM TV",
      "1 APP À ESCOLHA NO PLANO POR MÊS",
    ],

    links: beneficiosBasicos,
  },

  // --------------------------------------------------
  // 300 MB
  // --------------------------------------------------

  300: {
    titulo: "START <strong>300MB</strong>",

    caracteristicas: [
      "UBOOK",
      "KINDLE PASS",
      "TV PLUS 2 TELAS",
      "1 APP À ESCOLHA NO PLANO POR MÊS",
    ],

    links: beneficios300,
  },

  // --------------------------------------------------
  // 500 MB
  // --------------------------------------------------

  500: {
    titulo: "START <strong>500MB</strong>",

    caracteristicas: [
      "UBOOK",
      "KINDLE PASS",
      "TV PLUS 4 TELAS",
      "1 APP À ESCOLHA NO PLANO POR MÊS",
    ],

    links: beneficios500,
  },

  // --------------------------------------------------
  // 700 MB
  // --------------------------------------------------

  700: {
    titulo: "START <strong>700MB</strong>",

    caracteristicas: [
      "UBOOK",
      "KINDLE PASS",
      "TV PLUS 6 TELAS",
      "2 APP À ESCOLHA NO PLANO POR MÊS",
      "1 APP ADVANCED POR MÊS",
    ],

    links: beneficios700,
  },

  // --------------------------------------------------
  // 1 GIGA
  // --------------------------------------------------

  1000: {
    titulo: "START <strong>1000MB</strong>",

    caracteristicas: [
      "UBOOK",
      "KINDLE PASS",
      "TV PLUS 6 TELAS",
      "2 APP À ESCOLHA NO PLANO POR MÊS",
      "1 APP ADVANCED POR MÊS",
    ],

    links: beneficios700,
  },

  // --------------------------------------------------
  // ADVANCED
  // --------------------------------------------------

  advanced: {
    kicker: "SVA",

    titulo: "ADVANCED <strong>R$14,90</strong>",

    links: [
      ["KIDDLE PASS", links.kiddlePass],

      ["KASPERSKY 3LIC", links.kaspersky],

      ["APPLE TV", links.appleTV],

      ["CURTA ON", links.curtaOn],

      ["DOCWAY", links.docway],

      ["HOTGO", links.hotgo],

      ["O JORNALISTA", links.jornalista],

      ["SKY+ COM GLOBO", ""],

      ["SKY + AMAZON PRIME", ""],

      ["GLOBO PLAY", links.globoplay],
    ],
  },

  // --------------------------------------------------
  // TOP
  // --------------------------------------------------

  top: {
    kicker: "SVA",

    titulo: "TOP <strong>R$24,90</strong>",

    links: [
      ["DISNEY+ (ADD)", links.disney],

      ["HBO MAX (ADD)", links.hbo],

      ["LEITURA 360", links.leitura360],

      ["CINDIE", links.cindie],
    ],
  },

  // --------------------------------------------------
  // PREMIUM
  // --------------------------------------------------

  premium: {
    kicker: "SVA",

    titulo: "PREMIUM <strong>R$29,90</strong>",

    links: [
      ["DISNEY+", links.disney],

      ["HBO MAX", links.hbo],

      ["ZEN", links.zen],

      ["KASPERSKY 5LIC", links.kaspersky],

      ["QUEIMA DIARIA", links.queimaDiaria],

      ["SMART CONTENT", links.smartContent],
    ],
  },
};

// ======================================================
// CRIAÇÃO DOS CARDS
// ======================================================

const grid = document.querySelector("#planos");

function card(p) {
  const listaApps = p.m === "200" ? apps.filter((app) => app !== "TV+") : apps;

  const appList = listaApps
    .map((app, index) => `<div class="app a${index}">${app}</div>`)
    .join("");

  const listaBeneficios = beneficiosCard
    .map((beneficio) => `<div>◇ ${beneficio}</div>`)
    .join("");

  return `
    <article
      class="plano ${p.m === "200" ? "destaque" : ""}"
      data-megas="${p.m}"
      tabindex="0"
      role="button"
      aria-label="Ver benefícios do plano ${p.n}"
    >

      <div class="plano-topo">

        <span>
          INTERNET FIBRA ÓPTICA
        </span>

        <h2>
          ${p.n}
        </h2>

      </div>


      <div class="turbine">

        <span>
          ${p.turbo ? "TURBINE SEU PLANO" : "INCLUSO NO PLANO"}
        </span>

        ${p.turbo ? "<small>A PARTIR DE R$ 14,90</small>" : ""}

      </div>


      <div class="apps-grid">
        ${appList}
      </div>


      <div class="divisor">
        <span>POR APENAS</span>
      </div>


      <div class="plano-valor">

        <span>R$</span>

        <strong>
          ${p.r}
        </strong>

        <div class="centavos">

          <span>
            ,${p.c}
          </span>

          <small>
            /MÊS
          </small>

        </div>

      </div>


      <button
        class="btn-assinar"
        type="button"
      >
        VER BENEFÍCIOS
      </button>


      <div class="beneficios">
        ${listaBeneficios}
      </div>

    </article>
  `;
}

if (grid) {
  grid.innerHTML = dados.map(card).join("");
}

// ======================================================
// MODAL
// ======================================================

const modal = document.querySelector("#modal-beneficios");

const modalTitle = document.querySelector("#modal-title");

const modalKicker = document.querySelector("#modal-kicker");

const modalLinks = document.querySelector("#modal-links");

function abrirModal(chave) {
  const item = modais[chave];

  if (!item || !modal) return;

  modalKicker.textContent = item.kicker || "PLANO";

  modalTitle.innerHTML = item.titulo;

  let caracteristicas = "";

  if (item.caracteristicas && item.caracteristicas.length) {
    caracteristicas = `

      <div class="caracteristicas">

        <p>
          Características
        </p>

        ${item.caracteristicas
          .map((caracteristica) => `<h2>${caracteristica}</h2>`)
          .join("")}

      </div>

    `;
  }

  const listaLinks = item.links
    .map(([nome, href]) => {
      // Se ainda não existe URL
      if (!href) {
        return `
            <span
              class="modal-link indisponivel"
              title="Material ainda não cadastrado"
            >
              ${nome}
            </span>
          `;
      }

      return `
          <a
            href="${href}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${nome}
          </a>
        `;
    })
    .join("");

  modalLinks.innerHTML = caracteristicas + listaLinks;

  modal.classList.add("ativo");

  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function fecharModal() {
  if (!modal) return;

  modal.classList.remove("ativo");

  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

// ======================================================
// CLIQUE NOS CARDS
// ======================================================

document.querySelectorAll(".plano").forEach((plano) => {
  function abrir() {
    abrirModal(plano.dataset.megas);
  }

  plano.addEventListener("click", abrir);

  plano.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      abrir();
    }
  });
});

// ======================================================
// ADVANCED / TOP / PREMIUM
// ======================================================

document.querySelectorAll("[data-extra]").forEach((botao) => {
  botao.addEventListener("click", () => {
    abrirModal(botao.dataset.extra);
  });
});

// ======================================================
// SVA
// ======================================================

document.querySelector("#nav-sva")?.addEventListener("click", () => {
  window.open(
    "https://docs.google.com/presentation/d/1CKHI1Ov3AvzTFdCEURLOmM8m57S9hvMGVZH402A_Q_A/present?slide=id.p",
    "_blank",
    "noopener,noreferrer",
  );
});

// ======================================================
// FECHAR MODAL
// ======================================================

document.querySelector("#fechar-modal")?.addEventListener("click", fecharModal);

document
  .querySelector(".modal-overlay")
  ?.addEventListener("click", fecharModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharModal();
  }
});

// ======================================================
// NORMALIZAÇÃO DA PESQUISA
// ======================================================

function normalizarTexto(texto = "") {
  return texto

    .toString()

    .toLowerCase()

    .normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "")

    .replace(/\s+/g, " ")

    .trim();
}

// ======================================================
// GERA TODO O TEXTO PESQUISÁVEL DO PLANO
// ======================================================

function obterTextoPesquisaPlano(velocidade, elemento) {
  const item = modais[velocidade];

  const partes = [];

  // Texto visível no card
  partes.push(elemento.textContent);

  if (item) {
    // Nome do plano
    partes.push(item.titulo.replace(/<[^>]*>/g, " "));

    // Características
    if (item.caracteristicas) {
      partes.push(...item.caracteristicas);
    }

    // Todos os benefícios do modal
    if (item.links) {
      partes.push(...item.links.map(([nome]) => nome));
    }
  }

  return normalizarTexto(partes.join(" "));
}

// ======================================================
// PESQUISA DE PLANOS + BENEFÍCIOS
// ======================================================

const campoPesquisa = document.querySelector("#pesquisar");

campoPesquisa?.addEventListener("input", function () {
  const pesquisa = normalizarTexto(this.value);

  document.querySelectorAll(".plano").forEach((plano) => {
    const velocidade = plano.dataset.megas;

    const textoPesquisavel = obterTextoPesquisaPlano(velocidade, plano);

    const encontrado = pesquisa === "" || textoPesquisavel.includes(pesquisa);

    plano.style.display = encontrado ? "flex" : "none";
  });
});

// ======================================================
// BOTÕES DA NAVBAR 200 / 300 / 500 / 700 / 1000
// ======================================================

document.querySelectorAll("[data-plano]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const plano = document.querySelector(
      `[data-megas="${botao.dataset.plano}"]`,
    );

    if (!plano) return;

    // Caso algum plano esteja escondido pela pesquisa
    plano.style.display = "flex";

    plano.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});

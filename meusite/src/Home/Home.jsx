import React from "react";

function Home() {
  return (
    <section class="home view">
      <div class="highlights">
        <div class="title-container">
          <div class="jojo">
            <img src="Imagens/Jojozeneo.png" alt="fotinha" />{" "}
          </div>
          <h3>
            <a href="https://academy.comeialabs.com.br/" target="_blank">
              Sou Aluno Comeia Academy
            </a>
          </h3>
        </div>
        <h1>OI, SOU O JOJO</h1>
        <P class="tagline">Dev em desenvolvimento, e Artista</P>
        <button class="button">
          <a href="HTML/contato.html" target="_blank" rel="noopener noreferrer">
            CONTATO
          </a>
        </button>
      </div>
    </section>
  );
}

export default Home;

import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>

      <Section class="bloc">
        <div class="chamada">
          <h1>Programing</h1>
        </div>

        <div class="containercards">
          <div class="card">
            <div class="topcard">
              <h2 class="tittle">Projeto HTML + CSS</h2>
              <span class="secondtext">
                Aqui foi onde eu conheci as funcionalidades do CSS alinhadas com
                um bom body HTML.
              </span>
            </div>
            <div class="mediacard"></div>
          </div>

          <div class="card">
            <div class="topcard">
              <h2 class="tittle">Projeto HTML + CSS</h2>
              <span class="secondtext">
                Aqui foi onde eu conheci as funcionalidades do CSS alinhadas com
                um bom body HTML.
              </span>
            </div>
            <div class="mediacard2"></div>
          </div>

          <div class="card">
            <div class="topcard">
              <h2 class="tittle">Projeto HTML + CSS</h2>
              <span class="secondtext">
                Aqui foi onde eu conheci as funcionalidades do CSS alinhadas com
                um bom body HTML.
              </span>
            </div>
            <div class="mediacard3"></div>
          </div>
        </div>
      </Section>

      <Footer></Footer>
    </>
  );
}

export default App;

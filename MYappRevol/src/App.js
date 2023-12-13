import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <header className="showcase">
          <div className="a">
            <a href="./login.html" style={{ display: 'inline-block', padding: '10px 20px', color: '#fff', borderRadius: '30%', transition: 'all 0.3s ease' }}>
              Text me
            </a>
            <div className="content">
              <img src="/images/juani.jpg" style={{ marginTop: '95px' }} className="logo" alt="juanimedia" />
             
              <div className="title">
                Welcome To My Online CV
              </div>
              <br />
            </div>
          </div>
        </header>

        <section>
          <div className="text">
            <h2>Juan Ignacio Marchetto´s Showcase</h2>
          </div>
        </section>

        <section className="services">
          <div className="container grid-3 center">
            <ul id="region1">
              <li>
                <div className="tile">
                  <figure className="front c1"><img src="/images/Imagen de WhatsApp 2023-01-19 a las 17.24.03.jpg" alt="" /></figure>
                  <figure className="back c1"><a href="https://foodfinderapp.netlify.app/" target="_blank">FOOD SEARCHING APP</a></figure>
                </div>
              </li>
              
            </ul>
          </div>
        </section>

        <section className="services">
          <div className="container grid-3 center">
            <ul id="region1">
              
            </ul>
          </div>
        </section>

        <section className="about bg-light">
          <div className="container">
            <div className="grid-2">
              <div className="center">
              </div>
              <div className="worck">
                <h3>My Studies</h3>
                <p className="bio">
                  I have just finished and approved the initial Web Developer course of the Programming/Testing training course of the National Technological University within the framework of Argentina program 4.0. Although I have been learning for a year through YouTube tutorial videos and self-taught, under the guidance of Juan Patricio Marchetto.
                </p>
                <ul className="social-media">
                  <li className="social-media-item">
                    <a href="https://github.com/JuanIgnacioMarchetto" target="_blank">
                      <img src="/images/descarga.png" alt="GitHub" />
                    </a>
                  </li>
                  <li className="social-media-item">
                    <a href="https://www.linkedin.com/in/juan-ignacio-marchetto-336a2a57/" target="_blank">
                      <img src="/images/perfillinkeding.png" alt="LinkedIn" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="center bg-dark">
          <p>
            Juan Ignacio Marchetto - Full Stack Developer
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

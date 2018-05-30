import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header id="showcase" className="grid">
          <div className="bg-image" />
          <div className="content-wrap">
            <h1>Welcome to acme web solutions</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lor
            </p>
            <a href="#section-b" className="btn">
              Read More
            </a>
          </div>
        </header>

        {/* Main Area */}
        <main id="main">
          {/* Section A */}
          <section id="section-a" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">Web & Application Development</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industryLorem Ipsum is simply dummy text of the printing and
                typesetting industry
              </p>
            </div>
          </section>

          {/* section B */}
          <section id="section-b" className="grid">
            <ul>
              <li>
                <div className="card">
                  <img
                    src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <div className="card-content">
                    <h3 className="card-title">Web development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <img
                    src="https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <div className="card-content">
                    <h3 className="card-title">Web development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="card">
                  <img
                    src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                  <div className="card-content">
                    <h3 className="card-title">Web development</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* section-c */}
          <section id="section-c" className="grid">
            <div className="content-wrap">
              <h2 className="content-title">
                we handle all of your digital needs
              </h2>
              <p>
                {" "}
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book
              </p>
            </div>
          </section>

          {/* section-D */}
          <section id="section-d" className="grid">
            <div className="box">
              <h2 className="content-title">contact us</h2>
              <p>
                {" "}
                took a galley of type and scrambled it to make a type specimen
                book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets
                containing
              </p>
              <p>contact@acmewebsolutions.test</p>
            </div>
            <div className="box">
              <h2 className="content-title">About Our Company</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industryLorem Ipsum is simply dummy text of the printing and{" "}
              </p>
            </div>
          </section>
        </main>

        {/* footer */}
        <footer id="main-footer" className="grid">
          <div>Acme Web Solutions</div>
          <div>
            Project by <a href="http://travel.com">travel media</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

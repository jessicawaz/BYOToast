import React from "react";

const Bowls = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-desktop is-mobile">
          <div className="column is-half">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">BYOBowls</p>
                <p className="p-4">$10.99</p>
              </header>

              <p className="p-3" style={{ fontSize: "12px" }}>
                Bowls come standard with granola, one base, three toppings, and
                one drizzle.
              </p>

              <div className="card-content">
                <div className="content">
                  <header className="card-header">
                    <p className="card-header-title">Base</p>
                  </header>
                  <ul>
                    <li>Acai</li>
                    <li>Pitaya</li>
                    <li>Coconut</li>
                    <li>Mango</li>
                  </ul>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <header className="card-header">
                    <p className="card-header-title">Toppings</p>
                  </header>
                  <p className="p-3" style={{ fontSize: "12px" }}>
                    Choose up to three toppings.{" "}
                    <small>Additional toppings: $.50 each.</small>
                  </p>

                  <ul>
                    <li>Bananas</li>
                    <li>Strawberries</li>
                    <li>Mangos</li>
                    <li>Blueberries</li>
                    <li>Pomegrante Seeds</li>
                    <li>Coconut Flakes</li>
                    <li>Raspberries</li>
                    <li>Goji Berries</li>
                    <li>Almonds</li>
                    <li>Hemp Seeds</li>
                    <li>Extra Granola</li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <header className="card-header">
                    <p className="card-header-title">Drizzles</p>
                  </header>
                  <p className="p-3" style={{ fontSize: "12px" }}>
                    Choose one drizzle.{" "}
                    <small>Additional drizzle: $.50 each.</small>
                  </p>
                  <ul>
                    <li>Nutella</li>
                    <li>Chocolate</li>
                    <li>Peanut Butter</li>
                    <li>Almond Butter</li>
                    <li>Honey</li>
                    <li>Coconut Oil</li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-half">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Specialty Bowls</p>
              </header>

              <div className="card-content">
                <div className="content">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Bowl 1</p>
                    </div>
                    <div className="card-image">image placeholder</div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Bowl 2</p>
                    </div>
                    <div className="card-image">image placeholder</div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Bowl 3</p>
                    </div>
                    <div className="card-image">image placeholder</div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Bowl 4</p>
                    </div>
                    <div className="card-image">image placeholder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bowls;

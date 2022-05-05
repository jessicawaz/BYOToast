import React from "react";

const Toasts = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-desktop is-mobile">
          <div className="column is-half">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">BYOToast</p>
                <p className="p-4">$10.99</p>
              </header>

              <div className="card-content">
                <div className="content">
                  <header className="card-header">
                    <p className="card-header-title">Bread</p>
                  </header>
                  <ul>
                    <li>Sourdough</li>
                    <li>Wheat</li>
                    <li>Rye</li>
                    <li>Olive</li>
                    <li>Gluten-Free</li>
                    <li></li>
                  </ul>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <header className="card-header">
                    <p className="card-header-title">Spreads</p>
                  </header>
                  <ul>
                    <li>Avocado</li>
                    <li>Cream Cheese</li>
                    <li>Feta Cheese</li>
                    <li>Cottage Cheese</li>
                    <li>Nutella</li>
                    <li>Peanut Butter</li>
                    <li>Fig Jam</li>
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

                  <h7 className="p-3 has-text-weight-bold">Savory</h7>
                  <div className="columns is-mobile is-desktop">
                    <div className="column p-1 is-half">
                      <ul>
                        <li>Tomato</li>
                        <li>Pickled Red Onions</li>
                        <li>Radish</li>
                        <li>Sun-Dried Tomato</li>
                        <li>Garlic</li>
                        <li>Everything Bagel Seasoning</li>
                        <li>Chia Seeds</li>
                        <li>Walnuts</li>
                        <li>Almonds</li>
                        <li>Toasted Pistachios</li>
                      </ul>
                    </div>

                    <div className="column p-1 is-half">
                      <ul>
                        <li>Sliced Avocado</li>
                        <li>Radish</li>
                        <li>Jalepeno</li>
                        <li>Alfalfa Sprouts</li>
                        <li>Kale</li>
                        <li>Arugula</li>
                        <li>Spinach</li>
                        <li>Burrata</li>
                        <li>Lemon</li>
                        <li>Poached Egg</li>
                      </ul>
                    </div>
                  </div>

                  <h7 className="p-3 has-text-weight-bold">Sweet</h7>
                  <ul>
                    <li>Bananas</li>
                    <li>Strawberries</li>
                    <li>Mangos</li>
                    <li>Blueberries</li>
                    <li>Pomegrante Seeds</li>
                    <li>Coconut Flakes</li>
                    <li>Raspberries</li>
                    <li></li>
                    <li></li>
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
                    <li>Peanut Butter</li>
                    <li>Honey</li>
                    <li>Garlic Aioli</li>
                    <li>Pesto</li>
                    <li>
                      Zhoung Sauce <small>(Spicy Cilantro)</small>
                    </li>
                    <li>
                      Chimichurri <small>(Non-Spicy Cilantro)</small>
                    </li>
                    <li>Balsamic Glaze</li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-half">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">Specialty Toasts</p>
              </header>

              <div className="card-content">
                <div className="content">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Toast 1</p>
                      <p className="p-2">$11.99</p>
                    </div>
                    <div className="card-image">image placeholder</div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Toast 2</p>
                      <p className="p-2">$11.99</p>
                    </div>
                    <div className="card-image">image placeholder</div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Toast 3</p>
                      <p className="p-2">$11.99</p>
                    </div>
                    <div className="card-image">image placeholder</div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <div className="content">
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">Toast 4</p>
                      <p className="p-2">$11.99</p>
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

export default Toasts;

export const Products = () => {
  return (
    <div className="products">
      <article className="product">
        <img
          alt="Motorcycle with Exide battery"
          className="product-img"
          src="/images/exide-bike.jpeg"
        />
        <div className="product-body">
          <h3>Two-Wheelers</h3>
          <p className="product-category">Motorcycles & Scooters</p>
          <p className="product-desc">
            High-cranking power batteries for bikes and scooters.
          </p>
        </div>
      </article>
      <article className="product">
        <img
          alt="Auto-rickshaw on the road"
          className="product-img"
          src="/images/exide-bike-2.jpeg"
        />
        <div className="product-body">
          <h3>Three-Wheelers & Auto-Rickshaws</h3>
          <p className="product-category">Auto-rickshaws</p>
          <p className="product-desc">
            Durable batteries built for the rigours of daily auto stand use.
          </p>
        </div>
      </article>
      <article className="product">
        <img
          alt="Heavy commercial truck"
          className="product-img"
          src="/images/exide-car.jpeg"
        />
        <div className="product-body">
          <h3>Heavy Commercial Vehicles</h3>
          <p className="product-category">Trucks & Buses</p>
          <p className="product-desc">
            High-capacity batteries designed for heavy-duty commercial fleets.
          </p>
        </div>
      </article>
      <article className="product">
        <img
          alt="Tractor in a field"
          className="product-img"
          src="/images/exide-jai-kisan.jpeg"
        />
        <div className="product-body">
          <h3>Tractors</h3>
          <p className="product-category">Agricultural</p>
          <p className="product-desc">
            Robust batteries that withstand tough farming conditions.
          </p>
        </div>
      </article>
      <article className="product">
        <img
          alt="Car battery"
          className="product-img"
          src="/images/exide-car.jpeg"
        />
        <div className="product-body">
          <h3>Automotive & Vehicular Batteries</h3>
          <p className="product-category">Car & SUV</p>
          <p className="product-desc">
            Reliable starting power for cars and SUVs.
          </p>
        </div>
      </article>
      <article className="product">
        <img
          alt="Home inverter with battery"
          className="product-img"
          src="/images/exide-home.jpeg"
        />
        <div className="product-body">
          <h3>Home Inverter & Batteries</h3>
          <p className="product-category">Home Backup</p>
          <p className="product-desc">
            Uninterrupted power backup for your home.
          </p>
        </div>
      </article>
      <article className="product">
        <img
          alt="Solar panels with battery bank"
          className="product-img"
          src="/images/exide-home.jpeg"
        />
        <div className="product-body">
          <h3>Solar & Energy Batteries</h3>
          <p className="product-category">Renewable Energy</p>
          <p className="product-desc">
            Deep-cycle batteries for solar power and energy storage.
          </p>
        </div>
      </article>
    </div>
  );
};
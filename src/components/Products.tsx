import { useState } from "react";

interface Product {
  name: string;
  image: string;
  description: string;
  model: string;
}

interface CategoryProducts {
  [key: string]: Product[];
}

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Category-specific products data
  const categoryProducts: CategoryProducts = {
    "Two-Wheelers": [
      {
        name: "Exide Xplore",
        image: "/assets/two wheeler/Bike Battery1.jpeg",
        description:
          "Super sealed performance, Zero maintenance battery with 48 months warranty",
        model: "XLTX14",
      },
      {
        name: "Exide Xplore",
        image: "/assets/two wheeler/Bike Battery2.jpeg",
        description:
          "Super sealed performance, Zero maintenance battery with 48 months warranty",
        model: "12XL5L-B",
      },
      {
        name: "Exide Xplore",
        image: "/assets/two wheeler/Bike Battery3.jpeg",
        description:
          "Super sealed performance, Zero maintenance battery with 48 months warranty",
        model: "XLTZ5A",
      },
      {
        name: "Exide Xplore",
        image: "/assets/two wheeler/Bike Battery4.jpeg",
        description:
          "Super sealed performance, Zero maintenance battery with 48 months warranty",
        model: "XLTZ14",
      },
    ],
    "Three-Wheelers & Auto-Rickshaws": [
      {
        name: "Exide EKO",
        image: "/assets/three wheeler/Auto Battery1.jpeg",
        description: "Durable battery for auto-rickshaws",
        model: "EK032",
      },
      {
        name: "Exide EKO",
        image: "/assets/three wheeler/Auto Battery2.jpeg",
        description: "Three wheeler & LCV",
        model: "EK040L",
      },
      {
        name: "Exide EKO",
        image: "/assets/three wheeler/Auto Battery3.jpeg",
        description: "Three wheeler & LCV",
        model: "EK060H",
      },
      {
        name: "Exide EKO",
        image: "/assets/three wheeler/Auto Battery4.jpeg",
        description: "Three wheeler & LCV",
        model: "EK055L",
      },
    ],
    "Heavy Commercial Vehicles": [
      {
        name: "Exide XPRESS",
        image: "/assets/heavy vehicals/Heavy Vehical Battery1.jpeg",
        description: "Maintenance-free, heavy-duty performance",
        model: "XP1500",
      },
      {
        name: "Exide XPRESS",
        image: "/assets/heavy vehicals/Heavy Vehical Battery2.jpeg",
        description: "Maintenance-free, heavy-duty performance",
        model: "XP1300",
      },
      {
        name: "Exide DRIVE",
        image: "/assets/heavy vehicals/Heavy Vehical Battery4.jpeg",
        description: "Maintenance-free",
        model: "DRIVE150R",
      },
      {
        name: "Exide DRIVE",
        image: "/assets/heavy vehicals/Heavy Vehical Battery5.jpeg",
        description: "Maintenance-free, LCV/TRACTOR",
        model: "DRIVE100L",
      },
      {
        name: "Exide DRIVE",
        image: "/assets/heavy vehicals/Heavy Vehical Battery6.jpeg",
        description: "Maintenance-free, LCV/TRACTOR",
        model: "DRIVE130R",
      },
    ],
    Tractors: [
      {
        name: "Exide Jai Kisan",
        image: "/assets/tractor/Tractor Battery.jpeg",
        description:
          "Robust battery for farming equipment, original tractor battery",
        model: "KI80T",
      },
    ],
    "Four-Wheelers": [
      {
        name: "Exide MILEAGE ISS",
        image: "/assets/four wheeler/Diesel Car Batteries/Diesel Car1.jpeg",
        description: "Designed for everyday performance and reliability",
        model: "MLDIN70(ISS)",
      },
      {
        name: "Exide DARE",
        image: "/assets/four wheeler/Diesel Car Batteries/Diesel Car3.jpeg",
        description:
          "The SUV Ready, High Virbration Resistant, High Performance, High Endurance Battery",
        model: "DRDIN60",
      },
      {
        name: "Exide DARE",
        image: "/assets/four wheeler/Diesel Car Batteries/Diesel Car4.jpeg",
        description:
          "The SUV Ready, High Virbration Resistant, High Performance, High Endurance Battery",
        model: "DRDIN60",
      },
      {
        name: "Exide MILEAGE",
        image: "/assets/four wheeler/Diesel Car Batteries/Diesel Car5.jpeg",
        description: "Designed for everyday performance and reliability",
        model: "MLDIN80",
      },
      {
        name: "Exide MILEAGE",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car1.jpeg",
        description: "Designed for everyday performance and reliability",
        model: "MLDIN44LH",
      },
      {
        name: "Exide DRIVE",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car2.jpeg",
        description: "Zero Maintenance, High Performance.",
        model: "DRIVE35L",
      },
      {
        name: "Exide MATRIX",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car3.jpeg",
        description: "Advance Techhnology, Ulitmate Performance, Long Life.",
        model: "MT40B20L",
      },
      {
        name: "Exide MATRIX",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car4.jpeg",
        description:
          "Advance Techhnology, Ulitmate Performance, Long Life, & CAR / SUV",
        model: "MTRED40L",
      },
      {
        name: "Exide MILEAGE",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car5.jpeg",
        description: "Designed for everyday performance and reliability",
        model: "ML38B20L",
      },
      {
        name: "Exide MILEAGE",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car6.jpeg",
        description: "Designed for everyday performance and reliability",
        model: "MLDIN50",
      },
      {
        name: "Exide MILEAGE",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car7.jpeg",
        description: "Designed for everyday performance and reliability",
        model: "ML40LBH",
      },
      {
        name: "Exide EEZY",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car8.jpeg",
        description:
          "Super smooth performance, zero maintenance battery with 48 months warranty",
        model: "EY1050D31R",
      },
      {
        name: "Exide EEZY",
        image: "/assets/four wheeler/Petrol Car Batteries/Petrol Car8.jpeg",
        description:
          "Super smooth performance, zero maintenance battery with 48 months warranty",
        model: "EY80D32R",
      },
    ],
    "Home Inverter & Batteries": [
      {
        name: "Exide HOME INVAMASTER",
        image: "/assets/home/Home Inverter Battery3.jpeg",
        description: "Long backup for home inverters",
        model: "IMTT2000",
      },
      {
        name: "Exide HOME INVATUBULAR",
        image: "/assets/home/Home Inverter Battery4.jpeg",
        description: "The Ulitmate Inverter Battery for Home",
        model: "IT750",
      },
      {
        name: "Exide HOME INVAMASTER",
        image: "/assets/home/Home Inverter Battery3.jpeg",
        description: "Long backup for home inverters and 100% copper transformer",
        model: "IMT2000",
      }
    ],
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <div className="products">
        <article
          className={`product ${selectedCategory === "Two-Wheelers" ? "active" : ""}`}
          onClick={() => handleCategorySelect("Two-Wheelers")}
        >
          <img
            alt="Motorcycle with Exide battery"
            className="product-img"
            src="/assets/two wheeler/Bike Battery1.jpeg"
          />
          <div className="product-body">
            <h3>Two-Wheelers</h3>
            <p className="product-category">Motorcycles & Scooters</p>
            <p className="product-desc">
              High-cranking power batteries for bikes and scooters.
            </p>
          </div>
        </article>
        <article
          className={`product ${selectedCategory === "Three-Wheelers & Auto-Rickshaws" ? "active" : ""}`}
          onClick={() =>
            handleCategorySelect("Three-Wheelers & Auto-Rickshaws")
          }
        >
          <img
            alt="Auto-rickshaw on the road"
            className="product-img"
            src="/assets/three wheeler/Auto Battery1.jpeg"
          />
          <div className="product-body">
            <h3>Three-Wheelers & Auto-Rickshaws</h3>
            <p className="product-category">Auto-rickshaws</p>
            <p className="product-desc">
              Durable batteries built for the rigours of daily auto stand use.
            </p>
          </div>
        </article>
        <article
          className={`product ${selectedCategory === "Heavy Commercial Vehicles" ? "active" : ""}`}
          onClick={() => handleCategorySelect("Heavy Commercial Vehicles")}
        >
          <img
            alt="Heavy commercial truck"
            className="product-img"
            src="/assets/heavy vehicals/Heavy Vehical Battery1.jpeg"
          />
          <div className="product-body">
            <h3>Heavy Commercial Vehicles</h3>
            <p className="product-category">Trucks & Buses</p>
            <p className="product-desc">
              High-capacity batteries designed for heavy-duty commercial fleets.
            </p>
          </div>
        </article>
        <article
          className={`product ${selectedCategory === "Tractors" ? "active" : ""}`}
          onClick={() => handleCategorySelect("Tractors")}
        >
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
        <article
          className={`product ${selectedCategory === "Four-Wheelers" ? "active" : ""}`}
          onClick={() =>
            handleCategorySelect("Four-Wheelers")
          }
        >
          <img
            alt="Car battery"
            className="product-img"
            src="/assets/four wheeler/Diesel Car Batteries/Diesel Car1.jpeg"
          />
          <div className="product-body">
            <h3>Four-Wheelers With Petrol & Design Cars</h3>
            <p className="product-category">Car & SUV</p>
            <p className="product-desc">
              Reliable starting power for cars and SUVs.
            </p>
          </div>
        </article>
        <article
          className={`product ${selectedCategory === "Home Inverter & Batteries" ? "active" : ""}`}
          onClick={() => handleCategorySelect("Home Inverter & Batteries")}
        >
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
      </div>

      {/* Product Category Modal */}
      {selectedCategory && (
        <div className="product-modal-overlay" onClick={handleCloseModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedCategory} Batteries</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="products-grid">
                {categoryProducts[selectedCategory]?.map(
                  (product: Product, index: number) => (
                    <div key={index} className="product-card">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-modal-img"
                      />
                      <div className="product-modal-info">
                        <h3>{product.name}</h3>
                        <p className="product-description">
                          {product.description}
                        </p>
                        <p className="product-model">{product.model}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

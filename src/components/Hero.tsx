import { MapPin, Phone, MessageCircle } from 'lucide-react';

interface HeroProps {
  primaryPhone: string;
}

const Hero = ({ primaryPhone }: HeroProps) => {
  return (
    <section className="hero" id="home">
      <div className="brand">
        <div className="logo">
          <span className="logo-brand">KARNATAKA BATTERY</span>
          <span className="logo-support">
            <span className="text-exide-red">EXIDE</span>
            <span className="logo-divider">·</span>
            <span className="text-livfast-orange">LIVFAST</span>
          </span>
          <span className="logo-sub">Authorized dealer network</span>
        </div>
        <div className="badge">BATTERIES • INVERTERS</div>
      </div>
      <div className="hero-copy">
        <div className="eyebrow">Power for every need</div>
        <h1>
          Reliable power.<br />
          <em>Wherever you need it.</em>
        </h1>
        <p>
          Exide and Livfast battery solutions for two-wheelers, three-wheelers,
          heavy commercial vehicles, tractors, home inverters, and solar energy.
        </p>
        <div className="actions">
          <a
            className="btn btn-primary"
            href="#locations"
          >
            <MapPin /> Find a Store
          </a>
          <a
            className="btn btn-dark"
            href={`tel:${primaryPhone}`}
          >
            <Phone /> Call Us
          </a>
        </div>
        <div className="hero-gallery" aria-label="Battery gallery">
          <div className="hero-gallery-item">
            <img
              alt="Livfast battery display"
              src="/images/livfast-1.jpeg"
            />
            <span className="gallery-brand livfast">LIVFAST</span>
          </div>
          <div className="hero-gallery-item">
            <img
              alt="Exide battery display"
              src="/images/exide-bike.jpeg"
            />
            <span className="gallery-brand exide">EXIDE</span>
          </div>
          <div className="hero-gallery-item">
            <img
              alt="Livfast automotive battery"
              src="/images/livfast-2.jpeg"
            />
            <span className="gallery-brand livfast">LIVFAST</span>
          </div>
          <div className="hero-gallery-item">
            <img
              alt="Exide automotive battery"
              src="/images/exide-car.jpeg"
            />
            <span className="gallery-brand exide">EXIDE</span>
          </div>
          <div className="hero-gallery-item">
            <img
              alt="Livfast home inverter battery"
              src="/images/livfast-3.jpeg"
            />
            <span className="gallery-brand livfast">LIVFAST</span>
          </div>
          <div className="hero-gallery-item">
            <img
              alt="Livfast tractor and agricultural battery"
              src="/images/livfast-4.jpeg"
            />
            <span className="gallery-brand livfast">LIVFAST</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
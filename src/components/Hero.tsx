import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  primaryPhone: string;
}

const Hero = ({ primaryPhone }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroGalleryRef = useRef<HTMLDivElement>(null);

  // Hero gallery images - one from each category in public/assets
  const heroImages = [
    {
      src: '/assets/common/exide-home.jpeg',
      alt: 'Home inverter battery',
      brand: 'EXIDE',
      brandClass: 'exide'
    },
    {
      src: '/assets/common/exide-bike-2.jpeg',
      alt: 'Two wheeler battery',
      brand: 'EXIDE',
      brandClass: 'exide'
    },
    {
      src: '/assets/three wheeler/Auto Battery1.jpeg',
      alt: 'Three wheeler battery',
      brand: 'EXIDE',
      brandClass: 'exide'
    },
    {
      src: '/assets/four wheeler/Diesel Car Batteries/Diesel Car1.jpeg',
      alt: 'Four wheeler battery',
      brand: 'EXIDE',
      brandClass: 'exide'
    },
    {
      src: '/assets/common/exide-bike-2.jpeg',
      alt: 'Common battery',
      brand: 'EXIDE',
      brandClass: 'exide'
    },
    {
      src: '/assets/tractor/Tractor%20Battery.jpeg',
      alt: 'Tractor battery',
      brand: 'EXIDE',
      brandClass: 'exide'
    },
    {
      src: '/assets/heavy%20vehicals/Heavy%20Vehical%20Battery1.jpeg',
      alt: 'Heavy vehicle battery',
      brand: 'EXIDE',
      brandClass: 'exide'
    },
    {
      src: '/assets/premium bettery/UPS_SMFG_Battery1.jpeg',
      alt: 'Premium battery',
      brand: 'EXIDE',
      brandClass: 'exide'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

 useEffect(() => {
  const gallery = heroGalleryRef.current;
  if (!gallery) return;

  const activeItem = gallery.children[currentSlide] as
    | HTMLElement
    | undefined;

  if (!activeItem) return;

  const left =
    activeItem.offsetLeft -
    (gallery.clientWidth - activeItem.clientWidth) / 2;

  gallery.scrollTo({
    left,
    behavior: 'smooth',
  });
}, [currentSlide]);

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
      </div>
       <div
          ref={heroGalleryRef}
          className="hero-gallery"
          aria-label="Battery gallery"
        >
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-gallery-item ${index === currentSlide ? 'active' : ''}`}
            >
              <img
                alt={image.alt}
                src={image.src}
              />
              <span className={`gallery-brand ${image.brandClass}`}>{image.brand}</span>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Hero;
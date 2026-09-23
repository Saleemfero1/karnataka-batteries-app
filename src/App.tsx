import Hero from './components/Hero';
import BatteryTypes from './components/BatteryTypes';
import { Products } from './components/Products';
import Services from './components/Services';
import {Locations} from './components/Locations';
import {Trust} from './components/Trust';
import {Footer} from './components/Footer';
import {StickyCTA} from './components/StickyCTA';

// Default contact (Shahapur branch — primary / head office)
const PRIMARY_PHONE = '9448427634';
const PRIMARY_WHATSAPP = '919448427634';

function App() {
  return (
    <div className="page-container">
      <main className="page">
        {/* Hero */}
        <Hero primaryPhone={PRIMARY_PHONE} />

        {/* Battery types */}
        <section className="section">
          <div className="section-head">
            <h2>Battery solutions</h2>
            <small>Exide &amp; Livfast range</small>
          </div>
          <BatteryTypes />
        </section>

        {/* Products */}
        <section className="section" style={{ paddingTop: 0 }}>
          <Products />
        </section>

        {/* Services */}
        <section className="section">
          <div className="section-head">
            <h2>Our services</h2>
            <small>Complete support</small>
          </div>
          <Services />
        </section>

        {/* Locations */}
        <Locations />

        {/* Trust */}
        <Trust />

        {/* Footer */}
        <Footer primaryPhone={PRIMARY_PHONE} primaryWhatsApp={PRIMARY_WHATSAPP} />
      </main>

      {/* Sticky CTA (mobile bottom bar) */}
      <StickyCTA primaryPhone={PRIMARY_PHONE} whatsappUrl={`https://wa.me/${PRIMARY_WHATSAPP}`} />
    </div>
  );
}

export default App;

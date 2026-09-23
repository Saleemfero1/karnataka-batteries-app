import { Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  primaryPhone: string;
  primaryWhatsApp: string;
}

export const Footer = ({ primaryPhone, primaryWhatsApp }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <span className="footer-sub">KARNATAKA BATTERY</span>
      </div>
      <p>
        Shahapur • Yadgiri • Kalaburagi<br />
        For battery availability, pricing and fitment, call your nearest branch.
      </p>
      <div className="footer-contact">
        <a
          className="footer-call"
          href={`tel:${primaryPhone}`}
        >
          <Phone /> {primaryPhone}
        </a>
        <a
          className="footer-wa"
          href={`https://wa.me/${primaryWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </a>
      </div>
      <p className="footer-legal">
        Exide & Livfast are registered trademarks of their respective owners.
        Karnataka Battery is an independent retailer.
      </p>
    </footer>
  );
};
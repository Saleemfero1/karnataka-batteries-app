import { Phone, MessageCircle } from 'lucide-react';

interface StickyCTAProps {
  primaryPhone: string;
  whatsappUrl: string;
}

export const StickyCTA = ({ primaryPhone, whatsappUrl }: StickyCTAProps) => {
  return (
    <div className="sticky">
      <a
        className="s-call"
        href={`tel:${primaryPhone}`}
      >
        <Phone /> Call Now
      </a>
      <a
        className="s-wa"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle /> WhatsApp
      </a>
    </div>
  );
};
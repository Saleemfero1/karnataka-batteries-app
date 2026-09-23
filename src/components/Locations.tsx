import { MapPin } from 'lucide-react';

interface Location {
  name: string;
  owner: string;
  phones: string[]; // array of phone numbers as strings
  whatsapp: string; // WhatsApp number with country code (without +)
  mapLink: string;
}

export const Locations = () => {
  const locations: Location[] = [
    {
      name: 'Shahapur',
      owner: 'Riyaz Ahmed',
      phones: ['9448427634', '9980012624'],
      whatsapp: '919448427634',
      mapLink: 'https://share.google/8ODMbi4HDezLFn4vi',
    },
    {
      name: 'Yadgiri',
      owner: 'Mansoor Pasha',
      phones: ['9980774265', '7204172307'],
      whatsapp: '919980774265',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Karnataka+Battery,+Chitaputr+Road,+Yadgir+585202,+Karnataka',
    },
    {
      name: 'Kalaburagi',
      owner: 'Imtiyaz Ahmed',
      phones: ['9740231498'],
      whatsapp: '919740231498',
      mapLink: 'https://share.google/rhluMQYynhGswB07U',
    },
  ];

  return (
    <section className="section locations" id="locations">
      <div className="section-head">
        <h2>Our locations</h2>
        <small>3 branches</small>
      </div>
      {locations.map((loc, index) => (
        <article key={index} className="location">
          <div className="loc-top">
            <div className="pin">
              <MapPin />
            </div>
            <div>
              <h3>{loc.name}</h3>
              <div className="owner">{loc.owner}</div>
            </div>
          </div>
          <div className="phones">
            {loc.phones.map((phone, phoneIndex) => (
              <a
                key={phoneIndex}
                className="phone"
                href={`tel:${phone}`}
              >
                {phone}
              </a>
            ))}
          </div>
          <div className="loc-actions">
            <a
              className="mini call"
              href={`tel:${loc.phones[0]}`}
            >
              Call
            </a>
            {loc.phones.length > 1 && (
              <a
                className="mini call"
                href={`tel:${loc.phones[1]}`}
              >
                Call
              </a>
            )}
            <a
              className="mini wa"
              href={`https://wa.me/${loc.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="mini map"
              href={loc.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find on Maps
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};
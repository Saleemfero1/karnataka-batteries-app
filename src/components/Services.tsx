import { Zap, Wrench, Cable } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Zap className="service-icon" />,
      title: 'Auto Electrician',
      description:
        'All types of vehicles electrical work — alternator, starter motor, wiring, and diagnostics.',
    },
    {
      icon: <Wrench className="service-icon" />,
      title: 'Motor Repair & Alternator',
      description:
        'Self-motor and alternator repair, overhaul, and rewind services for every vehicle type.',
    },
    {
      icon: <Cable className="service-icon" />,
      title: 'Wiring & Fitment',
      description:
        'Complete wiring loom work, battery fitment, and electrical accessory installation.',
    },
  ];

  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          {service.icon}
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
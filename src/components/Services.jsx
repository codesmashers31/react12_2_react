


const Services = () => {
  const theaterServices = [
    {
      id: 1,
      title: "Premium IMAX Experience",
      description: "Immerse yourself in crystal-clear images and powerful digital sound with our IMAX theaters",
      icon: "🎬",
      features: ["Larger Screens", "Enhanced Sound", "3D Capability"]
    },
    {
      id: 2,
      title: "Dolby Atmos Sound",
      description: "Experience groundbreaking audio technology with moving sounds that flow around you",
      icon: "🔊",
      features: ["360° Sound", "Object-based Audio", "128 Tracks"]
    },
    {
      id: 3,
      title: "Luxury Recliner Seating",
      description: "Relax in our premium leather recliners with extra legroom and personal space",
      icon: "💺",
      features: ["Full Recline", "Heated Seats", "Personal Tables"]
    },
    {
      id: 4,
      title: "Food & Beverage Delivery",
      description: "Enjoy restaurant-quality food and drinks delivered right to your seat during the movie",
      icon: "🍿",
      features: ["In-seat Service", "Gourmet Menu", "Quick Delivery"]
    },
    {
      id: 5,
      title: "VIP Lounge Access",
      description: "Exclusive lounge area with premium amenities for our VIP guests",
      icon: "⭐",
      features: ["Private Lounge", "Complimentary Snacks", "Priority Booking"]
    },
    {
      id: 6,
      title: "Event Hosting",
      description: "Perfect venue for private screenings, corporate events, and birthday parties",
      icon: "🎉",
      features: ["Private Theater", "Custom Packages", "Event Planning"]
    }
  ]

  return (
    <>
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>Premium Theater Services</h1>
          <p>Experience movies like never before with our state-of-the-art facilities and exceptional services</p>
        </div>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {theaterServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, j) => (
                  <span key={j+1} className="feature-tag">✓ {feature}</span>
                ))}
              </div>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta">
        <div className="cta-content">
          <h2>Ready for an Unforgettable Experience?</h2>
          <p>Book your tickets now and enjoy our premium services</p>
          <div className="cta-buttons">
            <button className="btn-primary">Book Tickets</button>
            <button className="btn-secondary">View Pricing</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
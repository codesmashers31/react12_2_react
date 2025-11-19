import React, { useState, useEffect } from 'react';
import banner from '../assets/images/banner/baahubali-2-the-conclusion-windows-theme-8-hd.jpg';


const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Multiple banner images for carousel (you can replace with your actual images)
  const bannerImages = [
    banner,
    'https://images.unsplash.com/photo-1489599804159-036feb73f0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  const movieInfo = {
    title: "Baahubali 2: The Conclusion",
    description: "The epic conclusion to India's greatest cinematic saga",
    rating: "4.8/5",
    duration: "2h 47m",
    genre: "Action, Drama, Epic"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <>
      {/* Design Option 1: Hero Banner with Overlay Content */}
      <div className="banner-hero" id='about'>
        <div className="banner-slideshow">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="banner-overlay">
                <div className="banner-content">
                  <div className="movie-badge">Now Streaming</div>
                  <h1 className="banner-title">{movieInfo.title}</h1>
                  <p className="banner-description">{movieInfo.description}</p>
                  
                  <div className="movie-meta">
                    <span className="rating">⭐ {movieInfo.rating}</span>
                    <span className="duration">⏱ {movieInfo.duration}</span>
                    <span className="genre">🎭 {movieInfo.genre}</span>
                  </div>

                  <div className="banner-actions">
                    <button className="btn-watch">
                      <span>🎬 Watch Now</span>
                    </button>
                    <button className="btn-trailer">
                      <span>📺 Watch Trailer</span>
                    </button>
                    <button className="btn-favorite">
                      <span>❤️ Add to Favorite</span>
                    </button>
                  </div>

                  <div className="banner-stats">
                    <div className="stat">
                      <strong>2M+</strong>
                      <span>Views</span>
                    </div>
                    <div className="stat">
                      <strong>50K+</strong>
                      <span>Reviews</span>
                    </div>
                    <div className="stat">
                      <strong>98%</strong>
                      <span>Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="banner-nav banner-prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="banner-nav banner-next" onClick={nextSlide}>
          ›
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>

      {/* Design Option 2: Simple Banner (Backup) */}
      <div className="simple-banner">
        <div className="banner-background">
          <img src={banner} alt="Baahubali 2" />
          <div className="banner-gradient"></div>
        </div>
        <div className="simple-banner-content">
          <h2>Experience the Magic</h2>
          <p>Join millions of viewers in the epic journey</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
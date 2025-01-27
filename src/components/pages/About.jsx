import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const slides = [
    {
      title: 'Welcome to RIO International',
      description: 'We provide exceptional services tailored to your needs.',
      image:'https://i.pinimg.com/736x/d6/a6/92/d6a692fc1e0489955e2b4ed4ae742c76.jpg',
      link: '/home',
    },
    {
      title: 'About Us',
      description: 'Learn more about our mission, vision, and values.',
      image: 'https://wallpaper.dog/large/17232755.jpg',
      link: '/about',
    },
    {
      title: 'Our Services',
      description: 'Explore the range of solutions we offer.',
      image: 'https://images.unsplash.com/photo-1586991359975-54500b7d8a86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29yayUyMGZyb20lMjBob21lfGVufDB8fDB8fHww',
      link: '/services',
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with us for more information.',
      image: 'https://getwallpapers.com/wallpaper/full/c/d/5/400547.jpg',
      link: '/contact',
    },
  ];

  const slides2 = [
    {
      title: 'Feature 1',
      description: 'This is the first feature of Slider 2.',
      image: 'src/assets/slider1.jpg',
      link: '/feature1',
    },
    {
      title: 'Feature 2',
      description: 'This is the second feature of Slider 2.',
      image: 'src/assets/slider2.jpg',
      link: '/feature2',
    },
    {
      title: 'Feature 3',
      description: 'This is the third feature of Slider 2.',
      image: 'src/assets/slider3.jpg',
      link: '/feature3',
    },
    {
      title: 'Feature 4',
      description: 'This is the fourth feature of Slider 2.',
      image: 'src/assets/slider4.jpg',
      link: '/feature4',
    },
    {
      title: 'Feature 5',
      description: 'This is the first feature of Slider 5.',
      image: 'src/assets/slider1.jpg',
      link: 'https://forms.gle/2U4NQMpW8ARtx81j8',
    },
    {
      title: 'Feature 6',
      description: 'This is the second feature of Slider 6.',
      image: 'src/assets/slider2.jpg',
      link: 'https://forms.gle/2U4NQMpW8ARtx81j8',
    },
  ];

  const backgrounds = ['#f9c74f', '#90be6d', '#f8961e', '#277da1', '#ef476f'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide2((prevSlide) => (prevSlide + 1) % Math.ceil(slides2.length / 3));
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides2.length, backgrounds.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide + 1) % Math.ceil(slides2.length / 3));
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const handlePrevSlide2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide === 0 ? Math.ceil(slides2.length / 3) - 1 : prevSlide - 1));
    setBackgroundIndex((prevIndex) => (prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1));
  };

  return (
    <div className="home">
      {/* First Slider: One Image Per Slide */}
      <div className="slider">
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt={slide.title} />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link to={slide.link} className="slide-button">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={handlePrevSlide}>
          &#8249;
        </button>
        <button className="next" onClick={handleNextSlide}>
          &#8250;
        </button>
      </div>

      {/* Second Slider: Multiple Images Per Slide */}
      <div className="slider second-slider">
        <div className="slider-heading-box" style={{ backgroundColor: backgrounds[backgroundIndex] }}>
          <h1>Dynamic Slider 2 Heading</h1>
        </div>
        <div
          className="slides"
          style={{
            transform: `translateX(-${currentSlide2 * 100}%)`,
          }}
        >
          {slides2.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt={slide.title} />
              <div className="slide-content-box" style={{ backgroundColor: backgrounds[backgroundIndex] }}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link to={slide.link} className="slide-button">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="prev" onClick={handlePrevSlide2}>
          &#8249;
        </button>
        <button className="next" onClick={handleNextSlide2}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Home;

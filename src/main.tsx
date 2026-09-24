import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Search,
  Menu,
  MapPin,
  CalendarDays,
  Users,
  Plane,
  ArrowRight,
  Globe2,
  ShieldCheck,
  Headphones,
  Heart,
  X,
} from 'lucide-react';
import './styles.css';

const destinations = [
  {
    name: 'Amalfi Coast',
    country: 'Italy',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Madeira',
    country: 'Portugal',
    image:
      'https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Santorini',
    country: 'Greece',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=85',
  },
  {
    name: 'Algarve',
    country: 'Portugal',
    image:
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85',
  },
];

const experiences = [
  {
    title: 'Coastal escapes',
    copy: 'Slow mornings, blue water and unforgettable views.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'City discoveries',
    copy: 'Design, food and culture — curated for curious travellers.',
    image:
      'https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Wild horizons',
    copy: 'Routes and experiences for your next great adventure.',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85',
  },
];

function Logo() {
  return (
    <a
      className="logo"
      href="#top"
      aria-label="The Trips Way home"
    >
      <img
        src="/assets/the-trips-way-logo.png"
        alt="The Trips Way"
        className="logo-image"
      />
    </a>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState('Hotels');

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setMenu(false);
  };

  return (
    <div id="top" className="app">
      <header className="header">

        <nav className={menu ? 'nav open' : 'nav'}>
          {[
            'Destinations',
            'Flights',
            'Hotels',
            'Experiences',
            'Cars',
            'Deals',
          ].map((name) => (
            <button
              key={name}
              onClick={() =>
                scroll(
                  name === 'Destinations'
                    ? 'destinations'
                    : name === 'Experiences'
                      ? 'experiences'
                      : 'search'
                )
              }
            >
              {name}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => scroll('search')}
          >
            <Search size={19} />
          </button>

          <button
            className="menu-btn"
            aria-label={menu ? 'Close menu' : 'Open menu'}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="eyebrow">
              TRAVEL • DISCOVER • EXPERIENCE
            </p>

            <img
              src="/assets/the-trips-way-logo.png"
              alt="The Trips Way"
              className="hero-logo"
            />

            <p className="hero-copy">
              Flights, hotels and experiences in one place.
              <br className="desktop" />
              Find the trip that feels like yours.
            </p>

            <div id="search" className="search-card">
              <div className="tabs">
                {['Flights', 'Hotels', 'Experiences'].map(
                  (name) => (
                    <button
                      key={name}
                      className={
                        tab === name ? 'active' : ''
                      }
                      onClick={() => setTab(name)}
                    >
                      {name}
                    </button>
                  )
                )}
              </div>

              <div className="fields">
                <div className="field">
                  <MapPin />

                  <div>
                    <small>Destination</small>
                    <strong>
                      Where do you want to go?
                    </strong>
                  </div>
                </div>

                <div className="field">
                  <CalendarDays />

                  <div>
                    <small>Check-in</small>
                    <strong>Add dates</strong>
                  </div>
                </div>

                <div className="field">
                  <CalendarDays />

                  <div>
                    <small>Check-out</small>
                    <strong>Add dates</strong>
                  </div>
                </div>

                <div className="field guests">
                  <Users />

                  <div>
                    <small>Travellers</small>
                    <strong>2 travellers</strong>
                  </div>
                </div>

                <button
                  className="search-submit"
                  onClick={() => scroll('destinations')}
                >
                  <Search size={21} />
                  <span>Search {tab}</span>
                </button>
              </div>
            </div>

            <p className="powered">
              Search powered by <b>Travelpayouts</b> ·
              partner tools ready to connect
            </p>
          </div>
        </section>

        <section className="intro section">
          <div>
            <p className="eyebrow gold">
              THE TRIPS WAY
            </p>

            <h2>
              Travel should feel
              <br />
              <i>like yours.</i>
            </h2>
          </div>

          <p className="intro-copy">
            Discover destinations, stays and experiences
            selected to make planning easier. The Trips Way
            brings the pieces of your journey together, so
            you can focus on the part that matters — living
            it.
          </p>
        </section>

        <section
          id="destinations"
          className="section"
        >
          <div className="section-head">
            <div>
              <p className="eyebrow">EXPLORE</p>

              <h2>
                Beautiful places.
                <br />
                <i>Endless ways to go.</i>
              </h2>
            </div>

            <button
              className="text-link"
              onClick={() => scroll('destinations')}
            >
              View destinations
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="dest-grid">
            {destinations.map((destination, index) => (
              <article
                className={`dest-card ${
                  index === 0 ? 'large' : ''
                }`}
                key={destination.name}
                style={{
                  backgroundImage: `url(${destination.image})`,
                }}
              >
                <div className="card-shade" />

                <div className="dest-info">
                  <span>{destination.country}</span>

                  <h3>{destination.name}</h3>

                  <button
                    onClick={() => scroll('search')}
                  >
                    Discover
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experiences"
          className="section experience-section"
        >
          <div className="section-head">
            <div>
              <p className="eyebrow gold">
                MORE THAN TRIPS
              </p>

              <h2>
                Find your next
                <br />
                <i>experience.</i>
              </h2>
            </div>

            <button
              className="text-link"
              onClick={() => scroll('experiences')}
            >
              Explore experiences
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="experience-grid">
            {experiences.map((experience) => (
              <article
                className="experience-card"
                key={experience.title}
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  loading="lazy"
                />

                <div>
                  <p>{experience.copy}</p>

                  <h3>{experience.title}</h3>

                  <button
                    onClick={() => scroll('search')}
                  >
                    Find your way
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="widget-section section">
          <div className="widget-copy">
            <p className="eyebrow gold">
              YOUR TRIP, YOUR WAY
            </p>

            <h2>
              One place to
              <br />
              <i>start planning.</i>
            </h2>

            <p>
              When your Travelpayouts account is ready,
              this area becomes the live booking
              experience — flights, hotels and more,
              without changing the visual language of the
              site.
            </p>
          </div>

          <div className="widget-slot">
            <div className="slot-top">
              <span>TRAVELPAYOUTS WIDGET</span>
              <span className="live-dot">READY</span>
            </div>

            <div className="slot-inner">
              <Plane />

              <h3>
                Your live search widget goes here
              </h3>

              <p>
                Paste the official Travelpayouts widget
                code here when your website project is
                approved.
              </p>

              <button
                onClick={() => scroll('search')}
              >
                Preview search
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div>
            <Globe2 />
            <strong>Destinations</strong>
            <span>worth discovering</span>
          </div>

          <div>
            <ShieldCheck />
            <strong>Secure booking</strong>
            <span>through trusted partners</span>
          </div>

          <div>
            <Headphones />
            <strong>Support</strong>
            <span>when you need it</span>
          </div>

          <div>
            <Heart />
            <strong>Experiences</strong>
            <span>that stay with you</span>
          </div>
        </section>

        <section className="cta section">
          <div>
            <p className="eyebrow">
              START YOUR NEXT CHAPTER
            </p>

            <h2>
              Where will your
              <br />
              <i>way take you?</i>
            </h2>

            <button
              className="gold-btn"
              onClick={() => scroll('search')}
            >
              Start exploring
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <Logo />

          <p>Your way to discover the world.</p>
        </div>

        <div className="footer-cols">
          <div>
            <b>Explore</b>

            <button
              onClick={() => scroll('destinations')}
            >
              Destinations
            </button>

            <button onClick={() => scroll('search')}>
              Flights
            </button>

            <button onClick={() => scroll('search')}>
              Hotels
            </button>
          </div>

          <div>
            <b>Experience</b>

            <button
              onClick={() => scroll('experiences')}
            >
              Experiences
            </button>

            <button onClick={() => scroll('search')}>
              Cars
            </button>

            <button onClick={() => scroll('search')}>
              Deals
            </button>
          </div>

          <div>
            <b>The Trips Way</b>

            <button>About</button>
            <button>Contact</button>
            <button>Privacy</button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 The Trips Way</span>

          <span>
            Affiliate travel platform · Travelpayouts
            integration ready
          </span>
        </div>
      </footer>
    </div>
  );
}

createRoot(
  document.getElementById('root')!
).render(<App />);
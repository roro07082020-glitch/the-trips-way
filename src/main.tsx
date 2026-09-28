import React, { useEffect, useRef, useState } from 'react';
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
import {
  destinations as destinationData,
  getDestinationBySlug,
} from './data/destinations';
import DestinationPage from './pages/DestinationPage';
import ExperiencesPage from './pages/ExperiencesPage';

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




function TravelpayoutsWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://tpwgt.com/content?currency=eur&trs=577348&shmarker=780827.the-trips-way&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%23C9A45C&color_button=%23C9A45C&color_icons=%23C9A45C&dark=%23102B45&light=%23F8F5EF&secondary=%23F8F5EF&special=%23E9DDC8&color_focused=%23c9A45C&border_radius=18&no_labels=&plain=true&promo_id=7879&campaign_id=100';
    script.charset = 'utf-8';

    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={widgetRef} className="travelpayouts-widget" />;
}


function CarsWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');

    script.async = true;
    script.src =
      '//tpwgt.com/content?trs=577348&shmarker=780827.the-trips-way&locale=es&country=35&city=60691&powered_by=true&campaign_id=87&promo_id=2466';
    script.charset = 'utf-8';

    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={widgetRef} className="travelpayouts-widget" />;
}


function ExperiencesWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');

    script.async = true;
    script.src =
      'https://tpwgt.com/content?currency=EUR&trs=577348&shmarker=780827.the-trips-way&language=es&locale=219133&layout=responsive&cards=12&powered_by=true&campaign_id=89&promo_id=3947';
    script.charset = 'utf-8';

    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={widgetRef} className="travelpayouts-widget experiences-widget" />;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState('Hotels');
  const [showExperiences, setShowExperiences] = useState(false);

  const getDestinationFromPath = () => {
    const match = window.location.pathname.match(
      /^\/destinos\/([^/]+)\/?$/
    );

    if (!match) return undefined;

    return getDestinationBySlug(match[1]);
  };

  const [currentDestination, setCurrentDestination] = useState(
    getDestinationFromPath()
  );

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setMenu(false);
  };

  const openDestination = (slug: string) => {
    console.log('🚀 OPEN DESTINATION:', slug);

    const destination = getDestinationBySlug(slug);

    console.log('📍 DESTINATION FOUND:', destination);

    if (!destination) {
      console.error('❌ DESTINATION NOT FOUND:', slug);
      return;
    }

    window.history.pushState({}, '', `/destinos/${slug}`);
    setCurrentDestination(destination);
    setMenu(false);
    window.scrollTo(0, 0);
  };

  if (currentDestination) {
    return (
      <DestinationPage
        destination={currentDestination}
        onVolver={() => {
          window.history.pushState({}, '', '/');
          setCurrentDestination(undefined);
        }}
      />
    );
  }

  if (showExperiences) {
    return (
      <ExperiencesPage
        onVolver={() => {
          setShowExperiences(false);
          window.scrollTo(0, 0);
        }}
      />
    );
  }

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
              onClick={() => {
              if (name === 'Experiences') {
                setShowExperiences(true);
                setMenu(false);
                window.scrollTo(0, 0);
                return;
              }

              if (
                name === 'Flights' ||
                name === 'Hotels' ||
                name === 'Cars'
              ) {
                setTab(name);
                scroll('search');
                return;
              }

              scroll(
                name === 'Destinations'
                  ? 'destinations'
                  : name === 'Experiences'
                    ? 'experiences'
                    : 'search'
              );
            }}
            >
              {name}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Search"
            onClick={() => {
  window.open(
    'https://kkday.tpx.gr/vy8m9l9IP',
    '_blank',
    'noopener,noreferrer'
  );
}}
          >
            <Search size={21} />
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
              {tab === 'Cars' ? (
              <CarsWidget />
            ) : (
              <TravelpayoutsWidget />
            )}
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
            {destinationData.map((destination, index) => (
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
                    onClick={() => openDestination(destination.slug)}
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
                    onClick={() => window.open(
  'https://kkday.tpx.gr/vy8m9l9IP',
  '_blank',
  'noopener,noreferrer'
)}
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

          <div className="widget-slot aviasales-widget">
            <div className="slot-top">
              <span>FLIGHTS</span>
              <span className="live-dot">LIVE</span>
            </div>

            <div className="aviasales-widget-frame">
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

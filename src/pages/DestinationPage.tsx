import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Car,
  Globe2,
  Hotel,
  MapPin,
  Plane,
  Search,
  Sparkles,
  Users,
} from 'lucide-react';
import { Destination } from '../data/destinations';

type DestinationPageProps = {
  destination: Destination;
  onVolver: () => void;
};

type TravelTab =
  | 'flights'
  | 'hotels'
  | 'cars'
  | 'experiences'
  | 'esim'
  | 'transfers';

const tabs: {
  id: TravelTab;
  label: string;
  icon: React.ReactNode;
}[] = [
  { id: 'flights', label: 'Vuelos', icon: <Plane size={19} /> },
  { id: 'hotels', label: 'Hoteles', icon: <Hotel size={19} /> },
  { id: 'cars', label: 'Coches', icon: <Car size={19} /> },
  {
    id: 'experiences',
    label: 'Experiencias',
    icon: <Sparkles size={19} />,
  },
  { id: 'esim', label: 'eSIM', icon: <Globe2 size={19} /> },
  {
    id: 'transfers',
    label: 'Transfers',
    icon: <Car size={19} />,
  },
];

const affiliateLinks: Record<TravelTab, string> = {
  flights: 'https://aviasales.tpx.gr/nibB2bfD',
  hotels: 'https://kkday.tpx.gr/vy8my9lP',
  cars: 'https://localrent.tpx.gr/lHpfPAgy',
  experiences: 'https://klook.tpx.gr/pqAYemzR',
  esim: 'https://yesim.tpx.gr/XhFp4yMu',
  transfers: 'https://kiwitaxi.tpx.gr/zVtqPcdn',
};

export default function DestinationPage({
  destination,
  onVolver,
}: DestinationPageProps) {
  const [activeTab, setActiveTab] =
    useState<TravelTab>('flights');

  const renderSearchFields = () => {
    switch (activeTab) {
      case 'hotels':
        return (
          <>
            <div className="destination-widget-field">
              <MapPin size={20} />
              <div>
                <small>Destino</small>
                <strong>{destination.name}</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <CalendarDays size={20} />
              <div>
                <small>Fechas</small>
                <strong>Check-in — Check-out</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <Users size={20} />
              <div>
                <small>Habitaciones</small>
                <strong>2 huéspedes</strong>
              </div>
            </div>
          </>
        );

      case 'cars':
        return (
          <>
            <div className="destination-widget-field">
              <MapPin size={20} />
              <div>
                <small>Recogida</small>
                <strong>{destination.name}</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <MapPin size={20} />
              <div>
                <small>Devolución</small>
                <strong>{destination.name}</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <CalendarDays size={20} />
              <div>
                <small>Fechas</small>
                <strong>Seleccionar fechas</strong>
              </div>
            </div>
          </>
        );

      case 'experiences':
        return (
          <>
            <div className="destination-widget-field">
              <MapPin size={20} />
              <div>
                <small>Destino</small>
                <strong>{destination.name}</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <CalendarDays size={20} />
              <div>
                <small>Fecha</small>
                <strong>Seleccionar fecha</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <Sparkles size={20} />
              <div>
                <small>Experiencia</small>
                <strong>Explorar actividades</strong>
              </div>
            </div>
          </>
        );

      case 'esim':
        return (
          <>
            <div className="destination-widget-field">
              <Globe2 size={20} />
              <div>
                <small>País</small>
                <strong>{destination.country}</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <CalendarDays size={20} />
              <div>
                <small>Duración</small>
                <strong>Seleccionar duración</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <Globe2 size={20} />
              <div>
                <small>Conectividad</small>
                <strong>Datos móviles</strong>
              </div>
            </div>
          </>
        );

      case 'transfers':
        return (
          <>
            <div className="destination-widget-field">
              <MapPin size={20} />
              <div>
                <small>Recogida</small>
                <strong>Aeropuerto</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <MapPin size={20} />
              <div>
                <small>Destino</small>
                <strong>{destination.name}</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <CalendarDays size={20} />
              <div>
                <small>Fecha</small>
                <strong>Seleccionar fecha</strong>
              </div>
            </div>
          </>
        );

      case 'flights':
      default:
        return (
          <>
            <div className="destination-widget-field">
              <MapPin size={20} />
              <div>
                <small>Origen</small>
                <strong>Ciudad o aeropuerto</strong>
              </div>
              <span className="field-swap">⇄</span>
            </div>

            <div className="destination-widget-field">
              <MapPin size={20} />
              <div>
                <small>Destino</small>
                <strong>{destination.name}</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <CalendarDays size={20} />
              <div>
                <small>Fechas</small>
                <strong>Ida — Vuelta</strong>
              </div>
            </div>

            <div className="destination-widget-field">
              <Users size={20} />
              <div>
                <small>Pasajeros</small>
                <strong>1 pasajero, Turista</strong>
              </div>
            </div>
          </>
        );
    }
  };

  const getButtonLabel = () => {
    switch (activeTab) {
      case 'hotels':
        return 'Buscar hoteles';
      case 'cars':
        return 'Buscar coches';
      case 'experiences':
        return 'Buscar experiencias';
      case 'esim':
        return 'Ver eSIM';
      case 'transfers':
        return 'Buscar transfers';
      case 'flights':
      default:
        return 'Buscar vuelos';
    }
  };

  return (
    <div className="destination-page">
      <header className="destination-header">
        <button
          className="destination-back"
          onClick={onVolver}
          type="button"
        >
          <ArrowLeft size={17} />
          <span>Volver</span>
        </button>

        <span className="destination-brand">
          THE TRIPS WAY
        </span>
      </header>

      <main>
        <section
          className="destination-hero"
          style={{
            backgroundImage: `url(${destination.image})`,
          }}
        >
          <div className="destination-hero-overlay" />

          <div className="destination-hero-content">
            <p className="eyebrow">
              {destination.country} · {destination.region}
            </p>

            <h1>{destination.name}</h1>

            <p>{destination.description}</p>
          </div>
        </section>

        <section className="destination-planning section">
          <div className="destination-intro">
            <p className="eyebrow gold">PLANIFICA TU VIAJE</p>

            <h2>
              Descubre {destination.name}.
              <br />
              <i>Construye tu viaje.</i>
            </h2>

            <p>
              Find flights, stays, experiences and
              everything you need for your journey.
            </p>
          </div>

          <div className="destination-widget">
            <div className="destination-widget-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={
                    activeTab === tab.id
                      ? 'destination-tab active'
                      : 'destination-tab'
                  }
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div
              className={`destination-widget-form ${
                activeTab === 'flights'
                  ? 'destination-widget-flights'
                  : ''
              }`}
            >
  
              <button
                className="destination-widget-search"
              type="button"
              onClick={() =>
                window.open(
                  affiliateLinks[activeTab],
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              >
                <Search size={20} />
                <span>{getButtonLabel()}</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="destination-products section">
         <div className="section-head">
           <div>
             <p className="eyebrow gold">EXPLORA EL DESTINO</p>

             <h2>
               Descubre {destination.name}.
               <br />
               <i>Vive el lugar.</i>
             </h2>

             <p className="destination-section-description">
               Inspírate, descubre lugares y encuentra experiencias
               para aprovechar al máximo tu viaje.
             </p>
           </div>
         </div>

         <div className="destination-explore-grid">
           <article className="destination-explore-card">
             <div className="destination-explore-icon">
               <MapPin size={24} />
             </div>

             <div>
               <span>01</span>
               <h3>Qué ver</h3>
               <p>
                 Descubre los lugares, barrios y puntos imprescindibles
                 de {destination.name}.
               </p>
             </div>

             <button type="button">
               Descubrir lugares
               <ArrowRight size={16} />
             </button>
           </article>

           <article className="destination-explore-card">
             <div className="destination-explore-icon">
               <Sparkles size={24} />
             </div>

             <div>
               <span>02</span>
               <h3>Qué hacer</h3>
               <p>
                 Encuentra actividades, tours y experiencias locales
                 para tu viaje.
               </p>
             </div>

             <button
              type="button"
              onClick={() =>
                window.open(
                  affiliateLinks.experiences,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
             >
               Explorar experiencias
               <ArrowRight size={16} />
             </button>
           </article>

           <article className="destination-explore-card">
             <div className="destination-explore-icon">
               <Hotel size={24} />
             </div>

             <div>
               <span>03</span>
               <h3>Dónde alojarte</h3>
               <p>
                 Encuentra hoteles y alojamientos para disfrutar
                 de {destination.name}.
               </p>
             </div>

             <button
              type="button"
              onClick={() =>
                window.open(
                  affiliateLinks.hotels,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            >
               Buscar hoteles
               <ArrowRight size={16} />
             </button>
           </article>
         </div>
       </section>
      </main>
    </div>
  );
}

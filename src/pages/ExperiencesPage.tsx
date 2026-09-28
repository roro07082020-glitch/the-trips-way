import React, { useEffect, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';

type ExperiencesPageProps = {
  onVolver: () => void;
};

export default function ExperiencesPage({
  onVolver,
}: ExperiencesPageProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');

    script.async = true;
    script.src =
      'https://tpwgt.com/content?currency=EUR&trs=577348&shmarker=780827.the-trips-way&language=es&layout=responsive&cards=12&powered_by=true&campaign_id=89&promo_id=3947';

    script.charset = 'utf-8';

    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className="experiences-page">
      <header className="header">
        <button
          className="text-link"
          onClick={onVolver}
        >
          <ArrowLeft size={17} />
          Back to The Trips Way
        </button>
      </header>

      <main>
        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow gold">
                THE TRIPS WAY
              </p>

              <h1>
                Discover your next
                <br />
                <i>experience.</i>
              </h1>

              <p>
                Tours, activities and experiences
                <br />
                waiting to become part of your journey.
              </p>
            </div>
          </div>

          <div
            ref={widgetRef}
            className="travelpayouts-widget experiences-widget-page"
          />
        </section>
      </main>
    </div>
  );
}

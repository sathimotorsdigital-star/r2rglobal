import Seo from '../components/Seo.jsx';
import PageHeader from '../components/PageHeader.jsx';
import GoogleMap from '../components/GoogleMap.jsx';
import { ContactDetails } from '../components/ContactSection.jsx';
import { SITE } from '../data/site.js';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | R2R Global, Shalimar Garden Extn-II, Ghaziabad"
        description="Contact R2R Global PCB Design Company in Shalimar Garden Extn-II, Ghaziabad. Call Rahul Verma on 84760 24374 or message on WhatsApp."
      />
      <PageHeader eyebrow="Contact" title={SITE.name} text={SITE.tagline} />
      <section aria-label="Contact details and map" className="section-y">
        <div className="container-r2r">
          <div className="mx-auto max-w-3xl">
            <ContactDetails />
          </div>
          <div className="mt-10">
            <GoogleMap className="h-[360px] sm:h-[460px] lg:h-[560px]" />
          </div>
        </div>
      </section>
    </>
  );
}

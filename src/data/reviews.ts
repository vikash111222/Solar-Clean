export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  service: 'Solar Panel Cleaning' | 'Bird Proofing' | 'Gutter Cleaning' | 'Commercial Solar';
  rating: number;
  date: string;
  title: string;
  comment: string;
  verifiedCustomer: boolean;
  systemSize?: string;
  powerIncrease?: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Marcus & Jennifer Sterling',
    location: 'Irvine, CA (Turtle Rock)',
    service: 'Solar Panel Cleaning',
    rating: 5,
    date: 'October 12, 2026',
    title: 'Instant 24% boost in Enphase production app!',
    comment: 'We had not cleaned our 34 rooftop panels in nearly three years. The technician showed us the water test at 0 PPM and worked meticulously with a soft pole brush. By 2 PM that afternoon, our Enphase app showed solar production jumped from 26.4 kWh to 32.8 kWh for the day. Spotless finish and extremely respectful crew.',
    verifiedCustomer: true,
    systemSize: '34 Panels (12.2 kW)',
    powerIncrease: '+24.2% daily output',
  },
  {
    id: 'rev-2',
    name: 'Robert C. Chen',
    location: 'Newport Beach, CA (Newport Coast)',
    service: 'Bird Proofing',
    rating: 5,
    date: 'September 28, 2026',
    title: 'Completely solved our pigeon nightmare without damaging tiles',
    comment: 'Pigeons had taken over the space under our panels on our two-story Spanish tile roof. The noise at 5 AM was unbearable. SoCal Solar Clean pressure-washed the debris out, sanitized the space, and installed black powder-coated wire mesh with non-penetrating clips. Six weeks later, not a single pigeon has returned. Outstanding quality.',
    verifiedCustomer: true,
    systemSize: '28 Panels',
  },
  {
    id: 'rev-3',
    name: 'Diane Vasquez (Facilities Director)',
    location: 'Ontario, CA',
    service: 'Commercial Solar',
    rating: 5,
    date: 'September 15, 2026',
    title: 'Flawless commercial cleaning on our 620-panel warehouse',
    comment: 'We manage a 110,000 sq ft logistics facility with a 240 kW rooftop solar array near Ontario Airport. Aviation fuel and diesel dust had dropped our quarterly yield. SoCal Solar Clean provided full safety rigging, OSHA compliance documents, and finished the job in one weekend. Highly recommended for commercial property managers.',
    verifiedCustomer: true,
    systemSize: '620 Panels (240 kW)',
    powerIncrease: '+18.5% inverter efficiency',
  },
  {
    id: 'rev-4',
    name: 'Gregory Miller',
    location: 'Huntington Beach, CA',
    service: 'Solar Panel Cleaning',
    rating: 5,
    date: 'August 22, 2026',
    title: 'Coastal salt film completely gone — panels look brand new',
    comment: 'Living 6 blocks from the beach, our panels get coated in salty haze and seagull mess. Garden hose water just left white chalky calcification streaks. These guys arrived with their DI filtration rig and washed everything spotless. True 0 PPM water makes a huge difference.',
    verifiedCustomer: true,
    systemSize: '22 Panels',
    powerIncrease: '+21% output',
  },
  {
    id: 'rev-5',
    name: 'Sarah & Keith Larson',
    location: 'Temecula, CA (Redhawk)',
    service: 'Gutter Cleaning',
    rating: 5,
    date: 'August 04, 2026',
    title: 'Bundled solar cleaning and gutter service saved our weekend',
    comment: 'We have mature eucalyptus and pine trees in Redhawk. Our gutters were overflowing and panels were coated in brown dust. The team vacuumed the gutters, flushed all 6 downspouts, and gave our solar system a complete wash. The price bundle was very fair and transparent.',
    verifiedCustomer: true,
    systemSize: '26 Panels + 180 ft Gutters',
  },
  {
    id: 'rev-6',
    name: 'Elena Rostova',
    location: 'San Diego, CA (Carmel Valley)',
    service: 'Solar Panel Cleaning',
    rating: 5,
    date: 'July 19, 2026',
    title: 'With SDG&E electric rates, this service pays for itself immediately',
    comment: 'Given our peak electricity rates in San Diego, every lost solar watt is real money out of pocket. Our bill dropped notably the month after cleaning. Cleaners were polite, on time, and left our patio completely clean.',
    verifiedCustomer: true,
    systemSize: '30 Panels',
    powerIncrease: '+19.8% production',
  },
];

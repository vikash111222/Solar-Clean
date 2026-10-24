export interface GalleryProject {
  id: string;
  title: string;
  category: 'solar-cleaning' | 'bird-proofing' | 'gutter-cleaning' | 'commercial';
  customerType: 'residential' | 'commercial';
  location: string;
  systemSize: string;
  efficiencyGain?: string;
  description: string;
  beforeDetails: string;
  afterDetails: string;
  beforeVisualType: 'heavy-dust' | 'bird-mess' | 'coastal-salt' | 'clogged-gutter' | 'commercial-soot' | 'unprotected-mesh';
  afterVisualType: 'gleaming-solar' | 'mesh-installed' | 'clean-gutter' | 'commercial-clean';
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'gal-1',
    title: 'Residential Solar Wash & Pollen Removal',
    category: 'solar-cleaning',
    customerType: 'residential',
    location: 'Irvine, CA (Turtle Rock)',
    systemSize: '34 Panels (12.2 kW)',
    efficiencyGain: '+24.2% daily production',
    description: 'Rooftop solar array covered in 2 years of airborne foothill dust, pine pollen, and light bird droppings. Cleaned with 0 PPM deionized water.',
    beforeDetails: 'Heavily opaque clay soil dust layer with yellow pollen film blocking photovoltaic cells.',
    afterDetails: '100% spotless, streak-free deep glass reflection showing sky and cloud clarity.',
    beforeVisualType: 'heavy-dust',
    afterVisualType: 'gleaming-solar',
  },
  {
    id: 'gal-2',
    title: 'Severe Pigeon Nesting & Critter Guard Installation',
    category: 'bird-proofing',
    customerType: 'residential',
    location: 'Mission Viejo, CA',
    systemSize: '28 Panels on Spanish S-Tile Roof',
    description: 'Active pigeon colony nested under panels. Cleared nesting debris, sanitized underside, and installed 1/2-inch black PVC-coated steel mesh with non-penetrating solar clips.',
    beforeDetails: 'Massive accumulation of twigs, droppings, and feathers clogging tile channels and overheating wiring.',
    afterDetails: 'Clean, sanitized perimeter with sleek architectural black mesh securely fastened and zero visible gaps.',
    beforeVisualType: 'bird-mess',
    afterVisualType: 'mesh-installed',
  },
  {
    id: 'gal-3',
    title: 'Commercial Logistics Center 240 kW Array',
    category: 'commercial',
    customerType: 'commercial',
    location: 'Ontario, CA',
    systemSize: '620 Commercial Panels (240 kW)',
    efficiencyGain: '+18.5% inverter output',
    description: 'High-volume logistics distribution center near freeway and airport. Diesel soot and particulate was removed using multi-pole pure water wash.',
    beforeDetails: 'Black exhaust particulate film adhering to glass surface across commercial flat roof.',
    afterDetails: 'Crystal clean deep navy monocrystalline solar array restored to manufacturer nameplate output.',
    beforeVisualType: 'commercial-soot',
    afterVisualType: 'commercial-clean',
  },
  {
    id: 'gal-4',
    title: 'Oceanfront Coastal Salt Film Dissolution',
    category: 'solar-cleaning',
    customerType: 'residential',
    location: 'Huntington Beach, CA',
    systemSize: '22 Panels',
    efficiencyGain: '+21% energy recovery',
    description: 'Coastal home subjected to humid morning marine layers and ocean salt spray. Deionized water dissolved sticky marine crust without chemical detergents.',
    beforeDetails: 'Opaque white crystalline salt scale and sticky airborne grease reflecting sunlight.',
    afterDetails: 'Ultra-clear anti-reflective glass surface with zero residue or calcium rings.',
    beforeVisualType: 'coastal-salt',
    afterVisualType: 'gleaming-solar',
  },
  {
    id: 'gal-5',
    title: 'Full Eaves & Downspout Debris Vacuuming',
    category: 'gutter-cleaning',
    customerType: 'residential',
    location: 'Rancho Cucamonga, CA',
    systemSize: '220 Linear Feet of Seamless Gutters',
    description: 'Gutters choked with pine needles and eucalyptus leaves following high Santa Ana wind storm. Fully vacuumed, cleared, and downspouts water-flushed.',
    beforeDetails: 'Packed vegetation causing gutter overflow, pooling water, and risk of fascia rot.',
    afterDetails: 'Pristine aluminum gutter channel free of silt and leaves, ensuring free flow to downspouts.',
    beforeVisualType: 'clogged-gutter',
    afterVisualType: 'clean-gutter',
  },
  {
    id: 'gal-6',
    title: 'Commercial Multi-Family Bird Barrier Shield',
    category: 'bird-proofing',
    customerType: 'commercial',
    location: 'Anaheim Hills, CA',
    systemSize: '140 Panels across 4 Apartment Buildings',
    description: 'Commercial HOA apartment complex with heavy bird activity beneath solar carports and roof arrays. Completely sealed against bird entry.',
    beforeDetails: 'Open gaps under panel edges allowing birds to roost directly against high-voltage wiring.',
    afterDetails: 'Uniform commercial-grade galvanized mesh barrier preserving warranty and stopping bird intrusion.',
    beforeVisualType: 'unprotected-mesh',
    afterVisualType: 'mesh-installed',
  },
];

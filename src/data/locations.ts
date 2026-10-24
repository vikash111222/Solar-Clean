export interface LocationData {
  slug: string;
  cityName: string;
  county: string;
  state: string;
  zipCodes: string[];
  sunnyDaysPerYear: number;
  averageDustLevel: 'Moderate' | 'High' | 'Very High' | 'Coastal Salt Mist' | 'Moderate to Coastal Mist';
  localChallenge: string;
  solarSoilingImpact: string;
  popularNeighborhoods: string[];
  description: string;
  localCleaningRecommendation: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SO_CAL_COUNTIES = [
  'Orange County',
  'Los Angeles County',
  'Riverside County',
  'San Bernardino County',
  'San Diego County',
];

export const LOCATIONS: LocationData[] = [
  {
    slug: 'los-angeles-ca',
    cityName: 'Los Angeles',
    county: 'Los Angeles County',
    state: 'CA',
    zipCodes: ['90001', '90012', '90024', '90045', '90049', '90066', '90077', '90210'],
    sunnyDaysPerYear: 284,
    averageDustLevel: 'Very High',
    localChallenge: 'Dense urban smog, freeway fine particulate matter, brake dust, and heavy pigeon populations.',
    solarSoilingImpact: 'Urban particulate creates a dark microscopic film across photovoltaic glass, cutting solar yields by 15% to 25% if unwashed.',
    popularNeighborhoods: ['Westwood', 'Brentwood', 'Silver Lake', 'Studio City', 'Pacific Palisades', 'Downtown LA'],
    description: 'Solar installations across Los Angeles face severe environmental soiling from freeway exhaust, urban particulate, and dry inland winds. Routine 0 PPM deionized water cleaning keeps residential arrays and commercial rooftop systems generating maximum kilowatt-hours.',
    localCleaningRecommendation: 'Every 4 to 6 months due to heavy urban fallout and smog film.',
    faqs: [
      {
        question: 'Why do Los Angeles solar panels accumulate black grime so quickly?',
        answer: 'Los Angeles has dense freeway traffic and atmospheric inversion layers that trap exhaust soot and fine diesel particles onto rooftop glass. Rain in LA is acidic and evaporates quickly, baking the soot into an opaque crust that tap water cannot safely remove.',
      },
      {
        question: 'Do you service multi-story residential and commercial properties in LA?',
        answer: 'Yes. Our crews use ultra-light carbon fiber water-fed poles up to 55 feet and OSHA-compliant rooftop safety rigging for both hillside residential estates and flat commercial rooftops.',
      },
      {
        question: 'Are pigeons a common problem for LA solar systems?',
        answer: 'Extremely common. Pigeons seek the shade and warmth beneath solar panels in the LA basin. Our black PVC-coated steel mesh barriers prevent birds from roosting without voiding your panel warranty.',
      },
    ],
  },
  {
    slug: 'long-beach-ca',
    cityName: 'Long Beach',
    county: 'Los Angeles County',
    state: 'CA',
    zipCodes: ['90802', '90803', '90807', '90808', '90815'],
    sunnyDaysPerYear: 287,
    averageDustLevel: 'Coastal Salt Mist',
    localChallenge: 'Marine layer humidity, airborne salt crystals from the Pacific, and industrial port emissions.',
    solarSoilingImpact: 'Salt mist binds with industrial soot from port traffic, forming sticky silicate scales that standard garden hoses leave behind.',
    popularNeighborhoods: ['Belmont Shore', 'Naples', 'Bixby Knolls', 'El Dorado Park', 'Los Altos'],
    description: 'Long Beach properties experience a dual environmental challenge: coastal marine layer salt mist paired with port logistics particulate. Deionized pure water neutralizes salt deposits and preserves the anti-reflective glass coating.',
    localCleaningRecommendation: 'Twice a year (spring after rain season and late summer during peak solar generation).',
    faqs: [
      {
        question: 'How does coastal salt air affect Long Beach solar panels?',
        answer: 'Salt spray dries into microscopic crystalline films on solar glass, refracting incoming sunlight away from the photovoltaic cells and degrading system efficiency by up to 20%.',
      },
      {
        question: 'Can tap water be used to clean solar panels in Long Beach?',
        answer: 'Long Beach tap water has elevated mineral hardness (often 200–350 PPM TDS). Using a garden hose leaves white calcium spots that permanently etch the glass over time.',
      },
      {
        question: 'Do you clean solar carports and commercial arrays near the Long Beach port?',
        answer: 'Yes, we specialize in commercial solar carports, industrial distribution warehouses, and office park arrays throughout Long Beach.',
      },
    ],
  },
  {
    slug: 'anaheim-ca',
    cityName: 'Anaheim',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92801', '92805', '92807', '92808', '92867'],
    sunnyDaysPerYear: 280,
    averageDustLevel: 'High',
    localChallenge: 'Santa Ana wind dust blowoff from the canyon, freeway corridors (91 & 57), and suburban pigeon nesting.',
    solarSoilingImpact: 'Canyon dust storms coat panels in fine silicate clay, while pigeons nest under Spanish tile rooftops in Anaheim Hills.',
    popularNeighborhoods: ['Anaheim Hills', 'Platinum Triangle', 'West Anaheim', 'The Colony Historic District'],
    description: 'Anaheim combines bustling commercial centers with scenic hillside communities prone to Santa Ana wind gusts. We deliver non-abrasive pure water washes and solar critter guard installations across Anaheim and Anaheim Hills.',
    localCleaningRecommendation: 'Twice annually, with an extra rinse after severe Santa Ana wind events.',
    faqs: [
      {
        question: 'How do the Santa Ana winds affect solar panels in Anaheim Hills?',
        answer: 'Santa Ana winds blow fine particulate from the Santa Ana Canyon directly onto rooftop arrays. This abrasive dust creates an insulating layer that cuts solar output.',
      },
      {
        question: 'Why are pigeons nesting under solar panels in Anaheim?',
        answer: 'Tile roofs provide safe cavities under the panels where birds are shielded from predators, hawks, and midday heat. We install non-penetrating perimeter mesh that permanently keeps them out.',
      },
      {
        question: 'Do you clean commercial solar installations in Anaheim industrial parks?',
        answer: 'Yes, we service industrial rooftops, retail centers, and automotive solar structures throughout Anaheim.',
      },
    ],
  },
  {
    slug: 'irvine-ca',
    cityName: 'Irvine',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92602', '92603', '92604', '92606', '92612', '92614', '92618', '92620'],
    sunnyDaysPerYear: 281,
    averageDustLevel: 'Moderate',
    localChallenge: 'HOA aesthetic standards, seasonal eucalyptus & pine pollen, and high solar panel density.',
    solarSoilingImpact: 'Pollen and inland dust create a yellow-brown haze that reduces kilowatt output by 12% to 18% during peak summer.',
    popularNeighborhoods: ['Woodbridge', 'Turtle Rock', 'Northwood', 'Shady Canyon', 'Great Park', 'Orchard Hills', 'Quail Hill'],
    description: 'As one of Southern California’s greenest master-planned cities, Irvine has one of the highest solar adoption rates. We keep residential HOA roofs compliant and commercial Irvine Spectrum campuses operating at peak green energy efficiency.',
    localCleaningRecommendation: 'Twice per year (April/May after spring pollination and September before winter).',
    faqs: [
      {
        question: 'Are your cleaning methods approved by Irvine HOAs?',
        answer: 'Yes. Our pure water cleaning leaves no soap suds, no chemicals on driveways, and no visible spotting. We maintain full liability insurance and respect HOA quiet hours and property guidelines.',
      },
      {
        question: 'Will cleaning my solar panels void my manufacturer warranty?',
        answer: 'No. Leading solar manufacturers (SunPower, Tesla, LG, REC, Qcells) explicitly require pure water cleaning with non-abrasive soft brushes and forbid pressure washers and chemical detergents.',
      },
      {
        question: 'Do you offer bird proofing for Irvine two-story homes?',
        answer: 'Yes. We protect tile roofs across Woodbridge, Turtle Rock, and Portola Springs with galvanized UV-coated steel mesh that preserves roof integrity.',
      },
    ],
  },
  {
    slug: 'santa-ana-ca',
    cityName: 'Santa Ana',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92701', '92703', '92704', '92705', '92706', '92707'],
    sunnyDaysPerYear: 280,
    averageDustLevel: 'High',
    localChallenge: 'Urban density, heavy traffic corridors, commercial logistics dust, and pigeon roosting.',
    solarSoilingImpact: 'Combined vehicle emissions and municipal dust build up rapidly on low-tilt residential and commercial arrays.',
    popularNeighborhoods: ['Floral Park', 'Historic French Park', 'Metro East', 'Riverview West'],
    description: 'Santa Ana homeowners and business operators benefit from dependable, fully insured exterior cleaning. Our spot-free 0 PPM deionized water system removes stubborn urban grime without harsh detergents.',
    localCleaningRecommendation: 'Every 5 to 6 months for optimal return on solar investment.',
    faqs: [
      {
        question: 'Why not just use high-pressure water to wash solar panels?',
        answer: 'High-pressure washers can shatter tempered solar glass, destroy silicon cell micro-bonds, and force moisture through the edge seals, causing permanent electrical failure.',
      },
      {
        question: 'Do you offer bundled solar and gutter cleaning in Santa Ana?',
        answer: 'Yes. Bundling gutter clearing with solar cleaning is our most popular package, saving you money and protecting your home from clogged downspout overflow.',
      },
      {
        question: 'How fast can I get a quote in Santa Ana?',
        answer: 'Within minutes. Submit your address via our multi-step quote tool and our satellite sizing team will calculate your panel count and provide transparent pricing.',
      },
    ],
  },
  {
    slug: 'huntington-beach-ca',
    cityName: 'Huntington Beach',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92646', '92647', '92648', '92649'],
    sunnyDaysPerYear: 281,
    averageDustLevel: 'Coastal Salt Mist',
    localChallenge: 'Dense morning marine layer fog, sticky salt spray, sand drift, and aggressive seagull droppings.',
    solarSoilingImpact: 'Marine salt moisture reacts with bird droppings to form caustic hotspots on solar cells, permanently reducing panel lifespan if ignored.',
    popularNeighborhoods: ['Huntington Harbour', 'Downtown / Pier Colony', 'Seacliff', 'Goldenwest', 'Beachwalk'],
    description: 'Known as Surf City USA, Huntington Beach enjoys abundant sunshine coupled with persistent coastal marine fog. Deionized pure water effectively dissolves salt crusts and corrosive seagull droppings from coastal residential and commercial roofs.',
    localCleaningRecommendation: '3 times per year or quarterly for properties within 2 miles of the coast.',
    faqs: [
      {
        question: 'Why are seagull droppings worse than normal bird droppings for solar panels?',
        answer: 'Seagulls consume fish and marine organisms, creating highly acidic, sticky droppings that standard rain cannot wash away. These droppings create hard shading that can cause solar cell hotspot burning.',
      },
      {
        question: 'Does coastal salt air damage solar panel frames in Huntington Beach?',
        answer: 'Over time, salt mist can corrode aluminum frames and glass coatings. Pure water cleaning gently flushes away marine salts, preventing long-term corrosion.',
      },
      {
        question: 'Do you clean solar panels on Huntington Harbour multi-story waterfront homes?',
        answer: 'Yes. Our crew is experienced with steep pitch tile roofs, waterfront angles, and delicate architectural features.',
      },
    ],
  },
  {
    slug: 'costa-mesa-ca',
    cityName: 'Costa Mesa',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92626', '92627', '92628'],
    sunnyDaysPerYear: 282,
    averageDustLevel: 'Moderate',
    localChallenge: 'Highway 55 & 405 corridor exhaust, coastal moisture blend, and residential roof pollen.',
    solarSoilingImpact: 'Mixed urban particulate and coastal humidity create a cloudy glass residue.',
    popularNeighborhoods: ['Eastside Costa Mesa', 'Mesa Verde', 'South Coast Metro', 'Westside Costa Mesa'],
    description: 'From Eastside residential cottages to South Coast Metro commercial centers, Costa Mesa solar owners rely on our spotless deionized water technology to keep power output high and electric bills low.',
    localCleaningRecommendation: 'Twice per year.',
    faqs: [
      {
        question: 'What is the difference between Costa Mesa tap water and pure deionized water?',
        answer: 'Costa Mesa municipal tap water averages 250+ PPM of dissolved minerals (calcium, magnesium, bicarbonates). Our system filters that water down to 0 PPM, so when the panels dry in the sun, zero white mineral scale is left.',
      },
      {
        question: 'Can you clean my gutters on the same visit in Costa Mesa?',
        answer: 'Yes. We clear all gutter channels, bag the debris, and flush downspouts to ensure smooth drainage before the winter rainy season.',
      },
      {
        question: 'Are your technicians insured?',
        answer: 'Yes, we carry $2,000,000 in commercial general liability insurance and follow strict OSHA fall protection standards.',
      },
    ],
  },
  {
    slug: 'newport-beach-ca',
    cityName: 'Newport Beach',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92660', '92661', '92662', '92663'],
    sunnyDaysPerYear: 283,
    averageDustLevel: 'Coastal Salt Mist',
    localChallenge: 'Direct ocean spray, high humidity, seagull activity, and delicate high-end architectural roofs.',
    solarSoilingImpact: 'Salt haze diminishes luxury solar systems and can stain expensive clay tile or slate roof surfaces if washed improperly.',
    popularNeighborhoods: ['Newport Coast', 'Corona del Mar', 'Balboa Island', 'Promontory Bay', 'Big Canyon'],
    description: 'Newport Beach properties require the utmost care and white-glove service. Our technicians specialize in luxury estate roof access, preserving delicate Spanish clay tile while restoring pristine clarity to solar arrays.',
    localCleaningRecommendation: 'Quarterly or 3 times per year for oceanfront and ridge-top residences.',
    faqs: [
      {
        question: 'Will walking on my custom clay tile roof crack the tiles in Newport Coast?',
        answer: 'Our technicians are trained in specialized weight distribution techniques, using padded ladder stand-offs and water-fed extension poles from stable anchor points so we avoid walking directly on fragile tiles whenever possible.',
      },
      {
        question: 'Do you clean solar panels on Balboa Island or the Peninsula?',
        answer: 'Yes, we routinely service waterfront homes on Balboa Island, Lido Isle, and along the Newport Peninsula.',
      },
      {
        question: 'How do you guarantee spot-free results in direct coastal sunlight?',
        answer: 'We test our water with a digital TDS meter at every job site to verify true 0 PPM. Pure water acts like a dirt magnet and evaporates 100% spotless even under bright coastal sun.',
      },
    ],
  },
  {
    slug: 'fullerton-ca',
    cityName: 'Fullerton',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92831', '92832', '92833', '92835'],
    sunnyDaysPerYear: 280,
    averageDustLevel: 'High',
    localChallenge: 'Deciduous tree pollen in historic neighborhoods, hillside dust in Sunny Hills, and pigeon colonies.',
    solarSoilingImpact: 'Tree sap and bird debris stick to solar glass, blocking sunlight from reaching individual solar cells.',
    popularNeighborhoods: ['Sunny Hills', 'Downtown Fullerton', 'Raymond Hills', 'Amerige Heights'],
    description: 'Fullerton boasts established tree-lined streets in historic districts and hillside developments in Sunny Hills. We protect panels against leaf debris, tree sap, and aggressive bird nesting with premium cleaning and critter guard mesh.',
    localCleaningRecommendation: 'Twice per year, especially following spring tree blooms.',
    faqs: [
      {
        question: 'My Fullerton home is surrounded by large pine and oak trees. How does that affect solar?',
        answer: 'Trees drop sap, pollen, and needles directly onto solar arrays and gutters. Tree sap hardens in the sun and requires specialized soft-bristle agitated cleaning with 0 PPM pure water.',
      },
      {
        question: 'Can you install pigeon guards around my solar array in Sunny Hills?',
        answer: 'Yes. We install galvanized PVC-coated mesh with non-puncturing nylon clips that fasten securely to the panel lip without voiding your solar warranty.',
      },
      {
        question: 'Do you clear clogged downspouts in Fullerton?',
        answer: 'Yes, we snake and flush downspouts to the ground to ensure clear water flow away from your foundation.',
      },
    ],
  },
  {
    slug: 'orange-ca',
    cityName: 'Orange',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92865', '92866', '92867', '92868', '92869'],
    sunnyDaysPerYear: 281,
    averageDustLevel: 'High',
    localChallenge: 'Foothill dust from Orange Park Acres, dry seasonal winds, and tree debris.',
    solarSoilingImpact: 'Inland dust layers can reduce energy generation by up to 22% during hot summer months.',
    popularNeighborhoods: ['Old Towne Orange', 'Orange Park Acres', 'El Modena', 'Serrano Heights'],
    description: 'From historic Old Towne bungalows to equestrian properties in Orange Park Acres and modern homes in Serrano Heights, our team keeps Orange solar panels crystal clean and performing at peak capacity.',
    localCleaningRecommendation: 'Every 6 months.',
    faqs: [
      {
        question: 'How much energy do I lose when my panels are dirty in Orange?',
        answer: 'Field studies by the National Renewable Energy Laboratory (NREL) show that soiling in Southern California typically leads to a 15% to 25% energy drop. In dust-prone foothill areas like Orange Park Acres, losses can exceed 30%.',
      },
      {
        question: 'Do you use chemicals or detergents?',
        answer: 'Never. Detergents leave a microscopic soapy film that actually attracts more dust, and chemicals can damage the anti-reflective glass coating or kill surrounding lawn landscaping.',
      },
      {
        question: 'Can I just wait for the rain in Orange?',
        answer: 'California rain is infrequent and carries airborne dust. Light drizzle turns dust into muddy water that dries with heavy streak lines, often making panel output worse.',
      },
    ],
  },
  {
    slug: 'tustin-ca',
    cityName: 'Tustin',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92780', '92782'],
    sunnyDaysPerYear: 280,
    averageDustLevel: 'Moderate',
    localChallenge: 'Suburban dust, agricultural soil remnants, and pigeon attraction to high-pitch roofs.',
    solarSoilingImpact: 'Dust reduces solar production during peak billing periods when Edison electricity rates are highest.',
    popularNeighborhoods: ['Tustin Ranch', 'Old Town Tustin', 'Tustin Meadows', 'Columbus Square'],
    description: 'Tustin homeowners take pride in clean, energy-efficient residences. We serve Tustin Ranch and historic Old Town neighborhoods with certified solar washing, critter proofing, and rain gutter maintenance.',
    localCleaningRecommendation: 'Twice annually.',
    faqs: [
      {
        question: 'How do clean solar panels help with high SoCal Edison (SCE) electric bills in Tustin?',
        answer: 'Under Time-Of-Use (TOU) billing plans, peak afternoon electricity costs the most. Clean panels generate maximum peak kilowatt-hours, offsetting high-tier rates and maximizing your NEM credits.',
      },
      {
        question: 'How long does a residential solar cleaning take?',
        answer: 'Most residential systems (20–40 panels) take approximately 1 to 1.5 hours for a thorough pure-water wash and visual inspection.',
      },
      {
        question: 'Do you provide before and after photos?',
        answer: 'Always. We document your system before and after every service so you can inspect the pristine results directly from your phone.',
      },
    ],
  },
  {
    slug: 'mission-viejo-ca',
    cityName: 'Mission Viejo',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92691', '92692'],
    sunnyDaysPerYear: 284,
    averageDustLevel: 'Moderate',
    localChallenge: 'Lakefront moisture, hillside dust, high summer heat, and pigeon nesting on Spanish tile.',
    solarSoilingImpact: 'Hot summer conditions amplify power losses when dust prevents heat dissipation and solar absorption.',
    popularNeighborhoods: ['Casta del Sol', 'Pacific Hills', 'Madrid Fore', 'Aegean Hills', 'Lake Mission Viejo Area'],
    description: 'Mission Viejo is characterized by rolling hills, expansive Spanish tile roofs, and beautiful master-planned communities. Our gentle pure water technology protects your tiles and restores maximum solar production.',
    localCleaningRecommendation: 'Twice per year (spring and late summer).',
    faqs: [
      {
        question: 'Why are pigeons so attracted to solar panels in Mission Viejo?',
        answer: 'South Orange County tile roofs offer curved gaps where pigeons can nest safely beneath solar panels, away from neighborhood coyotes, owls, and heat. Bird proofing stops them permanently.',
      },
      {
        question: 'Can pigeon droppings under panels cause health hazards?',
        answer: 'Yes. Dried pigeon guano harbors pathogens like histoplasmosis and parasites such as bird mites. When nests are under panels, debris can wash into gutters and contaminate rain runoff.',
      },
      {
        question: 'Do you clean gutters on two-story homes in Pacific Hills?',
        answer: 'Yes, our equipment is rated for multi-story residential homes across Mission Viejo.',
      },
    ],
  },
  {
    slug: 'lake-forest-ca',
    cityName: 'Lake Forest',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92610', '92630'],
    sunnyDaysPerYear: 283,
    averageDustLevel: 'Moderate',
    localChallenge: 'Saddleback Valley pollen, pine needles, and dust from adjacent foothills.',
    solarSoilingImpact: 'Pine needles accumulate between panels, and fine dust forms a continuous light-blocking veil.',
    popularNeighborhoods: ['Baker Ranch', 'Portola Hills', 'Foothill Ranch', 'Serrano Highlands'],
    description: 'Nestled beneath the Saddleback mountains, Lake Forest experiences both foothill dust winds and heavy pine pollen. We provide complete solar washing and bird guard protection across Baker Ranch and Foothill Ranch.',
    localCleaningRecommendation: 'Twice annually.',
    faqs: [
      {
        question: 'Can pine needles stuck between panels cause fire hazards in Lake Forest?',
        answer: 'Yes. Dry pine needles and leaves trapped beneath solar panels or around electrical connectors represent a serious wildfire risk during hot dry summers. We safely blow out and vacuum all trapped debris.',
      },
      {
        question: 'What pure water equipment do you use?',
        answer: 'We operate mobile multi-stage reverse osmosis and deionization filtration rigs that filter tap water down to 0 parts per million TDS on-site.',
      },
      {
        question: 'Do you clean solar panels on Spanish tile roofs in Baker Ranch?',
        answer: 'Yes, our team is trained in zero-breakage Spanish tile navigation and safety techniques.',
      },
    ],
  },
  {
    slug: 'laguna-niguel-ca',
    cityName: 'Laguna Niguel',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92677'],
    sunnyDaysPerYear: 283,
    averageDustLevel: 'Moderate to Coastal Mist',
    localChallenge: 'Coastal canyon humidity, ridge-top ocean breezes, and bird intrusion.',
    solarSoilingImpact: 'Morning fog dampens hillside dust into a muddy crust that inhibits solar panel performance.',
    popularNeighborhoods: ['Bear Brand Ranch', 'El Niguel Heights', 'Marina Hills', 'San Joaquin Hills', 'Ocean Ranch'],
    description: 'Laguna Niguel properties sit in scenic coastal canyons where cool marine air meets hillside sunshine. We deliver spotless pure water solar washing and custom critter guards that safeguard prestigious homes.',
    localCleaningRecommendation: 'Twice per year.',
    faqs: [
      {
        question: 'Why does morning fog make my solar panels dirtier in Laguna Niguel?',
        answer: 'Coastal fog introduces moisture that traps airborne dust particles onto the glass. As the midday sun evaporates the moisture, the dust bakes into a stubborn haze.',
      },
      {
        question: 'Will your crew use harsh chemicals on my roof?',
        answer: 'Zero chemicals. We use only 100% demineralized pure water, which is completely safe for your roof tiles, landscaping, pets, and local waterways.',
      },
      {
        question: 'Do you offer bird proofing for custom luxury roofs?',
        answer: 'Yes. Our black architectural mesh fits snugly against the contour of clay tile and Spanish S-tile without drilling into panels.',
      },
    ],
  },
  {
    slug: 'san-clemente-ca',
    cityName: 'San Clemente',
    county: 'Orange County',
    state: 'CA',
    zipCodes: ['92672', '92673'],
    sunnyDaysPerYear: 284,
    averageDustLevel: 'Coastal Salt Mist',
    localChallenge: 'Direct ocean salt fog, persistent sea breezes, seagull roosting, and terracotta tile roofs.',
    solarSoilingImpact: 'Salt air crystallization degrades solar efficiency and can cause accelerated galvanic corrosion if unaddressed.',
    popularNeighborhoods: ['Talega', 'Southwest San Clemente', 'Marblehead', 'Forster Ranch', 'Coast District'],
    description: 'Known for its Spanish Village by the Sea architecture and red clay tile roofs, San Clemente requires specialized care. We protect historic and modern coastal homes alike with deionized water washing and pigeon prevention.',
    localCleaningRecommendation: '3 times per year or after heavy marine layer stretches.',
    faqs: [
      {
        question: 'How do you clean solar panels on red Spanish clay tile roofs in San Clemente?',
        answer: 'Spanish clay tile is brittle. We utilize carbon-fiber water-fed poles from eaves or roof ridges, eliminating point pressure on delicate tiles and ensuring zero tile damage.',
      },
      {
        question: 'Does the marine layer salt reduce solar generation in San Clemente?',
        answer: 'Yes. Even a thin layer of salt film reflects significant sunlight. Cleaning restores full solar irradiance capture and boosts inverter output immediately.',
      },
      {
        question: 'Do you service Talega master-planned communities?',
        answer: 'Yes, we are in Talega weekly providing solar panel washing, bird proofing, and gutter maintenance.',
      },
    ],
  },
  {
    slug: 'riverside-ca',
    cityName: 'Riverside',
    county: 'Riverside County',
    state: 'CA',
    zipCodes: ['92501', '92503', '92504', '92506', '92507', '92508'],
    sunnyDaysPerYear: 277,
    averageDustLevel: 'Very High',
    localChallenge: 'Intense Inland Empire summer heat (100°F+), citrus grove & agricultural dust, Santa Ana wind fallout, and inland smog.',
    solarSoilingImpact: 'Inland Empire heat exacerbates solar soiling; dusty panels run hotter, which exponentially reduces electrical conductivity.',
    popularNeighborhoods: ['Victoria Woods', 'Orangecrest', 'Canyon Crest', 'La Sierra', 'Woodcrest', 'Hawarden Hills'],
    description: 'Riverside enjoys abundant solar radiation, but Inland Empire dust, high temperatures, and agricultural fallout create severe soiling. Our 0 PPM pure water cleaning restores maximum production when cooling demand peaks.',
    localCleaningRecommendation: 'Every 3 to 4 months due to heavy inland dust and wind events.',
    faqs: [
      {
        question: 'Why do solar panels in Riverside lose more power from dust than coastal areas?',
        answer: 'Riverside experiences high ambient heat and dry inland winds. When panels are covered in dust, their operating temperature rises, which significantly degrades photovoltaic efficiency during peak AC usage periods.',
      },
      {
        question: 'Can you clean large commercial warehouse arrays in Riverside?',
        answer: 'Yes. We clean multi-megawatt commercial solar arrays, distribution centers, and logistics facilities throughout Riverside County.',
      },
      {
        question: 'What time of day do you clean solar panels in Riverside during summer?',
        answer: 'In hot summer months, we wash panels early in the morning before panels get scorching hot, preventing thermal shock to the glass and ensuring rapid, spotless drying.',
      },
    ],
  },
  {
    slug: 'corona-ca',
    cityName: 'Corona',
    county: 'Riverside County',
    state: 'CA',
    zipCodes: ['92879', '92880', '92881', '92882', '92883'],
    sunnyDaysPerYear: 276,
    averageDustLevel: 'High',
    localChallenge: 'Wind turbulence through the Santa Ana Canyon, 91 freeway particulate, quarry and foothill dust.',
    solarSoilingImpact: 'Canyon winds deposit heavy silicate and quarry dust across rooftop solar arrays.',
    popularNeighborhoods: ['Dos Lagos', 'South Corona', 'Sierra Del Oro', 'Corona Hills', 'Eagle Glen'],
    description: 'Located at the mouth of Santa Ana Canyon, Corona experiences high wind speeds and airborne dust. We keep residential arrays and commercial rooftops in Eagle Glen and South Corona producing peak power.',
    localCleaningRecommendation: 'Every 4 to 6 months.',
    faqs: [
      {
        question: 'Why do Sierra Del Oro and South Corona homes get so dusty?',
        answer: 'Wind currents through the canyon carry fine quarry dust and highway grit that settles onto low-angle solar panels. Rain simply turns this into a muddy glaze.',
      },
      {
        question: 'Will bird proofing stop pigeons in Corona neighborhoods?',
        answer: 'Yes, our 1/2-inch galvanized mesh completely encloses the panel perimeter, eliminating pigeon nesting and droppings.',
      },
      {
        question: 'Do you offer service plans for Corona homeowners?',
        answer: 'Yes, we provide bi-annual and quarterly recurring maintenance plans with priority scheduling and discounted rates.',
      },
    ],
  },
  {
    slug: 'ontario-ca',
    cityName: 'Ontario',
    county: 'San Bernardino County',
    state: 'CA',
    zipCodes: ['91761', '91762', '91764'],
    sunnyDaysPerYear: 282,
    averageDustLevel: 'Very High',
    localChallenge: 'Air cargo logistics particulate (Ontario Airport), heavy distribution warehouse trucking soot, and inland heat.',
    solarSoilingImpact: 'Aviation and diesel soot creates a greasy film that cuts commercial and residential solar output significantly.',
    popularNeighborhoods: ['Ontario Ranch', 'Creekside', 'Guasti', 'Downtown Ontario'],
    description: 'Ontario is an industrial powerhouse with massive commercial solar installations and rapidly growing master-planned communities like Ontario Ranch. We provide commercial and residential pure water solar washing.',
    localCleaningRecommendation: 'Quarterly for commercial buildings; every 4–6 months for residential.',
    faqs: [
      {
        question: 'How does airport and warehouse logistics traffic impact Ontario solar arrays?',
        answer: 'Fine diesel soot and aviation fuel residues fall onto rooftop panels. This oily particulate cannot be rinsed away by rain and requires soft agitated brushing with pure deionized water.',
      },
      {
        question: 'Do you service commercial flat roofs in Ontario logistics centers?',
        answer: 'Yes, we specialize in high-acreage commercial flat roofs with safety lines, high-volume pure water rigs, and full OSHA certifications.',
      },
      {
        question: 'Do you clean solar panels in new construction communities like Ontario Ranch?',
        answer: 'Yes! Construction dust from surrounding developments often coats new solar panels within weeks of homeowner move-in.',
      },
    ],
  },
  {
    slug: 'rancho-cucamonga-ca',
    cityName: 'Rancho Cucamonga',
    county: 'San Bernardino County',
    state: 'CA',
    zipCodes: ['91701', '91730', '91737', '91739'],
    sunnyDaysPerYear: 285,
    averageDustLevel: 'Very High',
    localChallenge: 'Extreme Santa Ana wind speeds along the San Gabriel mountain base, dry mountain runoff dust, and pine needles.',
    solarSoilingImpact: 'High-velocity wind gusts deposit thick dirt coats and blow dry vegetation onto roofs and gutters.',
    popularNeighborhoods: ['Victoria Gardens Area', 'Alta Loma', 'Red Hill', 'Etiwanda', 'Day Creek'],
    description: 'Rancho Cucamonga sits directly below the San Gabriel Mountains, facing some of the fiercest wind gusts in Southern California. We restore solar output and protect roofs with bird proofing and gutter clearing.',
    localCleaningRecommendation: '3 times per year (spring, mid-summer, and post-fall wind season).',
    faqs: [
      {
        question: 'How do the Etiwanda winds impact solar arrays in Rancho Cucamonga?',
        answer: 'The Etiwanda wind funnel creates extreme dust storms that leave a thick layer of fine grit. Left uncleaned, this causes significant power drop-offs right when summer electricity rates are highest.',
      },
      {
        question: 'Can gutter cleaning prevent roof damage in Alta Loma?',
        answer: 'Yes. Heavy winds blow mountain pine needles and leaves into gutters. Clogged gutters lead to fascia rot and water intrusion during winter rains.',
      },
      {
        question: 'How do you secure bird guards against 60+ MPH wind gusts in Rancho Cucamonga?',
        answer: 'We use heavy-gauge galvanized steel mesh fastened with premium locking speed-clips every 12 to 18 inches, engineered to withstand extreme Santa Ana wind gusts.',
      },
    ],
  },
  {
    slug: 'temecula-ca',
    cityName: 'Temecula',
    county: 'Riverside County',
    state: 'CA',
    zipCodes: ['92590', '92591', '92592'],
    sunnyDaysPerYear: 276,
    averageDustLevel: 'High',
    localChallenge: 'Vineyard and agricultural dust, valley heat, dry summer breezes, and high bird populations.',
    solarSoilingImpact: 'Agricultural soil particulate and vineyard bird pressure combine to heavily soil solar arrays.',
    popularNeighborhoods: ['Wine Country', 'Meadowview', 'Redhawk', 'Harveston', 'Paseo Del Sol', 'Wolf Creek'],
    description: 'Temecula combines scenic wine country estates with bustling master-planned residential communities. We keep solar panels operating at maximum efficiency through seasonal pure water washing and critter proofing.',
    localCleaningRecommendation: 'Twice per year, plus post-harvest season for Wine Country estates.',
    faqs: [
      {
        question: 'Do vineyards in Temecula affect residential solar panels?',
        answer: 'Yes. Agricultural tilling, harvest machinery, and dry valley winds loft organic soil dust into the air, which settles as an opaque coating on solar panels throughout Temecula and Murrieta.',
      },
      {
        question: 'Are birds a big problem in Temecula Wine Country?',
        answer: 'Very much so. The abundance of vineyard fruit attracts starlings, doves, and pigeons, who look for cool roosting areas under rooftop solar arrays.',
      },
      {
        question: 'Do you clean solar ground-mount arrays on Temecula acreage?',
        answer: 'Yes, we clean both rooftop residential/commercial systems and large residential ground-mount solar arrays.',
      },
    ],
  },
  {
    slug: 'carlsbad-ca',
    cityName: 'Carlsbad',
    county: 'San Diego County',
    state: 'CA',
    zipCodes: ['92008', '92009', '92010', '92011'],
    sunnyDaysPerYear: 263,
    averageDustLevel: 'Coastal Salt Mist',
    localChallenge: 'Coastal lagoon humidity, ocean salt air, morning marine layer, and coastal seagull droppings.',
    solarSoilingImpact: 'Salt mist binds with inland pollen, creating a greasy film that diffuses sunlight away from cells.',
    popularNeighborhoods: ['Aviara', 'La Costa', 'Carlsbad Village', 'Bressi Ranch', 'Calavera Hills'],
    description: 'Carlsbad offers coastal beauty from Bressi Ranch to luxury Aviara resorts. Our 0 PPM deionized water system neutralizes salt spray and dissolves bird droppings without chemical residue.',
    localCleaningRecommendation: 'Twice to three times per year.',
    faqs: [
      {
        question: 'How does Carlsbad coastal humidity affect solar output?',
        answer: 'Marine fog keeps panels damp overnight, causing airborne dust to stick and bake onto the glass as soon as the sun breaks through, reducing power generation by 15% to 20%.',
      },
      {
        question: 'Can you service corporate tech and biotech campuses in Carlsbad?',
        answer: 'Yes, we provide scheduled commercial solar maintenance for Carlsbad commercial business parks and life science campuses.',
      },
      {
        question: 'Will pure water cleaning damage my coastal landscaping below the roof?',
        answer: 'Not at all. Pure water contains zero soaps, detergents, or phosphates. It is completely non-toxic and harmless to flowers, lawns, and koi ponds.',
      },
    ],
  },
  {
    slug: 'oceanside-ca',
    cityName: 'Oceanside',
    county: 'San Diego County',
    state: 'CA',
    zipCodes: ['92054', '92056', '92057', '92058'],
    sunnyDaysPerYear: 266,
    averageDustLevel: 'Coastal Salt Mist',
    localChallenge: 'Direct ocean breeze, Camp Pendleton training dust drift, and coastal seagull activity.',
    solarSoilingImpact: 'Salt spray and coastal soil create persistent glare reflection and reduce energy collection.',
    popularNeighborhoods: ['Ocean Hills', 'Rancho Del Oro', 'South O', 'Fire Mountain', 'Guajome'],
    description: 'As North County San Diego’s coastal hub, Oceanside properties experience strong ocean breezes and marine moisture. We keep residential and commercial solar systems generating maximum energy.',
    localCleaningRecommendation: 'Twice to three times annually.',
    faqs: [
      {
        question: 'Why is rain water not enough to clean my Oceanside solar panels?',
        answer: 'Rain in coastal San Diego is light and intermittent. It mixes with airborne sea salt and dust into muddy droplets that dry into stubborn mineral spots.',
      },
      {
        question: 'Do you clean solar panels for military and veteran families near Camp Pendleton?',
        answer: 'Yes! We proudly service military families, homeowners, and commercial facilities throughout Oceanside and surrounding areas.',
      },
      {
        question: 'Can bird proofing stop seagulls from roosting under panels in Oceanside?',
        answer: 'Yes. Our heavy-duty wire mesh barriers completely close the gap between roof and panel, preventing seagulls and pigeons from setting up nests.',
      },
    ],
  },
  {
    slug: 'escondido-ca',
    cityName: 'Escondido',
    county: 'San Diego County',
    state: 'CA',
    zipCodes: ['92025', '92026', '92027', '92029'],
    sunnyDaysPerYear: 275,
    averageDustLevel: 'High',
    localChallenge: 'Inland North County valley heat, avocado and citrus orchard dust, and oak tree pollen.',
    solarSoilingImpact: 'Hot summer conditions and orchard dust combine to diminish photovoltaic power output.',
    popularNeighborhoods: ['Eureka Springs', 'Felicita', 'Old Escondido', 'Country Club Area', 'Del Lago'],
    description: 'Escondido is an inland valley community with high solar potential and warm, sunny days. Our pure water washing and bird barrier services protect solar systems across residential neighborhoods and avocado grove estates.',
    localCleaningRecommendation: 'Twice per year (spring and late summer).',
    faqs: [
      {
        question: 'How does inland valley heat affect dirty solar panels in Escondido?',
        answer: 'Dirty panels absorb extra heat rather than converting sunlight into electricity. Since solar panels lose efficiency as temperatures climb above 77°F, keeping them clean helps them run cooler and produce more power.',
      },
      {
        question: 'Do you clean large rural solar ground mounts in Escondido?',
        answer: 'Yes, we clean both roof-mounted arrays and multi-acre ground installations across North County San Diego.',
      },
      {
        question: 'Do you provide gutter cleaning in Escondido?',
        answer: 'Yes, we remove leaves and debris from gutters and flush all downspouts to prepare properties for rainy winter seasons.',
      },
    ],
  },
  {
    slug: 'san-diego-ca',
    cityName: 'San Diego',
    county: 'San Diego County',
    state: 'CA',
    zipCodes: ['92101', '92109', '92115', '92117', '92121', '92127', '92128', '92130'],
    sunnyDaysPerYear: 266,
    averageDustLevel: 'Moderate to Coastal Mist',
    localChallenge: 'May Gray / June Gloom marine layers, canyon dust, SDG&E’s highest-in-the-nation electric rates, and pigeon colonies.',
    solarSoilingImpact: 'Because San Diego Gas & Electric (SDG&E) has some of the highest electric rates in the country, every lost kilowatt-hour from dirty panels costs homeowners significant money.',
    popularNeighborhoods: ['La Jolla', 'Pacific Beach', 'Carmel Valley', 'Rancho Bernardo', 'Scripps Ranch', 'Mission Hills', 'Point Loma'],
    description: 'With SDG&E electric rates among the highest in the United States, keeping solar panels at peak efficiency in San Diego is essential. We serve coastal communities and inland valleys with guaranteed spot-free 0 PPM pure water cleaning and bird proofing.',
    localCleaningRecommendation: 'Twice annually for inland areas; 3 times per year along coastal neighborhoods.',
    faqs: [
      {
        question: 'Why is solar panel cleaning especially valuable in San Diego with SDG&E rates?',
        answer: 'SDG&E charges high tier and peak Time-of-Use rates (often exceeding 50–70¢ per kWh). When dirty panels lose 20% efficiency, homeowners end up purchasing expensive grid power. A professional cleaning pays for itself in energy savings within months.',
      },
      {
        question: 'How does May Gray and June Gloom marine fog affect San Diego solar panels?',
        answer: 'Persistent marine layer cloudiness carries salt and humidity that creates a sticky surface. Dust settles onto the wet glass, forming a film that reduces solar energy capture.',
      },
      {
        question: 'Do you clean commercial solar installations across San Diego?',
        answer: 'Yes. We clean solar arrays for commercial offices, life science facilities in Sorrento Valley, schools, churches, and retail centers throughout San Diego County.',
      },
    ],
  },
];

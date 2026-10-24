export interface FAQItem {
  id: string;
  category: 'pure-water' | 'solar-cleaning' | 'bird-proofing' | 'gutter-cleaning' | 'commercial';
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'pure-water',
    question: 'Why do you use filtered and deionized water targeting 0 PPM TDS?',
    answer: 'Standard tap water in Southern California contains between 200 and 450 Parts Per Million (PPM) of dissolved mineral solids like calcium, magnesium, and silica. When tap water dries on hot solar panels in the California sun, the water evaporates and leaves behind hard white mineral scale. Our 4-stage reverse osmosis and deionization filtration system removes 100% of these dissolved minerals down to 0 PPM, ensuring the water dries completely spot-free with zero residue.',
  },
  {
    id: 'faq-2',
    category: 'pure-water',
    question: 'Can tap water or a garden hose damage solar panels?',
    answer: 'Over repeated cycles, hard tap water deposits calcium carbonate and silica scale onto solar glass. In hot sunny climates like Southern California, this mineral scale bakes onto the anti-reflective coating and becomes nearly impossible to remove without abrasive chemicals, which void manufacturer warranties. Using 0 PPM pure water avoids mineral spotting entirely.',
  },
  {
    id: 'faq-3',
    category: 'solar-cleaning',
    question: 'How often should solar panels be cleaned in Southern California?',
    answer: 'Most residential systems in Southern California benefit from cleaning every 6 months (typically in spring to clear winter soot/pollen, and late summer/early fall to maximize peak production before shorter days). Properties near freeway corridors, dusty foothill areas, or agricultural regions may require cleaning every 3 to 4 months.',
  },
  {
    id: 'faq-4',
    category: 'solar-cleaning',
    question: 'Does rain naturally clean my solar panels?',
    answer: 'Southern California rarely experiences heavy, prolonged rain. Most rain events are light drizzles that mix with airborne smog, dust, and pollen, turning into muddy water that dries with heavy streak lines. Rain acts like running dirty water across your car windshield without wipers.',
  },
  {
    id: 'faq-5',
    category: 'solar-cleaning',
    question: 'Will professional cleaning void my solar panel warranty?',
    answer: 'No. In fact, leading solar manufacturers (Tesla, SunPower, Qcells, Canadian Solar, REC) recommend regular cleaning using demineralized water and soft non-abrasive brushes. Our method uses zero harsh chemicals and zero high pressure, keeping all equipment and roof warranties 100% intact.',
  },
  {
    id: 'faq-6',
    category: 'bird-proofing',
    question: 'How does solar panel bird proofing work, and will it drill into my panels?',
    answer: 'We never drill into solar panels or roof tiles. We install heavy-gauge galvanized and black PVC-coated steel mesh around the entire perimeter of your solar array. The mesh is secured using specialized UV-resistant, non-penetrating solar panel clips that slide onto the underside lip of the panel frame. This keeps birds, squirrels, and rodents out while protecting your solar warranty.',
  },
  {
    id: 'faq-7',
    category: 'bird-proofing',
    question: 'Why do pigeons nest under solar panels?',
    answer: 'In Southern California, rooftop solar panels provide an ideal microclimate: shelter from wind and rain, protection from predatory hawks and owls, and shade from the scorching summer sun. Once pigeons nest, they produce large volumes of corrosive guano that damages solar wiring, creates foul odors, and attracts bird mites.',
  },
  {
    id: 'faq-8',
    category: 'gutter-cleaning',
    question: 'Why is regular gutter cleaning necessary in Southern California?',
    answer: 'Even with low overall rainfall, Southern California experiences sudden, intense winter atmospheric river storms. Clogged gutters trap pine needles, leaves, and roof silt, causing rainwater to overflow behind the fascia board, leading to dry rot, roof leaks, and water pooling around building foundations.',
  },
  {
    id: 'faq-9',
    category: 'gutter-cleaning',
    question: 'Do you clear the downspouts as well as the gutters?',
    answer: 'Yes. Every gutter service includes clearing all debris from horizontal gutter runs, bagging and removing the debris from your property, and testing/flushing every downspout with clean water to confirm smooth drainage to the ground.',
  },
  {
    id: 'faq-10',
    category: 'commercial',
    question: 'What commercial solar cleaning capabilities do you provide?',
    answer: 'We service commercial and industrial solar installations ranging from 50 kW rooftop arrays to multi-megawatt ground mounts and corporate solar parking canopies. Our teams are OSHA-compliant, fully insured with $2,000,000 general liability, and can perform service during off-peak hours or weekends to prevent disruption.',
  },
  {
    id: 'faq-11',
    category: 'commercial',
    question: 'Do you provide detailed post-service reports for property managers?',
    answer: 'Yes. Commercial property managers receive a comprehensive completion packet including high-resolution before-and-after photographs, water quality TDS verification readings, and notes on any physical abnormalities (such as cracked glass, loose conduit, or thermal shading issues) identified during the visual inspection.',
  },
];

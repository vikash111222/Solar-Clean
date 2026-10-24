/**
 * Configurable company details and business settings.
 * All phone numbers, emails, business hours, and license details are defined here
 * and can be edited easily by the business owner.
 */

export interface CompanyConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  smsNumber: string;
  smsFormatted: string;
  email: string;
  supportEmail: string;
  address: {
    region: string;
    state: string;
    serviceRadiusMiles: number;
    headquartersCity: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  licenseAndInsurance: {
    licenseType: string;
    licenseNumber: string;
    insuranceCoverage: string;
    workersComp: boolean;
    oshaCompliant: boolean;
  };
  socialLinks: {
    googleBusiness: string;
    yelp: string;
    facebook: string;
    instagram: string;
  };
  pureWaterSpec: {
    targetTDS: number;
    filtrationStages: number;
    waterType: string;
  };
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: 'SoCal Solar Clean',
  legalName: 'SoCal Solar & Exterior Cleaning Solutions LLC',
  shortName: 'SoCal Solar',
  tagline: 'Professional Solar Panel Cleaning & Bird Proofing Across Southern California',
  phone: '+18885550199',
  phoneFormatted: '(888) 555-0199',
  smsNumber: '+18885550199',
  smsFormatted: '(888) 555-0199',
  email: 'quotes@socalsolarclean.com',
  supportEmail: 'service@socalsolarclean.com',
  address: {
    region: 'Southern California',
    state: 'CA',
    serviceRadiusMiles: 75,
    headquartersCity: 'Irvine',
  },
  businessHours: {
    weekdays: 'Monday – Friday: 7:00 AM – 6:00 PM',
    saturday: 'Saturday: 8:00 AM – 4:00 PM',
    sunday: 'Sunday: By Appointment for Commercial Projects',
  },
  licenseAndInsurance: {
    licenseType: 'California CSLB Registered & Insured Specialist',
    licenseNumber: 'Verified SoCal Exterior Specialist',
    insuranceCoverage: '$2,000,000 Commercial General Liability Policy',
    workersComp: true,
    oshaCompliant: true,
  },
  socialLinks: {
    googleBusiness: '#',
    yelp: '#',
    facebook: '#',
    instagram: '#',
  },
  pureWaterSpec: {
    targetTDS: 0,
    filtrationStages: 4,
    waterType: '4-Stage Reverse Osmosis & Mixed-Bed Deionized Water (0 PPM TDS)',
  },
};

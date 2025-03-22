import { AboutUsData, AccordionProps } from "@/components/aboutUs";
import { client } from "@/components/pages/home/clients";
import { HeroCarousalItem } from "@/components/pages/home/heroCarousal";
import { TestimonialItem } from "@/components/pages/home/testimonials";
import { DoorComponentData } from "@/components/pages/home/whatWeOffer";
import { whyChooseUsData } from "@/components/pages/home/whyChooseUs";

// Interface for Image objects
interface Image {
  url: string;
}

// Interface for Hero Items
interface HeroItem {
  title: string;
  boldTitle: string;
  description: string;
  ctabuttontext: string;
}

// Interface for Hero Items Collection
interface HeroItemsCollection {
  items: HeroItem[];
}

// Interface for FAQ Items
interface FAQItem {
  title: string;
  description: string;
}

// Interface for FAQ Items Collection
interface FAQItemsCollection {
  items: FAQItem[];
}

// Interface for Door Component Items
export interface DoorComponentItem {
  name: string;
  description: string;
  link: string;
  image: Image;
}

// Interface for Door Component
export interface DoorComponent {
  tag: string;
  heading: string;
  subheading: string | null;
  description: string;
  itemsCollection: {
    items: DoorComponentItem[];
  };
}

// Interface for Why Choose Us Section
export interface WhyChooseUs {
  heading: string;
  description: string;
  bulletPoints: string[];
  whyChooseUsImage: Image;
}
// Interface for Industry Expertise Items Collection
interface itemsCollection {
  items:DoorComponentItem[];
}

// Interface for Testimonials
interface Testimonial {
  name: string;
  description: string;
  link: string;
  image: Image;
}

// Interface for Testimonials Collection
interface TestimonialsCollection {
  items: Testimonial[];
}

// Interface for Domestic Clients
interface DomesticClient {
  name: string;
  description: string;
  link: string | null;
  image: Image;
}

// Interface for Domestic Clients Collection
interface DomesticClientsCollection {
  items: DomesticClient[];
}

// Interface for International Clients
interface InternationalClient {
  name: string;
  description: string;
  link: string | null;
  image: Image;
}

// Interface for International Clients Collection
interface InternationalClientsCollection {
  items: InternationalClient[];
}

export interface HomePageProps {
  aboutUsTag: string;
  aboutUsHeading: string;
  aboutUsDescription: string;
  yearsOfExperience: number;
  aboutUsBulletPoints:{
    visionMissionQualityData:AccordionProps[]
  };
  clientSatisfactionRate: number;
  projectsCreated: number;
  industryExpertiseTag: string;
  industryExpertiseTitle: string;
  industryExpertiseDescription: string;
  aboutusImage: Image;
  heroItemsCollection: HeroItemsCollection;
  faqsbulletpointsCollection: FAQItemsCollection;
  doorComponent: DoorComponent;
  whyChooseUs: WhyChooseUs;
  itemsCollection: itemsCollection;
  testimonialsCollection: TestimonialsCollection;
  domesticClientsCollection: DomesticClientsCollection;
  internationalClientsCollection: InternationalClientsCollection;
}

export interface HomePagePropsExpected {
  heroData: HeroCarousalItem[];
  aboutUsData: AboutUsData;
  visionMissionQualityData: AccordionProps[];
  whyChooseUsData: whyChooseUsData;
  doorComponentData: DoorComponentData;
  IndustriesWeServeData: DoorComponentData;
  TestimonialsData: TestimonialItem[];
  domesticClients: client[];
  internationalClients: client[];
  faqsData:FAQItem[]
}

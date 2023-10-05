import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Features3 from '~/components/widgets/Features3';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  callToActionData,
  content2Data,
  contentData,
  faqsData2,
  featuresData,
  heroData,
  pricingData,
  socialProofData,
} from '~/shared/data';
import Contact from '~/components/widgets/Contact';
import Features from '~/components/widgets/section';
import Features4 from '~/components/widgets/Features4';
import Hero2 from '~/components/widgets/Hero2';
import { HeroProps } from '~/shared/types';

export const metadata: Metadata = {
  title: SITE.title,
};

export const hero2Data: HeroProps = {
  title: 'Great companies are made by great people',
  subtitle:
    'Vivamus venenatis, lectus a pellentesque placerat, felis tellus ultrices eros, et aliquam sapien nibh sed sem. Fusce ut ante eget purus viverra malesuada. Morbi eget mi maximus, ultricies urna eget, tristique lorem. Fusce cursus venenatis quam, a blandit lectus vulputate id. Praesent id interdum orci, vitae condimentum dui. Fusce pulvinar ante eget mattis semper. Suspendisse in diam massa.',
  callToAction: {
    text: 'View jobs',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: '/image2.jpeg',
    alt: 'Hero TailNext',
  },
};

export default function Page() {
  return (
    <>
      <Hero data={heroData} />

      <Features />

      <Hero2 data={hero2Data} />

      <Testimonial />
      {/* <Features4 {...featuresData} /> */}
      {/* <SocialProof {...socialProofData} /> */}
      {/* <Features3 {...featuresData} />
      <Content {...contentData} />
      <Content {...content2Data} />
      <Steps />
      <Testimonial />
      <FAQs2 {...faqsData2} />
      <Pricing {...pricingData} />
      <Team />
      <Contact />
      <CallToAction2 {...callToActionData} /> */}
    </>
  );
}

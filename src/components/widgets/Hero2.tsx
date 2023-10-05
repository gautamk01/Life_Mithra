import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import HeaderWidget from '../common/HeaderWidget';

const header = {
  title: (
    <>
      <span className="whitespace-nowrap">Manoj Kumar</span>
    </>
  ),
  subtitle:
    "I am a seasoned pedagogical expert with over 15 years of experience in training and development. I'm also a motivational speaker with a diverse background, having worked with junior and senior school students, college students, teachers, and parents. My expertise extends to corporate training sessions and curriculum design for holistic student development in today's dynamic world. I excel in mentoring and counseling students based on their individual needs and am skilled in program coordination and innovative activity-based learning methods.",
  highlight: 'Coach',
  position: 'left',
};
const Hero2 = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, callToAction2, image } = props.data;

  return (
    <section className="mt-[-72px] bg-primary-50 dark:bg-slate-800" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
        <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
          <div className="mx-auto flex max-w-5xl basis-[86%] items-center">
            <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pb-0 md:pr-8 lg:pr-16">
              <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />
            </div>
          </div>
          <div className="block flex-1 items-center md:flex">
            <div className="relative m-auto h-full max-w-4xl object-cover">
              {image && (
                <img
                  className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
                  src="/image2.jpeg"
                  alt="image description"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

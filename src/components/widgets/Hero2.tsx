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
const Hero2 = () => {
  return (
    <section className="bg-primary-50 dark:bg-slate-800 lg:h-[70vh]" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 md:flex md:h-screen 2xl:h-auto">
        <div className="block  text-center md:flex  md:text-left ">
          <div className="mx-auto flex max-w-2xl basis-[60%] items-center lg:h-[70vh]">
            <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pb-0 md:pr-8 lg:pr-16">
              <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />
            </div>
          </div>
          <div className="block flex-1 items-center md:flex lg:h-[70vh]">
            <div className=" relative m-auto h-[50%] w-full object-cover">
              <div className="flex h-[100%] w-[100%] items-center justify-center ">
                <Image
                  src="/image2.jpeg"
                  alt="sadf"
                  width={700}
                  height={1}
                  // Add max-w-full and max-h-full classes
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

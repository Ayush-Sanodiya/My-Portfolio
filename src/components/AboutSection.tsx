import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import aboutMeImage from "../assets/images/regenerated_image_1778969395729.png";


export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-12 sm:py-20 overflow-hidden bg-[#E5E5E5] group">
      <div className="max-w-7xl mx-auto w-full z-20 relative">
        {/* Mobile/Tablet Layout */}
        <div className="flex flex-col lg:hidden w-full gap-8 z-30 pt-10">

          {/* Top Section: Text Left, Image Right */}
          <div className="grid grid-cols-[55%_45%] gap-2 sm:gap-4 items-center">
            {/* Left: Heading & Title */}
            <div className="flex flex-col justify-center text-[#1A1A1A] pr-2 sm:pr-0">
              <FadeIn delay={0.1} y={20}>
                <h2 className="font-black leading-[1] tracking-tight text-[clamp(1.4rem,5.5vw,4.2rem)] whitespace-nowrap font-display">
                  Namaste ji,
                </h2>
              </FadeIn>

              <FadeIn delay={0.2} y={20} className="relative w-fit mt-1 sm:mt-2">
                <h3 className="text-[clamp(1rem,3.8vw,2.8rem)] tracking-normal font-display whitespace-nowrap">
                  <span className="font-medium text-[0.75em]">I am</span>{' '}
                  <span className="font-semibold relative inline-block">
                    <span className="relative z-10">Ayush Sanodiya</span>
                    <div className="absolute bg-[#FFFF00] w-full h-[5px] sm:h-[8px] bottom-[10%] left-0 z-0"></div>
                  </span>
                </h3>
              </FadeIn>

              <FadeIn delay={0.3} y={15} className="mt-4 sm:mt-10">
                <span className="text-[clamp(1rem,4vw,2.5rem)] text-[#444] italic font-['Caveat'] whitespace-nowrap">
                  Creative Designer
                </span>
              </FadeIn>
            </div>

            {/* Right: Image */}
            <div className="w-full h-full flex items-center justify-center relative">
              <FadeIn delay={0.4} x={20} className="h-full w-full">
                <div className="relative w-full aspect-square sm:aspect-[4/5] overflow-hidden rounded-xl">
                  <img
                    src={aboutMeImage}
                    alt="Ayush portrait"
                    className="w-full h-full object-cover grayscale brightness-110 object-[center_top]"
                  />
                  <div className="absolute inset-y-0 left-[60%] w-[15%] bg-[#FFFF00] mix-blend-multiply opacity-80"></div>
                  <div className="absolute bottom-2 right-2 z-40">
                    <ContactButton variant="glass" className="!px-3 !py-1 !text-[8px] shadow-lg" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Bottom Section: Paragraphs */}
          <div className="flex flex-col gap-6 text-[#0C0C0C] text-[clamp(1rem,4vw,1.25rem)] leading-relaxed mt-4">
            <FadeIn delay={0.5} y={20}>
              <p className="opacity-90">
                Greetings, ladies and gentlemen. Allow me to introduce myself.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} y={20}>
              <p className="opacity-90">
                I am a <span className="font-bold">self-made, passionate creative designer</span> who always stops at billboards to ask myself how I can make them better. Looking at a very <span className="font-bold underline decoration-[#FFFF00] decoration-4 underline-offset-4">well-structured design</span> always brings a smile to my face. That's why I wanted to get into design – to put smiles on people faces.
              </p>
            </FadeIn>

            <FadeIn delay={0.7} y={20}>
              <p className="opacity-90">
                I love blending <span className="font-bold">strategy with aesthetics</span> to create brands that don't just look good, but actually work.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Desktop Layout (Unchanged) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-center h-full">

          {/* Left Side: Content */}
          <div className="flex flex-col justify-center text-[#0C0C0C] z-30 lg:pt-10">
            <FadeIn delay={0.1} y={40}>
              <h2 className="font-black leading-[0.9] tracking-tight text-[clamp(2.5rem,8.5vw,119px)] mb-2 whitespace-nowrap font-display">
                Namaste <span className="text-[#0C0C0C]">ji,</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} y={30} className="relative w-fit">
              <h3 className="font-bold text-[clamp(1.5rem,5vw,48px)] tracking-tight font-display">
                I am <span className="relative inline-block">
                  <div
                    className="absolute bg-[#FFFF00] -z-10 transform -rotate-1"
                    style={{
                      marginTop: '0px',
                      marginLeft: '6px',
                      marginRight: '4px',
                      marginBottom: '8px',
                      paddingBottom: '0px',
                      paddingTop: '0px',
                      height: '8.8px',
                      left: '-4px',
                      right: '-4px',
                      bottom: '2px'
                    }}
                  ></div>
                  Ayush Sanodiya
                </span>
              </h3>
            </FadeIn>

            <FadeIn delay={0.3} y={20} className="mt-4 mb-12">
              <span className="text-[clamp(1.5rem,3vw,32px)] opacity-80 italic font-['Caveat']">
                Creative Designer
              </span>
            </FadeIn>

            <div className="flex flex-col gap-6 max-w-xl text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed">
              <FadeIn delay={0.4} y={20}>
                <p className="opacity-90">
                  Greetings, ladies and gentlemen. Allow me to introduce myself.
                </p>
              </FadeIn>

              <FadeIn delay={0.5} y={20}>
                <p className="opacity-90">
                  I am a <span className="font-bold">self-made, passionate creative designer</span> who always stops at billboards to ask myself how I can make them better. Looking at a very <span className="font-bold underline decoration-[#FFFF00] decoration-4 underline-offset-4">well-structured design</span> always brings a smile to my face. That's why I wanted to get into design – to put smiles on people faces.
                </p>
              </FadeIn>

              <FadeIn delay={0.6} y={20}>
                <p className="opacity-90">
                  I love blending <span className="font-bold">strategy with aesthetics</span> to create brands that don't just look good, but actually work.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Right Side: Image with Yellow Stripe */}
          <div className="w-full h-full flex items-center justify-center lg:justify-end relative">
            <FadeIn delay={0.4} x={50} className="h-full w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[80vh] overflow-hidden rounded-3xl lg:rounded-none">
                <img
                  src={aboutMeImage}
                  alt="Ayush portrait"
                  className="w-full h-full object-cover grayscale brightness-110 lg:object-[center_top]"
                />
                {/* Yellow Stripe Accent */}
                <div className="absolute inset-y-0 left-[60%] w-[15%] bg-[#FFFF00] mix-blend-multiply opacity-80"></div>


                {/* Small Contact Button overlay */}
                <div className="absolute bottom-6 right-6 z-40">
                  <ContactButton variant="glass" className="!px-6 !py-2 !text-[10px] sm:!text-[11px] shadow-xl" />
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

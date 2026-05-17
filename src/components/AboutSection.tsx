import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import aboutMeImage from "../assets/images/regenerated_image_1778969395729.png";


export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-12 sm:py-20 overflow-hidden bg-[#E5E5E5] group">
      <div className="max-w-7xl mx-auto w-full z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
          
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center text-[#0C0C0C] z-30 lg:pt-10">
            <FadeIn delay={0.1} y={40}>
              <h2 className="font-black leading-[0.9] tracking-tight text-[clamp(2.5rem,8.5vw,119px)] mb-2 whitespace-nowrap" style={{ fontFamily: 'Raleway' }}>
                Namaste <span className="text-[#0C0C0C]">ji,</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2} y={30} className="relative w-fit">
              <h3 className="font-bold text-[clamp(1.5rem,5vw,48px)] tracking-tight" style={{ fontFamily: 'Raleway' }}>
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
              <span className="text-[clamp(1.5rem,3vw,32px)] opacity-80 italic italic-font" style={{ fontFamily: '"Caveat", cursive' }}>
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

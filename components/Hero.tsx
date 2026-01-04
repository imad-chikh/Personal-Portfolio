
export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-white w-full h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-green-500 text-xs font-medium mb-6 border border-blue-100 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Available for new projects
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6 animate-fade-up animation-delay-150">
              Crafting Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
                Mobile Experiences
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 mb-10 animate-fade-up animation-delay-300">
              Im Imad, a Mobile App Developer specializing in Flutter & AI Integration. 
              I build intuitive, high-performance apps that solve real-world problems.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                // onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-hero animate-fade-up animation-delay-450"
              >
                View My Work
              </button>
              <button
                // onClick={() => switchView('contact')} 
                className="px-8 py-3 border border-gray-200 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all shadow-sm hover:shadow-md btn-hero animate-fade-up animation-delay-600"
              >
                Contact Me
              </button>

            </div>

          </div>
          

        </div>
      </section>
    </>
  );
}


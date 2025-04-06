const Intro = () => {
    return (
      <div className="bg-neutral-900 mt-0 relative"  id="intro">
        {/* Background Image with low opacity */}
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: "url('/introbackground.jpg')" }}></div>
  
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-24 lg:pb-32 relative z-10">
          <h1 className="font-semibold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center sm:text-left">
            <span className="text-[orange]">Shirt-Fy</span> Visualize custom shirts in 3D before production!
          </h1>
          <div className="max-w-4xl mx-auto sm:mx-0">
            <p className="mt-4 sm:mt-6 text-neutral-400 text-base sm:text-lg md:text-lg text-center sm:text-left">
              Design, customize, and visualize shirts in 3D before production. Our platform helps clothing shops preview fabrics, styles, and fits with an interactive 3D model, ensuring perfect designs every time.
            </p>
          </div>
        </div>
  
        <div className="relative overflow-hidden pt-6 sm:pt-8 bg-neutral-900 min-h-[150px] sm:min-h-[180px]">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
               style={{ backgroundImage: "url('/introbackground.jpg')" }}></div>
  
          <div className="relative z-10">
            <div className="max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
              <div className="mb-4 flex justify-center">
                <div className="text-center">
                  <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-orange-600 to-orange-600 shadow-lg shadow-transparent hover:shadow-orange-700/50 border border-transparent text-white text-sm sm:text-base font-semibold rounded-full focus:outline-none focus:shadow-orange-700/50 py-3 px-6 sm:py-4 sm:px-8" href="#">
                    Get started
                  </a>
                </div>
              </div>
  
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4 sm:gap-6">
                {/* Removed unnecessary SVG code */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default Intro;

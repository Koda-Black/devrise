const Hero = () => {
  return (
    <section className="bg-cover bg-center lg:px-16 xl:px-24">
      <div className="relative isolate px-16 pt-14 lg:px-0 usm:pt-0 usm:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="ml-0 max-w-2xl py-20 sm:py-40 lg:py-20 usm:pb-8">
          <div className="lg:text-left usm:text-center">
            <p className="mt-6 text-lg leading-8 text-gray-600">WE ARE</p>
            <h1 className="font-bold tracking-tight lg:text-5xl text-gray-900 usm:text-4xl usm:font-semibold usm:pb-8 usm:pt-4">
              Helping professionals pivot into tech at a flexible pace one day
              at a time
            </h1>
            <div className="mt-10 flex items-center usm:justify-center gap-x-6 lg:justify-start lg:gap-x-10">
              <a
                href="https://wa.link/hr1emn"
                className="join-us-btn rounded-md bg-primary-color px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join our Community
              </a>
              <a
                href="#"
                className="learn-more-btn text-md font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-27rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

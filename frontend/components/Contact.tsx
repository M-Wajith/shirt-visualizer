import React from 'react';

const Contact = () => {
  return (
    <div className="w-full bg-gray-100 py-10 px-6 md:px-12 lg:px-24 flex justify-center scroll-mt-15" id="contact">
      <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-8 w-full max-w-5xl">
        {/* Contact */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8 mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-3 text-gray-600 max-w-lg mx-auto">
              Feel free to reach out to us for any inquiries or assistance. We’d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
            <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-100">
              <img
                className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                src="/shirtfy_contact.png"
                alt="Contacts Image"
              />
            </div>
            {/* End Col */}

            <div className="space-y-8 lg:space-y-12">
              <div>
                <h3 className="mb-5 font-semibold text-black dark:text-black">
                  Our address
                </h3>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                  <div className="flex gap-4">
                    <svg
                      className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>

                    <div className="grow">
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Sri Lanka
                      </p>
                      <address className="mt-1 text-black not-italic dark:text-black">
                         Dehiwala,
                        <br />
                        Colombo
                      </address>
                    </div>
                  </div>
                </div>
                {/* End Grid */}
              </div>

              <div>
                <h3 className="mb-5 font-semibold text-black dark:text-black">
                  Our contacts
                </h3>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                  <div className="flex gap-4">
                    <svg
                      className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                    </svg>

                    <div className="grow">
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Email us
                      </p>
                      <p>
                        <a
                          className="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-orange-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black dark:text-black dark:hover:before:bg-white dark:focus:before:bg-white"
                          href="mailto:wajith.im@gmail.com"
                        >
                          wajith.im@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 size-5 text-gray-400 dark:text-neutral-500"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0-4 0" />
                  </svg>




                    <div className="grow">
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        LinkedIn
                      </p>
                      <p>
                        <a
                          className="relative inline-block font-medium text-gray before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-orange-400 hover:before:bg-black focus:outline-hidden focus:before:bg-black dark:text-black dark:hover:before:bg-white dark:focus:before:bg-white"
                          href="https://www.linkedin.com/in/mohamed-wajith-/"
                        >
                          Mohamed Wajith

                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Grid */}
              </div>
            </div>
            {/* End Col */}
          </div>
        </div>
        {/* End Contact */}
      </div>
    </div>
  );
};

export default Contact;

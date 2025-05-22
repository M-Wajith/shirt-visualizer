import React, { useEffect } from "react";

const Signin = ({
  setShowsignin,
}: {
  setShowsignin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeModal = () => {
    setShowsignin(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      id="hs-modal-signin"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden backdrop-blur-sm backdrop-brightness-75"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-modal-signin-label"
    >
      <div className="relative w-full max-w-md px-4 sm:px-0">
        <div className="relative bg-white border border-gray-200 rounded-xl shadow-xl">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-orange-600 transition duration-200 focus:outline-none"
            aria-label="Close"
            onClick={closeModal}
          >
            ✕
          </button>

          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <h3
                id="hs-modal-signin-label"
                className="text-2xl font-semibold text-gray-800"
              >
                Welcome Back, Admin
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Enter your credentials to access the admin panel
              </p>
            </div>

            <form>
              <div className="space-y-5">
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="admin@example.com"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-orange-500 hover:underline"
                    >
                      Forgot?
                    </a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="••••••••"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-4 py-3 text-sm font-medium rounded-lg bg-orange-500 text-white hover:bg-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 py-3 mx-auto bg-white border-t border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      
      <div className="text-center space-y-4">
        {/* Logo / Brand */}
        <div>
          <a href="#" aria-label="Brand" className="text-2xl font-bold text-gray-900 dark:text-white">
            Shirt-Fy
          </a>
        </div>

        {/* Tagline or note */}
        <p className="text-gray-500 dark:text-neutral-400 text-sm">
             Designed and developed by <a href="#" className="text-orange-600 hover:underline dark:text-orange-500">Wajith</a>.
        </p>


        {/* Copyright */}
        <p className="text-gray-400 text-sm dark:text-neutral-500">
          &copy; 2025 Shirt-Fy. All rights reserved.
        </p>

        {/* Social Links */}
        <nav aria-label="Social media" className="flex justify-center gap-4">
          {[
            {
              href: '#',
              label: 'Google',
              svg: (
                <path d="M15.545 6.558c-.272-1.808-1.75-3.116-3.545-3.116-2.031 0-3.582 1.746-3.582 3.793 0 .297.034.586.095.864H5.77v1.984h2.86c-.105.64-.526 1.766-1.504 2.491l.002-.001 1.944 1.47c.977-.949 1.654-2.348 1.654-4.032 0-.256-.02-.507-.056-.75H15.545z" />
              ),
            },
            {
              href: '#',
              label: 'Twitter',
              svg: (
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.141 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.539a6.658 6.658 0 0 1-1.889.518A3.301 3.301 0 0 0 15.555 2.4a6.533 6.533 0 0 1-2.084.797 3.286 3.286 0 0 0-5.595 2.994A9.325 9.325 0 0 1 1.114 2.1 3.284 3.284 0 0 0 2.13 7.726a3.267 3.267 0 0 1-1.487-.41v.041a3.285 3.285 0 0 0 2.633 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.616-.057 3.287 3.287 0 0 0 3.067 2.281A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              ),
            },
            {
              href: '#',
              label: 'GitHub',
              svg: (
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.074.547-.174.547-.388 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.727-.497.055-.487.055-.487.803.056 1.225.825 1.225.825.714 1.223 1.872.87 2.329.665.072-.517.279-.87.508-1.07-1.778-.2-3.644-.889-3.644-3.955 0-.874.312-1.588.824-2.148-.083-.202-.358-1.015.078-2.117 0 0 .672-.215 2.2.82a7.648 7.648 0 0 1 2.002-.269c.68.003 1.365.092 2.002.269 1.528-1.035 2.2-.82 2.2-.82.437 1.102.162 1.915.08 2.117.513.56.823 1.274.823 2.148 0 3.073-1.868 3.752-3.65 3.95.287.25.543.739.543 1.489 0 1.075-.01 1.941-.01 2.203 0 .216.144.466.55.387A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              ),
            },
            {
              href: '#',
              label: 'Dribbble',
              svg: (
                <path d="M8 0C3.582 0 0 3.582 0 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM2.099 12.801a6.96 6.96 0 0 1-.913-3.21 13.84 13.84 0 0 1 4.25.094c.208.538.39 1.072.545 1.6-1.496.521-2.865 1.302-3.882 2.516zM8 14.438c-.708 0-1.386-.108-2.026-.31.982-1.233 2.22-2.04 3.547-2.538.457 1.204.783 2.468.964 3.776a6.947 6.947 0 0 1-2.485-.928zM11.74 14.16a13.96 13.96 0 0 0-.896-3.51c.523-.05 1.058-.077 1.604-.077.792 0 1.568.057 2.319.167a6.964 6.964 0 0 1-3.027 3.42zM13.87 9.27a14.5 14.5 0 0 0-2.852-.173 15.05 15.05 0 0 0-.3-.806 15.272 15.272 0 0 0-.393-.972 13.789 13.789 0 0 0 3.699-1.475 6.957 6.957 0 0 1-.154 3.426zM10.672 4.357a12.447 12.447 0 0 1-3.08 1.29 18.987 18.987 0 0 0-1.366-2.433 6.944 6.944 0 0 1 4.446 1.143zM4.6 3.87a17.39 17.39 0 0 1 1.49 2.61A12.306 12.306 0 0 1 1.708 7.7 6.975 6.975 0 0 1 4.6 3.869z" />
              ),
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.label}
              className="inline-flex items-center justify-center size-10 rounded-full border border-transparent text-gray-600 hover:text-black dark:text-neutral-200 dark:hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                {item.svg}
              </svg>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 py-3 mx-auto bg-white border-t border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      <br />
      <div className="text-center space-y-4">
        {/* Logo / Brand */}
        <div>
          <a href="#" aria-label="Brand" className="text-2xl font-bold text-gray-900 dark:text-white">
            Shirt-Fy
          </a>
        </div>

        {/* Tagline or note */}
        <p className="text-gray-500 dark:text-neutral-400 text-sm">
             Designed and developed by <a href="https://github.com/M-Wajith" className="text-orange-600 hover:underline dark:text-orange-500">Wajith</a>.
        </p>


        {/* Copyright */}
        <p className="text-gray-400 text-sm dark:text-neutral-500">
          &copy; 2025 Shirt-Fy. All rights reserved.
        </p>

       
      </div>
    </footer>
  )
}

export default Footer

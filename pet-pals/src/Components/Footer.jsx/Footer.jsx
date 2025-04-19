import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 dark:from-purple-600 dark:via-purple-500 dark:to-purple-400 text-white py-6 text-center">
      <p className="text-lg">
        Made with <span className="text-red-500">❤️</span> by{' '}
        <a
          href="https://github.com/prana-w"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
        >
          prana-w
        </a>
      </p>
      <p className="text-sm mt-2">© 2025 All rights reserved</p>
    </footer>
  )
}

export default Footer

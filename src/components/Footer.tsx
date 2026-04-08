export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-4 md:px-8 lg:px-20 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6 md:gap-8">
        <a 
          href="https://www.linkedin.com/in/sakshee-durshettiwar-product-designer/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs md:text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="#" 
          className="text-xs md:text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Behance
        </a>
      </div>
      <span className="text-xs md:text-sm text-gray-300">©2026</span>
    </footer>
  );
}

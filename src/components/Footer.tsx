export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-20 py-6 flex items-center justify-between">
      <span className="text-sm font-semibold tracking-tight">Sakshee Durshettiwar</span>
      <div className="flex items-center gap-6">
        <a href="#" className="text-xs text-gray-300 hover:text-gray-500 transition-colors">Work</a>
        <a href="#" className="text-xs text-gray-300 hover:text-gray-500 transition-colors">About</a>
        <a href="#" className="text-xs text-gray-300 hover:text-gray-500 transition-colors">LinkedIn</a>
        <a href="#" className="text-xs text-gray-300 hover:text-gray-500 transition-colors">Resume ↗</a>
      </div>
      <span className="text-xs text-gray-300">©2026</span>
    </footer>
  );
}

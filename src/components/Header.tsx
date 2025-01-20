const Header = () => (
  <header className="bg-gray-900 text-white p-6 flex justify-between items-center sticky top-0 z-50 shadow-md">
    <h1 className="text-2xl font-semibold tracking-wide">CineScope</h1>
    <nav className="space-x-6">
      <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
      <a href="/favorites" className="text-gray-300 hover:text-white transition">Favorites</a>
    </nav>
  </header>
);

export default Header;

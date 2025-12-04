function Header() {
  return (
    <header className="bg-yellow-50 shadow-md py-4 px-6 flex flex-col items-center">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🌮</span>
        <h1 className="text-2xl font-bold text-yellow-900">
          Food Truck Paradise
        </h1>
      </div>
      <p className="text-yellow-700 italic mb-4">
        Le paradis des saveurs nomades !
      </p>
      <nav>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <a
              href="#menu"
              className="text-yellow-900 hover:text-yellow-600 transition-colors"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-yellow-900 hover:text-yellow-600 transition-colors"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-yellow-900 hover:text-yellow-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import { Logo } from "./Logo";

export function Header() {
  return (
    <div>
      <header className="w-full py-5  flex items-center justify-center bg-dark-400 border-b border-gray-600 relative">
        <Logo />

        <a
          href="/"
          className="absolute right-24 color-white py-3 px-6 text-sm bg-purpple-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purpple-300 transition-colors"
        >
          Logout
        </a>
      </header>
    </div>
  );
}

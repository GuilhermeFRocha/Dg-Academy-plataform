import { Logo } from "./Logo";

export function Header() {
  return (
    <div>
      <header className="w-full py-5  flex items-center justify-center bg-dark-400 border-b border-gray-600">
        <Logo />
      </header>
    </div>
  );
}

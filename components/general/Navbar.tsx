import { Button } from "../ui/button";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <Logo />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button>Log in</Button>
      </div>
    </nav>
  );
}

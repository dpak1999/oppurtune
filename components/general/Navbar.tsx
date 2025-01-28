import { Button } from "../ui/button";
import Logo from "./Logo";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <Logo />
      <Button>Log in</Button>
    </nav>
  );
}

import { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness } from "lucide-react";

interface LogoProps {
  fontSize?: string;
  iconSize?: number;
}

const Logo: FC<LogoProps> = ({ fontSize = "2xl", iconSize = 20 }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "text-2xl font-extrabold flex self-center gap-1.5",
        fontSize
      )}
    >
      <div
        className={"rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 p-2"}
      >
        <BriefcaseBusiness size={iconSize} className={"stroke-white"} />
      </div>

      <div>
        <span className={"text-stone-500 dark:text-stone-300"}>Oppur</span>
        <span
          className={
            "bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent"
          }
        >
          Tune
        </span>
      </div>
    </Link>
  );
};

export default Logo;

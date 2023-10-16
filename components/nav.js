import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-white fixed top-0 w-full py-4 flex justify-between items-center ease-out duration-300 ${
        hasScrolled ? "nav-blur" : ""
      }`}
    >
      {/* Logo */}
      <span className="px-8 text-2xl font-bold">
      <Link href="/">
        RadTrack
        </Link>
        </span>
      {/* Connect Wallet Button */}
      <div className="px-8">
        <ConnectButton />
      </div>
    </nav>
  );
}

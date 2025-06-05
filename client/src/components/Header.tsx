import * as React from "react";

const NavItem = ({
  label,
  href,
  delay,
}: {
  label: string;
  href: string;
  delay: string;
}): React.ReactNode => {
  return (
    <a
      href={href}
      className="text-2xl uppercase text-[#c9c9c9] animate-fade-in"
      style={{ animationDelay: delay }}
    >
      {label}
    </a>
  );
};

export const Header = (): React.ReactNode => {
  return (
    <nav className="w-full px-12 flex justify-between items-center py-6 bg-opacity-80 backdrop-blur-md shadow-lg animate-fade-in border-b border-[var(--divider)]">
      <span className="text-2xl font-bold uppercase tracking-widest text-[#c9c9c9] animate-fade-in">
        LGevers
      </span>
      <div className="flex gap-6 text-md font-medium">
        <NavItem label="Home" href="#" delay="0.1s" />
        <NavItem label="About" href="#" delay="0.2s" />
        <NavItem label="Contact" href="#" delay="0.3s" />
      </div>
    </nav>
  );
};

import { Link } from "react-scroll";

interface NavLinkProps {
  to: string;
  title: string;
}

export function NavLink({ to, title }: NavLinkProps) {
  return (
    <Link
      spy
      smooth
      to={to}
      offset={-20}
      duration={500}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer transition-all duration-300"
    >
      {title}
    </Link>
  );
}

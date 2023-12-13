import Link from "next/link"

type NavLinkProps = {
    href: string;
    title: string;
  };
  

const NavLink: React.FC<NavLinkProps> = ({href, title}) => {
    return (
        <Link href={href}
        className="">
            {title}
        </Link>
    )
}

export default NavLink;
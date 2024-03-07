'use client';
import Link from "next/link"
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  icon: JSX.Element;
  href: string;
}

{/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
export const SidebarItem = ({ title, href, icon }: Props) => {

  const pathName = usePathname();

  return (
    <li>
      <Link href={`${href}`} className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl 
        hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
        ${href === pathName ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}
      `}>
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  )
}

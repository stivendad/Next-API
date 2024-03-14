import Image from "next/image"
import Link from "next/link"
import { LogoutButton, SidebarItem } from "@/components"
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonCircleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


const items = [
    {
        href: '/dashboard',
        icon: <IoCalendarOutline size={30} />,
        title: 'Dashboard',
    },
    {
        href: '/dashboard/rest-todo',
        icon: <IoCheckboxOutline size={30} />,
        title: 'Rest TODOs',
    },
    {
        href: '/dashboard/server-todos',
        icon: <IoListOutline size={30} />,
        title: 'Server Actions',
    },
    {
        href: '/dashboard/cookies',
        icon: <IoCodeWorkingOutline size={30} />,
        title: 'Cookies',
    },
    {
        href: '/dashboard/products',
        icon: <IoBasketOutline size={30} />,
        title: 'Productos',
    },
    {
        href: '/dashboard/profile',
        icon: <IoPersonCircleOutline size={30} />,
        title: 'Perfil',
    },
];

export const Sidebar = async () => {

    const session = await getServerSession(authOptions);

    const userName = session?.user?.name ?? 'Cynthia J. Watts';
    const avatarUrl = session?.user?.image ?? 'https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp';



    return (
        <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
            <div>
                <div className="-mx-6 px-6 py-4">
                    <Link href="/dashboard" title="home">
                        <Image
                            src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                            width={150}
                            height={150}
                            className="w-32"
                            alt="tailus logo"
                        />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Image
                        src={avatarUrl}
                        width={150}
                        height={150}
                        alt=""
                        className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                    />
                    <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{userName}</h5>
                    <span className="hidden text-gray-400 lg:block">Admin</span>
                </div>

                <ul className="space-y-2 tracking-wide mt-8">
                    {items.map(item => (
                        <SidebarItem
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            href={item.href} />
                    ))}

                </ul>
            </div>

            <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                <LogoutButton />
            </div>
        </aside>
    )
}

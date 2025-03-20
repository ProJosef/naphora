import Menu from "./Menu";
import { APP_NAME } from "@/lib/constants";
import Search from "./Search";
import Image from "next/image";
import Link from "next/link";
import data from "@/lib/data";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <div className="flex justify-between items-center px-4 py-2">
        <div>
          <Link href="/" className="header-button h1-bold">
            <Image src="/icons/logo.svg" width={40} height={40} alt={APP_NAME} />
            <span>{APP_NAME}</span>
          </Link>
        </div>
        <div className="hidden md:block flex-1 max-w-xl">
          <Search />
        </div>
        <Menu />
      </div>

      <div className="block md:hidden py-2">
        <Search />
      </div>

      <div className="bg-chart-3 flex items-center px-4 py-2 gap-4">
        <Button className="header-button" variant="ghost">
          <MenuIcon />
          All
        </Button>
        {data.headerMenus.map((menu) => (
          <Link href={menu.href} key={menu.href}>
            {menu.name}
          </Link>
        ))}
      </div>
    </header>
  );
}

import Link from "next/link"
import { UserIcon, ShoppingCartIcon } from "lucide-react"


export default function Menu() {
  return (
      <nav className="flex gap-3">
        <Link href="/signup" className="header-button">
          <UserIcon className="w-8 h-8"/>
          <span>Sign Up</span>
        </Link>
     
        <Link href="/cart" className="header-button">
          <ShoppingCartIcon className="w-8 h-8"/>
          <span>Cart</span>
        </Link>
      </nav>
  )
}

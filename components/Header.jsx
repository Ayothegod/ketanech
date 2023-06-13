import Link from "next/link"

const Header = () => {
  return (
    <div className="flex relative">
      <span>
        KTS.
      </span>
      <nav className="absolute inset-0 h-40">
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/"><li>About</li></Link>
          <Link href="/"><li>Services</li></Link>
          <Link href="/"><li>Contact</li></Link>
          <Link href="/"><li>Training</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
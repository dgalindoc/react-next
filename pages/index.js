import Link from 'next/link'

function Header() {
  return (
    <div>
      <h1>Renderizamos el contenido</h1>
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link prefetch href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default Header

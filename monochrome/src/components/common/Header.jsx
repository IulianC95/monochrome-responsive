export default function Header() {
  return (
    <>
      <header>
        <div className="secondary">
          <section className="container header header-secondary">
            <h1 className="d-lg-none">Monochrome</h1>
            <div className="header-social">
              <ul>
                <li>
                  <a href="/" title="Youtube account">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="/" title="Facebook account">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" title="Twitter account">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" title="Instagram account">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="tel:+4401023456789" title="">
                    CALL US +44 (0)10 2345 6789
                  </a>
                </li>
              </ul>
            </div>

            <div className="header-user">
              <form>
                <input type="text" title="Search" placeholder="search" />
                <button type="button" title="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
              <ul>
                <li>
                  <a href="/" title="Account">
                    <i class="fa-solid fa-user"></i>
                  </a>
                </li>
                <li>
                  <a href="/" title="Wishlist">
                    <i class="fa-solid fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="/" title="Cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
              </ul>
            </div>
            <section className="header-search-bg d-lg-none"></section>
          </section>
          <section className="header-search-bg d-lg-none">
            <div className="container header-search">
              <section>
                <button type="button" title="Menu">
                  <i className="fa-solid fa-bars"></i>
                </button>
              </section>
              <form>
                <input type="text" title="Search" placeholder="search" />
                <button type="button" title="Search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </section>
          <div className="mobile-bg d-lg-none">
            <div className="button button-style-1">
              <button>New In</button>
            </div>
          </div>
        </div>
        <div className="primary">
          <ul className="container">
            <li>
              <a href="" title="New arivals">
                New arivals
              </a>
            </li>
            <li>
              <a href="" title="Brands">
                Brands
              </a>
            </li>
            <li>
              <a href="" title="Men's">
                Men's
              </a>
            </li>
            <li>
              <a href="" title="Women's">
                Women's
              </a>
            </li>
            <li>
              <a href="" title="Accessories">
                Accessories
              </a>
            </li>
            <li>
              <a href="" title="Lookbook">
                Lookbook
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

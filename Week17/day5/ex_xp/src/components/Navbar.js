function Navbar() {
  return (
    <>
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="brand-logo" style={{ marginLeft: "30px" }}>
            My Blog
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

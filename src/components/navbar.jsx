import "./navbar.css";


function Navbar() {

  return (

    <nav class="navbar">
      <div class="logo">Flows Garden</div>

      <ul class="nav-links">
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Workshops</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <a href="#" class="btn">Join Community</a>
    </nav>

  );
}

export default Navbar
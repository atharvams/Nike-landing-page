import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="src/assets/images/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navbar;

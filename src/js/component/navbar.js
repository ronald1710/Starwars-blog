import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          width={100}
          src="https://1.bp.blogspot.com/-tcIehETEdwo/VepHPyglOSI/AAAAAAAANBk/-8XH76kAqpY/s1600/Star-Wars-Logo.png"
        />
      </Link>
      <div className="ml-auto">
        <div class="dropdown">
          <a
            class="btn btn-primary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CAIndiaLogo from "@/media/CAIndiaLogo.png";

export default function HeaderComponent() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light px-5">
      {/* Logo */}
      <a className="navbar-brand d-flex align-items-center" href="#">
        <Image src={CAIndiaLogo} alt="CA India Logo" width={30} height={30} />
        <span className="ms-2">Krita CA Firm</span>
      </a>

      {/* Mobile Toggler */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarMenu"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#service">
              Our Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

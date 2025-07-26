"use client";
import BannerLogo from "@/media/banner.jpg";

export default function BannerComponent() {
  return (
    <>
      <div
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${BannerLogo.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <h1 className="display-5 fw-bold" style={{ color: "#000000" }}>
          Welcome to Krita
        </h1>
        <p className="lead fw-bold" style={{ color: "#000000" }}>
          Your CA firm management made easy.
        </p>
      </div>
    </>
  );
}

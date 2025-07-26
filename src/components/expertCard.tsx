"use client";
import Image, { StaticImageData } from "next/image";

type ExpertProps = {
  name: string;
  designation: string;
  bio: string;
  image: StaticImageData;
  imagePosition?: "left" | "right";
};

export default function ExpertCard({
  name,
  designation,
  bio,
  image,
  imagePosition = "left",
}: ExpertProps) {
  const isImageRight = imagePosition === "right";

  return (
    <div className="card border-0 mb-4">
      <div
        className={`row g-0 align-items-center ${
          isImageRight ? "flex-md-row-reverse" : ""
        }`}
      >
        <div className="col-md-4">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className={`img-fluid ${
              isImageRight ? "rounded-end" : "rounded-start"
            }`}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title" style={{ color: "#547792" }}>
              {name}
            </h3>
            <h5 style={{ color: "#35ad5c" }}>{designation}</h5>
            <p className="card-text">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

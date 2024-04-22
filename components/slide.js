import React, { useEffect, useState } from "react";

function Slide() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["og1.jpg", "og2.jpg", "og3.jpg", "og4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];
  return (
    <div
      className="w-full h-[230px]  bg-cover bg-center relative transition duration-2000 ease-in-out transform"
      style={{
        backgroundImage: `url('/asset/${currentImage}')`,
        transition: "background-image 2s ease-in-out",
      }}
    ></div>
  );
}

export default Slide;

import React, { useState } from "react";

function Imagegallery() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleOpenModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCurrentImage("");
    setModalOpen(false);
  };

  const images = [
    "/sheiseport2.png",
    "/sheiseport1.png",
    "/sheiseport3.png",
    "/sheiseport4.png",
    "/sheiseport8.jpg",
    "/shieseport10.jpg",
    "/shieseport7.jpg",
    "/sheise11.jpg",
    "/sheise12.jpg",
    "/sheise13.jpg",
    "/sheise5.png",
    "/sheise6.png",
  ];

  return (
    <div className="gallerycontainer">
      <div className="container">
        <div className="gallery">
          {images.map((image, index) => (
            <figure
              key={index}
              className={`gallery__item gallery__item--${index + 1}`}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery__img"
                onClick={() => handleOpenModal(image)}
              />
            </figure>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={handleCloseModal}>
            &times;
          </span>
          <img className="modal-content" src={currentImage} alt="modal" />
        </div>
      )}
    </div>
  );
}

export default Imagegallery;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import helpData from "../data/Items.json"; // Assuming your new data is in helpData.json
import { Modal, Button, Image } from "react-bootstrap"; // Import required components

function HelpPage() {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Find the card based on the id from the URL (using imported data)
  useEffect(() => {
    const foundCard = helpData.find((item) => item.id === Number(id));
    setCardData(foundCard);
  }, [id]); // Re-run useEffect when id changes

  const handleImgClick = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  const handleCloseModal = () => setShowImageModal(false);

  return (
    <div>
      {cardData ? (
        <div>
          <h1>{cardData.title}</h1>
          {cardData.content.map((contentItem) => (
            <p key={contentItem.contentId}>{contentItem.text}</p>
          ))}
          {cardData.media.length > 0 && ( // Check if there's any media
            <div>
              <h2>Images:</h2>
              {cardData.media.map((mediaItem) => (
                <img
                  key={mediaItem.imageTitle}
                  src={mediaItem.uri}
                  alt={mediaItem.imageTitle}
                  style={{ margin: "5px", cursor: "pointer" }}
                  onClick={() => handleImgClick(mediaItem)}
                />
              ))}
            </div>
          )}
          <Modal show={showImageModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedImage?.imageTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={selectedImage?.uri}
                alt={selectedImage?.imageTitle}
                style={{ maxWidth: "100%", maxHeight: "100%" }} // Ensure image doesn't overflow
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <p>Card not found</p>
      )}
    </div>
  );
}

export default HelpPage;

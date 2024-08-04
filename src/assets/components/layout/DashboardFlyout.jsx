/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

function DashboardFlyout() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Dashboard
      </Button>

      <Offcanvas placement="bottom" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Dashboard content here */}
          <p>Username: {sessionStorage.getItem("userName") || "Default"}</p>
          <p>Email: {sessionStorage.getItem("Name") || "Person"}</p>
          {/* Add more dashboard elements as needed */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DashboardFlyout;

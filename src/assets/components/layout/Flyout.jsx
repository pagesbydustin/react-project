import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";

function Flyout(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.btnText}
      </Button>

      <Offcanvas placement="left" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.body}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

Flyout.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Flyout;

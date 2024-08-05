import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const NoteCard = ({ note }) => {
  return (
    <Card>
      <Card.Body className="text-left">
        <Card.Title>User:</Card.Title>
        <Card.Text>{note.user}</Card.Text>
        <Card.Title>Response:</Card.Title>
        <Card.Text>
          <ReactMarkdown>{note.response}</ReactMarkdown>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

NoteCard.propTypes = {
  note: PropTypes.shape({
    user: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoteCard;

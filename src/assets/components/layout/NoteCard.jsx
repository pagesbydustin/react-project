import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const NoteCard = ({ note }) => {
  return (
    <Card>
      <Card.Body className="text-left">
        <Card.Title>{note.user !== "" ? "User:" : "Title:"}</Card.Title>
        <Card.Text>{note.user || note.title}</Card.Text>
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
    user: PropTypes.string,
    title: PropTypes.string,
    response: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoteCard;

import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";

function Help() {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]); // Store all fetched data
  const [showMore, setShowMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Loading indicator

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/src/assets/data/Items.json");
        setAllData(response.data);
        setData(response.data.slice(0, 3));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleShowMore = () => {
    setData(data.concat(allData.slice(data.length, data.length + 3)));
    setShowMore(allData.length > data.length + 3);
  };

  return (
    <>
      <h1>Help</h1>
      <Card bg="dark" text="light">
        <Card.Header>How can I help?</Card.Header>
        <Card.Body>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <ListGroup>
                {data.map((topic) => (
                  <ListGroup.Item key={topic.id}>
                    <Link to={`/help/${topic.id}`}>{topic.title}</Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              {showMore && (
                <div
                  onClick={handleShowMore}
                  className="d-flex align-items-center"
                >
                  <FaCaretDown /> Show More Topics
                </div>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Help;

import { ListGroup } from "react-bootstrap";
import React, { useState, useEffect } from "react";
/**
  import { Link } from "react-router-dom";
*/
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";
import NoteCard from "./layout/NoteCard";
function Help() {
  React;
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]); // Store all fetched data
  const [showMore, setShowMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Loading indicator

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/src/assets/data/Items.json");
        const formattedData = response.data.map((item) => ({
          id: item.id,
          title: item.title,
          response: item.content[0].text,
        }));
        setAllData(formattedData);
        setData(formattedData.slice(0, 3));
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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ListGroup>
          {data.map((topic) => (
            <NoteCard key={topic.id} note={topic} />
          ))}
        </ListGroup>
      )}
      {showMore && (
        <div onClick={handleShowMore} className="d-flex align-items-center">
          <FaCaretDown /> Show More Topics
        </div>
      )}
    </>
  );
}

export default Help;

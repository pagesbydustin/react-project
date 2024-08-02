import { useState, useEffect } from 'react';

function HelpPage() {
    const [helpContent, setHelpContent] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredContent, setFilteredContent] = useState([]);

    // Fetch data (assuming data.json is located in the src directory)
    useEffect(() => {
        fetch('../data/Items.json')
            .then(response => response.json())
            .then(data => setHelpContent(data));
    }, []);

    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Filter content based on search term
    useEffect(() => {
        const filteredData = helpContent.filter(item => {
            const searchText = searchTerm.toLowerCase();
            return (
                item.title.toLowerCase().includes(searchText) ||
                item.content.text.toLowerCase().includes(searchText)
            );
        });
        setFilteredContent(filteredData);
    }, [helpContent, searchTerm]);

    // Render content
    return (
        <div>
            <input type="text" placeholder="Search help..." onChange={handleSearchChange} />
            {filteredContent.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: item.content.html }} />
                    {item.media && (
                        <div>
                            {/* Render media here */}
                            {item.media.map((mediaItem, index) => (
                                <div key={index}>
                                    <img src={mediaItem.uri} alt={mediaItem.name} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default HelpPage;

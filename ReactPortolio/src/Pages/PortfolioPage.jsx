import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
// import ListItem from '../components/UI/ListItem';

// import API from '../utils/API';

export default function PortfolioPage() {

  useEffect(() => {
    fetchData();
  }, []);

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
            <Link>
              See More
            </Link>
          {/* </ListItem> */}
      </ul>
    </div>
  );
}

import React from 'react';
import ResultCard from '../components/ResultCard.jsx';

const ResultsContainer = ({ results, favorites, closedLocations, reportClosed, closedStoreId }) => {
  console.log('results :', results);
  console.log('favorites: ', favorites);
  console.log('closed Loc :', closedLocations);

  let recs = [];

  if (!results) {
    recs = null;
  } else {
    results.forEach(
      (rec, i) => {
        const { id } = rec;
        // if (id !== closedStoreId) {
        // check if the location is open & user is using account
        //if (!closedLocations[id] && favorites){
        let isFav = false;

        // checking if store is one of the user's favs
        //favorites[id] ? isFav = true : isFav = false;

        recs.push(<ResultCard closedStoreId={closedStoreId} reportClosed={reportClosed} key={i} info={rec} isFav={isFav} />);
      }
      // }
    );
  }

  return (
    <div className="resultsContainer">
      {recs}
    </div>
  );
};

export default ResultsContainer;

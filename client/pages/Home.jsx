import React, { Component } from 'react';
import TopCategoriesContainer from '../containers/TopCategoriesContainer.jsx';
import SearchContainer from '../containers/SearchContainer.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';
import GoogleApiWrapper from '../containers/MapContainer.jsx';


const Home = (props) => {
  const { results, preferredLocations, closedLocations, closedStoreId } = props.state;
  const { searchButtonHandler, catBtnHandler, reportClosed } = props;

  return (
    <div className='homeContainer'>
      <p> Practice kindness. Check in with one another. 
        <br></br>
        Amplify your support. Shop locally! </p>
      <GoogleApiWrapper/>
      <TopCategoriesContainer catBtnHandler={catBtnHandler} />
      <SearchContainer searchButtonHandler={searchButtonHandler} />
      <ResultsContainer
        results={results}
        closedStoreId={closedStoreId}
        preferredLocations={preferredLocations}
        closedLocations={closedLocations}
        reportClosed={reportClosed}
      />
    </div>
  );
};

export default Home;

/* original Home Class Component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render(){
    const { searchButtonHandler } = this.props;

    return(
      <div>
        <TopCategoriesContainer state={this.props} />
        <SearchContainer searchButtonHandler={searchButtonHandler} ></SearchContainer>
      </div>
  )}
}
*/

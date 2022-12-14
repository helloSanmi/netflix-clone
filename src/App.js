import React from 'react';
import Row from './Row';
import {requests} from './Requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
      {/* NavBar */}
      <Navbar />
      {/* Banner */}
      <Banner />
{/*       
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow /> */}

        {requests.map(request => (
          <Row 
            key = {request.id}  
            title = {request.rating} 
            fetchUrl = {request.url}
            isLargeRow = {request.isLargeRow}  
            />
        ))}

      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;

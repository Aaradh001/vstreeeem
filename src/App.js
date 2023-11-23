import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Base_urlContext from "./contexts/Base_urlContext";
import Nav from './Nav';

function App() {
  return (
    <Base_urlContext>
      <div className="App">
        <Nav/>
        <Banner/>
        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={requests.fetchNetflixOriginals}
          isLargeRow
        ></Row>
        <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
        <Row
          title="Romance Movies"
          fetchURL={requests.fetchRomanceMovies}
        ></Row>
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
      </div>
    </Base_urlContext>
  );
}

export default App;

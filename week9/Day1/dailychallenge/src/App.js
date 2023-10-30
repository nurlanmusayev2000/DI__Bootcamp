import './App.css';
import MovieList from './component/movielist';
import DetailOfMovie from './component/MovieDetails';
import store from './store/store';
function App() {
  return (
    <div className="App">
        <MovieList/>
        <DetailOfMovie  />
    </div>
  );
}

export default App;

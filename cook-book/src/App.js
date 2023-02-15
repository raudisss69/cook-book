import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import RecipeDetails from './RecipeDetails';
import { Provider } from 'react-redux';
import { store } from './reduxjs/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/create" element={<Create />}/>
              <Route path="/recipes/:id" element={<RecipeDetails />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
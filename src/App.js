import './App.css';
import Landing from './components/home/Landing';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import {Provider} from 'react-redux'
import store from './store';
import {HashRouter as Router,Route} from 'react-router-dom'
import MovieDetail from './components/home/MovieDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Landing}/>
          <Route exact path='/movie-detail/:id' component={MovieDetail}/>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

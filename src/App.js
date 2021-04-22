import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import Recipe from './components/Recipe'

const App = () => {

  return (
    <Router>
      <div className="App">
      <Header />
        <Route path='/' exact component={Home} />
        <Route path='/search' exact component={Search} />
        <Route path='/recipe' exact component={Recipe} />
      </div>
    </Router>
  );
}

export default App

import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import { useState } from 'react'


const App = () => {
  const [search, setSearch] = useState(false)

  return (
    <Router>
    <div className="App">
      <Header />
      {/*{search === false ? <Home /> : <Search />}*/}
      <Route path='/' exact component={Home} />
      <Route path='/search' exact component={Search} />
    </div>
    </Router>
  );
}

export default App;

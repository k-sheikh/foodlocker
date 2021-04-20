import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'

const App = () => {
   return (
    <Router>
     <div className="App">
      <Header />
       <Route path='/' exact component={Home} />
       <Route path='/search' exact component={Search} />
     </div>
    </Router>
   );
}


export default App

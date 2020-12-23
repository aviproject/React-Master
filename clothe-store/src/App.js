
import './App.css';
// import Homepage from './pages/homepage/homepage';
import {Link, Route,Switch} from 'react-router-dom'

const Homepage = (props) =>(
  <div>
    <h1>home pages</h1>
    <button  onClick={() =>props.history.push('/topics') }>Topics</button>
  </div>
)

const HatsPage = () =>(
  <div>
    <h1>Hats page</h1>
  </div>
)

const TopicList = ()=> (
  <div>
      <h1>Topic list page </h1>
  </div>
)
const TopicDetails = ()=>(
  <div>
       <h1>Topic details</h1> 
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
      
       <Route exact path='/' component={Homepage}></Route>
       <Route path='/hats' component={HatsPage}></Route>
       <Route  path='/topics' component={TopicList}></Route>
       <Route exact path='/topics/:topiId' component={TopicDetails}></Route>
       
      </Switch>
    </div>
  );
} 

export default App;

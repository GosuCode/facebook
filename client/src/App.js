import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Layout from './HOC/navigation/Layout';
import Home from './component/pages/Home';
import Posts from './component/pages/Posts';

function App() {
  return (
    <>
    <Router>
      <Layout>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route exact path='/posts' element={<Posts/> }/>
      </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Layout from './HOC/navigation/Layout';
import Home from './component/pages/Home';
import Posts from './component/pages/Posts';
import AddPosts from './component/pages/AddPosts';

function App() {
  return (
    <>
    <Router>
      <Layout>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route exact path='/posts' element={<Posts/> }/>
        <Route exact path='/addposts' element={<AddPosts/> }/>
      </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;

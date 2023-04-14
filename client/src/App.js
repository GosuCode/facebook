import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Layout from './HOC/navigation/Layout';
import Home from './component/pages/Home';
import Posts from './component/pages/Posts';
import ViewMore from './component/pages/ViewMore';
import CreatePost from './component/pages/CreatePost';

function App() {
  return (
    <>
    <Router>
      <Layout>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route exact path='/posts' element={<Posts/> }/>
        <Route exact path='/createpost' element={<CreatePost/> }/>
        <Route exact path='/viewmore/:id' element={<ViewMore/> }/>
      </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;

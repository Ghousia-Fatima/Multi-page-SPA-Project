
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Components/Menu';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import ToDo from './Components/Pages/ToDo';
import PageNotFound from './Components/Pages/PageNotFound';
import TextAnalyzer from './Components/Pages/TextAnalyzer';
import SocialPostsApp from './Components/Pages/SocialPostsApp';
import PostDetails from './Components/Pages/PostDetails';
import AllPosts from './Components/Pages/AllPosts';
import NestedPosts from './Components/Pages/NestedPosts';
import AddNewPost from './Components/Pages/AddNewPost';


function App() {
  return (
    <div className="App">
{/* for spa, use browser router */}
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/allposts' element={<AllPosts/>}></Route>
      <Route path='/allposts/:id' element={<PostDetails/>}></Route>
      <Route path='/nestedposts' element = {<NestedPosts/>}></Route>
      <Route path='/nestedposts/*' element = {<NestedPosts/>}></Route>
      <Route path="*" element={<PageNotFound/>} />
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path='/todo' element={<ToDo/>}></Route>
      <Route path='/textanalyzer' element={<TextAnalyzer/>}></Route>
      <Route path='/socialpostsapp' element={<SocialPostsApp/>}></Route>
      <Route path="/newpost" element={<AddNewPost/>}></Route>
    </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;

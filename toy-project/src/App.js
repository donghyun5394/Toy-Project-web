import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from "./pages/Main";
import BookList from "./pages/BookList";
import Recommend from "./pages/Recommend";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="menu" ></Route>
          <Route path="booklist" element={ <BookList/> }/>
          <Route path="recommend" element={ <Recommend/> }/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

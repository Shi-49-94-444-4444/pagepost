import ListPost from "./Pages/ListPost";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Comment from "./Pages/Comments";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPost />}></Route>
      <Route path="/comment/:id" element={<Comment />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

    // <div>
    //   <ListPost />
    // </div>
  );
}

export default App;

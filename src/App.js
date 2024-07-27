import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminList from "./components/AdminList";
import AdminAdd from "./components/AdminAdd";
import AdminEdit from "./components/AdminEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="container"> 
        <Routes>
          <Route path = "/" element = { <AdminList /> }/>
          <Route path = "add" element = { <AdminAdd /> }/>
          <Route path = "edit/:id" element = { <AdminEdit /> }/>
        </Routes>
      </div>
  
    </BrowserRouter>
  );
}

export default App;

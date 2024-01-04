import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import UseReducer from "./assets/UseReducer";
import Contact from "./Contact";
import Blogs from "./Blogs";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="/useReducer" element={<UseReducer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/examples/Counter";
import Header from "./components/examples/Header";
import Button from "./components/examples/Button";
import Footer from "./components/examples/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((err) => console.error("error fetch data", err));
  });
  return (
    <div>
      <Header></Header>
      <h1>My react App</h1>

      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <Button label="click me!"></Button>
      <Footer></Footer>
    </div>
  );
};

export default App;

import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <hr />
      <div>
        <Blogs></Blogs>
      </div>
    </div>
  );
};

export default App;

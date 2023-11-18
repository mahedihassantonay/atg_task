import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Headers from "./components/Headers";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div style={{maxWidth:'1440px'}}  className=" mx-auto">
        <Navbar />
        <Banner />
        <Headers />
        <Blogs />

    </div>
  );
};

export default App;
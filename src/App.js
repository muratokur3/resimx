import ImageList from "./components/ImageList";
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import "./style.scss";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const response = await axios.get("http://localhost:5005/images");
    const result = await response.data;
    setImages(result);
  };
  useEffect(() => {
    getImages();
  });

  return (
    <>
      <Navi/>
      <ImageList images={images}/>
      <Footer />
    </>
  );
}

export default App;

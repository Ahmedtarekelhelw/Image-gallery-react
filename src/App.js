import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ImageList from "./components/ImageList";

function App() {
  const [isloading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(5);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (text.length > 2 || images.length) {
        const res = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${text}&image_type=photo&pretty=true&per_page=${amount}`
        );
        const data = await res.json();
        setImages(data.hits);
        setIsLoading(false);
      }
    };

    getData();
  }, [text, amount, images]);
  return (
    <div className="App">
      <Form
        setText={(text) => setText(text)}
        setAmount={(amount) => setAmount(amount)}
      />
      {!isloading && images.length === 0 ? (
        <h3>
          there is no images with this word please search with a valid word
        </h3>
      ) : null}
      <div className="container">
        {images.length > 0 &&
          images.map((image) => <ImageList key={image.id} image={image} />)}
      </div>
    </div>
  );
}

export default App;

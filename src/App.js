import React, { useDeferredValue, useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ImageList from "./components/ImageList";

function App() {
  const [isloading, setIsLoading] = useState(null);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(5);
  const [images, setImages] = useState([]);
  const value = useDeferredValue(text);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      isMounted && setIsLoading(true);
      const res = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${value}&image_type=photo&pretty=true&per_page=${amount}`
      );
      const data = await res.json();
      isMounted && setImages(data.hits);
      isMounted && setIsLoading(false);
    };

    getData();

    return () => (isMounted = false);
  }, [value, amount]);

  return (
    <div className="App">
      <Form
        setText={(text) => setText(text)}
        setAmount={(amount) => setAmount(amount)}
      />
      {!isloading && !images?.length ? (
        <h3>
          there is no images with this word please search with a valid word
        </h3>
      ) : null}
      {isloading ? (
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      ) : (
        <div className="container">
          {images.length > 0 &&
            images.map((image) => <ImageList key={image.id} image={image} />)}
        </div>
      )}
    </div>
  );
}

export default App;

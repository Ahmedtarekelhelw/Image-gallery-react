import { useEffect, useState } from 'react';
import './App.css';
import Form from "./components/Form"
import ImageList from "./components/ImageList"



let API_KEY = "24962585-6c17d60082f6dfebd003bc63c"

function App() {
  const [isloading, setIsLoading] = useState(true)
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(5)
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo&pretty=true&per_page=${amount}`)
    .then(res => res.json()).then(data => {
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  },[text,amount])
  return (
    <div className="App">
      <Form setText={(text => setText(text))} setAmount={(amount => setAmount(amount))}/>
        {!isloading && !images.length && <h3>there is no image with this word</h3>}
      <div className='container'>
        {images.map(image => {
          return (
            <ImageList key={image.id} image={image}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;

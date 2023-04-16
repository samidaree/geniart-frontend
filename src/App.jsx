import { useState } from "react";
import Header from "./components/Header.jsx"
import ImageResults from "./components/ImageResults.jsx";

function App() {
  const [listImages, setListImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  console.log(listImages);
  return (
    <div >
      <Header setListImages={setListImages} setIsLoading={setIsLoading} />
      <ImageResults listImages={listImages} isLoading={isLoading} />
    </div>
  )
}

export default App;


import React, { useState } from 'react'
import axios from 'axios'

import 'bulma/css/bulma.css'
import './App.css'
import SearchHeader from './components/SearchHeader/SearchHeader'
import Imagelist from './components/ImageList/ImageList'


function App() {
  const [images, setImages] = useState([]);

  const searchImages = async (searchValue) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID KKmnPjWjTsiOyu3R4GAlPKcn1u3AidojbCoc7XOEHw8"
      }, params: {
        query: searchValue,
      }
    });
    return response.data.results;
  };
  const imageApiSearch = async (searchValue) => {
    const result = await searchImages(searchValue);
    setImages(result);
  };
  return (
    <div className='App'>
      <SearchHeader onSearch={imageApiSearch} />

      <Imagelist imagesPlaceholder={images} />
    </div>
  )
}

export default App

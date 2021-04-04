import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import image from './image.jpg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src={image} alt="..." class="img-thumbnail" style={{height:"250px"}}/>
          </div>
          <div class="col-md-6">
            <h6 class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
            <h6 class="text-justify mt-4"><b>For download thist wallpaper. Push the button bellow</b></h6>
            <button type="button" class="btn btn-primary mt-2">Download</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

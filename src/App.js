import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  let [image0, setImage0] = useState("https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp");
  let [image1, setImage1] = useState("https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp");
  let [image2, setImage2] = useState("https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp");
  let [image3, setImage3] = useState("https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp");
  let [image4, setImage4] = useState("https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp");
  let [image5, setImage5] = useState("https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp");
  // let images = {"as":"1","as":"2"};

  const fetchData = () => {
    let query = document.getElementById("search").value;
    axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=RsYqIp7mTzmADWB4hOV2FPE0UDbsBPqsNAVXUfM-bL0`).then((res)=>{
      setImage0(res.data.results[0].urls.full);
      setImage1(res.data.results[1].urls.full);
      setImage2(res.data.results[2].urls.full);
      setImage3(res.data.results[3].urls.full);
      setImage4(res.data.results[4].urls.full);
      setImage5(res.data.results[5].urls.full);
      console.log(res);
      console.log(res.data.results[0].urls.full);
      // console.log(images);
    })
  }

  return (
    <div className="App">
      <div className="container w-50 mt-5">
      <div className="row mt-5 pt-5">
        <div className="row">
          <div className="col-md-9">
            <input type="text" id='search' className='form-control mb-3' placeholder='Search' />
          </div>
          <div className="col-md-3">
            <button className='btn btn-success' onClick={fetchData}>Search</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src={image0}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src={image1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
        </div>
        {/* {
          images.map(function(item, i){
            console.log('test');
            console.log(item);
            return <li key={i}>Test</li>
          })
        } */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src={image2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src={image3}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src={image4}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src={image5}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

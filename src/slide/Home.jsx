import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Home() {
  const [post,setpost] = useState([]);
  useEffect(()=>
  {
    // fetch("http://localhost:9000/")
    // .then((response) => response.json())
    // .then((json) => setpost(json));
    axios
    .get(`http://localhost:9000`,{})
    .then(function (response) {
    // handle success
    console.log(response)
    setpost(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  },[])

  return (
    <div>
      <Link to="/about"><button type="button" class="btn btn-primary">About</button></Link>
      <Link to="/Contact"><button type="button" class="btn btn-primary">Contact</button></Link>
      <Link to="/Form"><button type="button" class="btn btn-primary">Form</button></Link>

      <h1>tran van thien</h1>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

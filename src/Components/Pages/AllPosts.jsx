import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function AllPosts() {
const [posts, setposts] = useState([]);


useEffect(()=>{
  axios.get("http://127.0.0.1:3003/posts/")
  .then(res=>setposts(res.data))
  .catch(err=>console.log(err))
},[])


  return (
    <>
    {/* Heading of the App */}
      <div className="row">
        <div className="col-md-12">
            <h2 className='text-center bg-primary text-white py-2'>List of Posts</h2>
        </div>
      </div>




{/* Table to display Posts Data */}
<table className="table">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Title</th>
    {/* <th scope="col">Body</th> */}
    {/* <th scope="col" colSpan={2} className='text-center'>Action</th> */}
  </tr>
</thead>
<tbody>
  {
    posts &&
    posts.map((post)=>(
      <tr key={post.id}>
        <td>
          <Link to ={'/allposts/ ${post.id}'}>{post.id}</Link>
        </td>
        {/* <td>{post.id}</td> */}
        <td>{post.title}</td>
        {/* <td>{post.body}</td> */}
        
      </tr>
    ))
  }
</tbody>
</table>
    </>
  );
}


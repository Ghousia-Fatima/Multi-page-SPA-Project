import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DislikedPosts() {
  const [posts, setposts] = useState();
  useEffect(() => {
    axios.get("http://127.0.0.1:3003/posts")
      .then((res) => {
       let postData = res.data
       postData = postData.filter((post)=>post.liked==false && post.disliked == true)
       setposts(postData)
      })
       

      .catch(err => console.log(err));
  }, []);

  return (
  <>
    <div className="row">
        <div className="col-md-12">
          <h4 className="text-center bg-primary text-white py-1">
            List of Posts
          </h4>
        </div>
    </div>

<table className="table">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Title</th>
    <th scope="col">Body</th>
    {/* <th scope="col" colSpan={2} className="text-center">
      Action
    </th> */}
  </tr>
</thead>
<tbody>
  {posts &&
    posts.map((post) => (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        {/* <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => editPostDetails(post)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-success btn-sm"
            onClick={() => deletePost(post)}
          >
            Delete
          </button>
        </td> */}
      </tr>
    ))}
</tbody>
</table>
</>
  )
}

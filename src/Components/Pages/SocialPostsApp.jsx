import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPost, setNewPost] = useState({
    id: "",
    title: "",
    body: ""
  });

  useEffect(() => {
    axios.get("http://127.0.0.1:3003/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  function editPostDetails(postInfo) {
    console.log("Editing Post:", postInfo);
    setPost(postInfo);
    setShowEditForm(true);
  }

  function updateRecord(e) {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:3003/posts/${post.id}`, newPost)
      .then(res => {
        alert("Record Updated");
        setShowEditForm(false);
        setPost(null);
        setNewPost({ id: "", title: "", body: "" });
      })
      .catch(err => console.log(err));
  }

  function deletePost(postInfo) {
    if (window.confirm("Are you sure to delete the record?")) {
      axios
        .delete(`http://127.0.0.1:3003/posts/${postInfo.id}`)
        .then(res => {
          alert("Record Deleted Successfully");
          setPosts(posts.filter(p => p.id !== postInfo.id));
        })
        .catch(err => console.log(err));
    }
  }

  function showCreatePostForm() {
    setShowCreateForm(true);
  }

  function createNewPost() {
    if (!newPost.id || !newPost.title || !newPost.body) {
      alert("Please fill in all fields before creating a new post.");
      return;
    }

    axios
      .post(`http://127.0.0.1:3003/posts/`, newPost)
      .then(res => {
        alert("New Post Created");
        setShowCreateForm(false);
        setNewPost({ id: "", title: "", body: "" });
        setPosts([...posts, newPost]);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center bg-primary text-white py-2">
            List of Posts
          </h2>
        </div>
      </div>

      <button className="btn btn-primary" onClick={showCreatePostForm}>
        Create New Record
      </button>

      {showCreateForm && (
        <form>
          <label htmlFor="">ID</label>
          <input
            type="text"
            className="form-control"
            value={newPost.id}
            onChange={(e) => setNewPost({ ...newPost, id: e.target.value })}
          />
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="form-control"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <label htmlFor="">Body</label>
          <input
            type="text"
            className="form-control"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <button
            type="submit"
            className="btn btn-primary my-2"
            onClick={createNewPost}
          >
            Create Record
          </button>
        </form>
      )}

      {showEditForm && post && (
        <form>
          <label htmlFor="">ID</label>
          <input
            type="text"
            value={post.id}
            className="form-control"
            readOnly
          />
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={newPost.title}
            className="form-control"
            onChange={(e) =>
              setNewPost({ ...newPost, title: e.target.value })
            }
          />
          <label htmlFor="">Body</label>
          <input
            type="text"
            value={newPost.body}
            className="form-control"
            onChange={(e) =>
              setNewPost({ ...newPost, body: e.target.value })
            }
          />
          <button
            className="btn btn-primary my-2"
            onClick={updateRecord}
          >
            Update record
          </button>
        </form>
      )}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col" colSpan={2} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
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
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import OldestPosts from './OldestPosts'
import LatestPosts from './LatestPosts'

export default function NestedPosts() {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="btn btn-info m-3 active" aria-current="page" to="latest">Latest</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-info m-3" to="oldest">Oldest</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-info m-3" to="liked">Liked</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-info m-3" to="disliked">Disliked</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/latest"></Route>
                <Route path="/oldest" element={<OldestPosts/>}></Route>
                <Route path="/liked" element={<LatestPosts/>}></Route>
                <Route path="/disliked"></Route>
            </Routes>
        </div>
    )
}

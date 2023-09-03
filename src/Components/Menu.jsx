import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My SPA Project</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/allposts"> All Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nestedposts"> Nested Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/newpost"> New Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/todo">To-Do</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/textanalyzer">Text Analyzer</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/socialpostsapp">Social Posts App</Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

import {Routes, Route, Link } from "react-router-dom";
export default function Sidebar(){
    return (
        <nav className="sidebar">
              <img src="https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FCUP5C7E9jah7UWhsggvsUZty&width=828" alt="React" />
              <h1>SBA320H React App</h1>
        <ul>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/profiling">Profiling</Link></li>
          <li><Link to="/predict">ModelPredict</Link></li>
          <li><Link to="/build">BuildModel</Link></li>
          <li><Link to="/compare">ModelCompare</Link></li>
        </ul>
      </nav>
    )
}
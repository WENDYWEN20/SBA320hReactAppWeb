import {Link } from "react-router-dom";
export default function Sidebar(){
    return (
        <nav className="sidebar">
              <img src="https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2FCUP5C7E9jah7UWhsggvsUZty&width=828" alt="React" />
              <h1>SBA320H React App</h1>
              <Link className='link' to='https://emoji-api.com/#documentation'>Free Emoji API link </Link>
      
      </nav>
    )
}
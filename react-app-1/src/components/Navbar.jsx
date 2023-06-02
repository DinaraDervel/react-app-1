import React from 'react';

const Navbar = () => {
    return <nav className='nav'>
    <ul class="vertical-nav">
      <li><a class="active" href="#a">Profile</a></li>
      <li><a href="#a">Messages</a></li>
      <li><a href="#a">News</a></li>
      <li><a href="#a">Music</a></li>
      <li><a href="#a">Settings</a></li>
    </ul>
  </nav>;
}

export default Navbar;
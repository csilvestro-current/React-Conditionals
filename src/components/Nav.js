import React from 'react'
//React Router
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav style={styles.container}>
      <NavLink to="/Pg1">News Feed</NavLink>
      <NavLink to="/Pg2">Messages</NavLink>
      <NavLink to="/SettingsLoader">Watch</NavLink>
    </nav>
  );
}

export default Nav

const styles= {
  container: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
  }
}
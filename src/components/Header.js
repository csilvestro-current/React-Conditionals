import React from 'react'
import { MdSettings } from "react-icons/lib/md";
import logo from '../images/icon.svg'
import avatar from '../images/dogAvatar.png'
//React Router
import { NavLink } from 'react-router-dom'

const Header = props => {
  return (
    <header style={styles.container}>
      <img style={styles.logo} src={logo} alt='coLogo' />
      <form>
        <input placeholder='Search...' />
      </form>
      <div style={styles.rtCont}>
        <img style={styles.avatar} src={avatar} alt='ASPCA' />
        <div style={styles.usnm}>{props.usrname}</div>
        <NavLink to="/SettingsLoader" style={styles.icon}><MdSettings /></NavLink>
        <NavLink to="/Settings" style={styles.icon}><MdSettings /></NavLink>
      </div>
    </header>
  );
}

export default Header

const styles= {
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: '#4CAF50',
    // background: 'slategrey',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    height: 25,
  },
  rtCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 25,
    paddingRight: 10,
  },
  usnm: {
    paddingRight: 25
  },
  icon: {
    fontSize: 20,
  }
}
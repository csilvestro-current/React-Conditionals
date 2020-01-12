import React from 'react'

const UpdateSetForm = props => {
  return (
    <form style={styles.container} onSubmit={props.submitUpdate}>
      <div style={styles.profileHeader}>
        <div>
          <img style={styles.avatar} src={props.avatar} alt='ASPCA' />
        </div>
        <div style={styles.profileTxt}>
          <h1 style={styles.h1}>{props.usrname}</h1>
          <button style={styles.h2Btn}>Change profile image</button>
        </div>
      </div>
      <div style={styles.myInputCont}>
        <p style={styles.myInputRow}>
          <input type='text' style={styles.myInput} value={props.fName} placeholder='First Name' />
          <input type='text' style={styles.myInput} value={props.lName} placeholder='Last Name' />
        </p>
        <p style={styles.myInputRow}>
          <input type='text' style={styles.myInput} value={props.street} placeholder='Street' />
          <input  type='text' style={styles.myInput} value={props.city} placeholder='City' />
        </p>
        <p style={styles.myInputRow}>
          <input  type='text' style={styles.myInput} value={props.state} placeholder='State' />
          <input type='text' style={styles.myInput} value={props.zipcode} placeholder='Zip Code' />
        </p>
        <p style={styles.myInputRow}>
        <input type='text' style={styles.myInput} value={props.email} placeholder='Email' />
          <input type='text' style={styles.myInput} value={props.phone} placeholder='Phone' />
        </p>
      </div>
      <div style={styles.btnCont}>
        <button type="submit" style={styles.btn}>Update Profile</button>
      </div>
    </form>
  );
}

export default UpdateSetForm

const styles= {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    margin: 40,
    padding: 50,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    border: '1 solid gray',
    color: 'gray',
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    //padding: 10
  },
  h1: {
    fontSize: 26,
    // paddingTop: 5
  },
  h2Btn: {
    fontSize: 16,
    padding: 15,
    borderRadius: '2px',
    background: '#4CAF50',
    border: 'none',
    color: 'white',
    //padding: 20,
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    //fontSize: '16px',
    margin: '4px'
  },
  myInputRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //padding: 50,
  },
  myInput: {
    width: '40%',
    padding: 20,
    // borderRadius: 3,
    color: 'grey'
  },
  btnCont: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 175,
    padding: 20,
    color: 'grey',
    margin: 10
  },
  avatar: {
    height: 150,
    paddingRight: 10,
    borderRadius: '50%',
  },
  
}
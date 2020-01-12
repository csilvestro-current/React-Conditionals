import React, { Component } from 'react'

class SettingsLoader extends Component {
  state = {
    isLoaded: false,
  }
  
  //LIFECYLE FOR INITIAL LOAD
  //Runs only once
  componentDidMount = () => {
    //May want to load local storage.
    //May want to validate date or time.
    //Can load an if statement here if needed.
    this.fetchVideos()
  }

  fetchVideos = () => {
    console.log('Fetching Stuff')
  }

    render() {
      const {isLoaded} = this.state
      if(!isLoaded){
        return <div>Loading...</div>
      }
      else {
          return (
              <section style={styles.container}>
                  <h1>Watch Search</h1>
              </section>
          );
      }
  }
}
export default SettingsLoader

const styles = {
  container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
  }
}

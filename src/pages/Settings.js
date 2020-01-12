import React, { Component } from 'react';
import UpdateSetForm from '../components/UpdateSetForm';

class Settings extends Component {
    state = {
        myUsers:[],
        isLoaded: true,
    }

    //LIFECYLE FOR INITIAL LOAD
    //Runs only once
    componentDidMount() {
        //May want to load local storage
        //May want to validate on date or time
        //Can load an if statement here
        const isLoaded = this.state.isLoaded
        if(isLoaded) {
            this.fetchData()
        } else {
            //Add Else statment for errors
            console.log(`Can not load your stupid app.`)
        }      
    }


    fetchData(){
        this.setState({
            isLoaded: true,
            myUsers:[]
        })
        fetch('https://randomuser.me/api/')
        .then(results => results.json())
            .then(data => data.results.map(user => ({
                fname: `${user.name.first}`,
                lname: `${user.name.last}`,
                username: `${user.login.username}`,
                // location: `${user.location.street}, ${user.location.city}`,
                street: `${user.location.street.number}, ${user.location.street.name}`,
                city: `${user.location.city}`,
                state: `${user.location.state}`,
                zipcode: `${user.location.postcode}`,
                picture: `${user.picture.large}`,
                email: `${user.email}`,
                phone: `${user.phone}`
            }
        )))
        .then(myUsers => this.setState({
            myUsers,
            isLoaded: false
        })) 
        .catch(error => console.log('My Random Dude did not load', error))
    }

    

    render() {
        const {isLoaded, myUsers} = this.state
        return (
            <section style={styles.container}>
                <h1>Update your profile</h1>
                <div>
                    {!isLoaded && myUsers.length > 0 ? myUsers.map(contact => {
                        const {username, fname, lname, street, city, state, zipcode, picture, email, phone} = contact;
                        return <UpdateSetForm 
                                        key={username}
                                        avatar={picture} 
                                        usrname={username}
                                        fName={fname}
                                        lName={lname}
                                        street={street}
                                        city={city}
                                        state={state}
                                        zipcode={zipcode}
                                        email={email}
                                        phone={phone}
                                    />
                        }) : null 
                    }
                </div>
            </section>
        );
    }
}

export default Settings



const styles= {
    container: {
        padding: 20,
        color: 'grey'
    }
}
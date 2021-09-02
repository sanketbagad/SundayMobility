import React from 'react'
import UserList from './UserList';
import Registration from './Registration';

const Home = () => {

    let pass = localStorage.getItem('SubmissionPassword').replace(/"/g, "");
    let mail = localStorage.getItem('SubmissionEmail').replace(/"/g, "");
    let mbl = localStorage.getItem("SubmissionMobile")
    let nme = localStorage.getItem('SubmissionName');
        
    return (
        <div>
            Project done as Assessment By Sanket Bagad for Sunday Mobility.
            <UserList pass={pass} mail={mail} mbl={mbl} nme={nme} />
        </div>
    )
}

export default Home

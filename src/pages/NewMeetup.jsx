import {useNavigate} from 'react-router-dom';
// import {useHistory} from 'react-router-dom';


// react-router-dom v6 has replaced the useHistory() with useNavigate(). Here is the usage of useNavigate. go to https://www.bacancytechnology.com/qanda/react/usehistory-was-not-found-in-react-router-dom  to learn about use navigate

import NewMeetupForm from '../components/meetups/NewMeetupForm'
function NewMeetupPage() {
    const navigate  = useNavigate();
    // const history = useHistory();
    function addMeetupHandler(meetupData) {
        // https://myapp-78357-default-rtdb.firebaseio.com/meetups.json //old firebase url
        fetch('https://meetup2project-default-rtdb.firebaseio.com/allmeetups.json',{
            method: 'post',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'applications/json',
            }
        }).then(()=>{
            navigate('/', { replace: true })
        });
        console.log(meetupData);
    }

    return <div>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
}

export default NewMeetupPage;
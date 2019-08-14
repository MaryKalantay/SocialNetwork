import React from 'react';
import Posts from '../posts/Posts';

const Profile = () => {
  return   <div className="profile">
  <h3><a href="#" className="name">Mary K</a></h3>
  <img src="https://static.tildacdn.com/tild3031-3035-4337-a365-333531306630/4.png" className="avatar" alt="avatar"/>
  <p className="bdate">September 19, 1987</p>
  <p className="location">Ukraine, Kharkiv</p>
  <p><a href="#" className="web-site">http://marykalantay.tilda.ws</a></p>

  <Posts />
</div>
}

export default Profile;
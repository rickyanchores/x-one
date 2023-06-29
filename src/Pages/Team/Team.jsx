import React from 'react'
import User from '../../Components/User/User';

const Team = () => {
  return (
    <div className="Team h-auto bg-slate-800" >
        <div className="title text-lg text-center">Meet the Team</div>
        <div className="team-container p-5 m-5 flex flex-col justify-around items-center h-screen md:flex-row">
            <User />
            <User />
            <User />
        </div>
    </div>
  )
}

export default Team;
import React from 'react'
import {useParams} from "react-router-dom"

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-white-100 text-black text-3xl text-center py-5'>User: {userid}
        <div className="mx-auto w-full max-w-7xl">
        <div className="grid  place-items-center sm:mt-20">
            <img className="sm:w-96 w-48" src="../src/assets/img/user.svg" alt="user" />
        </div>
        </div>
    </div>
  )
}

export default User
import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    // const data = useLoaderData()

    const [data, setData] = React.useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/filosoho')
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

  return (
    <div className='text-left m-4 bg-white-100 text-gray-800 p-4 text-3xl'>
    <div className="flex justify-center">
        <div className="mr-6">
            <img src={data.avatar_url} width={200} alt="" />
        </div>
        <div>
            <div>Bio: {data.bio} </div>
            <div>Location: {data.location} </div>
            <div>Public repos: {data.public_repos}</div>
            <div>Github followers: {data.followers} </div>
        </div>
    </div>
</div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/filosoho')
    return response.json()
}
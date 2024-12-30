import React, { useEffect, useState } from 'react'

function Github() {

    const [gitdata, setGitData] = useState("")

    useEffect(() => {
        fetch('https://api.github.com/users/Techlead-ANKAN')
        .then((response) => response.json())
        .then(data => {
            setGitData(data)
        })
    }, [])

  return (
    <div>
        <p>Github Repositories: {gitdata["public_repos"]}</p>
        <img src={gitdata["avatar_url"]} alt="" width={300}/>
    </div>
  )
}

export default Github
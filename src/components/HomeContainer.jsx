import React, { useEffect } from 'react'

function HomeContainer() {
  useEffect(() => {
    fetch(process.env.REACT_APP_API_DOMAIN)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  }, [])
  return (
    <div>
      <p>Hola!</p>
    </div>
  )
}

export default HomeContainer

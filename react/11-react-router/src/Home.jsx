import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Essa e a home</h1>
      <Link to="Produto/notebook" >Notebook</Link>
      <Link to="Produto/smartphone" >Smartphone</Link>
    </div>
  )
}

export default Home
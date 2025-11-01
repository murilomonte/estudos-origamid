import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head'

const Home = () => {
  return (
    <div>
      <Head title='Home' description="descricao" />
      <h1>Essa e a home</h1>
      <Link to="Produto/notebook" >Notebook</Link>
      <Link to="Produto/smartphone" >Smartphone</Link>
    </div>
  )
}

export default Home
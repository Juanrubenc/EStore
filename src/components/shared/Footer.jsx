import React from 'react'
import "./Styles/footer.css"

const footer = () => {
  return (
    <div className='footer'>
      <h1 className='page-tittle'>Zap-Store <i class="fa-solid fa-bolt"></i></h1>
    <div className='info'>
    <p>© 2022 Juan Ruben Castaneda</p>
    <p className='info'>Academlo</p>
    </div>
    <a href="https://github.com/Juanrubenc/EStore">
    <i class="fa-brands fa-github"></i>
    </a>
    </div>
  )
}

export default footer
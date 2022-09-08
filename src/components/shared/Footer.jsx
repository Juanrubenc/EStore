import React from 'react'
import "./Styles/footer.css"
import T from '/Users/juanruben/Documents/react2.1/ecommerce/src/assets/T.svg'




const footer = () => {
  return (
    <div className='footer'>
    <img src={T} className="logo-dinosaurio" alt="React logo" />
    <div className='info'>
    <p>© 2022 Juan Ruben Castaneda</p>
    <p className='info'>Academlo</p>
    </div>
    <i class="fa-brands fa-github"></i>
    </div>
  )
}

export default footer
import React from 'react'

const QuienesSomos = () => {
  return (
      <div className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
        <div className='md:w-2/3 lg:w-4/5'>
          <h1 className="text-white font-black text-6xl text-center">Quienes Somos</h1>
          <div className='my-10 bg-white shadow rounded-lg p-5'>
            <div className='m-4'>
              <h2 className='text-2xl font-bold'>Nuestra historia</h2>
              <p className='my-3'>
La historia de Vini Pregatti empieza en la década de 1960, con una determinación del fundador Rafael contreras IV, teniendo una mente emprendedora y pasión por el vino, quien gracias a eso se materializó la idea de poder brindarle a México un vino de calidad con la ayuda de las marcas más populares de vino para poder ser un distribuidor en la Ciudad de México</p>
            </div>
            <div className='m-4'>
              <h2 className='text-2xl font-bold'>Mision</h2>
              <p className='my-3'>Ofrecer productos de gran valor y calidad, generando experiencias memorables a nuestros consumidores donde fomentaremos su cultura y su correcto consumo</p>
            </div>
            <div className='m-4'>
              <h2 className='text-2xl font-bold'>Vision</h2>
              <p className='my-3'>Poder ser la tienda online de renombre y ser un referente de nuestro área de vinos</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default QuienesSomos
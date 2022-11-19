import '../App.css'


const Home = () => {
  return (
    <div className='bg-wine'>
        <div className='md:w-2/3 lg:w-3/5 p-10'>
          <h1 className='text-6xl text-white '> Vinos de todos los lados del mundo <span className='text-black font-bold'>Todos los Sabores</span></h1>
          <p className='mt-5 text-white'> ¿Dejar que los placeres del cuerpo sean repelidos por las consecuencias convenientes del presente, y proveer al dolor, porque busca dolores, o está cegado al dolor porque es como un arquitecto? <blockquote>Vini-Pregati</blockquote></p>
          <div className='flex justify-end'>
            <button className='mx-5 my-2 py-3 px-4 text-white font-bold rounded bg-[#E82C48] hover:cursor-pointer hover:bg-[#BF243C] transition-colors '> Ir a Catálogo</button>
          </div>
        </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
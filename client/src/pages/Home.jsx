import '../App.css'


const Home = () => {
  return (
    <div className='bg-wine'>
        <div className='md:w-2/3 lg:w-3/5 p-10'>
          <h1 className='text-6xl text-white '> Vinos de todos los lados del mundo <span className='text-black font-bold'>Todos los Sabores</span></h1>
          <p className='mt-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat corporis repellendus esse praesentium expedita consequatur doloremque provident quod, nam dolores ad quaerat aut est, dolorem obcaecati quia architecto modi?</p>
          <div className='flex justify-end'>
            <button className='mx-5 py-3 px-4 text-white font-bold rounded bg-[#E82C48] hover:cursor-pointer hover:bg-[#BF243C] transition-colors '> Continua comprando </button>
          </div>
        </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
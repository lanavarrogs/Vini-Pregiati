


const Contactanos = () => {

  const handleSubmit = () => {
    e.preventDefault()
  }

  return (
    <div className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-4/5">
        <h1 className="text-white font-black text-6xl text-center">Contáctanos</h1>
        <form 
          className="my-10 bg-white shadow rounded-lg p-5 "
          onSubmit={handleSubmit}
          >
          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="nombre"
            >Nombre</label>
            <input
              type='text'
              placeholder="Ingresa tu nombre"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="email"
            >Email</label>
            <input
              type='email'
              placeholder="Ingresa tu Email"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"        
              onChange={e => setPassword(e.target.value)}/>
          </div>

          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="asunto"
            >Asunto</label>
            <textarea
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50 h-40"        
              onChange={e => setPassword(e.target.value)}/>
          </div>

          <input
            type="submit"
            value="Enviar"
            className="bg-[#F22E4B] w-full py-3 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors"
          />
        </form>
    
      </div>

    </div> 
  
    )
}

export default Contactanos
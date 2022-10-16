import { Link } from "react-router-dom"


const Register = () => {
  return (
    <>
      <h1 className="text-white font-black text-6xl text-center">Crear Cuenta</h1>
      <form className="my-10 bg-white shadow rounded-lg p-5">
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >Nombre</label>
          <input
            type='text'
            placeholder="Ingresa tu nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >Email</label>
          <input
            type='email'
            placeholder="Correo electronico"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >Password</label>
          <input
            type='password'
            placeholder="Password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5">
          <label 
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="confirm-password"
          >Password</label>
          <input
            type='password'
            placeholder="Repite el passowrd"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Registrarse"
          className="bg-[#F22E4B] w-full py-3 mb-5 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-[#BF243C] transition-colors"
        />
      </form>

        <nav className="lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-slate-200 uppercase text-sm"
            to="/"
          >Ya tienes cuenta? Incia sesion</Link>

        </nav>

    </> 
  )
}

export default Register
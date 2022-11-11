import WineCart from '../components/WineCart'


const ListCart = ({carItems}) => {
  return (
    <div  className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center '>
      <div className='md:grid grid-cols-3 gap-3'>
        {carItems.map( (producto,index) => (
          <WineCart
            key={index}
            producto={producto}
          />
        ))}
      </div>
    </div>
  )
}

export default ListCart
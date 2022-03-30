//front-end
import moment from 'moment'
//back-end

function List ({ id, amount, transactionDate, name, email }) {
  return (
    <div
      className='
    flex 
    justify-between
    bg-gray-600 
    hover:opacity-90 
    hover:scale-105
    transform
    transition
    ease-in-out
    px-8
    py-7
    '
    >
      {/**left */}
      <p className='font-robot-slab left-0 top-0 font-light text-sm text-blue-200'>
        {moment(transactionDate).format('DD/MM/YY')}
      </p>
      {/**middle && right */}
      <div className='justify-between space-x-5 flex items-center'>
        <div className='grid space-y-4 place-items-center'>
          <h2 className='text-lg font-robot-slab font-semibold text-purple-300'>
            An amount of
          </h2>
          <h1 className='text-xl font-robot-slab font-normal text-purple-200'>
            {amount}
          </h1>
        </div>
        {/**right */}
        <div className='grid space-y-3 items-center place-items-end'>
          <h2 className='text-base font-robot-slab font-semibold text-purple-300'>
            Email: {email}
          </h2>
          <h3 className='text-lg font-robot-slab font-normal text-purple-200'>
            Name: {name}
          </h3>
        </div>
      </div>
    </div>
  )
}

export default List

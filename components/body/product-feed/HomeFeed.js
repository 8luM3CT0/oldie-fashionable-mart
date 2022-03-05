//front-end
import { Product, Banner } from '../../index'
import { midImage } from '../../../public/5477544.jpg'
//back-end
function HomeFeed ({ items }) {
  return (
    <div
      className='
        grid 
        grid-flow-row-dense 
        md:grid-col-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        mx-auto
        pb-6
        '
    >
      <img
        src='https://wallpaperaccess.com/full/242333.jpg'
        alt=''
        className='
        md:col-span-full 
        rounded-md  
        mx-auto 
        p-8
        -mt-60
        opacity-80
        '
      />
      {items
        .slice(0, 4)
        .map(({ id, item_jpg, name, price, category, rating, description }) => (
          <Product
            key={id}
            id={id}
            name={name}
            category={category}
            item_jpg={item_jpg}
            price={price}
            description={description}
          />
        ))}
    </div>
  )
}

export default HomeFeed

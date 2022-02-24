//front-end
import Product from '../product/Product'
import { midImage } from '../../../public/5477544.jpg'
//back-end
function ProductFeed ({ items }) {
  return (
    <div
      className='
        grid 
        grid-flow-row-dense 
        md:grid-col-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        mx-auto
        pb-[120px]
        '
    >
      {items
        .slice(0, 4)
        .map(({ id, item_jpg, name, price, category, rating }) => (
          <Product
            key={id}
            id={id}
            name={name}
            category={category}
            item_jpg={item_jpg}
            price={price}
          />
        ))}
      <img
        src='https://wallpaperaccess.com/full/242333.jpg'
        alt=''
        className='
        md:col-span-full 
        rounded-md  
        mx-auto 
        p-8'
      />
      <div className='md:col-span-2'>
        {items
          .slice(4, 5)
          .map(({ id, item_jpg, name, price, category, rating }) => (
            <Product
              key={id}
              id={id}
              name={name}
              category={category}
              item_jpg={item_jpg}
              price={price}
            />
          ))}
      </div>
      {items
        .slice(5, 7)
        .map(({ id, item_jpg, name, price, category, rating }) => (
          <Product
            key={id}
            id={id}
            name={name}
            category={category}
            item_jpg={item_jpg}
            price={price}
          />
        ))}
      <img
        src='https://wallpapercave.com/wp/wp6856178.jpg'
        alt=''
        className='
        md:col-span-full 
        rounded-md  
        mx-auto 
        p-8'
      />

      {items
        .slice(7, items.length)
        .map(({ id, item_jpg, name, price, category, rating }) => (
          <Product
            key={id}
            id={id}
            name={name}
            category={category}
            item_jpg={item_jpg}
            price={price}
          />
        ))}
    </div>
  )
}

export default ProductFeed

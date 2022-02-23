//front-end
import Product from '../product/Product'
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
        mx-auto'
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
        src="'https://links.papareact.com/dyz"
        alt=''
        className='md:col-span-full rounded-md'
      />
      <div className='md:col-span-2'>
        {items
          .slice(5, 6)
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
        .slice(6, items.length)
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

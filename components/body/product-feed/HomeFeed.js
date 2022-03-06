//front-end
import { Product, Banner } from '../../index'
import { midImage } from '../../../public/5477544.jpg'
//back-end
function HomeFeed ({ items }) {
  return (
    <>
      <img
        src='https://www.pixelstalk.net/wp-content/uploads/images5/Awesome-80s-Aesthetic-Wallpaper-HD.png'
        alt=''
        className='
        md:col-span-full 
        rounded-xl 
        mx-auto 
        p-8
        -mt-60
        opacity-80
        '
      />
      <h1
        className='
    text-2xl 
    font-google-sans 
    font-normal 
    text-purple-400
    top-0
    left-0
    px-7
    '
      >
        Featured products
      </h1>
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
        {items
          .slice(0, 4)
          .map(
            ({ id, item_jpg, name, price, category, rating, description }) => (
              <Product
                key={id}
                id={id}
                name={name}
                category={category}
                item_jpg={item_jpg}
                price={price}
                description={description}
              />
            )
          )}
      </div>
    </>
  )
}

export default HomeFeed

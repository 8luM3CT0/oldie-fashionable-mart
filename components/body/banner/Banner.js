///front-end
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//back-end

function Banner () {
  return (
    <div className='relative'>
      <div
        className='
        absolute
        w-full
        h-32
        bg-gradient-to-t
        from-gray-100
        to-transparent
        bottom-0
        z-20
        '
      >
        <div>
          <img
            loading='lazy'
            src='https://wallup.net/wp-content/uploads/2015/12/192162-retro_games.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://i.pinimg.com/originals/e4/55/e7/e455e7004ffe558abf4e723f93b2c329.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://c4.wallpaperflare.com/wallpaper/664/271/705/video-games-pac-man-retro-games-wallpaper-preview.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://wallpaperaccess.com/full/242333.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            loading='lazy'
            src='https://www.wallpaperup.com/uploads/wallpapers/2013/12/05/185317/d5d771e79a8ff10b7fbbb11fbe3e3a6c-700.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Banner

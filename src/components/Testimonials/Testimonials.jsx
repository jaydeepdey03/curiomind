import Carousel from "react-elastic-carousel";
import styles from './asset/Testimonials.module.css'
import testimonials from './Testimonials.json'

const breakPoints = [
    { itemsToShow: 3}
]
const Testimonials = () => {
  return (
    <>
      <div className="flex justify-center pt-20 pb-10">
        <hr className="w-1/4 border-b-2 border-gray-400" />
      </div>
      <div className="flex justify-center text-3xl px-8 pb-12">Testimonials</div>
      
      <Carousel breakPoints={breakPoints}>

        {testimonials.map((item) => (

            <div className={styles.TestimonialsBox} style={{
              backgroundImage: `url(${item.imgUrl})` 
            }}>

            <img src="https://www.linkpicture.com/q/Vector-1.svg" className={styles.vector} alt="..."></img>
            
            <div className={styles.TestimonialsText}>
              {item.testimonal}
            </div>

          </div>

        ))}

      </Carousel>
    </>
  )
}

export default Testimonials
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import image from '../assets/img/img-cat.jpg'



export default function Carrousel(){

    const movies = [
        {title: "1", img: image}, 
        {title: "2", img: image},
        {title: "3", img: image}, 
        {title: "4", img: image}, 
        {title: "4", img: image}, 
        {title: "5", img: image}, 
        {title: "6", img: image}, 
    ];

    return( 

<Swiper 
            spaceBetween={10}
            slidesPerView={4}
            navigation
            
        >
            {movies.map((movie, index) => (
                <SwiperSlide key={index}>
                    <div className="max-w-1/4">
                        <h3>{movie.title}</h3>
                         <img className="h-full object-fill transition-transform transform hover:scale-110" src={movie.img} alt={movie.title}/>
                    </div>
                    
                </SwiperSlide>
            ))}

       </Swiper>

       
       
    )
}



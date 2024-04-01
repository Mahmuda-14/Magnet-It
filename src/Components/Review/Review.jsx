
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {

                setReview(data);

            })
    }, [])
    return (


        <div className="mt-10  mr-10 ">

            <div className="text-center mb-8">
                <h2 className=" text-4xl font-bold text-black">What<span className=" text-blue-800" > Customers</span> Say About Us</h2>

            </div>
           <div className=" mx-28">
           <Swiper
                spaceBetween={50}
                // slidesPerView={2}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                breakpoints={{

                    1400: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 2
                    },

                    640: {
                        slidesPerView: 1
                    },

                    320: {
                        slidesPerView: 1
                    },
                    200: {
                        slidesPerView: 1
                    },

                }}
                className="top-[71px]"
            >
                {review.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className=" p-[3.5rem] lg:w-[586px] h-[333px] mb-[13.5rem] bg-white rounded-2xl shadow-2xl" >



                            <FaQuoteLeft></FaQuoteLeft> <div className="" >

                                <h3 className="text-left">{review.comments}</h3>

                                <div className="flex mt-9">
                                    <img src={review.image} loading="lazy" alt="Web Design" className="w-[5rem] h-[5rem] rounded-full" />
                                    <div className="flex flex-col ml-11">
                                        <p className="text-left text-blue-900">{review.name}</p>
                                        <p className="text-left">{review.pos}</p>
                                    </div>
                                </div>
                            </div>




                        </div>


                    </SwiperSlide>
                ))}
            </Swiper>
           </div>
        </div>




    );
};

export default Review;



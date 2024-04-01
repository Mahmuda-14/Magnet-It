// import bg from '../assets/bg5.jpg'
// import { AiOutlineMessage } from "react-icons/ai";
// import { TypeAnimation } from 'react-type-animation';
// import { FaDownload } from "react-icons/fa6";
// import bio from "../assets/Resume Of Mahmuda Sultana.pdf"
// import { TypeAnimation } from 'react-type-animation';


// const Banner = () => {


//     return (
//         <div>


// <div className="hero h-[54rem] mx-auto bg-[#d9e0d7]" style={{
//     clipPath: 'polygon(100.93% 548px, 9px 74.3%, 0% 643px, 0px 0px, 100% 0px)',
//     // Add other necessary styles here

//     // 'polygon(100% calc(100% - 70px), 200px 100%, 0 calc(100% - 110px), 0 0, 100% 0)'
//     // polygon(99.93% 722px, 9px 74.30%, 0% 643px, 0px 0px, 100% 0px)
// }} >


//                 <div className="flex flex-row justify-around">

//                     <div>   <h1 className="mb-10 text-4xl font-bold text-[#4e453e] ml-9 mr-14" >Where Artistry Meets Engineering: Crafting Innovative Software Solutions</h1>

//                         <div className='flex flex-row ml-9 mr-14'>
//                             <div className="divider divider-horizontal w-[0.5rem] bg-red-900"> </div>
//                             <p className="mb-5  text-[#8b7663] ">


//                                 <TypeAnimation
//                                     sequence={[

//                                         'Magnet IT specializes in providing custom software development services',
//                                         1000,
//                                         'Magnet IT have mastered the end-to-end product development lifecycle',
//                                         1000,


//                                     ]}
//                                     speed={50}
//                                     style={{ fontSize: '1em' }}
//                                     repeat={Infinity}
//                                 />
//                             </p>

//                         </div>

//                         <div className=' mt-5 ml-9 mr-14'>

//                             <button className="btn bg-[#4e453e] text-yellow-200 mr-4">Learn More</button>



//                         </div>

//                     </div>





//                     <div>
//                         <img className=' w-[93rem] h-[38rem] -mt-[125px]' src={bg1} alt="" />
//                     </div>
//                 </div>




//             </div>

//         </div>

//     );
// };

// export default Banner;


import { TypeAnimation } from 'react-type-animation';
import img from '../../../public/bg3.webp';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[75vh] " style={{
                backgroundImage: `url('${img}')`,
                width: 'auto',

                // Add object-position property
            }} >
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" max-w-[83rem]">
                        <div className="flex flex-row justify-around">

                            <div>   <h1 className=" mt-20 mb-10 text-5xl font-bold text-white ml-9 mr-14" >Where Artistry Meets Engineering: Crafting Innovative Software Solutions</h1>
                                <div className="divider divider-vertical w-[8.5rem] h-[0.3rem] ml-[479px] bg-blue-700"> </div>

                                <div className='flex flex-row ml-[10rem] mr-14'>

                                    <p className="mb-5 ml-[155px] text-white">


                                        <TypeAnimation
                                            sequence={[

                                                'Magnet IT specializes in providing custom software development services',
                                                1000,
                                                'Magnet IT have mastered the end-to-end product development lifecycle',
                                                1000,


                                            ]}
                                            speed={50}
                                            style={{ fontSize: '1.2em' }}
                                            repeat={Infinity}
                                        />
                                    </p>

                                </div>

                                <div className=' mt-5 ml-9 mr-14'>

                                <HashLink smooth to="#contact"><button className="btn bg-[#22245e] text-white mr-4">Learn More</button></HashLink>



                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

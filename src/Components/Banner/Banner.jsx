


import { TypeAnimation } from 'react-type-animation';
import img from '../../../public/bg3.webp';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[75vh] " style={{
                backgroundImage: `url('${img}')`,
                width: 'auto',

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

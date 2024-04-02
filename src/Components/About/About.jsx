
import h1 from '../../../src/assets/hr1.jpeg'
import h2 from '../../../src/assets/hr2.jpeg'
import h3 from '../../../src/assets/hr3.jpeg'
const About = () => {
    return (
        <div id="about" className=' '>

            <div className="h-[61rem] bg-[#dee1fb] " style={{
                clipPath: 'polygon(123.8% 911px, -54px 100.21%, -3.6% 632px, -16px 93px, 101.73% 5px)',
                // Add other necessary styles here

                // 'polygon(100% calc(100% - 70px), 200px 100%, 0 calc(100% - 110px), 0 0, 100% 0)'
                // polygon(99.93% 722px, 9px 74.30%, 0% 643px, 0px 0px, 100% 0px)
            }}>
                <h2 className=' text-center text-3xl font-bold pt-[6.25rem] px-9 pb-9 mt-[6.25rem] mb-5'>ABOUT MAGNET IT</h2>

                <div className=" flex flex-row justify-items-center w-[50rem] p-20 mx-auto ">
                    <h2 className=" text-7xl font-bold text-black"><span className=" text-blue-800">WHO </span>WE ARE</h2>
                    <div className="divider divider-horizontal w-[1.5rem] h-[6.3rem] mt-[3.75rem]  bg-blue-700"> </div>
                    <p className=" ml-12">MAGNET IT is a premier provider of software development and testing services. Having talented software engineers on board, we craft compelling web, desktop, and mobile applications for our clients. Since our inception, we have partnered with numerous companies and delivered operational gains to startup, emerging, and established  organizations in the United States</p>

                </div>
                <div className="flex sm:flex-col md:flex-col lg:flex-row sm:gap-7 justify-around mx-32  ">
                    <div>
                        {/* <h2 className=' text-center text-3xl font-bold p-9 mt-[5.25rem] mb-5'>OUR TEAM</h2> */}
                        <div className="w-[293px] h-[320px] rounded-xl bg-base-100 shadow-xl">
                            <img className=' w-[293px] h-[148px] rounded-xl ' src={h1} alt="Shoes" />
                            <div className="card-body">
                                <h2 className="card-title">Per Einar Myklebust</h2>
                                <p>CEO & Co-founder<br />Oslo Office</p>

                            </div>
                        </div>
                    </div>
                    <div className=" w-[293px] h-[320px] rounded-xl bg-base-100 shadow-xl">
                        <img className=' w-[293px] h-[148px] rounded-xl ' src={h2} alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Petter Irgens Gustafson</h2>
                            <p>COO & partner<br />
                                Oslo Office</p>

                        </div>
                    </div>
                    <div className=" w-[293px] h-[320px] rounded-xl bg-base-100 shadow-xl">
                        <img className=' w-[293px] h-[148px] rounded-xl' src={h3} alt="Shoes" />
                        <div className="card-body">
                            <h2 className="card-title">Jens Wahlberg</h2>
                            <p>Chief Commercial Officer & partner<br />
                                Oslo Office</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import img1 from '../../../public/brand1.webp'
import img2 from '../../../public/brand2.webp'
import img3 from '../../../public/brand3.webp'
import img4 from '../../../public/brand4.png'
import img5 from '../../../public/brand5.png'
import img6 from '../../../public/brand6.png'
const Brand = () => {
    return (
        <div className="bg-[#29326c] text-center text-2xl font-bold py-10 h-[21rem]"  style={{
            clipPath: 'polygon(100.93% 205px, -14px 76.24%, 0% 643px, 0px 0px, 100% 0px)',
            // Add other necessary styles here

            // 'polygon(100% calc(100% - 70px), 200px 100%, 0 calc(100% - 110px), 0 0, 100% 0)'
            // polygon(99.93% 722px, 9px 74.30%, 0% 643px, 0px 0px, 100% 0px)
        }}>
            <h2 className='pb-4  text-slate-300 text-xl'>TRUSTED BY ----</h2>
            <div className="grid grid-cols-6  ml-[17.8rem] mr-[12.75rem] " >

                <img className="w-[15rem] h-[17rem] pt-9 pl-[57px] pb-[189px]" src={img1} alt="Shoes" />
                <img className="w-[15rem] h-[17rem] pt-9 pl-[57px] pb-[189px]" src={img2} alt="Shoes" />
                <img className="w-[15rem] h-[17rem] pt-9 pl-[57px] pb-[189px]" src={img3} alt="Shoes" />
                <img className="w-[15rem] h-[17rem] pt-9 pl-[57px] pb-[189px]" src={img4} alt="Shoes" />
                <img className="w-[15rem] h-[17rem] pt-9 pl-[57px] pb-[189px]" src={img5} alt="Shoes" />
                <img className="w-[15rem] h-[17rem] pt-9 pl-[57px] pb-[189px]" src={img6} alt="Shoes" />
            </div>
        </div>
    );
};

export default Brand;

// 
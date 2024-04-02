import './Product.css'
import p1 from '../../assets/pr1.png'
import p2 from '../../assets/pr2.png'
import p3 from '../../assets/pr3.png'
import p4 from '../../assets/pr4.png'
const Product = () => {
    return (
        <div id='product' className='h-[105vh]'>
            <h2 className='text-center text-4xl font-bold p-9 mt-[8rem] mb-[12.5rem]'>Recent<span className="text-blue-800"> Developed</span>  Products</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-screen-2xl">
               
                <div className="">
                    <div className="card cardProduct   ">
                        <img className='rounded-xl h-[700px]' src={p1} alt="Shoes" />
                        <div className="card-body content bg-slate-100 mx-36">
                            <h2 className="card-title text-blue-900 text-2xl ">ECOM Trading</h2>
                            <p>ECOM operates in more than 40 major producing countries, working with thousands of farmers and local businesses. They employ more than a thousand agronomists and field staff globally, running innovative, on-the-ground operations and sustainability programmes to help our customers and farming communities worldwide</p>
                            
                        </div>
                    </div>
                </div>


                <div className="grid md:grid-cols-1 lg:grid-cols-1  gap-2 mr-[113px]">
                    
                    <div className="card cardProduct34 -left-[52px]">
                        <img src={p2} alt="Shoes" />
                        <div className="card-body content34 bg-slate-100 ml-[5px] mr-[53px]">
                            <h2 className="card-title  text-blue-900 text-2xl ">Hi-Force</h2>
                            <p>Helping an engineering leader transform sales operations & customer experience whilst reducing overheads </p>
                            
                        </div>
                    </div>

                    <div className="card cardProduct34 ">
                        <img src={p3} alt="Shoes" />
                        <div className="card-body content34 bg-slate-100 ml-[5px] mr-[53px]">
                            <h2 className="card-title  text-blue-900 text-2xl">Don’t Waste Money</h2>
                            <p>A customer experience & back-end solution that enabled an aggregator to flourish </p>
                            
                        </div>
                    </div>

                    <div className="card cardProduct23 ">
                        <img src={p4} alt="Shoes" />
                        <div className="card-body content23 bg-slate-100 mx-36 mt-9">
                            <h2 className="card-title  text-blue-900 text-2xl">SSP International</h2>
                            <p>SSP are experts in creating and running food outlets for people on the move across the world. SSP look to bring a sense of place to the food and beverages they offer. </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

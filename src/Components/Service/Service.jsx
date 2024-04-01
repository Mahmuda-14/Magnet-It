import './Service.css'
import { useState } from 'react';
import { useEffect } from 'react';
const Service = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setService(data)
            })

    }, [])
    return (
        
       <div id="service">
        <h2 className=' text-center text-4xl font-bold p-9 my-5'>Software<span className=" text-blue-800"> Development</span>  Services</h2>
     
         <div className='grid grid-cols-3 mx-w-[95rem] mx-24 gap-6'>
            
            {
                service.map(item => (
                    <div key={item.id} className=" card123 ">
                        <figure className="pl-[9.5rem] pr-10 pt-10 items-center">

                            <img className=' w-14 h-14 text-blue-700' src={item.img} alt="" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.name}</h2>
                            <p className=' text-sm font-normal text-center'>{item.description}</p>

                        </div>

                    </div>

                ))
            }
            
        </div>
       </div>
    );
};

export default Service;


// const Contact = () => {
//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     {/* <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div> */}
//                    <div>
//    <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Leave us your info </h1>
//             <p className="py-6">Send your details and we’ll get in touch</p>
//         </div>
//                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">

//                         <form className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" placeholder="email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" placeholder="password" className="input input-bordered" required />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-primary">Login</button>
//                             </div>
//                         </form>
//                     </div>
//                    </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;

// import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
// import emailjs from 'emailjs-com';

const Contact = () => {
    // const serviceID = 'subarna_14';
    // const templateID = 'template_i1fmd5h';
    // const publicKey = 'RcU2WNTpvgxWAqsiJ';

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const templateParams = {
    //         to_name: e.target.name.value,
    //         from_name: e.target.email.value,
    //         message: e.target.message.value,
    //     };

    //     emailjs
    //         .send(serviceID, templateID, templateParams, publicKey)
    //         .then((response) => {
    //             alert('message sent succesfully')
    //             console.log('SUCCESS!', response.status, response.text);
    //         })
    //         .catch((error) => {
    //             console.log('FAILED...', error);
    //         });
    // };



    return (
        <div >

            <div id="contact" className="">

        
                <div className="flex sm:flex-col md:flex-col lg:flex-row-reverse gap-4">

                    <div className="text-left w-1/3 px-10 ml-20 mt-10 mx-6" >
                        <h1 className="text-2xl text-slate-700 font-bold">Get In Touch</h1>
                        <div className="flex my-6">
                            <FaLocationDot className="text-slate-500 mt-1 mr-2"></FaLocationDot>
                            <p className=" flex text-slate-500"> 4 apt. Flawing Street. The Grand Avenue.
                                Liverpool, UK 33342</p>

                        </div>
                        <div className="flex my-6">
                            <FaPhoneAlt className="text-slate-500 mt-1 mr-2"></FaPhoneAlt>
                            <p className=" flex text-slate-500"> +880 1996964328</p>

                        </div>
                        <div className="flex my-6">
                            <SiGmail className="text-slate-500 mt-1 mr-2"></SiGmail>
                            <p className=" flex text-slate-500">mahmuda.sultana1425@gmail.com</p>

                        </div>



                    </div>
                    <div className="card my-4 shrink-0 w-2/3 max-w-[55rem] sm:ml-16 md:ml-16 lg:ml-0">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Leave Us <span className=" text-blue-800">Your</span> Info </h1>
                            {/* <h2 className=" text-7xl font-bold text-black"><span className=" text-blue-800">WHO </span>WE ARE</h2> */}
                            <p className="py-6">Send your details and we’ll get in touch</p>
                        </div>

                        <form className="card-body rounded-xl" >

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>

                                <input type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Send Message</span>
                                </label>
                                <textarea name="message" placeholder="Message" className="input input-bordered" required ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-blue-900 text-white btn-outline">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;











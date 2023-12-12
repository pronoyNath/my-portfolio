import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import contactAnimation from '../../assets/animations/contact.json'
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';

const EmailContact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mhgwjtj', 'template_7ivmy7p', form.current, 'qWm4n9vQXPDvp1A1Z')
            .then((result) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Message Sent Successfully"
                  });
                });
    };

    return (
      
        <div id='hireMe' className='text-white mt-20 pt-10'>
            <h2 className="text-4xl font-bold  uppercase text-center text-[#dbb878]">Hire Me</h2>
            <div className="grid max-w-screen-xl grid-cols-1 gap-12 px-8 pt-10 pb-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32" >

                <div className="flex flex-col items-center justify-between" >
                    <div className="space-y-2" >
                        <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                        <div className="dark:text-gray-400" >What are you thinking? just say it.</div>
                    </div>
                    <Lottie animationData={contactAnimation}></Lottie>
                </div>
                <form ref={form} onSubmit={sendEmail} className="space-y-6 mt-7">
                    <div >
                        <label className="text-sm">Full name</label>
                        <input id="name" type="text" name="user_name"  placeholder="" className="w-full p-3 rounded dark:bg-gray-800" required/>
                    </div>
                    <div >
                        <label className="text-sm">Email</label>
                        <input id="email" name="user_email" type="email" className="w-full p-3 rounded dark:bg-gray-800" required/>
                    </div>
                    <div >
                        <label className="text-sm">Message</label>
                        <textarea name="message"  id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800" required></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded hover:bg-[#c49037] dark:bg-[#dbb878] dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default EmailContact;


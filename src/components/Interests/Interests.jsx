import  './interests.css'

const Interests = () => {
    return (
        <section className=" dark:text-gray-100 mt-10 pb-10">
           
            <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8" >
                <h2 className="text-3xl font-bold text-white">Technologies I have worked with</h2>
                <div className="flex flex-wrap justify-center lg:justify-between pt-5" >
                    
                    <div>
                    <img src="https://i.ibb.co/nnmMj02/firebase.png" alt=""  className="w-20 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                    <p>Firebase</p>
                    </div>
                    <img src="https://i.ibb.co/K7sBCbf/express.png" alt=""  className="w-20 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 bg-white p-1 rounded"/>
                 
                    <img src="https://i.ibb.co/n04mj2W/react.png" alt=""  className="w-20 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                    <img src="https://i.ibb.co/92rsDL5/nodejs.png" alt=""  className="w-20 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                  <div className="mt-5">
                  <img src="https://i.ibb.co/2qZrDpq/tailwind-css-icon.png" alt=""  className="w-20 h-14 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                  </div>
                  <img src="https://i.ibb.co/zscH6dZ/js.png" alt=""  className="w-20 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 rounded"/>
                    <img src="https://i.ibb.co/41mktpj/mongodb.png" alt=""  className="w-24 h-32 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                    
                    <img src="https://i.ibb.co/fY8b2WX/netlify.png" alt=""  className="w-20 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                    <img src="https://i.ibb.co/6Dwjh8q/bootstrap-5-logo-icon.png" alt=""  className="w-24 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                    {/* <img src="https://i.ibb.co/MNjFd39/css.png" alt=""  className="w-20 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                    <img src="https://i.ibb.co/MNjFd39/css.png" alt=""  className="w-20 h-20 mx-10 my-6 fill-current md:mx-12 lg:m-0 "/>
                    
                     */}
                   
                    
                    
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Vue.js" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
                        <title>Vue.js</title>
                        <path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"></path>
                    </svg> */}
                </div>
            </div>
        </section>
        
    );
};

export default Interests;
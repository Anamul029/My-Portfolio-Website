import { motion } from 'framer-motion'
const Projects = () => {
    return (
        <div id="project" className="my-20">
            <h2 className="text-3xl font-bold md:ml-10 text-white">PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 md:p-10 gap-6">
                {/* card start */}
                <motion.div
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{
                    delay:0.2,
                    x:{type:"spring",stiffness:60},
                    opacity:{duration:1},
                    ease:"easeIn",
                    duration:1,
                }}
                 className="card bg-base-100   shadow-xl">
                    <figure>
                        <img
                        className='mx-2'
                            src="https://i.ibb.co.com/q5B9G2N/Screenshot-426.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold">
                            Meetwise
                        </h2>
                        <p>MeetWise is a Next.js scheduling platform with time zone management, language support, and secure authentication, making online meeting organization seamless and efficient.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://meetwise-one.vercel.app">Live Link</a></button>
                            <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://github.com/2244jhalak/meetwise">Github Repo</a></button>

                        </div>
                    </div>
                </motion.div>
                {/* card end */}
                <motion.div
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{
                    delay:0.2,
                    x:{type:"spring",stiffness:60},
                    opacity:{duration:1},
                    ease:"easeIn",
                    duration:1,
                }}
                 className="card bg-base-100   shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co/m5KMDnt/Screenshot-311.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold">
                            Building Management System
                        </h2>
                        <p>he Building Management System is a web platform with role-based dashboards, secure Stripe payments, and JWT/Google authentication for efficient, secure building management.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://building-management-f63c0.web.app">Live Link</a></button>
                            <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://github.com/Anamul029/Building-Management-Client?tab=readme-ov-file">Github Repo</a></button>

                        </div>
                    </div>
                </motion.div>
                {/* card end */}
                <motion.div
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{
                    delay:0.2,
                    x:{type:"spring",stiffness:60},
                    opacity:{duration:1},
                    ease:"easeIn",
                    duration:1,
                }}
                 className="card bg-base-100   shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/nsFgPTJ/Screenshot-427.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="text-xl font-semibold">
                            Card Maker Pro
                        </h2>
                        <p>Card Maker Pro is a React tool for creating custom cards, offering features like card type selection, icon placement, and quick downloads.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://bespoke-fox-a1f3eb.netlify.app">Live Link</a></button>
                            <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://github.com/Anamul029/Card-Genaretor">Github Repo</a></button>

                        </div>
                    </div>
                </motion.div>
                {/* card end */}
               

                {/* card end */}
               



            </div>
            <hr />

        </div>
    );
};

export default Projects;
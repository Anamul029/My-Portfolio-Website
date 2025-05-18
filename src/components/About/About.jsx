import {motion} from 'framer-motion'
const About = () => {
    return (
        <div id="about">
            <hr />
            <h2 className="text-3xl text-white font-bold md:ml-10">ABOUT ME</h2>
            <div>
                <div className="hero min-h-screen p-6">
                    <div className="hero-content flex-col lg:justify-between md:flex-col lg:flex-row">
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
                         className="avatar">
                            <div className="md:w-64 w-20 rounded-full">
                                <img src="https://lh3.googleusercontent.com/a/ACg8ocK1w5JV2HjffTY-OKvs-UAOE52k_Nli5FO04xg8xVSy_sgl1RrN=s396-c-no" />
                            </div>
                        </motion.div>
                        <div className="w-2/3">
                            <motion.p 
                            
                            initial={{x:100,opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{
                                delay:0.2,
                                x:{type:"spring",stiffness:60},
                                opacity:{duration:1},
                                ease:"easeIn",
                                duration:1,
                            }}
                            className=" text-white text-xl">
                                I'm Md.Anamul Haque, a web developer specializing in the Frontend and MERN stack. Highly motivated Computer Science and Engineering undergraduate with practical experience in web
                                development. Proficient in creating modern, responsive web applications using React.js, JavaScript, CSS,
                                Tailwind CSS,Bootstrap and Firebase. Skilled in backend development with Node.js, Express, MongoDB, and
                                JWT for secure authentication. Adept at developing user-friendly interfaces and enhancing backend
                                functionality. Seeking an entry-level position to apply my technical skills and contribute to an innovative
                                company's growth.
                            </motion.p>
                            <motion.h2
                             initial={{x:-100,opacity:0}}
                             whileInView={{x:0,opacity:1}}
                             transition={{
                                 delay:0.2,
                                 x:{type:"spring",stiffness:60},
                                 opacity:{duration:1},
                                 ease:"easeIn",
                                 duration:1,
                             }}
                             className="font-bold text-2xl text-white my-6">EDUCATION</motion.h2>
                            <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between">
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
                                className="card text-white border-2 border-white lg:w-96 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">Bachelor of Science in Computer Science and Engineering(CSE)</h2>
                                        <p>Bangabandhu Sheikh Mujibur Rahman Science and Technology University,Gopalganj</p>
                                        <p>2022-2026</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                 initial={{x:100,opacity:0}}
                                 whileInView={{x:0,opacity:1}}
                                 transition={{
                                     delay:0.2,
                                     x:{type:"spring",stiffness:60},
                                     opacity:{duration:1},
                                     ease:"easeIn",
                                     duration:1,
                                 }}
                                className="card border-2 border-white text-white lg:w-96 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">Higher Secondary Certificate</h2>
                                        <p>Nageswari Goverment College</p>
                                        <p>Nageswari,Kurigram</p>
                                        <p>2018-2020</p>
                                        
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default About;
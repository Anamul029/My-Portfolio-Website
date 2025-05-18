import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"
// import {fadeIn} from '../../variants'
const Banner = () => {
    return (
        <div
            // variants={fadeIn("up",0.2)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{once:false,amount:0.7}}
            id="home" className=" md:w-5/6 container mx-auto">
            <div className="hero scroll-my-5 md:h-[750px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 1 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        src="https://lh3.googleusercontent.com/a/ACg8ocK1w5JV2HjffTY-OKvs-UAOE52k_Nli5FO04xg8xVSy_sgl1RrN=s396-c-no"
                        className=" transition duration-150 ease-in-out w-auto rounded-lg shadow-2xl" />
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                    >
                        <h1 className="text-white">Frontend Web Developer</h1>
                        <h1 className="text-5xl text-white font-bold">Hello I'm <br /><span className="text-blue-600">Md.Anamul Haque</span></h1>
                        <p className="py-6 text-white">
                            Building Dynamic User Interfaces with HTML,CSS,Tailwind CSS,Javascript,React.js,Node.js,Express.js and MongoDB
                        </p>
                        <div className="flex md:gap-5">
                            <button className="btn btn-outline rounded-3xl btn-primary"><a href="Anamul-Resume.pdf" download='Anamul-Resume.pdf'>Download Resume</a></button>
                            <button className="btn btn-outline rounded-3xl btn-primary"><a href="https://github.com/Anamul029"><FaGithub /></a></button>
                            <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://web.facebook.com/profile.php?id=100054799467994"><FaFacebook /></a></button>
                            <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://www.linkedin.com/in/md-anamul-haque15177/"><FaLinkedin /></a></button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
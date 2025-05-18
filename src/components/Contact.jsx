import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="my-20 text-white">
            <h3 className="text-3xl font-bold md:ml-10">CONTACT ME</h3>
            <div className="p-10 flex flex-col md:gap-12 md:flex-row justify-between">
                <div className="w-1/2 ">
                    <h2 className="font-bold text-2xl">Let's Talk</h2>
                    <p>I am looking for new opportunities.My inbox is always open.Feel free to ask me questions and I will try to get back to you asap !</p>
                    <div className="flex gap-3 my-3">
                        <button className="btn btn-outline rounded-3xl btn-primary"><a href="https://github.com/Anamul029"><FaGithub /></a></button>
                        <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://web.facebook.com/profile.php?id=100054799467994"><FaFacebook /></a></button>
                        <button className="btn btn-outline rounded-3xl btn-primary"> <a href="https://www.linkedin.com/in/md-anamul-haque15177/"><FaLinkedin /></a></button>
                    </div>
                </div>
                <div className="w-1/2">
                    <form noValidate className="flex flex-col  space-y-6 md:py-0  font-raleway">
                        <label className="block" htmlFor='from_name'>
                            <span className="pb-5 font-bold">Full name</span>
                            <input
                                name="from_name"
                                type="text" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" required />
                        </label>
                        <label className="block" htmlFor='from_email'>
                            <span className="mb-2 font-bold">Email address</span>
                            <input
                                name="from_email"
                                type="email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-white p-2" required />
                        </label>
                        <label className="block" htmlFor='message'>
                            <span className="mb-2 font-bold">Message</span>
                            <textarea
                                name="message"
                                rows="3" className="block w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-600 bg-white" required></textarea>
                        </label>
                        <input type='submit'  className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-green-500 text-gray-50 focus:ring-green-600 hover:ring-green-800"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
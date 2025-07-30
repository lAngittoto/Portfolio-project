const Contact = () => {
    return(
        <div className="px-5 py-5 flex flex-col justify-center items-center overflow-hidden">
            <h1 className="text-2xl px-5 py-5">Click to redirect.</h1>
            <section className="px-5 py-5 lg:w-[500px] lg:h-[300px] md:w-[500px] md:h-[300px] w-[300px] h-[300px] bg-[#CAE8BD] flex flex-col justify-around items-center">
                 <p>Phone: <a href="tel:+639123456789" target="_blank" rel="noopener noreferrer">+63 912 345 6789</a></p>
                 <p>Email: <a href="mailto:plusnaruto184@gmail.com" target="_blank" rel="noopener noreferrer">plusnaruto184@gmail.com</a>a</p>
                 <p><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Allan S. Aranda</a></p>
            </section>
            <h1 className="text-4xl font-mono px-5 py-5 text-center">“Thank you for visiting my portfolio. <span className="text-[#B0DB9C]">I look forward to your message!</span>”</h1>
        </div>
    );
};
export default Contact;
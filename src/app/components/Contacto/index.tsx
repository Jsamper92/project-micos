


export const Contact = () => {


    return (
        <section id="contacto" className="bg-gray-100 pt-20">
            <div className=" w-full">
                <h2 className="text-4xl text-center text-gray-800 space-x-4 font-medium text-[40px]">CONTACTO</h2>
                <div className="flex flex-wrap mt-10">
                    <iframe
                        className="w-full h-[400px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.6066962327923!2d-3.1472123852191944!3d40.63855487933993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43abaedbc59ee5%3A0x84057af6ee77ece0!2sMicos%20Guarder%C3%ADa!5e0!3m2!1ses!2ses!4v1591472762039!5m2!1ses!2ses"
                        aria-hidden="false"
                        allowFullScreen
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact;
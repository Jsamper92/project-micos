import Image from "next/image";



export const Services = () => {

    const services = [
        {
            alternate: false,
            title: '¡Nos adaptamos a',
            span: 'tus necesidades!',
            content: 'En Micos, abrimos todo el año y siempre tratamos de adaptarnos a tus necesidades. Tenemos un horario diario muy amplio con posibilidad de ampliarlo si la demanda de las familias lo requieren. Sabemos que es muy difícil conciliar vida familiar y profesional, por lo que nuestro compromiso es el de tratar siempre de ayudar a los padres de cualquier manera.',
            img: '/images/services/necesidades.png'
        },
        {
            alternate: true,
            title: 'Servicios',
            span: 'que ofrecemos',
            content: 'Somos una Escuela pequeña, lo que nos permite poder dar a las familias un trato totalmente personalizado y muy familiar.',
            img: '/images/services/nuestros-servicios.png'
        },
        {
            alternate: false,
            title: 'Trato personalizado',
            span: 'en un entorno familiar y seguro',
            content: 'Buscamos que el entorno Familia / Escuela sea único, de forma que trasmitamos a nuestros niños los mismos valores y educación tanto en casa como en la Escuela.',
            img: '/images/services/trato-personalizado.png'
        }
    ]

    return (
        <section id="servicios" className="bg-gray-100 py-20">
            <div className="mx-10">
                <h2 className="text-4xl text-center text-gray-800 space-x-4 font-medium text-[40px]">SERVICIOS</h2>
                <div className="flex flex-wrap mt-10">
                    {services.map(({ title, span, content, img }, index) => {
                        return (
                            <div key={index} className={`c-services-block flex flex-col  md:flex-row justify-center`}>
                                <div data-aos={index === 1 ? 'fade-left' : 'fade-right'} data-aos-delay="100" data-aos-duration="600" className={`c-services-block__text md:w-[50%] ${index === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                    <h2 className={`c-services-block__title`}>
                                        {title}
                                        <span className="c-services-block__postitle">
                                            {span}
                                        </span>
                                    </h2>
                                    <p className="c-services-block__content">
                                        {content}
                                    </p>
                                </div>
                                <figure data-aos={index === 1 ? 'fade-rigth' : 'fade-left'} data-aos-delay="100" data-aos-duration="600" className={`c-services-block__figure ${index === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                    <Image src={img} fill alt={'imagen-' + span} className="c-services-block__img" />
                                </figure>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};
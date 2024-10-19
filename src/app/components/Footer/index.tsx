import Link from "next/link";



export const Footer = () => {

    const literals = [
        {
            text: "QUIERES CONOCERNOS",
            list: [
                {
                    text: 'No lo dudes, llama o escríbenos por mail para concertar una entrevista y te contaremos con más detalle cómo es nuestra escuela',
                    type: 'span'
                }
            ]
        },
        {
            text: "CONTÁCTANOS",
            list: [
                {
                    text: '675 733 140',
                    type: 'link',
                    href: 'tel:+34675733140'
                },
                {
                    text: "info@micosguarderia.es",
                    type: 'link',
                    href: 'mailto:info@micosguarderia.es'
                }
            ]
        },
        {
            text: "¿DONDE ESTAMOS?",
            list: [
                {
                    text: "Calle Bulevar del Alto Tajo 40",
                    type: 'span'
                },
                {
                    text: "19005 - Guadalajara",
                    type: 'span'
                }

            ]
        }
    ];

    return (
        <footer className="bg-[#e6b800b0] text-white font-semibold pb-10">
            <div className=" py-10">
                <div className="mx-10">
                    <div className="flex flex-wrap justify-around">
                        {literals.map(({ text, list }, index) => (
                            <div key={index} className="w-full md:w-1/4 mb-10">
                                <h3 className="text-2xl min-h-20 font-bold">{text}</h3>
                                <ul className="pl-5 mt-5">
                                    {list.map((item, index) => {
                                        if(item.type === 'link' && 'href' in item) {
                                            return (
                                                <li key={index}>
                                                    <Link key={index} href={item.href} className="">{item.text}</Link>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li key={index} className="">{item.text}</li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="ty-5">
                <div className="mx-10 text-center">
                    <p>© 2021 Micos Guardería. Todos los derechos reservados.</p>
                    <p className="underline h-[0.25px] my-5 bg-white w-[50%] mx-auto justify-center"></p>
                    <Link href={'/documents/Aviso-Legal.pdf'} rel="noopener noreferrer" target="_blank" className="text-center" title="micos">
                        Aviso legal, política de privacidad y cookies
                    </Link>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
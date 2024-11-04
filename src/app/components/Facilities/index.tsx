'use client';
import { instalations } from "@/app/utils/literals";
import { Box, IconButton, Modal, Zoom } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import styles from './index.module.css';



export const Facilities = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [active, setActive] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedText, setSelectedText] = useState<string | null>(null);
    const handleOpenModal = (img: string, index: number) => {
        console.log(instalations[active as number].text);
        setActive(index);
        setSelectedText(instalations[active as number].text);
        setSelectedImage(img);
        handleOpen();
    }

    return (
        <section id="instalaciones" className="bg-[#e6b800b0] pt-20">
            <div className=" w-full">
                <h2 className="text-4xl text-center text-gray-800 space-x-4 font-medium text-[40px]">INSTALACIONES</h2>
                <div className="flex flex-wrap flex-row mt-10 px-10 justify-around">
                    <>

                        {instalations.map(({ img, alt }, index) => (
                            <div
                                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-delay="100" data-aos-duration="600"
                                className="cursor-pointer relative" key={index}
                                onMouseEnter={() => {
                                    setActive(index);
                                    setOnMouseEnter(true);
                                }}
                                onMouseLeave={() => {
                                    setActive(null);
                                    setOnMouseEnter(false);
                                }}
                            >
                                <Image src={img} width={283} height={212} alt={alt} className="mb-12 h-[212px] object-cover" onClick={() => {
                                    setSelectedImage(img);
                                    handleOpen();
                                }} />
                                <Zoom in={onMouseEnter && index === active}>
                                    <Box onClick={() => handleOpenModal(img, index)} sx={{ position: 'absolute', backgroundColor: '#000000b5', border: '2px solid red', top: '15%', left: '25%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '150px', height: '150px' }}>
                                        <Box sx={{ color: 'white', textAlign: 'center' }}>
                                            <h3 className="text-2xl font-thin text-black lowercase first-letter:uppercase">{instalations[index].text}</h3>
                                        </Box>
                                    </Box>
                                </Zoom>
                            </div>
                        ))}
                        {selectedImage && (
                            <Modal
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyItems: 'center',
                                    justifyContent: 'center',
                                }}

                                open={open}
                                onClose={() => {
                                    handleClose();
                                    setSelectedImage(null);
                                }}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Zoom in={open}>
                                    <Box sx={{ bgcolor: 'background.paper', p: 4, position: 'relative', overflowX: 'hidden' }}>
                                        <IconButton
                                            className={`${styles['modal-close']} top-0 right-0`}
                                            aria-label="close modal"
                                            onClick={handleClose}
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                        <Image
                                            src={selectedImage || ''}
                                            width={500}
                                            height={500}
                                            alt="Selected"
                                            className="object-cover"
                                        />
                                        <Box
                                            data-aos="fade-right"
                                            data-aos-delay="100"
                                            data-aos-duration="600"
                                            sx={{
                                                position: 'absolute',
                                                backgroundColor: '#000000b5',
                                                border: '2px solid red',
                                                top: '2%',
                                                left: '3%',
                                                background: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '150px',
                                                height: '50px'
                                            }}>
                                            <Box sx={{ color: 'white', textAlign: 'center' }}>
                                                <h3 className="text-2xl font-thin text-black lowercase first-letter:uppercase">{selectedText}</h3>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Zoom>
                            </Modal>
                        )}

                    </>
                </div>
            </div>
        </section>
    )
};

export default Facilities;
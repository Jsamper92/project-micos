'use client';

import { Box, Button, Modal, Zoom } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";



export const Promotion = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const refTimeoutInit = useRef(0);
    const refTimoutClose = useRef(0);
    
        useEffect(() => {
            refTimeoutInit.current = window.setTimeout(() => {
                handleOpen();
            }, 3000);
    
            return () => {
                clearTimeout(refTimeoutInit.current);
            }
        }, []);
    
        useEffect(() => {
            refTimoutClose.current = window.setTimeout(() => {
                handleClose();
            }, 4000);
    
            return () => {
                clearTimeout(refTimoutClose.current);
            }
        }, [open]);

    return (
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
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Zoom in={open}>
                <Box sx={{ bgcolor: 'background.paper', p: 4, position: 'relative' }}>
                    <Image
                        src={'/images/promocion/promocion.png'}
                        width={400}
                        height={400}
                        alt="Selected"
                        className="object-cover"
                    />

                    <div className="flex w-[85%] justify-around absolute bottom-36">
                        <Link href="https://maps.app.goo.gl/pdbaNA8MKK2rnbF59">
                            <Button variant="contained">Dirección</Button>
                        </Link>
                        <Link href={`tel:+34675733140`}>
                            <Button variant="contained">Contáctanos</Button>
                        </Link>
                    </div>
                </Box>
            </Zoom>
        </Modal>
    )
};

export default Promotion;
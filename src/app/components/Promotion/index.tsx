'use client';

import { Box, Button, IconButton, Modal, Zoom } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import styles from './index.module.css';
import useDesktop from "@/app/hooks/useDesktop";

export const Promotion = () => {
    const desktop = useDesktop();
    const [open, setOpen] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        clearTimeout(refTimeoutInit.current);
        clearTimeout(refTimoutClose.current);
    };
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
            aria-labelledby="modal-promotion-matricula-gratuita"
            aria-describedby="Matricula gratuita curso 24/25"
        >
            <Zoom in={open}>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        p: 4,
                        position: 'relative',
                        width: desktop ? 'auto' : '75%'
                    }}
                >
                    <IconButton
                        className={`${styles['modal-close']} top-0 right-0`}
                        aria-label="close modal"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Image
                        src={'/images/promocion/promocion.png'}
                        width={400}
                        height={400}
                        alt="promoción matrícula gratuita"
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
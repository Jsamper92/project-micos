'use client';

import Image from "next/image";
import MenuHamburger from "../Hamburger";
import { Drawer } from "@mui/material";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { headers } from "@/app/utils/literals";
import Link from "next/link";


export const Header = () => {
    const [open, setOpen] = useState(false);
    const onChangeState = (state: boolean) => {
        setOpen(state);
    };
    const mediaQuery = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)');
    const [desktop, setDesktop] = useState((mediaQuery || {}).matches);
    const Headings = () => {
        const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
        const [span, setSpan] = useState({
            background: headers[0].background,
            width: 0,
            left: 0,
        });
        const [firstClick, setFirstClick] = useState(false);
        const setDimensions = (index: number) => {
            const info = {
                background: headers[index].background,
                width: spanRefs.current[index]?.clientWidth || 0,
                left: spanRefs.current[index]?.offsetLeft || 0,
            }
            if (info) {
                return info;
            }
        };
        useEffect(() => {
            const info = setDimensions(0);
            if (info) {
                console.log(info);
                setSpan(info);
            }

        }, []);

        const onClickSpan = (el: MouseEvent, index: number) => {
            if (desktop) {
                const info = setDimensions(index);
                setFirstClick(true);
                setSpan(info!);
            }
        };

        return (
            <div className={`flex flex-col h-[100px] md:flex-row items-start md:justify-end justify-start pt-24 md:pt-10 pl-5 pr-16 md:pr-36`}>
                {headers.map(({ background, title, url }, index) => (
                    <Link href={url} key={index} className="md:pr-8">
                        <span ref={el => { spanRefs.current[index] = el; }}
                            className="uppercase relative font-thin text-[18px] pb-3 block group" onClick={(el) => onClickSpan(el, index)}>
                            {title}
                            {!desktop && (
                                <span style={{ background }} className={`absolute transition-width duration-500 left-0 bottom-3 h-[3px] rounded-r w-0 group-hover:w-full group-focus:w-full`}></span>
                            )}
                        </span>
                    </Link>
                ))}
                <span style={{ ...span }} className={`absolute ${firstClick ? 'transition-left duration-500 left-0': ''} bottom-8 h-[3px] rounded-r`}></span>
            </div>
        )
    }

    useEffect(() => {
        const matchMedia = mediaQuery;

        if(matchMedia){
            matchMedia.onchange = ({ matches }) => {
                setDesktop(matches);
            };
        }
            


        return () => {
            if(matchMedia) matchMedia.onchange = null
        }
    }, [mediaQuery]);



    const [opacityHeader, setOpacityHeader] = useState('opacity-[0.5] h-[100px]');
    useEffect(() => {
        const SECTION_SERVICES_POSITION_X = 700;

        if(typeof window !== 'undefined'){
            const handleScroll = () => {
                const scrollY = window.scrollY;
                if (scrollY > SECTION_SERVICES_POSITION_X) {
                    setOpacityHeader(`opacity-[${open ? 0 : 1}] h-[110px]`);
                } else {
                    setOpacityHeader(`opacity-[${open ? 0 : 0.5}] h-[100px]`);
                }
            }
            window.addEventListener('scroll',handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            }
        }
    }, []);



    return (
        <header className="fixed z-[1201] top-0 left-5 justify-around">
            <Image className="z-[1202] fixed" src="/images/logo.svg" alt="logo" width={200} height={200} />
            <MenuHamburger  active={open} onChangeState={onChangeState} />
            <Drawer
                className="z-[1203]"
                anchor={desktop ? 'top' : 'right'}
                open={open}
                onClose={() => onChangeState(false)}>
                <Headings />
            </Drawer>
            {
                !open && (
                    <div className={`fixed z-[1200] left-0 top-0 z-1 w-full transition-all duration-500 ease-in-out bg-white ${opacityHeader}`}></div>
                )
            }
        </header>
    )
}

export default Header;
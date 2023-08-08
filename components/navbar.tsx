'use client';

import Link from "next/link";
import Container from "./ui/container";
import { ThemeToggle } from "./theme-toggle";
import { Caveat } from 'next/font/google'
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const caveat = Caveat({ subsets: ['latin'] })

const Navbar = () => {
    const [ mounted, setMounted ] = useState(false);

    useEffect(()=> {
        setMounted(true);
    },[])

    if(!mounted){
        return null;
    }
    return (
        <nav className="border-b">
            <Container>
              <div className="flex items-center h-16 justify-between">
                <Link href="/">
                    {/* <p className="font-semibold text-xl">SaLMaN SHaiKH</p> */}
                    <p className={cn("font-semibold text-2xl",caveat.className)}>SaLMaN SHaiKH</p>
                </Link>
                <div className="flex gap-6 font-semibold">
                    <Link href="#about">
                        About
                    </Link>
                    <Link href="#experience">
                        Experience
                    </Link>
                    <Link href="#projects">
                        Projects
                    </Link>
                    <Link href="#contact">
                        Contact
                    </Link>
                </div>
                <ThemeToggle />
              </div>
            </Container>
        </nav>
    )
}

export default Navbar;
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import { Github, Linkedin, LinkedinIcon, Twitter } from "lucide-react";
import Container from "./ui/container";


const Hero = () => {
    return (
        <Container>
            <div className="flex justify-center gap-20 mt-28">
                <div className="hero-avatar">
                <Avatar className=" w-96 h-96">
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarImage src="salman_profile_pic.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </div>
                <div className="hero-info flex flex-col justify-center items-center gap-3">
                    <p className="font-semibold text-neutral-600 text-xl">Hello, I&apos;m</p>
                    <p className="font-bold text-foreground text-5xl">Salman Shaikh</p>
                    <p className="font-semibold text-neutral-600 text-3xl">
                    <TypewriterComponent
                        options={{
                        strings: [
                            "Frontend Developer.",
                            "Full Stack Developer.",
                            "React Developer.",
                            "JavaScript Developer."
                        ],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                    </p>
                    <div className="flex gap-4">
                        <Button variant='outline' className="rounded-full border-foreground">Download CV</Button>
                        <Button className="rounded-full bg-foreground">Contact Info</Button>
                    </div>
                    <div className="flex gap-4">
                        <div className=" p-1 bg-foreground rounded-full">
                            <Linkedin className=" text-background" />
                        </div>
                        <div className=" p-1 bg-foreground rounded-full">
                            <Github className=" text-background" />
                        </div>
                        <div className=" p-1 bg-foreground rounded-full">
                            <Twitter className=" text-background" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero;
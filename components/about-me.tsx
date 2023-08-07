'use client';
import Image from "next/image";
import Container from "./ui/container";
import { Award, User } from "lucide-react";

const AboutMe = () => {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center gap-4">
                <p>Get To Know More</p>
                <h2>About Me</h2>
            </div>
            <div className="flex">
                <div className="aspect-square relative h-full w-full rounded-3xl overflow-hidden">
                    <Image fill className="object-cover object-center" src="https://avatars.githubusercontent.com/u/47826016?s=400&u=8cf8cb77cef7ccce54f2031fc311892f3b6a65eb&v=4" alt="sub-profile-pic" />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <div className="flex about-me-cards">
                            <div className="flex-col border-black border-[2px]">
                                <Award  />
                                <p>Experience</p>
                                <p>2+ years</p>
                                <p>Frontend Development</p>
                            </div>
                            <div className="flex-col border-black border-[2px]">
                                <User  />
                                <p>Education</p>
                                <p>Bachelor of Engineering in Information Technology.</p>
                            </div>
                        </div>
                        <div className="about-me-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sapiente hic odio quod voluptates alias nobis excepturi perspiciatis natus voluptatem exercitationem voluptas quibusdam deserunt impedit libero rerum adipisci, quos nisi velit sunt! Quibusdam magni laborum perspiciatis, eaque quos nobis?
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutMe;
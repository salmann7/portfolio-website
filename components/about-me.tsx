'use client';
import Image from "next/image";
import Container from "./ui/container";
import { Award, User } from "lucide-react";

const AboutMe = () => {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center gap-4 mt-28 mb-16">
                <p className="font-semibold text-neutral-600 text-xl">Get To Know More</p>
                <h2 className="font-bold text-foreground text-5xl">About Me</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-20 mb-28">
                <div className="aspect-square relative h-full w-full rounded-3xl overflow-hidden basis-1/3">
                    <Image fill className="object-cover object-center" src="https://avatars.githubusercontent.com/u/47826016?s=400&u=8cf8cb77cef7ccce54f2031fc311892f3b6a65eb&v=4" alt="sub-profile-pic" />
                </div>
                <div className="flex flex-col basis-2/3 justify-center items-center">
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-10 about-me-cards justify-around">
                            <div className="flex-col border-foreground border-[1px] basis-2/3 rounded-3xl p-5 text-center">
                                {/* <div className="text-center"><Award className="" /></div> */}
                                <Award className="inline-flex mb-4" />
                                <p className="font-bold text-foreground text-2xl mb-3">Experience</p>
                                <p className="text-neutral-600 text-xl font-semibold">2+ years</p>
                                <p className="text-neutral-600 text-xl font-semibold">Frontend Development</p>
                            </div>
                            <div className="flex-col border-foreground border-[1px] basis-2/3 rounded-3xl p-5 text-center">
                                <User className="inline-flex mb-4" />
                                <p className="font-bold text-foreground text-2xl mb-3">Education</p>
                                <p className="text-neutral-600 text-xl font-semibold">Bachelor of Engineering in Information Technology.</p>
                            </div>
                        </div>
                        <div className="about-me-desc mt-10 text-lg text-neutral-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore omnis sapiente hic odio quod voluptates alias nobis excepturi perspiciatis natus voluptatem exercitationem voluptas quibusdam deserunt impedit libero rerum adipisci, quos nisi velit sunt! Quibusdam magni laborum perspiciatis, eaque quos nobis?
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AboutMe;
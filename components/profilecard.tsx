import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import profilePic from '@/components/profile.jpeg';

export function ProfileCard() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Card className="max-w-4xl w-full bg-white shadow-lg rounded-lg">
                {/* Profile Header */}
                <CardHeader className="flex flex-col items-center p-6 border-b">
                    <Image
                        src={profilePic}
                        alt="Profile Picture"
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                    <CardTitle className="text-2xl font-bold mt-4">Alistair Keiller</CardTitle>
                    <CardDescription className="text-gray-500">UCI CS 2028 | Maker, hiker, and sailor</CardDescription>
                </CardHeader>

                {/* Profile Content - Split View */}
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Academic Section */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-lg font-semibold mb-2">Work</h3>
                            <p className="text-gray-700">
                                I'm kinda obsessed with making things, which has lead me down countless rabbit holes in both academic and industry. I have a contrail of 73 (and counting) programming projects on github, I've taken a decent number of math, programming, and philosophy classes for fun (through duel enrollment programs), and I'm a part of a startup working on a device that helps with patient recovery (I wish I could say more, but NDAs and such are all 🤫).
                            </p>
                        </div>

                        {/* Red line separator for larger screens */}
                        <div className="relative hidden md:flex items-center justify-center md:h-auto md:w-auto">
                            <svg
                                className="absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
                                width="15"
                                height="100"
                                viewBox="0 0 15 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.5 0C4 20 11 30 7.5 50C4 70 11 80 7.5 100"
                                    stroke="#000000"
                                    strokeWidth="3"
                                />
                            </svg>
                        </div>

                        {/* Longer squiggly line for smaller screens */}
                        <div className="relative flex md:hidden items-center justify-center md:h-auto md:w-auto">
                            <svg
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90"
                                width="15"
                                height="300"
                                viewBox="0 0 15 300"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.5 0C4 75 11 100 7.5 150C4 200 11 225 7.5 300"
                                    stroke="#000000"
                                    strokeWidth="3"
                                />
                            </svg>
                        </div>


                        {/* Personal Section */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-lg font-semibold mb-2">Life</h3>
                            <p className="text-gray-700">
                            I spend a lot of my free time on semi-academic stuff (I have a bit of a maker's spirit, so robotics and programming and very addictive), because I find them really fun. But when I do need a break, I love going hiking (I'm in UCI hiking club, which is an absolute blast, and I hiked a sizable chunk of the A.T.) and sailing hobie cats around bays (Mission Bay in san diego, and also the surrounding sea).
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

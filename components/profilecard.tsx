import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import profilePic from '@/images/profile.jpg';
import zipperMouth from '@/components/zippermouth.svg';

export function ProfileCard() {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-69px)] bg-gray-100">
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
                                I&apos;m kinda obsessed with making things, which has lead me down countless rabbit holes in both academic and industry. I have a contrail of 73 (and counting) programming projects on github, I&apos;ve taken a decent number of math, programming, and philosophy classes for fun (through duel enrollment programs), and I&apos;m a part of a startup working on a device that helps with patient recovery (I wish I could say more, but NDAs and such are all <Image src={zipperMouth} alt="" height={25} width={25} className="inline-block" />).
                            </p>
                        </div>

                        {/* Personal Section */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-lg font-semibold mb-2">Life</h3>
                            <p className="text-gray-700">
                                I spend a lot of my free time on semi-academic stuff (I have a bit of a maker&apos;s spirit, so robotics and programming are very addictive), because I find them really fun. But when I do need a break, I love going hiking (I&apos;m in UCI hiking club, which is an absolute blast, and I hiked a sizable chunk of the A.T.) and sailing hobie cats around bays (Mission Bay in San Diego, and also the surrounding sea).
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import profilePic from '@/images/profile.jpg';
import zipperMouth from '@/components/zippermouth.svg';

export function ProfileCard() {
    return (
        <div className="flex justify-center items-center h-[calc(100vh-69px)]">
            <Card className="max-w-4xl w-full bg-white shadow-lg rounded-lg">
                {/* Profile Header */}
                <CardHeader className="items-center ">
                    <Image
                        src={profilePic}
                        alt="Profile Picture"
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                    <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">Alistair Keiller</CardTitle>
                    <CardDescription className="text-gray-500">UCI CS 2028 | Maker, hiker and sailor</CardDescription>
                </CardHeader>

                {/* Profile Content - Split View */}
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Academic Section */}
                        <div>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Work</h3>
                            <p className="mt-2">
                            I&apos;m kind of obsessed with making things, which has led me down countless rabbit holes in both academia and industry. I have a contrail of 73 (and counting) programming projects on GitHub, I&apos;ve taken a decent number of math, programming, and philosophy classes for fun (through dual enrollment programs), and I&apos;m part of a startup working on a device that helps with patient recovery (I wish I could say more, but NDAs and such are all<Image src={zipperMouth} alt="" height={25} width={25} className="inline-block" />).
                            </p>
                        </div>

                        {/* Personal Section */}
                        <div>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Life</h3>
                            <p className="mt-2">
                            I spend a lot of my free time on semi-academic stuff (I have a bit of a maker&apos;s spirit, so robotics and programming are very addictive) because I find them really fun. But when I do need a break, I love going hiking (I&apos;m in UCI hiking club, which is an absolute blast, and I hiked a sizable chunk of the A.T.) and sailing Hobie cats around bays (Mission Bay in San Diego, and also the surrounding sea).
                            </p>
                        </div>
                    </div>
                    <h3 className="mt-10 text-center scroll-m-20 text-2xl font-semibold tracking-tight">My Favorite World</h3>
                    <p className="mt-2">IDK how much is just nostalgia, but the world of Avatar: The Last Airbender has been an everlasting fastination since first sight. My favorite episodes are &quot;The Southern Raiders&quot; (in which Katara has some of the best character development I&apos;ve seen in a single episode of TV) and the finale (they went full-on MAPPA with this one). Just to try to convey the thought and depth of the ATLA world on this website, I've created an interactive map of ATLA's earth.</p>
                    <p className="mt-2">A close second for me is Rick Riordan&apos;s stories (I remember mischievously sneaking a flashlight into my room to finish Percy Jackson at a breakneck pace).</p>
                </CardContent>
            </Card>
        </div>
    );
}

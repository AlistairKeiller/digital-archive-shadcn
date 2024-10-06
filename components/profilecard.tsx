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
                            <h3 className="text-lg font-semibold mb-2">Academic Life</h3>
                            <p className="text-gray-700">
                                Brief description of your academic background. Highlight your degrees, universities, courses, and any key
                                academic achievements. Include your interests in research, projects, or publications.
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
                            <h3 className="text-lg font-semibold mb-2">Personal Life</h3>
                            <p className="text-gray-700">
                                Description of your personal life. Share your hobbies, interests, personal goals, or anything you'd like
                                people to know about your life outside of academia. This is where you can showcase more of your
                                personality and passions.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

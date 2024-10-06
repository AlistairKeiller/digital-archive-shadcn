import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export function ProfileCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="max-w-4xl w-full bg-white shadow-lg rounded-lg">
        {/* Profile Header */}
        <CardHeader className="flex flex-col items-center p-6 border-b">
          <Image
            src="/path/to/your-photo.jpg" // Replace with your image path
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full"
          />
          <CardTitle className="text-2xl font-bold mt-4">Your Name</CardTitle>
          <CardDescription className="text-gray-500">Your Title / Profession</CardDescription>
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

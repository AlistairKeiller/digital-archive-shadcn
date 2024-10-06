import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"; 
// Assuming you're using shadcn/ui

export function ProfileCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="max-w-md w-full bg-white shadow-lg rounded-lg">
        {/* Profile Header */}
        <CardHeader className="flex flex-col items-center p-6">
          <Image
            src="/path/to/your-photo.jpg" // Replace with your image path
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
          <CardTitle className="text-xl font-bold mt-4">Your Name</CardTitle>
          <CardDescription className="text-gray-500">Your Title / Profession</CardDescription>
        </CardHeader>
        
        {/* Profile Content */}
        <CardContent className="p-6">
          {/* Academic Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Academic Life</h3>
            <p className="text-gray-700">
              Brief description of your academic background. Highlight your degrees, universities, courses, and any key
              academic achievements.
            </p>
          </div>

          {/* Personal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Personal Life</h3>
            <p className="text-gray-700">
              Description of your personal life. Share your hobbies, interests, personal goals, or anything you'd like
              people to know about your life outside of academia.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

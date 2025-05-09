
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Edit, Share, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm animate-fade-in">
      <div className="h-36 bg-gradient-to-r from-brand-purple to-brand-blue"></div>
      <div className="p-6 relative">
        <Avatar className="absolute -top-12 left-6 h-24 w-24 border-4 border-card">
          <AvatarImage src="" alt="Profile" />
          <AvatarFallback className="text-xl">JD</AvatarFallback>
        </Avatar>
        <div className="flex justify-end gap-2 mb-8">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Share className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <p className="text-muted-foreground">Computer Science Student</p>
          
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="h-4 w-4" />
              <span>Stanford University</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4" />
              <span>Intern at Tech Innovators</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          <div className="flex gap-6 mt-6">
            <div>
              <p className="font-semibold">1,245</p>
              <p className="text-sm text-muted-foreground">Connections</p>
            </div>
            <div>
              <p className="font-semibold">12</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div>
              <p className="font-semibold">42</p>
              <p className="text-sm text-muted-foreground">Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

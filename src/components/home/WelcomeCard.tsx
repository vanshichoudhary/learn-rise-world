
import { Book, Rocket, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WelcomeCard() {
  return (
    <Card className="border-0 bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-md rounded-xl mb-6 animate-fade-in">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-2">Welcome to LearnRise</h2>
        <p className="mb-6">Your gateway to learning, career, and networking</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-3">
            <Book className="h-6 w-6 mb-2" />
            <span className="text-sm text-center">Learn new skills</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-3">
            <Rocket className="h-6 w-6 mb-2" />
            <span className="text-sm text-center">Showcase projects</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-3">
            <Users className="h-6 w-6 mb-2" />
            <span className="text-sm text-center">Connect with peers</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-3">
            <Award className="h-6 w-6 mb-2" />
            <span className="text-sm text-center">Find opportunities</span>
          </div>
        </div>
        <Button className="bg-white text-brand-purple hover:bg-white/90">Complete Your Profile</Button>
      </CardContent>
    </Card>
  );
}

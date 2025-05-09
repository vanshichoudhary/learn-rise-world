
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Lightbulb, MessageSquare, User } from "lucide-react";

export default function RightSidebar() {
  const suggestedConnections = [
    { name: "Alex Johnson", role: "CS Student", avatar: "" },
    { name: "Maria Garcia", role: "Data Science", avatar: "" },
    { name: "Raj Patel", role: "Engineering", avatar: "" }
  ];

  const upcomingEvents = [
    { title: "Web Dev Workshop", date: "Tomorrow, 3:00 PM" },
    { title: "Career Fair", date: "May 15, 10:00 AM" }
  ];

  const recommendedOpportunities = [
    { title: "Frontend Intern", company: "TechCorp", type: "Internship" },
    { title: "React Developer", company: "StartupX", type: "Part-time" }
  ];

  return (
    <div className="w-80 space-y-4 hidden lg:block">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Connect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {suggestedConnections.map((connection, index) => (
            <div key={index} className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={connection.avatar} alt={connection.name} />
                <AvatarFallback>{connection.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">{connection.name}</p>
                <p className="text-xs text-muted-foreground">{connection.role}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full mt-2">See More</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index}>
              <p className="text-sm font-medium">{event.title}</p>
              <p className="text-xs text-muted-foreground">{event.date}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">For You</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recommendedOpportunities.map((opportunity, index) => (
            <div key={index} className="flex items-start gap-3">
              {opportunity.type === "Internship" ? 
                <Briefcase className="h-4 w-4 mt-0.5" /> : 
                <Lightbulb className="h-4 w-4 mt-0.5" />
              }
              <div>
                <p className="text-sm font-medium">{opportunity.title}</p>
                <p className="text-xs text-muted-foreground">{opportunity.company}</p>
                <Badge className="mt-1 text-xs bg-brand-light text-brand-purple">
                  {opportunity.type}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

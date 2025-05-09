
import MainLayout from "@/components/layout/MainLayout";
import WelcomeCard from "@/components/home/WelcomeCard";
import FeedPost from "@/components/feed/FeedPost";
import RightSidebar from "@/components/common/RightSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Smile, Video } from "lucide-react";

export default function Index() {
  // Mock data
  const feedPosts = [
    {
      id: "1",
      author: {
        name: "Jane Doe",
        avatar: "",
        institution: "Stanford University"
      },
      content: "Just finished my machine learning project on predicting student performance. Check it out!",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      likes: 45,
      comments: 12,
      date: "2 hours ago"
    },
    {
      id: "2",
      author: {
        name: "John Smith",
        avatar: "",
        institution: "MIT"
      },
      content: "Excited to share that I've been accepted for a summer internship at Google! Looking forward to learning and growing with the team.",
      likes: 124,
      comments: 28,
      date: "5 hours ago"
    },
    {
      id: "3",
      author: {
        name: "Sara Lee",
        avatar: "",
        institution: "Harvard University"
      },
      content: "Just published my research paper on renewable energy sources. It's been a long journey but worth it!",
      image: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      likes: 87,
      comments: 16,
      date: "1 day ago"
    }
  ];

  return (
    <MainLayout>
      <div className="flex gap-4">
        <div className="flex-1">
          <WelcomeCard />
          
          <div className="mb-6 bg-card rounded-xl border p-4">
            <div className="flex gap-3 mb-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Input placeholder="Share something with your network..." className="bg-background" />
            </div>
            <div className="flex justify-between">
              <Button variant="outline" size="sm" className="flex gap-2">
                <Image className="h-4 w-4" />
                <span className="hidden sm:inline">Photo</span>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2">
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Video</span>
              </Button>
              <Button variant="outline" size="sm" className="flex gap-2">
                <Smile className="h-4 w-4" />
                <span className="hidden sm:inline">Feeling</span>
              </Button>
              <Button>Post</Button>
            </div>
          </div>
          
          <div>
            {feedPosts.map((post) => (
              <FeedPost key={post.id} {...post} />
            ))}
          </div>
        </div>
        
        <RightSidebar />
      </div>
    </MainLayout>
  );
}

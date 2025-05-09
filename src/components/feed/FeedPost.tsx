
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share, Bookmark } from "lucide-react";

interface FeedPostProps {
  id: string;
  author: {
    name: string;
    avatar?: string;
    institution?: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  date: string;
}

export default function FeedPost({
  id,
  author,
  content,
  image,
  likes,
  comments,
  date,
}: FeedPostProps) {
  return (
    <div className="bg-card border rounded-xl overflow-hidden shadow-sm mb-4 animate-fade-in">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <Link to={`/profile/${id}`}>
              <p className="font-medium hover:text-primary transition-colors">
                {author.name}
              </p>
            </Link>
            {author.institution && (
              <p className="text-xs text-muted-foreground">{author.institution}</p>
            )}
            <p className="text-xs text-muted-foreground">{date}</p>
          </div>
        </div>
        
        <p className="text-sm mb-4">{content}</p>
        
        {image && (
          <div className="rounded-md overflow-hidden mb-4">
            <img 
              src={image} 
              alt="Post media" 
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>
        )}
        
        <div className="flex justify-between items-center pt-2 border-t">
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground flex gap-1">
              <Heart className="h-4 w-4" />
              <span>{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground flex gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{comments}</span>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bookmark className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}


import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageSquare, Share } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  author: {
    name: string;
    avatar?: string;
    institution?: string;
  };
  tags: string[];
  likes: number;
  comments: number;
  date: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  author,
  tags,
  likes,
  comments,
  date,
}: ProjectCardProps) {
  return (
    <div className="bg-card border rounded-xl overflow-hidden shadow-sm card-hover">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            {author.institution && (
              <p className="text-xs text-muted-foreground">{author.institution}</p>
            )}
          </div>
        </div>
        
        <Link to={`/projects/${id}`}>
          <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex gap-2 flex-wrap mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-secondary text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground text-xs flex gap-1">
              <Heart className="h-4 w-4" />
              <span>{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground text-xs flex gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{comments}</span>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

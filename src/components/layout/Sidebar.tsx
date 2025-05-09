
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Book, 
  Briefcase, 
  Rocket, 
  GraduationCap, 
  Users, 
  MessageSquare,
  Lightbulb,
  School
} from "lucide-react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem = ({ icon: Icon, label, href, active }: NavItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors",
      active
        ? "bg-primary text-primary-foreground"
        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
    )}
  >
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Book, label: "Learning Hub", href: "/learning" },
    { icon: Briefcase, label: "Internships & Jobs", href: "/careers" },
    { icon: Rocket, label: "Projects", href: "/projects" },
    { icon: GraduationCap, label: "Mentorship", href: "/mentorship" },
    { icon: Users, label: "Network", href: "/network" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
    { icon: Lightbulb, label: "Life Lab", href: "/life-lab" },
    { icon: School, label: "Institutes", href: "/institutes" }
  ];

  return (
    <div className="h-full w-64 border-r bg-card py-6">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold gradient-text">LearnRise</h1>
      </div>
      <nav className="space-y-1 px-3">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={currentPath === item.href}
          />
        ))}
      </nav>
    </div>
  );
}

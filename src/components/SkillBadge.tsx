import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <Badge 
      variant="secondary" 
      className="skill-badge text-sm px-4 py-2 cursor-default"
    >
      {skill}
    </Badge>
  );
};
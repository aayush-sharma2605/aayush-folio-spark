import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";

interface ProjectDetails {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  problem: string;
  solution: string;
  tools: string[];
  role: string;
  impact: string;
  linkedinUrl?: string;
  prototypeUrl?: string;
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold text-foreground">
              {project.title}
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="w-full h-64 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Problem</h3>
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Solution</h3>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">My Role</h3>
                <p className="text-muted-foreground leading-relaxed">{project.role}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Impact</h3>
                <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
              </div>
              
              {(project.linkedinUrl || project.prototypeUrl) && (
                <div className="pt-6 border-t border-border space-y-3">
                  {project.linkedinUrl && (
                    <Button asChild className="w-full gap-2">
                      <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        🔗 View Certificate on LinkedIn
                      </a>
                    </Button>
                  )}
                  {project.prototypeUrl && (
                    <Button asChild variant="outline" className="w-full gap-2">
                      <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Click here to view prototype
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
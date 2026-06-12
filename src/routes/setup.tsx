import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SiteHeader } from "@/components/site-chrome";

const templates = [
  {
    id: "startup",
    icon: "📋",
    name: "Startup",
    description: "Building a product and assembling your founding team",
    boards: ["Project Board", "Recruitment Board"],
    outcomes: ["Build MVP", "Find Co-Founder", "Hire Team", "Raise Funding"],
  },
  {
    id: "recruitment",
    icon: "👥",
    name: "Recruitment Agency",
    description: "Managing hiring pipelines and candidate placement",
    boards: ["Recruitment Board", "Project Board"],
    outcomes: ["Hire Developers", "Hire Sales Team", "Build Talent Pool", "Place Candidates"],
  },
  {
    id: "ngo",
    icon: "🏛️",
    name: "NGO / Community",
    description: "Coordinating programs and volunteers",
    boards: ["Program Board", "Event Board"],
    outcomes: ["Run Program", "Coordinate Volunteers", "Host Event", "Build Community"],
  },
  {
    id: "church",
    icon: "⛪",
    name: "Church / Faith",
    description: "Organizing services and volunteer coordination",
    boards: ["Event Board", "Ministry Board"],
    outcomes: ["Plan Service", "Manage Volunteers", "Coordinate Ministry", "Host Event"],
  },
  {
    id: "creator",
    icon: "🎨",
    name: "Creator / Agency",
    description: "Managing creative projects and client work",
    boards: ["Project Board"],
    outcomes: ["Complete Project", "Manage Clients", "Launch Campaign", "Build Portfolio"],
  },
  {
    id: "school",
    icon: "📚",
    name: "School / Education",
    description: "Managing student teams and collaborative projects",
    boards: ["Project Board", "Team Board"],
    outcomes: ["Complete Assignment", "Manage Team", "Grade Project", "Build Portfolio"],
  },
  {
    id: "empty",
    icon: "➕",
    name: "Start Empty",
    description: "Create a workspace and add activities as you go",
    boards: [],
    outcomes: [],
  },
];

export const Route = createFileRoute("/setup")({
  component: SetupPage,
});

function SetupPage() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null);
  const [workspaceName, setWorkspaceName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentTemplate = templates.find((t) => t.id === selectedTemplate);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTemplate || !workspaceName.trim()) return;

    setIsSubmitting(true);
    try {
      // Call API to create workspace with template
      const response = await fetch("/api/workspaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: workspaceName,
          template: selectedTemplate,
          goal: selectedOutcome,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        navigate({ to: `/workspaces/${data.id}` });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {!selectedTemplate ? (
          // Template Selection Screen
          <div>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-semibold text-secondary sm:text-5xl">
                What are you building?
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Choose a template that fits your needs. You can customize everything later.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className="rounded-2xl border-2 border-border bg-card p-6 text-left transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-3xl mb-3">{template.icon}</div>
                      <h3 className="text-lg font-semibold text-secondary">{template.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>
                    </div>
                  </div>

                  {template.boards.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs font-semibold text-primary mb-2">Creates:</p>
                      <div className="space-y-1">
                        {template.boards.map((board) => (
                          <p key={board} className="text-xs text-slate-600">
                            • {board}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        ) : selectedOutcome === null && currentTemplate.outcomes.length > 0 ? (
          // Outcome Selection Screen
          <div>
            <button
              onClick={() => setSelectedTemplate(null)}
              className="mb-8 text-sm text-primary hover:underline"
            >
              ← Back to templates
            </button>

            <div className="mb-12 text-center">
              <div className="text-4xl mb-4">{currentTemplate.icon}</div>
              <h1 className="text-4xl font-semibold text-secondary sm:text-5xl">
                {currentTemplate.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                What outcome are you trying to achieve?
              </p>
            </div>

            <div className="mx-auto max-w-2xl space-y-3">
              {currentTemplate.outcomes.map((outcome) => (
                <button
                  key={outcome}
                  onClick={() => setSelectedOutcome(outcome)}
                  className="w-full rounded-xl border-2 border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-card/80"
                >
                  <p className="font-semibold text-secondary">{outcome}</p>
                </button>
              ))}

              <button
                onClick={() => setSelectedOutcome("other")}
                className="w-full rounded-xl border-2 border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-card/80"
              >
                <p className="font-semibold text-secondary">Something else</p>
              </button>
            </div>
          </div>
        ) : (
          // Workspace Details Screen
          <div>
            <button
              onClick={() => {
                setSelectedTemplate(null);
                setSelectedOutcome(null);
              }}
              className="mb-8 text-sm text-primary hover:underline"
            >
              ← Back to templates
            </button>

            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <div className="text-4xl mb-4">{currentTemplate.icon}</div>
                <h1 className="text-4xl font-semibold text-secondary">
                  Create your {currentTemplate.name} workspace
                </h1>
                <p className="mt-4 text-muted-foreground">
                  {selectedOutcome === "other"
                    ? "We'll set up your boards and you can customize everything."
                    : `We'll set up everything for: ${selectedOutcome}`}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-8">
                <div>
                  <Label htmlFor="name">Workspace Name</Label>
                  <Input
                    id="name"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    placeholder="e.g., TechVentures, Open Cities Lab"
                    required
                    className="mt-2"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={!workspaceName.trim() || isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Creating..." : "Create Workspace"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

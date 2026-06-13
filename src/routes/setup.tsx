import { createFileRoute } from "@tanstack/react-router";
import { SelectionScreen } from "@/components/selection-screen";

export const Route = createFileRoute("/setup")({
  component: () => <SelectionScreen variant="intent" />,
});

import { createFileRoute } from "@tanstack/react-router";
import { AuthScreen } from "../components/auth-screen";
export const Route = createFileRoute("/forgot-password")({ head: () => ({ meta: [{ title: "Reset password — Workspaces" }, { name: "description", content: "Reset your Workspaces password." }] }), component: () => <AuthScreen mode="forgot" /> });
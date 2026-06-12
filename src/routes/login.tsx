import { createFileRoute } from "@tanstack/react-router";
import { AuthScreen } from "../components/auth-screen";
export const Route = createFileRoute("/login")({ head: () => ({ meta: [{ title: "Sign in — Workspaces" }, { name: "description", content: "Sign in to your Workspaces digital office." }] }), component: () => <AuthScreen mode="login" /> });
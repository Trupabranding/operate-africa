import { createFileRoute } from "@tanstack/react-router";
import { AuthScreen } from "../components/auth-screen";
export const Route = createFileRoute("/register")({ head: () => ({ meta: [{ title: "Create an account — Workspaces" }, { name: "description", content: "Create your Workspaces account." }] }), component: () => <AuthScreen mode="register" /> });
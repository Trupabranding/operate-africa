import { createFileRoute } from "@tanstack/react-router"; import { HomePage } from "../components/product-pages";
export const Route = createFileRoute("/home")({ component: HomePage });
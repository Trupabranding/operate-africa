import { createFileRoute } from "@tanstack/react-router"; import { BoardsPage } from "../components/product-pages";
export const Route = createFileRoute("/boards")({ component: BoardsPage });
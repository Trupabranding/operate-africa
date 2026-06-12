import { createFileRoute } from "@tanstack/react-router"; import { MembersPage } from "../components/product-pages";
export const Route = createFileRoute("/members")({ component: MembersPage });
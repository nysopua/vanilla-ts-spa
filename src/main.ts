import { Home } from "./pages/Home";
import { Vite } from "./pages/Vite";
import { setupCounter } from './counter'

const routes = {
  "/": Home,
  "/vite": Vite,
} as const;

type Routes = typeof routes;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

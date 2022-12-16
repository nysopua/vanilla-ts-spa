import { Home } from "./pages/Home";
import { Vite } from "./pages/Vite";
import { Error404 } from "./pages/Error404";

const routes = {
  "/": Home,
  "/vite": Vite,
} as const;

type Routes = typeof routes;

const router = async () => {
  const content = document.querySelector<HTMLDivElement>("#app");
  const parsedURL = location.hash.slice(1).toLowerCase() || "/";

  const isRoutes = (parsedURL: string): parsedURL is keyof Routes => {
    return routes.hasOwnProperty(parsedURL);
  };
  const page = isRoutes(parsedURL) ? routes[parsedURL] : Error404;

  !!content && (content.innerHTML = await page.render());
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

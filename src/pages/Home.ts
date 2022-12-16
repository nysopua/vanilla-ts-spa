import { Header } from "../components/Header";
import { Nav } from "../components/Nav";
import { Component } from "../type";

export const Home: Component = {
  render() {
    return `
    ${Header.render()}
    <section>
      home
      ${Nav.render()}
    </section>
    `;
  },
};

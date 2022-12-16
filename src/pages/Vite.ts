import { Component } from "../type";
import viteLogo from '../img/vite.svg'
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";

export const Vite: Component = {
  render() {
    return `
      ${Header.render()}
      <section>
        <img src="${viteLogo}" alt="vite logo" />
        ${Nav.render()}
      </section>
      `;
  },
};

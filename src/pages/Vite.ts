import { Component } from "../type";
import viteLogo from '../img/vite.svg'

export const Vite: Component = {
  render() {
    return `
      <section>
        <img src="${viteLogo}" alt="vite logo" />
        <div class="navbar-start">
          <a href="/#/">
            Home
          </a>
          <a href="/#/vite">
            vite
          </a>
        </div>
      </section>
      `;
  },
};

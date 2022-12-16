import { Component } from "../type";

export const Nav: Component = {
  render() {
    return `
    <div>
      <nav class="nav">
        <a href="/#/">
          Home
        </a>
        <a href="/#/vite">
          vite
        </a>
      </nav>
    </div>
    `;
  },
};

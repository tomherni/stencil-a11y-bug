import { Component, h } from '@stencil/core';

@Component({
  tag: 'stencil-button',
  shadow: true,
})
export class StencilButton {
  render() {
    return (
      <button>
        <stencil-icon />
        <slot />
      </button>
    )
  }
}

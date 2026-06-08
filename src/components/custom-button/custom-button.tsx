import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'custom-button',
  shadow: true,
})
export class CustomButton {
  @Prop() label: string;

  render() {
    return <button>{this.label}</button>;
  }
}

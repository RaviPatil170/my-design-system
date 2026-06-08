import { h } from "@stencil/core";
export class CustomButton {
    label;
    render() {
        return h("button", { key: 'c935919518eadcccff6ebd5e5232a828280167ce' }, this.label);
    }
    static get is() { return "custom-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            }
        };
    }
}

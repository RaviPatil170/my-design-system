import { r as registerInstance, h } from './index-C-yzoIz-.js';
import { format } from './index.js';

const myComponentCss = () => `:host{display:block}`;

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The first name
     */
    first;
    /**
     * The middle name
     */
    middle;
    /**
     * The last name
     */
    last;
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", { key: 'da05ee9009230db93f14813eea9e831029fbb26c' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss();

export { MyComponent as my_component };

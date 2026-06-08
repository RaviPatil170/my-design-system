'use strict';

var index = require('./index-BziJF9Hk.js');
var index$1 = require('./index.cjs.js');

const myComponentCss = () => `:host{display:block}`;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return index$1.format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: 'da05ee9009230db93f14813eea9e831029fbb26c' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = myComponentCss();

exports.my_component = MyComponent;

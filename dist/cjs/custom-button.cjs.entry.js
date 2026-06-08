'use strict';

var index = require('./index-BziJF9Hk.js');

const CustomButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    render() {
        return index.h("button", { key: 'c935919518eadcccff6ebd5e5232a828280167ce' }, this.label);
    }
};

exports.custom_button = CustomButton;

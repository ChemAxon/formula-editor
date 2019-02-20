import {includes} from 'ramda';

const findStyle = () => {
    const commonAncestorContainer = window.getSelection().getRangeAt(0).commonAncestorContainer;
    const style = commonAncestorContainer.parentElement.getAttribute('style');
    const array =  [
        commonAncestorContainer.parentElement.nodeName, 
        style ? includes('italic', style) ? 'I' : includes('super', style) ? 'SUP' : includes('sub', style) ? 'SUB' : '' : '', 
        commonAncestorContainer.parentElement.parentElement.nodeName, 
        commonAncestorContainer.parentElement.parentElement.parentElement.nodeName
    ];
    return array;
};

export default findStyle;
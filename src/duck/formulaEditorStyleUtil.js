 /* 
    Formula-editor component to create scientific formulas.   

    Copyright (C) 2019  ChemAxon Kft.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.*/
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
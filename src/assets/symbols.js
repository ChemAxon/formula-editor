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

const symbols = [
    {
        title: 'Greek letters',
        characters: [
            {
                name: 'small-alpha',
                code: '&#120514;'
            },
            {
                name: 'capital-alpha',
                code: '&#120488;'
            },
            {
                name: 'small-beta',
                code: '&#120515;'
            },
            {
                name: 'capital-beta',
                code: '&#120489;'
            },
            {
                name: 'small-gamma',
                code: '&#120516;'
            },
            {
                name: 'capital-gamma',
                code: '&#120490;'
            },            
            {
                name: 'small-delta',
                code: '&#120517;'
            },
            {
                name: 'capital-delta',
                code: '&#120491;'
            },            
            {
                name: 'small-epsilon',
                code: '&#120518;'
            },
            {
                name: 'capital-epsilon',
                code: '&#120492;'
            },            
            {
                name: 'small-zeta',
                code: '&#120519;'
            },
            {
                name: 'capital-zeta',
                code: '&#120493;'
            },            
            {
                name: 'small-eta',
                code: '&#120520;'
            },
            {
                name: 'capital-eta',
                code: '&#120494;'
            },            
            {
                name: 'small-theta',
                code: '&#120521;'
            },
            {
                name: 'capital-theta',
                code: '&#120495;'
            },            
            {
                name: 'small-iota',
                code: '&#120522;'
            },
            {
                name: 'capital-iota',
                code: '&#120496;'
            },            
            {
                name: 'small-kappa',
                code: '&#120523;'
            },
            {
                name: 'capital-kappa',
                code: '&#120497;'
            },            
            {
                name: 'small-lamda',
                code: '&#120524;'
            },
            {
                name: 'capital-lamda',
                code: '&#120498;'
            },           
            {
                name: 'small-mu',
                code: '&#120525;'
            },
            {
                name: 'capital-mu',
                code: '&#120499;'
            },            
            {
                name: 'small-nu',
                code: '&#120526;'
            },
            {
                name: 'capital-nu',
                code: '&#120500;'
            },                 
            {
                name: 'small-xi',
                code: '&#120527;'
            },
            {
                name: 'capital-xi',
                code: '&#120501;'
            },            
            {
                name: 'small-omicron',
                code: '&#120528;'
            },
            {
                name: 'capital-omicron',
                code: '&#120502;'
            },            
            {
                name: 'small-pi',
                code: '&#120529;'
            },
            {
                name: 'capital-pi',
                code: '&#120503;'
            },            
            {
                name: 'small-rho',
                code: '&#120530;'
            },
            {
                name: 'capital-rho',
                code: '&#120504;'
            },            
            {
                name: 'small-sigma',
                code: '&#120532;'
            },
            {
                name: 'capital-sigma',
                code: '&#120506;'
            },            
            {
                name: 'small-tau',
                code: '&#120533;'
            },
            {
                name: 'capital-tau',
                code: '&#120507;'
            },            
            {
                name: 'small-upsilon',
                code: '&#120534;'
            },
            {
                name: 'capital-upsilon',
                code: '&#120508;'
            },            
            {
                name: 'small-phi',
                code: '&#120535;'
            },
            {
                name: 'capital-phi',
                code: '&#120509;'
            },            
            {
                name: 'small-chi',
                code: '&#120536;'
            },
            {
                name: 'capital-chi',
                code: '&#120510;'
            },            
            {
                name: 'small-psi',
                code: '&#120537;'
            },
            {
                name: 'capital-psi',
                code: '&#120511;'
            },            
            {
                name: 'small-omega',
                code: '&#120538;'
            },
            {
                name: 'capital-omega',
                code: '&#120512;'
            }
        ]
    },
    {
        title: 'Other symbols',
        characters: [
            {
                name: 'leftwards arrow',
                code: '&#8592;'
            },
            {
                name: 'rightwards arrow',
                code: '&#8594;'
            },
            {
                name: 'upwards arrow',
                code: '&#8593;'
            },
            {
                name: 'downwards arrow',
                code: '&#8595;'
            },
            {
                name: 'left right arrow',
                code: '&#8596;'
            },
            {
                name: 'rightwards arrow with stroke',
                code: '&#8603;'
            },
            {
                name: 'equilibrium arrow',
                code: '&#8652;'
            },
            {
                name: 'equals',
                code: '&#61;'
            },
            {
                name: 'not equal to',
                code: '&#8800;'
            },
            {
                name: 'tilde',
                code: '&#8764;'
            },
            {
                name: 'approximately equals',
                code: '&#8773;'
            },
            {
                name: 'plus-minus',
                code: '&#177;'
            },
            {
                name: 'angstrom',
                code: '&#8491;'
            },
            {
                name: 'degree',
                code: '&#176;'
            },
            {
                name: 'bullet',
                code: '&#8226;'
            },
            {
                name: 'asterix',
                code: '&#8727;'
            },
            {
                name: 'infinity',
                code: '&#8734;'
            },
            {
                name: 'double dagger',
                code: '&#8225;'
            },


        ]
    }
];

export default symbols;
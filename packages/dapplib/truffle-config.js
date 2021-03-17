require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember smile include cloth fog slab'; 
let testAccounts = [
"0xcdad158279817db38e08eed377f43c8aaf5c68a97734af56fd86637631274b73",
"0x08be56a3d1a6881424f820495adf0150e4e9731eb24b651d897805b51a1adbfe",
"0x3a6420e17228bb79294503793f4c1380b4840a72814dfd06adfefb25d43b7274",
"0x44fc67d9ab3a863532525819448a4174dcadc01c529e10e6ded812575fd325f8",
"0xfd5f54dfb8085ae5240251a213004450baf7d63305513469e138073d4016d356",
"0x5cbd03761e0a43bb719df42a5d3d7295e021f88edf98f77283377da999f5d261",
"0xd3aa577fe13af1c4e1a6e9f85eee82288378bda5305c8a1d2703bf9158479514",
"0xa9f255db4d327ce0b9ce707e46d490d0a2419324ca05a8a74f5a0f8a986470f8",
"0xae203d149ef57a3c1cbc523df864abfa3fd6f88e2d5d1024cab086fda5260b20",
"0x7db6d3593a059237b92de41761cae21633d690943053b1ef9d5ede5dddf1add2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

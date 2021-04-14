require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad grace lobster flower sponsor'; 
let testAccounts = [
"0xf52d7479409858be7db5b093d2a7f25f348f90b57995ab1c7e50373d6240060a",
"0x804ab22921cc8dfcd62497726a38e23dad6ea00b477f5e031a41c657507393d4",
"0x8870516ffb7ff8e242b3c641f6623f7950e2ec407908cdfc97a088f2b4bdcbab",
"0xa9c71e0e7917bc0143e6cd3b0cebb8bb8f22996775383180bb1f106aef1dd063",
"0x985f08b91d82a84d8172fafd5e8678f305f512a82b8e1b9da56811a07534a1e2",
"0x02ba1a094fa042192e70df22094f3c0cf69fb5588d7e127d0c024ef64ee0f92c",
"0x1463b928cb470412858bad7e64de5302c6373bccd37e325cd3011da9691e1be7",
"0x9b75517e6ba7242fbd6406b7410154e6c07213b6d86fc5cef9947ce023122338",
"0xd14e483fddf255fb6ca659c90f37f080de6c03605e5cd6ba65a4fbc480dcf20b",
"0x7331a7f8af2b73e731e19cf385f0cd63e4370d20c82f989e72ad272e797aca9e"
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

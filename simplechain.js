const { SHA256 } = require("crypto-js");

const SHA256= require('Crypto--js/SHA256')
/*BLOCK CLASS
CLASS WITH CONSTRUCTOR DATA*/

class Block{
        constructor(data){
            
                this.hash = "",
                this.height = 0,
                this.body = data
        
                this.time=0,
                this.previousblockhash= ""     
            
        }
}
/*BLOCKCHAIN CLASS
CLASS WITH A CONSTRUCTOR DATA*/



class Blockchain{
    constructor(){
        if(this.chain.length>0){
            newBlock.previousblockhash=this.chain[this.chain.length-1].hash;
        }
        newBlock.hash= SHA256(JSON.stringify(newBlock)).toString();
        this.chain=[];
        thiss.addBlock(new Block("First block in the chain-Genesis block"));

    }
    addBlock(newBlock){
        this.chain.push(newBlock);
    }
}
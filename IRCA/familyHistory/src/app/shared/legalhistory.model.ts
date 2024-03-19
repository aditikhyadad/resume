export class Legalhistory {
    _id: string ;
    saleofdrugs: number;
    possessionofdrugs:number;
    arrestedfordrunkenbehaviour: number;
    finedfordrunkendriving:number;
    accindentunderinfluence: number;
    assault: number;
    anyother:  number;
    

    constructor(){
        this._id= '';
        this.saleofdrugs= 0;
        this.possessionofdrugs=0; 
        this.arrestedfordrunkenbehaviour= 0;
        this.finedfordrunkendriving=0;
        this.accindentunderinfluence=0;
        this.assault=0;
        this.anyother= 0;
        
    }
 
}

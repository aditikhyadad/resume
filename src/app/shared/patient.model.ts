export class Patient {
     _id: string ;
    registrationno: number;
    dateofregistration:Date;
    name: string;
    address:string;
    taluk: string;
    district: string;
    state:  string;
    homephone:number;
    telephone:number;
    sex: string;
    age:number;
    dateofbirth:Date;
    religion: string;
    community: string;
    educationqualification:string;
    occupation: string;
    income :number;
    maritalstatus:string;
    livingarrangements: string;
    nameoffamilymem: string;
    nameofsupperson: string;
    suppersonaddress: string;
    suppersonteleno:number;
    referral:string;

    constructor(){
        this._id= '';
        this.registrationno= 0;
        this.dateofregistration=new Date(2000, 0, 1); // January 1, 2000;;
        this.name= '';
        this.address='';
        this.taluk= '';
        this.district= '';
        this.state=  '';
        this.homephone=0;
        this.telephone=0;
        this.sex= '';
        this.age=0;
        this.dateofbirth= new Date(2000, 0, 1); // January 1, 2000;te;
        this.religion= '';
        this.community= '';
        this.educationqualification='';
        this.occupation= '';
        this.income=0;
        this.maritalstatus='';
        this.livingarrangements= '';
        this.nameoffamilymem='';
        this.nameofsupperson= '';
        this.suppersonaddress= '';
        this.suppersonteleno=0;
        this.referral='';    
    }
 
}



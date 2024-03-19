export class Treatment {
    _id: string;
    year: Date;
    place: String;
    period: Number;
    sobriety: Number;
    reason: String;
    relapse: String;

    constructor() {
        this._id = '';
        this.year= new Date(2000, 0, 1); // January 1, 2000;
        this.place= '';
        this.period= 0;
        this.sobriety= 0;
        this.reason= '';
        this.relapse= '';
    }
}

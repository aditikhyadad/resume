export class Pattern {
    _id: string;
    "family" : [{
        f1 : Boolean;
        f2 : Boolean;
        f3 : Boolean;
        f4 : Boolean;
    }];
    "disowned" : [{
        d1 : Boolean;
        d2 : Boolean;
        d3 : Boolean;
        d4 : Boolean;
    }];
    "mixed" : [{
        m1 : Boolean;
        m2 : Boolean;
        m3 : Boolean;
        m4 : Boolean;
    }];
    "conflict" : [{
        c1 : Boolean;
        c2 : Boolean;
        c3 : Boolean;
        c4 : Boolean;
    }]

    constructor() {
        this._id = '';
        this.family = [{
            f1: false,
            f2: false,
            f3: false,
            f4: false,
        }];
        this.disowned = [{
            d1: false,
            d2: false,
            d3: false,
            d4: false,
        }];
        this.mixed = [{
            m1: false,
            m2: false,
            m3: false,
            m4: false,
        }];
        this.conflict = [{
            c1: false,
            c2: false,
            c3: false,
            c4: false,
        }];
    }
}

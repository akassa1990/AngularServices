import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  data;
    constructor() {
        var obj1={_id:1,farm:'Ethio Farm',produce:['Cabbage','Potato']};
        var obj2={_id:2,farm:'Fruit King',produce:['Apple','Orange']};
        this.data=[obj1,obj2];
    }

    getData(){
        return this.data;
    }
}

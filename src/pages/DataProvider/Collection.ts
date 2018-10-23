export class Collection{
    avgtime:number;
    equipment:equipments;
    name:string;
    week:weeks[];
}

class equipments{
    1:string;
}

class weeks{
    1:days[];
}

class days{
    day:dayss[];
}

class dayss{
    1:a[];
}

class a{
    bodyparts:bodypart[];
    sets:set[];
}

class bodypart{
    1:string;
}

class set{
    1:setss[];
}

class setss{
    workout:workoutss[];
}

class workoutss{
    1:name[];
}

class name{
    title:string;
    amount:string;
}
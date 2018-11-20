export class User{
	email:string
	password:string;
	fName:string;
	lName:string;
	weight:number;
	height:number;
	waistMeasurement:number;
	gender:string;
	dateofbirth:Date;
	fitplan:string;
	uid:string;
	UserKey:string;
	userAnswer:PlanAnswer;
	keyFit:string;
	foodplan:string;
	collection:string;
	collectionuser:string;
	startcollection:number;
	startmonthcollection:number;
	status:statuss;
	finishplan:number;
	progress:progresss;
	perplan:per;
}

class PlanAnswer{
	Equipment:String;
	PD:String;
	PI:String;
	WPD:String;
	StartDate:number;
	StartMonth:number;
	StartYear:number;
	update:number;
	//Answer:any[];
}

class statuss{
	day:number;
	status:string;
}

class progresss{
	height:number;
	weight:number;
	plan:number;
	waistMeasurement:number;
	day:string;
}

class per{
	plan:number;
	per:number;
}
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
}

class PlanAnswer{
	Equipment:String;
	PD:String;
	PI:number;
	WPD:String;
	StartDate:number;
	//Answer:any[];
}
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
}

class PlanAnswer{
	Answer:any[];
}
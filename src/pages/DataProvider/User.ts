export class User{
	email:string
	password:string;
	fName:string;
	lName:string;
	weight:string;
	height:string;
	waistMeasurement:string;
	uid:string;
	UserKey:any;
	userAnswer:PlanAnswer;
}

class PlanAnswer{
	Answer:any[];
}
export class User{
	email:string
	password:string;
	fName:string;
	lName:string;
	weight:string;
	height:string;
	waistMeasurement:string;
	uid:string;
	UserKey:string;
	userAnswer:PlanAnswer;
}

class PlanAnswer{
	Answer1:string[];
	Answer2:string;
	Answer3:string;
	Answer4:string;
	Answer5:string;
}
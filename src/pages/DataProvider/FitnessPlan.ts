export class FitnessPlan{
	age: ages;
	bmi: bmis;
	avgTime:number;
	category: string;
	difficult: string;
	equipment: string;
	intensity: string;
	gender:genders;
	user:  users;
	week: weeks;
	PlanKey: string;
}

class ages{
	end: number;
	start: number;
}

class genders{
	gender1: string;
	gender2: string;
}

class bmis{
	end: number;
	start: number;
}

class users{
	user?: string;
}

class weeks{
	week?: weekss;
}

class weekss{
	day?: day[];
}

class day{
	bodyparts: string;
	workouts: FitnessPlan4[];
}

class FitnessPlan4{
	resttime: number;
	set?: set[];
}

class set{
	workout?: workout[];
}

class workout{
	amount: string;
	title: string;
}
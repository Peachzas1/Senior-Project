export class FitnessPlan{
	age: ages;
	bmi: bmis;
	category: string;
	difficult: string;
	equipment: equipments;
	intensity: string;
	gender:genders;
	user:  users;
	week: weeks;
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

class equipments{
	equipment?: string;;
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
	deadlift: number;
	squat: number;
}
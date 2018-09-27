export class FitnessPlan{
	age: ages;
	bmi: bmis;
	avgtime:number;
	category: string;
	difficult: string;
	equipment: string;
	intensity: string;
	gender:genders;
	weeks: weeks[];
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

class weeks{
	1: weekss[];
}

class weekss{
	days: days[];
}

class days{
	1: day[];
}

class day{
	bodyparts: parts[];
	sets: sets[];
}

class parts{
	1: string;
	2: string;
}

class sets{
	1: set[];
}

class set{
	workouts: workouts[];
}

class workouts{
	1: workout[];
}

class workout{
	amount: string;
	title: string;
}
export class FitnessPlan{
	age: FitnessPlan2;
	bmi: FitnessPlan2;
	category: string;
	difficult: string;
	equipment: string[];
	intensity: string;
	user:  string[];
	week: FitnessPlan2;

}

class FitnessPlan2{
	ageStart: number;
	ageEnd: number;
	bmiStart: number;
	bmiEnd: number;
	day1: FitnessPlan3;
	day2: FitnessPlan3;
	day3: FitnessPlan3;
}

class FitnessPlan3{
	bodyParts: string;
	workouts: FitnessPlan4;

}

class FitnessPlan4{
	restTime: number;
	set1: number[];
	set2: number[];
	set3: number[];
	set4: number[];
	set5: number[];
	set6: number[];
	set7: number[];
}
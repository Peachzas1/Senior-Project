export class FoodPlan{
	age: age;
	calories: number;
	carbohydrate: number;
	fat: number;
	gender: gender;
	height: height;
	meals: meals;
	protein: number;
	weight: weight;
	user: users;
}

class age{
	end: number;
	start: number;
}

class gender{
	gender1: string;
}

class height{
	end: number;
	start: number;
}
class meals{
	afterWorkout: afterWorkout;
	beforeWorkout: beforeWorkout;
	breakfast: breakfast;
	lunch: lunch;
}

class weight{
	end: number;
	start: number;
}

class users{
	user?: string;
}

class afterWorkout{
	carbohydrte: number;
	fat: number;
	protein: number;
}

class beforeWorkout{
	carbohydrate: number;
	fat: number;
	protein: number;
}

class breakfast{
	carbohydrate: number;
	fat: number;
	protein: number;
}

class lunch{
	carbohydrate: number;
	fat: number;
	protein: number;
}
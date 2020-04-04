//this function caluclate risk of positive test on COVID from questionary
export function calculateRisk (symptoms) {
	//risk of person without symptoms and contact
	let risk = 0.02
	if (symptoms.indexOf("FEVER")>-1){
		risk+=0.02
	}
	if (symptoms.indexOf("COUGH")>-1){
		risk+=0.03
	}
	if (symptoms.indexOf("BREATHING_PROBLEM")>-1){
		risk+=0.05
	}
	if (symptoms.indexOf("CLOSE_CONTACT")>-1){
		risk+=0.1
	}
	if (symptoms.indexOf("COMING_FROM_ABROAD")>-1){
		risk+=0.07
	}	
	if (symptoms.indexOf("PREVIOUS_POSITIVE")>-1){
		risk=0.9
	}	
	return risk
}



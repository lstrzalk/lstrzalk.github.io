addDemoCases (){
	this.setState((state,props) => {
		const cases = [{
	        id: 1,
	        symptoms: [],
	        probability: 0.02
	     	},
	        {
	          id: 2,
	          symptoms: [SYMPTOMS.COUGH],
	          probability: 0.05
	        },
	        {
	          id: 3,
	          symptoms: [SYMPTOMS.BREATHING_PROBLEM, SYMPTOMS.FEVER],
	          probability: 0.09
	        },
	        {
	          id: 4,
	          symptoms: [SYMPTOMS.CLOSE_CONTACT, SYMPTOMS.COMING_FROM_ABROAD],
	          probability: 0.19
	        },
	        {
	          id: 5,
	          symptoms: [SYMPTOMS.COUGH, SYMPTOMS.COMING_FROM_ABROAD],
	          probability: 0.12
	        },
	        {
	          id: 6,
	          symptoms: [SYMPTOMS.COUGH, SYMPTOMS.COMING_FROM_ABROAD],
	          probability: 0.15
	        },
	        {
	          id: 7,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 8,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 9,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 10,
	          symptoms: [SYMPTOMS.COUGH,SYMPTOMS.BREATHING_PROBLEM, SYMPTOMS.FEVER,SYMPTOMS.COMING_FROM_ABROAD, SYMPTOMS.CLOSE_CONTACT],
	          probability: 0.29
	        },
	        {
	          id: 11,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 12,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 13,
	          symptoms: [SYMPTOMS.CLOSE_CONTACT],
	          probability: 0.02
	        },
	        {
	          id: 14,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 15,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 16,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 17,
	          symptoms: [SYMPTOMS.COUGH, SYMPTOMS.BREATHING_PROBLEM],
	          probability: 0.05
	        },
	        {
	          id: 18,
	          symptoms: [SYMPTOMS.COUGH, SYMPTOMS.FEVER],
	          probability: 0.05
	        },
	        {
	          id: 19,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 20,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 21,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 22,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 23,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 24,
	          symptoms: [SYMPTOMS.BREATHING_PROBLEM, SYMPTOMS.FEVER],
	          probability: 0.09
	        },
	        {
	          id: 25,
	          symptoms: [SYMPTOMS.CLOSE_CONTACT, SYMPTOMS.COMING_FROM_ABROAD],
	          probability: 0.19
	        },
	        {
	          id: 26,
	          symptoms: [SYMPTOMS.COUGH, SYMPTOMS.COMING_FROM_ABROAD],
	          probability: 0.12
	        },
	        {
	          id: 27,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 28,
	          symptoms: [SYMPTOMS.COUGH,SYMPTOMS.BREATHING_PROBLEM, SYMPTOMS.FEVER,SYMPTOMS.COMING_FROM_ABROAD],
	          probability: 0.19
	        },
	        {
	          id: 29,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 30,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 31,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 32,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 33,
	          symptoms: [SYMPTOMS.COUGH],
	          probability: 0.05
	        },
	        {
	          id: 34,
	          symptoms: [SYMPTOMS.CLOSE_CONTACT],
	          probability: 0.10
	        },
	        {
	          id: 35,
	          symptoms: [SYMPTOMS.COUGH],
	          probability: 0.05
	        },
	        {
	          id: 36,
	          symptoms: [SYMPTOMS.BREATHING_PROBLEM, SYMPTOMS.FEVER],
	          probability: 0.09
	        },
	        {
	          id: 37,
	          symptoms: [SYMPTOMS.CLOSE_CONTACT, SYMPTOMS.COMING_FROM_ABROAD],
	          probability: 0.19
	        },
	        {
	          id: 38,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 39,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 40,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 41,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 42,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 43,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 44,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 45,
	          symptoms: [SYMPTOMS.COUGH,SYMPTOMS.BREATHING_PROBLEM, SYMPTOMS.FEVER,SYMPTOMS.COMING_FROM_ABROAD, SYMPTOMS.CLOSE_CONTACT],
	          probability: 0.29
	        },
	        {
	          id: 46,
	          symptoms: [SYMPTOMS.COUGH, SYMPTOMS.FEVER,SYMPTOMS.COMING_FROM_ABROAD, SYMPTOMS.CLOSE_CONTACT],
	          probability: 0.24
	        },
	        {
	          id: 47,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 48,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 49,
	          symptoms: [],
	          probability: 0.02
	        },
	        {
	          id: 50,
	          symptoms: [],
	          probability: 0.02
			}
		
		]
		
		return{
			...state, 
			cases
		}
	})	
}
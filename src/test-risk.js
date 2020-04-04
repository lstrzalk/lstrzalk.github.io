const calculateRisk = require('./risk.js')


if(calculateRisk(['']).toFixed(2)!=0.02){
	throw new Error('Without symptoms not equal to 0.02')
}

if(calculateRisk(['FEVER']).toFixed(2)!=0.04){
	throw new Error('With only fever not equal to 0.04')
}

if(calculateRisk(['COUGH']).toFixed(2)!=0.05){
	throw new Error('With only cough not equal to 0.05')
}

if(calculateRisk(['FEVER', 'COUGH', 'BREATHING_PROBLEM', 'CLOSE_CONTACT', 'COMING_FROM_ABROAD']).toFixed(2)!=0.29)	{
	throw new Error('With all symptoms not equal to 0.29')
}

if(calculateRisk(['asdbasf']).toFixed(2)!=0.02){
	throw new Error('With garbage message not equal to 0.02')
}
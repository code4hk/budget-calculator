define(["require", "exports"], function(require, exports) {
  return angular.module("taxCalculator.translations.en", [])

.constant("taxCalculator.translations.en", {
	"CALCULATOR_HEADER_TITLE": "Budget calculator 2015-16",
	"HEADING": {
		"LIVING_COST": "Living expenses",
		"SALARY_TAX": "Salary tax"
	},
	"LIVING": {
		"ELECTRICITY": "Electricity Bill",
		"ELECTRICITY_INFO": "Electricity Subsidy Facts",
		"RATES": "Rates",
		"RATES_TOOLTIP_1415": "14-15: 全年首兩季獲每季上限$1500的寬減,總計$3,000",
		"RATES_TOOLTIP_1516": "15-16: 全年首兩季獲每季上限$2500的寬減,總計$5,000",
		"PUBLIC_HOUSING_RENT": "Public Housing Monthly Rent",
		"PUBLIC_HOUSING_TOOLTIP": "",
		"CSSA": "Accepting CSSA, Old Age / Old Age Living / Disability Allowance",
		"LIVING.CSSA_TOOLTIP": "15-16: 2 months' extra allowance"
	},
	"MORE": "More",
	"MONTH": "Months",
	"SEASON": "Seasons",
	"INCOME_TOTAL": "Total income",
	"DEDUCTION": "Deductions",
	"DEDUCTION_TOTAL": "Total deductions",
	"DEDUCTION_TOOLTIP": "Outgoings and Expenses for self-educations, MPF or Charitable Donations, ",
	"EXEMPTION": {
		"HEADING": "Allowances",
		"MARITAL_STATUS_LABEL": "Marital status",
		"MARITAL_STATUS_SINGLE": "Single/divorced",
		"MARITAL_STATUS_MARRIED": "Married",
		"BASIC": "Basic allowance",
		"CHILDREN_COUNT": "Dependent children",
		"CHILDREN": "Children",
		"BORN_IN_TAX_YEAR": "Born in the year",
		"SINGLE_PARENT": "Single parent allowance",
		"PARENTS_60_COUNT": "Number of dependent parents/grandparents (aged 60 or over, or are disabled)",
		"PARENTS_55_COUNT": "Number of dependent parents/grandparents (aged 55 to 59)\t",
		"PARENTS": "Dependent Parents/Grandparents",
		"DEPENDENT_PARENTS_TOOLTIP": "14-15:$40,000 for aged 60+; $20,000 for aged 55-59/disabled，<br/>15-16:Unchanged",
		"LIVING_TOGETHER": "How many resided with you throughout the year ",
		"LIVING_SEPARATED": "How many did not reside with you throughout the year "
	},
	"REDUCTION": {
		"LABEL": "Reductions",
		"TOOLTIP_1415": "14-15Budget：75% Reduction on Salaries Tax, profits tax and tax under personal assessment, Maximum at 10,000",
		"TOOLTIP_1516": "15-16Budget：75% Reduction on Salaries Tax, profits tax and tax under personal assessment，Maximum at 20,000",
		"NOTE": "The 2015-16 budget estimates the reductions for 2014-15. It’s easier to compare those for 2014-15 to 2013-14. "
	},
	"TOTAL": {
		"LABEL": "Total",
		"INCOME": "Total income",
		"DEDUCTION": "Total deductions",
		"EXEMPTION": "Total allowances",
		"REDUCTION": "Total reductions"
	},
	"DETAILS": "Details",
	"YES": "Yes",
	"NO": "No",
	"SAME": "Same",
	"AMOUNT_PAY": "Pay ${{amount|number:0}}",
	"AMOUNT_MORE": "an extra {{amount|number:0}}",
	"AMOUNT_LESS": "{{amount|number:0}} less",
	"PAY_MORE": "pay ${{amount|number:0}} more",
	"PAY_LESS": "pay ${{amount|number:0}} less",
	"THIS_YEAR": "this year",
	"YEAR_1516": "Year15-16"
})

;
});
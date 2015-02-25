define(["require", "exports"], function(require, exports) {
  return angular.module("taxCalculator.translations.zh-TW", [])

.constant("taxCalculator.translations.zh-TW", {
	"CALCULATOR_HEADER_TITLE": "財政預算案2015-16計算器",
	"HEADING": {
		"LIVING_COST": "生活開支",
		"SALARY_TAX": "薪俸稅"
	},
	"INCOME_TOTAL": "總收入",
	"DEDUCTION": "扣除",
	"DEDUCTION_TOTAL": "總扣除",
	"EXEMPTION": {
		"HEADING": "免稅額",
		"MARITAL_STATUS_LABEL": "婚姻狀況",
		"MARITAL_STATUS_SINGLE": "未婚／離異",
		"MARITAL_STATUS_MARRIED": "已婚",
		"BASIC": "基本",
		"CHILDREN_COUNT": "供養子女數目",
		"BORN_IN_TAX_YEAR": "課稅年出生：",
		"SINGLE_PARENT": "單親免稅額",
		"PARENTS_60_COUNT": "供養父母／祖父母(60歲或以上／殘疾)數目",
		"PARENTS_55_COUNT": "供養父母／祖父母(55-59歲)數目",
		"LIVING_TOGETHER": "同住:",
		"LIVING_SEPARATED": "非同住:"
	},
	"CONCESSION": {
		"LABEL": "寬減",
		"NOTE": "註：14-15年預算調整13-14年寬減稅額，這裏使用12-13及13-14方便比較)"
	},
	"TOTAL": {
		"LABEL": "總計",
		"INCOME": "總收入",
		"DEDUCTION": "總扣除",
		"EXEMPTION": "總免稅額",
		"CONCESSION": "總寬減"
	},
	"DETAILS": "詳情",
	"YES": "是",
	"NO": "否",
	"SAME": "一樣",
	"AMOUNT_PAY": "交${{amount|number:0}}",
	"AMOUNT_MORE": "多{{amount|number:0}}",
	"AMOUNT_LESS": "少{{amount|number:0}}",
	"PAY_MORE": "交多${{amount|number:0}}",
	"PAY_LESS": "交少${{amount|number:0}}",
	"THIS_YEAR": "今年",
	"YEAR_1516": "15/16年"
})

;
});
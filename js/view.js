var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

Event.observe(window, 'load', init, false);


var QUESTION_NAME_PREFIX = "question";
var NEXT_LINK_NAME_PREFIX = "nextQ";
var EARNEST_POINTS_CONTROL_NAME = "earned_points";
var QUESTIONS_FORM_NAME = "questions";


var currentQuestion = 1;

var questions = [
	{
		responsePoints: null  /* question 1 */
	},
 	{
		responsePoints: null  /* question 2 */
	},
	{
		responsePoints: null  /* question 3 */
	},
	{
		responsePoints: null  /* question 4 */
	},
	{
		responsePoints: null  /* question 5 */
	},
	{
		responsePoints: null  /* question 6 */
	},
	{
		responsePoints: null  /* question 7 */
	},
	{
		responsePoints: null  /* question 8 */
	},
	{
		responsePoints: null  /* question 9 */
	},
	{
		responsePoints: null  /* question 10 */
	},
	{
		responsePoints: null  /* question 11 */
	},
	{
		responsePoints: null  /* question 12 */
	},
	{
		responsePoints: null  /* question 13 */
	},
	{
		responsePoints: null  /* question 14 */
	},
	{
		responsePoints: null  /* question 15 */
	}
]


function calculateTotalPoints() {
	var total = 0;

	for (var i = 0;  i < questions.length; ++i) {
		var question;

		question = questions[i];
		total += question.responsePoints;
	}

	return total;
}


function goNext(question_id) {
	$(QUESTION_NAME_PREFIX + question_id).style.display = 'none';

	if ( $(QUESTION_NAME_PREFIX + (question_id + 1) ) ) {
		var question;

	    question_id++;
		question = questions[question_id - 1];

	    $(QUESTION_NAME_PREFIX + question_id).style.display = 'block';

	} else {

	    var points = calculateTotalPoints();
		
		$(EARNEST_POINTS_CONTROL_NAME).value = points;

	    if (points <= 28) {
		$(QUESTIONS_FORM_NAME).action = "results.html";
	    } else if (points >= 29 && points <= 30) {
		$(QUESTIONS_FORM_NAME).action = "results.html";
	    } else if (points >= 31 && points <= 41) {
		$(QUESTIONS_FORM_NAME).action = "results.html";
	    } else if (points >= 42 && points <= 52) {
		$(QUESTIONS_FORM_NAME).action = "results.html";
	    } else if (points >= 53) {
		$(QUESTIONS_FORM_NAME).action = "results.html";
	    }
	
	    $(QUESTIONS_FORM_NAME).submit();
	}

	return question_id;
}


function goBack() {
	$(QUESTION_NAME_PREFIX + currentQuestion).style.display='none';
	currentQuestion--;
	$(QUESTION_NAME_PREFIX + currentQuestion).style.display='block';
}


function processReponseAndContinue(responsePoints) {
	var question = questions[currentQuestion - 1];

	question.responsePoints = responsePoints;

	currentQuestion = goNext(currentQuestion);
}


function init() {
	currentQuestion = 1;
}


function handleFormSubmit() {
	processReponseAndContinue();
}


// Adds commas into a number string
function addCommas( numberString )
{
	numberString += '';
	x = numberString.replace(/[^0-9.\-]*/g, "").split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1))
	{
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}

	return x1 + x2;
}


var isIE = navigator.appName.indexOf('Microsoft') != -1;






}


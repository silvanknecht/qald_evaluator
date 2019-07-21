# QA_Evaluator
This evaluator was created to evaluate Question Answering Systems with the JSON Qald datasets. Since it was part of a bachelorsthesis that included Qanary, the evaluator works best with [those Pipelines](https://github.com/jannlemm0913/BA_QuestionAnswering).

## Getting Started
First install all the Node_Modules.
```
npm install                   
```
Then run the application.
```
npm install                   
```

The app should now be available on: http://localhost:3000

## Running an evaluation
If you want to evaluate your own system make sure that it returns the correct Format. The answers value follows the [W3C](https://www.w3.org/TR/sparql11-results-json/) defined standard. 
```JSON
{
	"questions": [{
		"id": "1",
		"question": [{
			"language": "en",
			"string": ""
		}],
		"query": {
			"sparql": ""
      },
		"answers": [{
			"head": {
				"vars": [
					"uri"
				]
			},
			"results": {
				"bindings": [{
					"uri": {
						"type": "uri",
						"value": ""
					}
				}]
			}
		}]
	}]
}
```

## Running the tests
To ensure the functionnality, 87 unit and integration tests have been developed and can be found in the test/ directory. 

The interface was only tested with Google Chrome.

## Built With

* [NodeJs](https://nodejs.org/en/) 
* [Plotly](https://plot.ly/) 
* [D3](https://d3js.org/) 
* [Bootstrap 4.0.1](https://getbootstrap.com/) 


## Authors

* [**Silvan Knecht**](https://github.com/silvanknecht)
* [**Jann Lemm**](https://github.com/jannlemm0913)

See also the list of [contributors](https://github.com/enjoymrban/JKL_Fitbuddy/graphs/contributors) who participated in this project.








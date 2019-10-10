var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('../assets/canvasjs.react')
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints = [];
export default class Graph extends Component {
	render() {
		const options = {
			theme: "light2",
			title: {
				text: "Stock Price of NIFTY 50"
			},
			axisY: {
				title: "Price in USD",
				prefix: "$",
				includeZero: false
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: dataPoints
			}]
		}
		return (
			<div>
				<CanvasJSChart options = {options} 
					 onRef={ref => this.chart = ref}
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
			
		);
	}

	componentDidMount() {
		var chart = this.chart;
		// fetch('http://canvasjs.com/data/gallery/react/nifty-stock-price.json')
		// .then(function(response) {
		// 	return response.json();
		// })
		// .then(function(data) {
		// 	for (var i = 0; i < data.length; i++) {
		// 		dataPoints.push({
		// 			x: new Date(data[i].x),
		// 			y: data[i].y
		// 		});
		// 	}
		// 	chart.render();
		// });

		let data = 
		[
		  {
			"x": 1483228800000,
			"y": 8561.3
		  },
		  {
			"x": 1485907200000,
			"y": 8879.6
		  },
		  {
			"x": 1488326400000,
			"y": 9173.75
		  },
		  {
			"x": 1491004800000,
			"y": 9304.05
		  },
		  {
			"x": 1493596800000,
			"y": 9621.25
		  },
		  {
			"x": 1496275200000,
			"y": 9520.9
		  },
		  {
			"x": 1498867200000,
			"y": 10077.1
		  },
		  {
			"x": 1501545600000,
			"y": 9917.9
		  },
		  {
			"x": 1504224000000,
			"y": 9788.6
		  },
		  {
			"x": 1506816000000,
			"y": 10335.3
		  },
		  {
			"x": 1509494400000,
			"y": 10226.55
		  },
		  {
			"x": 1512086400000,
			"y": 10530.7
		  }
		]
		for (var i = 0; i < data.length; i++) {
			dataPoints.push({
				x: new Date(data[i].x),
				y: data[i].y
			});
		}
	}
}

// export default Graph;

module.exports = Graph;
$(document).ready(function() {
	var ctx = document.getElementById("bar-chart").getContext("2d");
	var myChart = new Chart(ctx, {
		type: "bar",
		data: {
			labels: ["NGE", "NÓI", "ĐỌC", "VIẾT"],
			datasets: [
				{
					label: "",
					data: [7, 8, 9, 6],
					backgroundColor: [
						"#FF6609",
						"#FF6609",
						"#FF6609",
						"#FF6609"
					]
				}
			]
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							suggestedMin: 0,
							suggestedMax: 10,
							stepSize: 2
						}
					}
				]
			},
			title: {
				display: true,
				text: "Điểm các kỹ năng",
				fontStyle:"bold",
				fontColor:"#000",
				fontSize:18,
				fontFamily:"Quicksand', arial, sans-serif",
				position: "top"
			},
			legend: {
				display: false
			}
		}
	});

	var line = document.getElementById("line-chart").getContext("2d");
	var line_chart = new Chart(line, {
		type: "line",
		data: {
			labels: ["", "2/1", "", "4/1", "", "6/1", "", "8/1", "", "10/1"],
			datasets: [
				{
					label: "",
					data: [30, 50, 20, 10, 0, 30, 10, 35, 45, 40],
					backgroundColor: "rgba(0, 0, 0, 0)",
					borderColor: "#FF6609",
					borderWidth: 2,
					tension: 0,
					pointStyle: "circle"
				}
			]
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							suggestedMin: 0,
							suggestedMax: 10,
							stepSize: 10
						}
					}
				],
				xAxes: [{}]
			},
			title: {
				display: true,
				text: "Tỉ lệ học trên ngày",
				position: "top"
			},
			legend: {
				display: false
			},
			elements: {
				point: {
					radius: 0
				}
			}
		}
	});

	var ctx_2 = document.getElementById("bar-chart-2").getContext("2d");
	var myChart_2 = new Chart(ctx_2, {
		type: "bar",
		data: {
			labels: ["NGHE", "NÓI", "ĐỌC", "VIẾT"],
			datasets: [
				{
					label: "",
					data: [6, 7, 4, 5],
					backgroundColor: [
						"#FF6609",
						"#FF6609",
						"#FF6609",
						"#FF6609"
					]
				}
			]
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							suggestedMin: 0,
							suggestedMax: 10,
							stepSize: 2
						}
					}
				],
				xAxes: [{}]
			},
			title: {
				display: true,
				text: "Điểm các kỹ năng",
				color:"#000",
				position: "top"
			},
			legend: {
				display: false
			}
		}
	});

	var line_2 = document.getElementById("line-chart-2").getContext("2d");
	var line_chart_2 = new Chart(line_2, {
		type: "line",
		data: {
			labels: ["", "2/1", "", "4/1", "", "6/1", "", "8/1", "", "10/1"],
			datasets: [
				{
					label: "",
					data: [20, 50, 60, 0, 10, 50, 10, 25, 15, 40],
					backgroundColor: "rgba(0, 0, 0, 0)",
					borderColor: "#FF6609",
					borderWidth: 2,
					tension: 0,
					pointStyle: "circle"
				}
			]
		},
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							suggestedMin: 0,
							suggestedMax: 10,
							stepSize: 10
						}
					}
				],
				xAxes: [{}]
			},
			title: {
				display: true,
				text: "Tỉ lệ học trên ngày",
				position: "top"
			},
			legend: {
				display: false
			},
			elements: {
				point: {
					radius: 0
				}
			}
		}
	});

});

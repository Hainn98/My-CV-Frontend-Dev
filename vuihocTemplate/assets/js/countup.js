$(document).ready(function() {
	var isAlreadyPopUp;

	$(window).scroll(function() {
		if (!isAlreadyPopUp) {
			isAlreadyPopUp = true;
			$(".counter").each(function() {
				var $this = $(this),
					countTo = $this.attr("data-count");
				$({ countNum: $this.text() }).animate(
					{
						countNum: countTo
					},
					{
						duration: 2000,
						easing: "linear",
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
							//alert('finished');
						}
					}
				);
			});
		}
	});

	const siri = 295.31;
	let isDown = true;
	// Set the date we're counting down to
	let endTime = $('#end_time').val();
	let countDownDate = new Date(endTime).getTime();

	// Update the count down every 1 second
	setInterval(function() {
		if (isDown === true) {
			// Get today's date and time
			let now = new Date().getTime();

			// Find the distance between now and the count down date
			let distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			let seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (seconds == 0 && minutes == 0 && hours == 0 && days == 0) {
				isDown = false;
			}

			if (seconds == 0) {
				$("#path__sec").attr("stroke-width", 0);
			} else {
				$("#path__sec").attr("stroke-width", 6);
			}
			if (minutes == 0) {
				$("#path__min").attr("stroke-width", 0);
			} else {
				$("#path__min").attr("stroke-width", 6);
			}
			if (hours == 0) {
				$("#path__day").attr("stroke-width", 0);
			} else {
				$("#path__day").attr("stroke-width", 6);
			}
			if (days == 0) {
				$("#path__mon").attr("stroke-width", 0);
			} else {
				$("#path__mon").attr("stroke-width", 6);
			}

			$("#path__sec").css(
				"stroke-dasharray",
				`${((seconds - 1) / 60) * siri}px, ${siri}px`
			);
			$("#path__min").css(
				"stroke-dasharray",
				`${((minutes - 1) / 60) * siri}px, ${siri}px`
			);
			$("#path__day").css(
				"stroke-dasharray",
				`${((hours - 1) / 60) * siri}px, ${siri}px`
			);
			$("#path__mon").css(
				"stroke-dasharray",
				`${((days - 1) / 60) * siri}px, ${siri}px`
			);

			$("#number_sec").text(seconds);
			$("#number_min").text(minutes);
			$("#number_day").text(hours);
			$("#number_mon").text(days);

			// If the count down is over, write some text
			if (distance < 0) {
				clearInterval(x);
				document.getElementById("demo").innerHTML = "EXPIRED";
			}
		}
	}, 1000);
});

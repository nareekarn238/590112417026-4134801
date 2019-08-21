function getDate(){
		var in1 = document.getElementById("in1").value;
		showDate(in1);
	};

	function showDate(msg){
		document.getElementById('lb1').innerHTML = msg;
	};
console.log('%cAuto Leave Gmeet', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

if (confirm('Do you want to enable auto-leave mode for this meeting?')) {
	const room_checker = setInterval(function(){
		number_of_participants = parseInt(document.getElementsByClassName("uGOf1d")[0].innerText)
		if (number_of_participants==1){
			call_disconnect_button = document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c jh0Tpd Gt6sbf QQrMi ftJPW")[0]
			call_disconnect_button.click()
			clearInterval(room_checker);
			console.log('%cLeft meeting.', "color: red; font-family:serif; font-size: 20px");
		}
	},5000)	
} else {
	console.log('%cAdios. Thanks for using Auto Leave Gmeet.', 'color:green; font-family:serif; font-size: 20px');
}


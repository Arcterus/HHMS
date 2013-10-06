function login() {
	var userElem = document.getElementById('username');
	var username = userElem.value;
	var passElem = document.getElementById('password');
	var password = passElem.value;
	if(username) {
		if(password) {
			// submit
			/*$.post('https://www.harker.org/userlogin.cfm?do=login&p=196', { username: username, password: password }, function(data, textStatus) {
				if(data.indexOf('The username and/or password entered was invalid') !== -1) {
					// success
					// now time to try and load data
				} else {
					// error
					alert("Invalid username and/or password");
				}
			});*/
			$.mobile.changePage('news.html');
		} else {
			passElem.select();
		}
	} else {
		userElem.select();
	}
}

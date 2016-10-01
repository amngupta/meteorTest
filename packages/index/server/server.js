Meteor.methods({
    getData (){
        return HTTP.call("GET","https://cis2016-teamtracker.herokuapp.com/api/teams/PkkYempGWJeQr3AFYzcOWA",{
		headers:{"content-type":"application/json"}
	});
    }
})
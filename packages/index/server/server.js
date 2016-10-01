Meteor.methods({
    getData (teamID){
        return HTTP.call("GET","https://cis2016-teamtracker.herokuapp.com/api/teams/"+teamID,{
		headers:{"content-type":"application/json"}
	});
    }
})
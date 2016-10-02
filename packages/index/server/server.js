Meteor.methods({
    getData (teamID){
        return HTTP.call("GET","https://cis2016-teamtracker.herokuapp.com/api/teams/"+teamID,{
		headers:{"content-type":"application/json"}
	});
    },
    manualOrder (teamID, exchange, symbol, side, qty, order_type) {
    	console.log("manualOrder");
    	return HTTP.call("POST","http://cis2016-"+exchange+".herokuapp.com/api/orders",{
    		headers:{"content-type":"application/json"},
    		data:{
    			"team_uid": teamID,
				"symbol": symbol,
				"side": side,
				"qty": qty,
				"order_type": order_type
    		}
    	})
    }
})
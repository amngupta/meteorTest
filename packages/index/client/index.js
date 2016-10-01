// import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// export const CASHDB = new Mongo.Collection('CASHDB');
import { Tracker } from 'meteor/tracker'

cashBalance = new ReactiveVar();
s0001 = new ReactiveVar();
s0005 = new ReactiveVar();
s0386 = new ReactiveVar();
s0388 = new ReactiveVar();
s3988 = new ReactiveVar();

Template.data.onCreated(function () {
  getTeamData();
  // Tracker.autorun(function(){getTeamData();});
});

Template.data.helpers({
  cashBal() {
    setTimeout(getTeamData(), 1000);
    console.log(cashBalance.get());
    return cashBalance.get();
  },
  s0001() {
    console.log(s0001.get());
    return s0001.get();
  },
  s0005() {
    console.log(s0005.get());
    return s0005.get();
  },
  s0386() {
    console.log(s0386.get());
    return s0386.get();
  },
  s0388() {
    console.log(s0388.get());
    return s0388.get();
  },
  s3988() {
    console.log(s3988.get());
    return s3988.get();
  }
});

var getTeamData=function(){
  Meteor.call('getData','TtH8CwcTEcwcpP7BOoZBzg',function(err,res)
	{
		if(!err){
      var jsonData = JSON.parse(res.content);
      console.log(jsonData.cash.split(".")[0]);
      if (cashBalance.get()!= jsonData.cash.split(".")[0]){
        cashBalance.set(jsonData.cash.split(".")[0]);
        // console.log(jsonData['0001']);
        // console.log(jsonData['0005']);
        // console.log(jsonData['0386']);
        // console.log(jsonData['0388']);
        // console.log(jsonData['3988']);
        if (!(jsonData['0001'] == null || jsonData['0001'] == undefined)){
          s0001.set(jsonData['0001'].split(".")[0]);
        } else { s0001.set(0)}
        
        if (!(jsonData['0005'] == null || jsonData['0005'] == undefined)){
          s0005.set(jsonData['0005'].split(".")[0]);
        } else { s0005.set(0)}
        
        if (!(jsonData['0386'] == null || jsonData['0386'] == undefined)){
          s0386.set(jsonData['0386'].split(".")[0]);
        } else { s0386.set(0)}
        
        if (!(jsonData['0388'] == null || jsonData['0388'] == undefined)){
          s0388.set(jsonData['0388'].split(".")[0]);
        } else { s0388.set(0)}
        
        if (!(jsonData['3988'] == null || jsonData['3988'] == undefined)){
          s3988.set(jsonData['3988'].split(".")[0]);
        } else { s3988.set(0)}
        // console.log("y");
      } else {
        // console.log("n");
        setTimeout(getTeamData(), 1000);
      }
    }
		else
    {
      // console.log(err);
    }
	});
}
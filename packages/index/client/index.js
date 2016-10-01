// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
// export const CASHDB = new Mongo.Collection('CASHDB');

cashBalance = new ReactiveVar(1);

Template.hello.onCreated(function () {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  getCash();
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },

  cashBal() {
    return cashBalance.get();
  }
});


 var getCash=function(){
   Meteor.call('getData',function(err,res)
		{
			if(!err){
        var jsonData = 		JSON.parse(res.content);
        console.log(jsonData.cash);
        cashBalance.set(jsonData.cash);
      }
			else
        {
          console.log(err);
        }
		});
 }

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

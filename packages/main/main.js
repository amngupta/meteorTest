import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http';

import './main.html';

export const CASHDB = new Mongo.Collection('CASHDB');

Template.cash.onCreated(function helloOnCreated() {

  this.cashBalance = new ReactiveVar(1);
  // Change -> get current price
});

Template.cash.helpers({
  cashBalance() {
	console.log("test");
	var search_result = HTTP.call("GET","://cis2016-teamtracker.herokuapp.com/api/teams/PkkYempGWJeQr3AFYzcOWA",{
		headers:{"content-type":"application/json"}
	},function(err,res)
		{
			if(!err)
				console.log(res.data);
			console.log(err);
		});
	console.log(search_result);
/*  	var search_result = HTTP.call(
		'GET', 'http://cis2016-teamtracker.herokuapp.com/api/teams/PkkYempGWJeQr3AFYzcOWA',{}
	);
    return search_result.data;*/

  	//return Template.instance().cashBalance.get()+1;
    //return CASHDB.find({});
    //return instance.cashBalance.get() + 1;
  }
});


/*
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});


Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
*/

import '../imports/ui/body.js';

import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker'

cashBalance = new ReactiveVar();
s0001 = new ReactiveVar();
s0005 = new ReactiveVar();
s0386 = new ReactiveVar();
s0388 = new ReactiveVar();
s3988 = new ReactiveVar();
getExchange = new ReactiveVar();
getStock = new ReactiveVar();
getSide = new ReactiveVar();
getOrderType = new ReactiveVar();
getQuantity = new ReactiveVar();
getPrice = new ReactiveVar();

Template.hello.onCreated(function () {
  getTeamData();
});

Template.hello.helpers({
  cashBal() {
    setTimeout(getTeamData(), 1000);
    return cashBalance.get();
  },
  s0001() {
    return s0001.get();
  },
  s0005() {
    return s0005.get();
  },
  s0386() {
    return s0386.get();
  },
  s0388() {
    return s0388.get();
  },
  s3988() {
    return s3988.get();
  },
  getExchange() {
    return getExchange.get();
  },
  getStock() {
    return getStock.get();
  },
  getSide() {
    return getSide.get();
  },
  getOrderType() {
    return getOrderType.get();
  },
  getQuantity() {
    return getQuantity.get();
  },
  getPrice() {
    return getPrice.get();
  },
});

var getTeamData=function(){
  Meteor.call('getData','AT7pT3uUKObhrZN60C817Q',function(err,res)
	{
		if(!err){
      var jsonData = JSON.parse(res.content);
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
      
      // if (cashBalance.get() > jsonData.cash.split(".")[0]) {
      //   var elem = document.getElementById("cashBalance");
      //   elem.style.color = "Red";
      // } else if (cashBalance.get() < jsonData.cash.split(".")[0]) {
      //   var elem = document.getElementById("cashBalance");
      //   elem.style.color = "Green";
      // } else {
      //   var elem = document.getElementById("cashBalance");
      //   elem.style.color = "White";
      // }

      if (cashBalance.get() != jsonData.cash.split(".")[0]){
        cashBalance.set(jsonData.cash.split(".")[0]);
      } else {
        setTimeout(getTeamData(), 1000);
      }
    }
		else
    {
      // console.log(err);
    }
	});
}

Template.submit.events({
  'click button'(event, instance) {
    var form = document.forms['manualOrderForm'];
    Meteor.call(
      'manualOrder',
      'AT7pT3uUKObhrZN60C817Q',
      form.elements['exchange'].value,
      form.elements['symbol'].value,
      form.elements['side'].value,
      form.elements['qty'].value,
      form.elements['order_type'].value,
      function(err,res){
      if(!err){
        var jsonData = JSON.parse(res.content);
        getExchange.set(form.elements['exchange'].value)
        getStock.set(jsonData.symbol)
        getSide.set(jsonData.side)
        getOrderType.set(jsonData.order_type)
        getQuantity.set(jsonData.qty)
        price = 0;
        jsonData.fills.forEach(function(entry){
          price = price + entry.price*entry.qty;
        });
        getPrice.set((price/getQuantity.get()).toFixed(5));
      } else {
        // console.log(err);
      }
    });
  }
});
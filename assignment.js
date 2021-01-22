




function kilometerToMeter( kilometer ){
  var  meter = kilometer*1000;        // 1 kilometer = 1000 meter //
  return meter; 
}




function budgetCalculator(arr){
  var watchUnit = arr[0];
  var phoneUnit = arr[1];
  var laptopUnit = arr[2];
  var totalWatchPrice = watchUnit*50;                              // multiply watch unit with given price (50 taka) //
  var totalPhonePrice = phoneUnit*100;                             // multiply phone unit with given price (100 taka) //
  var totalLaptopPrice = laptopUnit*500;                            // multiply laptop unit with given price (500 taka) //
  var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice ;  // total product price//
  return totalPrice;
}






function hotelCost(night){
  var totalRent = 0;
  if (night <= 10){ 
      totalRent = night * 100;                                // per night 100 taka //
  }
  else if( night <= 20){
      var firstTariff = 10*100;                              // first 10 night cost 10*100=1000 taka //
      var remainingNight = night-10;
      var secondTariff = remainingNight*80;                  //secondTariff = second 10 night cost. per night 80 taka //
      totalRent = firstTariff + secondTariff;
  }
  else{
      var firstTariff=10*100;
      var secondTariff=10*80;
      var remaining=night-20;                              //  after 20 night//
      var thirdTariff=remaining*50;                        // rest of the night cost. per night cost 50 taka//
      totalRent=firstTariff+secondTariff+thirdTariff;
  }
  return totalRent;
}








function megaFriend(arr){       // this function can find large name from a list //
  var long = arr[0];
   for (var i = 0; i < arr.length; i++) {
      var element = arr[i];
          if( long.length < element.length){
              long = element
              }
                   }
                  return long
                      }



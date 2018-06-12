let r = .1;

class Consumer{
  constructor(id,money,goodType){
  this.id = id;
  this.goodType = goodType;
  this.money = money;

  this.inv = [];
  this.demand = 0;
}
  invest(){
    this.investableMoney += r * this.money;
    this.money -= this.money + r;
    return;
  }
  calculateDemand(goodValue){
    this.invest();
    console.log(goodValue)
    let d = (goodValue + (Math.random()*5)+1)/(this.money * r);
    this.QuantityDemand = Math.floor(Math.random()*5) +1;
    this.PriceDemanded = d;
    console.log(this.PriceDemanded);
    console.log(this.QuantityDemand);

}

}

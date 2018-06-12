let amount = 25;

$(document).ready(function(){
    console.log("Loaded");
    let market = new Market();
    market.addGoods();
    market.init(20);
    market.marketPhase();
});

class Market{
  constructor(){
//    this.bots = [];
    this.goods = [];
    this.bots = [];
  }
  addGoods(){
    let baseGoods = [];
    for(let i = 0; i < 25; i++){
      var g = new baseGood("BaseGood",1);
      g.type = "baseGood"
      g.value = 1;
      console.log(g.value);
      baseGoods.push(g);

    }
    this.goods.push(baseGoods);
    console.log(this.goods);
  }
  init(n){
    this.bots = generateBots(n, this.goods);
  }
  marketPhase(){
    for (let type of this.goods){
      let Q = []
      let P = [];
      for(let bot of this.bots){
        if(bot.Goodtype === type.type){
          bot.calculateDemand(type[0].value)
          Q.push(bot.QuantityDemand);
          P.push(bot.PriceDemanded);
        }
      }
        let model = findLineByLeastSquares(Q,P);
        console.log(model[2])
        for(let g of type){
          console.log(g);
          g.value = this.goods.length/model[2]
        }

  }
}
}

function generateBots(n,goodTypes){
  let b = [];
  let r = Math.floor((Math.random() * goodTypes.length) + 1);
    for(i=0; i< n; i++){
      let r = Math.floor((Math.random() * goodTypes.length));
      let m = Math.floor((Math.random() * 100) + 1);
      //console.log(goodTypes[r]);
      b.push(new Consumer(i,100,goodTypes[r][0].type));
    }
  return b;
}

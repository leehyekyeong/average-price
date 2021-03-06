class CoffeePrice {
    constructor(name, americano, latte) {
        this.name = name;
        this.americano = americano;
        this.latte = latte;
    }

    getSum() {
        return this.americano + this.latte;
    }
    getAverage() {
        return this.getSum() / 2;
    }
    toString() {
        return "<strong>" + this.name + "</strong>" + "\t"
        + "합계: " + this.getSum()
        + ", 평균: " + this.getAverage()
        + "<br>"
    }
}

var cafe = [];
cafe.push(new CoffeePrice("✨시사", 4100, 4600));
cafe.push(new CoffeePrice("✨여느일", 3500, 4000));
cafe.push(new CoffeePrice("✨투썸플레이스", 4100, 4600));
cafe.push(new CoffeePrice("✨이디야", 3200, 3700));
cafe.push(new CoffeePrice("✨메가커피", 1500, 2700));
cafe.push(new CoffeePrice("✨아마스빈", 1800, 2800));

var output = '아메리카노 1잔과 카페라떼 1잔 가격 합계와 평균<br/><br/>';
for (var i=0; i<cafe.length; i++) {
    output += cafe[i].toString();
}

document.write(output);
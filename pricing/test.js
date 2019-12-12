var 定价 = require('./模板盒/P00001_xxxx活动.js');

var bills = [
  {
    "商品清单": [
      {
        "店号": "SZ09",
        "品牌": "MA",
        "折扣": 9,
        "仓位": "0001",
        "款号": "A1KT1805M04",
        "名称": "针织上衣, 36",
        "数量": 2,
        "积分": 147,
        "吊牌价": 3980,
        "一口价": 3980
      },
      {
        "店号": "SZ09",
        "品牌": "MA",
        "折扣": 9,
        "仓位": "0001",
        "款号": "A1KT1806M04",
        "名称": "针织上衣, 36",
        "数量": 1,
        "积分": 147,
        "吊牌价": 70,
        "一口价": 70
      },
      {
        "店号": "SZ09",
        "品牌": "MA",
        "折扣": 9,
        "仓位": "0001",
        "款号": "A1KT1807M04",
        "名称": "针织上衣, 36",
        "数量": 1,
        "积分": 147,
        "吊牌价": 3980,
        "一口价": 2280
      },
      {
        "店号": "SZ09",
        "品牌": "MA",
        "折扣": 9,
        "仓位": "0001",
        "款号": "A1KT1808M04",
        "名称": "针织上衣, 36",
        "数量": 1,
        "积分": 147,
        "吊牌价": 3980,
        "一口价": 3980
      },
    ],
    "VIP顾客": {
      "ID": 123456789,
      "手机": "13418497179",
      "姓名": "刘文武",
      "生日": "1989-12-01",
      "积分": 256
    },
    "优惠券": [
      {
        "券号": "SROKSODKXLST",
        "面值": 80,
        "本单用额": 0,
        "开始时间": "2019-11-20",
        "截止时间": "2019-12-31",
        "结算方式": "先券后折",
        "使用范围": ["A1KT1806M*"],
        "名称": "2019年11月生日券",
        "规则": "1.仅限购买当季商品 2.此券不退不换 3......."
      },
      {
        "券号": "SROKSODKXLST",
        "面值": 90,
        "本单用额": 0,
        "开始时间": "2019-11-20",
        "截止时间": "2019-12-31",
        "结算方式": "先折后券",
        "使用范围": ["A1KT1807M*"],
        "名称": "2019年11月生日券",
        "规则": "1.仅限购买当季商品 2.此券不退不换 3......."
      }
    ]
  }
];

bills.forEach(function (bill) {
  定价().计算(bill);
});

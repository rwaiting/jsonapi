// 使用 Mock
var Mock = require('mockjs')

module.exports = () => {
  var data = Mock.mock({
    'banner|2': [{
      'id|+1': 1,
      'title': '@ctitle(10)',
      'url': "@image('300x300','@color','jpg','banner')"
    }],
    'category|10': [{
      'id|+1': 1,
      'name': '@ctitle(4)',
      'icon': "@image('300x300','@color','jpg','icon')"
    }],
    'goods|10': [{
      'id|+1': 1,
      'title': '@ctitle(10)',
      'cate|1-10': 1,
      'buy_price|500-5000': 500,
      'line_price|500-5000': 500,
      'images': [
        "@image('300x300','@color','jpg','goodsimg01')",
        "@image('300x300','@color','jpg','goodsimg02')",
        "@image('300x300','@color','jpg','goodsimg03')"
      ]
    }]
  })

  return data
}

// 输出结果
// console.log(JSON.stringify(data, null, 4))
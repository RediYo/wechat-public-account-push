/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa537143c6a74f307',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd78d635f198df8e81de8ff3ebb6a9852',

  PROVINCE: "江苏",
  CITY: "南京",

  USERS: [
    {
      // 想要发送的人的名字
      name: '张子影小宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxkvI6FoyLx2wFupy3F5i1w-SuO8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FeBBGupwJWfkhFwO8Ioj4amhl21z3OmioaAdLVZslXI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '钟红建', year: '1999', date: '02-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张子影', year: '2001', date: '07-30',
        },
        {
          type: '节日', name: '恋爱日', year: '2022', date: '12-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-11' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '钟红建',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxkvI6A2wr1xiavcu5FtNC66l3nA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'FeBBGupwJWfkhFwO8Ioj4amhl21z3OmioaAdLVZslXI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '钟红建', year: '1999', date: '02-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张子影', year: '2001', date: '07-30',
        },
        {
          type: '节日', name: '恋爱日', year: '2022', date: '12-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-11' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'fk2URXBF-Qix2AOPKleyGWVtvBvSw796EQpSzRmEPKg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oxkvI6A2wr1xiavcu5FtNC66l3nA',
    }
  ],

}

module.exports = USER_CONFIG


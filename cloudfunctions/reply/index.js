// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext();
  // await cloud.openapi.customerServiceMessage.send({
  //     touser: wxContext.OPENID,
  //     msgtype: 'text',
  //     text: {
  //       content: '您好,很高兴为您服务。\n 请按住输入框，粘贴购买链接，点击发送。\n然后再点击京东链接即可！！！'
  //     }
  //   });
  if (event.Content.indexOf("u.jd") >= 0) {
    await cloud.openapi.customerServiceMessage.send({
      touser: wxContext.OPENID,
      msgtype: 'text',
      text: {
        content: "您好,很高兴为您服务！为保证最好的购物体验，本店退换货一律包邮！凡退货产生费用或有其他问题咨询，请添加客服微信：jdngzy"
      }
    });
  } else {
    await cloud.openapi.customerServiceMessage.send({
      touser: wxContext.OPENID,
      msgtype: 'text',
      text: {
        content: '您好,很高兴为您服务。\n 请按住输入框，粘贴购买链接，点击发送。\n然后再点击京东链接即可！！！'
      }
    });
  }

  return 'success';
}
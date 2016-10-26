app.controller("homeCtrl", function ($scope, $css) {
      $css.removeAll();
      $css.add('./home/css/home.css');

      // 扫一扫的方法
   $scope.sao = function () {
//    wx.config({
//       debug: false,
//       appId: '<?php echo $signPackage["appId"];?>',
//       timestamp: '<?php echo $signPackage["timestamp"];?>',
//       nonceStr: '<?php echo $signPackage["nonceStr"];?>',
//       signature: '<?php echo $signPackage["signature"];?>',
//       jsApiList: [
//         // 所有要调用的 API 都要加到这个列表中
//         'onMenuShareTimeline',
//       'onMenuShareAppMessage',
//       'onMenuShareQQ',
//       'onMenuShareWeibo',
//       'onMenuShareQZone',
//       'startRecord',
//       'stopRecord',
//       'onVoiceRecordEnd',
//       'playVoice',
//       'pauseVoice',
//       'stopVoice',
//       'onVoicePlayEnd',
//       'uploadVoice',
//       'downloadVoice',
//       'chooseImage',
//       'previewImage',
//       'uploadImage',
//       'downloadImage',
//       'translateVoice',
//       'getNetworkType',
//       'openLocation',
//       'getLocation',
//       'hideOptionMenu',
//       'showOptionMenu',
//       'hideMenuItems',
//       'showMenuItems',
//       'hideAllNonBaseMenuItem',
//       'showAllNonBaseMenuItem',
//       'closeWindow',
//       'scanQRCode',
//       'chooseWXPay',
//       'openProductSpecificView',
//       'addCard',
//       'chooseCard',
//       'openCard'
//       ]
//       });
//       wx.ready(function () {
//       // 在这里调用 API
//       $('body').on('click','#sao', function () {
//            // alert("扫一扫");
//            // console.log("1");
//               wx.scanQRCode({
//             needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
//             scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
//             success: function (res) {
//             var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
//        }
//        });
//       });
//    })
alert("扫一扫");
};

});
window.onload = function() {
   var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: 1000,
    // 如果需要分页器
    pagination: '.swiper-pagination'

  })
};

var data = [{
    publishImg: "img/publish.jpg", //发布文章人的头像
    publishName: "财经网", //发布文章的名字
    publishTime: "50分钟前", //发布文章事件
    article: "创两年半新高】2020的最后一个交易日，更多反映国际投资者预期的离岸人民币对美元汇率创下两年半新高。12月31日，离岸人民币对美元汇率接连升破6.51、6.50、6.49三个关口，最高升值至6.4895，创下2018年6月以来的新高。",
    imgList: `<img src="http://www.xiaoliu1205.com/img/1.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">`, //文章的图片
    collectNum: 0, //文章的收藏量
    forwardNum: 0, //文章的转发次数
    commentNum: 0, //文章的评论数量
    agreeNum: 0, //文章的点赞数量
    flag: false, //自己是否点赞过文章   如果为true  则 agreeNum  至少要大于1
}, {
    publishImg: "img/publish.jpg",
    publishName: "财经网",
    publishTime: "50分钟前",
    article: "创两年半新高】2020的最后一个交易日，更多反映国际投资者预期的离岸人民币对美元汇率创下两年半新高。12月31日，离岸人民币对美元汇率接连升破6.51、6.50、6.49三个关口，最高升值至6.4895，创下2018年6月以来的新高。",
    imgList: "",
    collectNum: 1,
    forwardNum: 2,
    commentNum: 3,
    agreeNum: 4,
    flag: false
}, {
    publishImg: "img/publish.jpg",
    publishName: "财经网",
    publishTime: "50分钟前",
    article: "创两年半新高】2020的最后一个交易日，更多反映国际投资者预期的离岸人民币对美元汇率创下两年半新高。12月31日，离岸人民币对美元汇率接连升破6.51、6.50、6.49三个关口，最高升值至6.4895，创下2018年6月以来的新高。",
    imgList: `<img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">`,
    collectNum: 0,
    forwardNum: 0,
    commentNum: 0,
    agreeNum: 0,
    flag: false
}, {
    publishImg: "img/publish.jpg",
    publishName: "财经网",
    publishTime: "50分钟前",
    article: "创两年半新高】2020的最后一个交易日，更多反映国际投资者预期的离岸人民币对美元汇率创下两年半新高。12月31日，离岸人民币对美元汇率接连升破6.51、6.50、6.49三个关口，最高升值至6.4895，创下2018年6月以来的新高。",
    imgList: `<img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">
            <img src="img/img.jpg" alt="">`,
    collectNum: 0,
    forwardNum: 0,
    commentNum: 0,
    agreeNum: 0,
    flag: false
}]

var comment = [{
    name: "Shayne_ryu",
    src: "https://www.baidu.com",
    img: "https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007msK2bly8ghdmxmoukxj30u00u0goh.jpg?KID=imgbed,tva&amp;Expires=1609500821&amp;ssig=IpnL1YsC6R",
    time: "2020.1.2",
    details: "你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨你是憨憨",
    level: 0
}, {
    name: "Shayne_ryu",
    src: "https://www.baidu.com",
    img: "https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007msK2bly8ghdmxmoukxj30u00u0goh.jpg?KID=imgbed,tva&amp;Expires=1609500821&amp;ssig=IpnL1YsC6R",
    time: "2020.1.2",
    details: "不乱于心，不困于情，不畏将来，不念过往2",
    level: 0
}, {
    name: "Shayne_ryu",
    src: "https://www.baidu.com",
    img: "https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007msK2bly8ghdmxmoukxj30u00u0goh.jpg?KID=imgbed,tva&amp;Expires=1609500821&amp;ssig=IpnL1YsC6R",
    time: "2020.1.2",
    details: "不乱于心，不困于情，不畏将来，不念过往3",
    level: 0
}]

var userInfo = {
    name: "Shayne_Ryu",
    img: "./img/user_header.jpg",
    personalSignature: "不乱于心，不困于情，不畏将来，不念过往"
} //用户信息


var articleList = document.querySelector("#wbzhengwen");//文章列表dom
var userName = document.querySelector(".user-name");//用户名dom
var userName2 = document.querySelector("#xingming");//用户名dom
var userHeader = document.querySelector(".user-header");//用户头像dom
var personalSignature = document.querySelector("#geqian");//用户个性签名
var isCommentclick = 0;

// userName.innerHTML = userInfo.name
userName2.innerHTML = userInfo.name
// userHeader.src = userInfo.img
personalSignature.innerHTML = userInfo.personalSignature

serialList()

function serialList() {
    var htmlStr = ""
    data.forEach(function (item, index) {
        htmlStr += `
        <li class="article-list">
                            <div class="top-wrapper">
                                <img src=${item.publishImg} alt="">
                                <div class="right-info">
                                    <h6>${item.name}</h6>
                                    <span>${item.publishTime}</span>
                                </div>
                            </div>
                            <p class="article-txt">
                            ${item.article}
                            </p>
                            <div class="img-wrapper">${item.imgList}</div>
                            <div class="operate_list">
                                <div>
                                    <img src="img/icon/collect.png" alt="">
                                    <p id=shoucang${index}>${item.collectNum || "收藏"} </p>
                                </div>
                                <div>
                                    <img src="img/icon/forward.png" alt="">
                                    <p id=zhuanfa${index}>${item.forwardNum || "转发"}</p>
                                </div>
                                <div onclick="commentAction(${index})">
                                    <img src="img/icon/comment.png" alt="">
                                    <p id=pinglun${index}>${item.commentNum || "评论"}</p>
                                </div>
                                <div onclick="agreeAction(${index})">
                                    <img src=${item.flag ? "img/icon/had_agree.png" : "img/icon/agree.png"}  alt="">
                                    <p id=zan${index}>${item.agreeNum || "赞"}</p>
                                </div> 
                            </div>
                        </li>
                        <dev id=zhengwen${index}></dev>
        `
    })
    articleList.innerHTML = htmlStr
}

//点赞
function agreeAction(index) {
    //是否点过赞
    if (data[index].flag) {
        //已点过
        data[index].agreeNum -= 1
    } else {
        data[index].agreeNum += 1
    }

    data[index].flag = !data[index].flag
    serialList()
}

//评论
function commentAction(index) {
    var xiangxipinglun = document.querySelector("#zhengwen" + index);//载入评论区
    if (isCommentclick == 1) {
        xiangxipinglun.innerHTML = ""
        isCommentclick = 0;
        return;
    }
    isCommentclick = 1;
    var commentStr = `<div class="plwaikuang">
    <div class="plshuru">
        <img class="pltouxiang"
            src="https://tvax4.sinaimg.cn/crop.0.0.1080.1080.1024/007msK2bly8ghdmxmoukxj30u00u0goh.jpg?KID=imgbed,tva&amp;Expires=1609500821&amp;ssig=IpnL1YsC6R"
            alt="Shayne_Ryu">
        <textarea
            style="border:0;margin-left: 15px;border-radius:5px;background-color:rgba(255,255,255);width: 850px;height: 40px;padding: 10px;resize: none;"
            placeholder="请输入评论"></textarea>
        <button type="button" class="plfasong button green">发送</button>
    </div>`
    comment.forEach(function (item, index) {
        commentStr += `
        <ol id="pinglun" >
             <li class="plshuru" style="display: flex;flex-direction:row;margin-top: 10px;">
                    <img class="pltouxiang"
                         src=${item.img}
                        alt="touxiang">
                <dev style="display: flex;flex-direction:column;margin-left: 15px;">
                     <dev style="display: flex;flex-direction:row;flex-wrap: wrap;">
                        <a href=${item.src} style="color: #eb7350;text-decoration:none">${item.name}</a><p>：</p>
                         <p style="color:rgb(70,70,70);font-size: 14px;margin-top:2px" >${item.details}</p>
                 </dev>
                 <p style="color:rgb(156,156,156);font-size: 10px;" >${item.time}</p>
                  </dev>
                  
             </li>
        </ol>
        <dev overflow:hidden style="color:rgba(156,156,156,0.2);opacity：0.1; width:80%">——————————————————————————————————————————————————————————</dev>
        `
    })
    xiangxipinglun.innerHTML = commentStr
}
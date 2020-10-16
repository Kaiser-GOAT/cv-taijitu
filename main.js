let html = document.querySelector("#html");
let string = `
/*你好
*我是
*新人
*这次我要做
*一个自我介绍
*我叫凯森
*我是个菜鸟
*我要开始展示了
*现在我要画一个方框
*/ 
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
    
}
/* 接下来我要演示一下我前端技术
 * 我要开始做一个八卦图了，注意看哦！
 * 我先来画一个圆  
   */
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 接下来要开始做阴阳
*/
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 接下来开始让阴阳扭动起来
*/
#div1::before{
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    top:0px;
    background: #fff;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%)
}
#div1::after{
    width:100px;
    height:100px;
    border-radius:50%;
    left:50%;
    bottom:0px;
    background:#000;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}    
}
  `;
console.log(1);
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    if (n < string.length - 1) {
      n += 1;
      window.scrollTo(0, 9999);
      html.scrollTo(0, 9999);
      step();
    }
  }, 50);
};
step();
console.log(string.length);

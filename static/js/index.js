document.addEventListener('DOMContentLoaded', async function () {
    // 默认信息
    let domainInfo = {
        // 域名
        "domain": "software.csqixiang.cn",
        // 软件图标地址
        "logoAddress": "static/image/logo.webp",
        // 软件站地址
        "webSiteLink": "http://software.csqixiang.cn",
        // 备案号
         "beianNumber": "",
        // 联系方式
        "phone": "125615301",
        // 公司信息
        "company": "贵州锦溪网络科技有限公司 
    };

    let domainConfig = await loadJsonData();

    // 获取来源地址
    let referrer = document.referrer;
    // 获取host
    const current = window.location.hostname;
    if (!current.includes("csqixiang.cn")) {
        referrer = current;
    }
    if (domainConfig) {
        for (let domain in domainConfig) {
            if (referrer.includes(domain)) {
                domainInfo = domainConfig[domain];
                break;
            }
        }
    }


    // 获取当前js适用类别
    let type = config.type;
    // 微信模板使用
    switch (type) {
        case "template1":
            applyDomainConfig(domainInfo)
            break;
        case "softwareSite":
            softwareSiteConfig(domainInfo);
            break;
		case "uhz":
            uhzSiteConfig(domainInfo);
            break;
        case "jy" :
            jy1Config(domainInfo);
            break;
        case "quark":
            quarkConfig(domainInfo);
            break;
    }

});

// ---- quark 信息开始
function quarkConfig(domainInfo){
    const elementById = document.getElementById("footer");
    elementById.innerHTML = `本网站的图文和软件来自于网络，如有内容侵犯您的合法权益，请及时与我们联系，我们将第一时间安排删除。<br>`+ domainInfo.company +`<img src="static/image/ga.webp"
				alt="公安网监备案" style="vertical-align: middle;margin-left: 3px;width: 16px" /> <a href=""
				target="_blank">`+ domainInfo.beianNumber +`</a><br>
			<p>Copyright 2025 All Rights Reserved.
				<a href="./yszc.html" target="_blank">隐私政策</a>
				<a href="./yhqx.html" target="_blank">用户权限</a>
			</p>`;
}

// --- quark 信息结束

// ----  jy1信息开始 ----
function jy1Config(domainInfo){
    const elementById = document.getElementById("ft");
    elementById.innerHTML = `Copyright © 2025版权所有 联系方式: `+ domainInfo.phone + "&nbsp;&nbsp;&nbsp;&nbsp;" + domainInfo.company  + "&nbsp;&nbsp;&nbsp;&nbsp;" + domainInfo.beianNumber  + `.All Rights Reserved  <a target="_blank" href="./yszc.html">隐私政策</a>|<a target="_blank" href="./yhqx.html">用户权限</a>`;
}

// ---- jy1信息结束  ----

// --- uhz信息开始 --
function uhzSiteConfig(domainInfo){
    const elementById = document.getElementById("footer");
    elementById.innerHTML = `Copyright © 2025版权所有 联系方式: `+ domainInfo.phone + "&nbsp;&nbsp;&nbsp;&nbsp;" + domainInfo.company  + "&nbsp;&nbsp;&nbsp;&nbsp;" + domainInfo.beianNumber  + `.All Rights Reserved  <a target="_blank" href="./yszc.html">隐私政策</a>|<a target="_blank" href="./yhqx.html">用户权限</a>`;
}

// --- uhz信息结束 --

// --  软件站信息开始  --
function softwareSiteConfig(domainInfo) {
    // 获取来源地址
    let referrer = document.referrer;
    const lcrj = document.getElementById("lcrj");
    const copyright = document.getElementById("copyright");
    const beian = document.getElementById("beian");
    lcrj.textContent = "奇想软件园(" + domainInfo.domain + ") ：打造绿色软件,免费软件下载基地！";
    beian.textContent = domainInfo.beianNumber;
    copyright.textContent = "Copyright  2004-2017 奇想软件园(" + domainInfo.domain + ")    " + domainInfo.company + ".All Rights Reserved";
}

// --  软件站信息结束  --

// -- 模板1开始 --
function applyDomainConfig(domainInfo) {
    // 更新logo图片
    const logoImg = document.getElementById("dynamic-logo");
    if (logoImg) {
        logoImg.src = domainInfo.logoAddress;
    }

    const websiteLink = document.getElementById("website_link");
    if (websiteLink) {
        websiteLink.href = domainInfo.webSiteLink;
        websiteLink.target = "_black";
    }

    // 更新footer内容
    const footerElement = document.getElementById("dynamic-footer");
    if (footerElement) {
        footerElement.innerHTML = domainInfo.company+"            " + domainInfo.beianNumber + "   联系电话：" + domainInfo.phone;
    }
}

// -- 模板1结束 --

async function loadJsonData() {
    try {
        const response = await fetch("./static/json/domainConfig.json");
        if (response.ok) {
            domainConfig = await response.json();
            return domainConfig;
        }
    } catch (error) {
        console.error(error);
    }
}


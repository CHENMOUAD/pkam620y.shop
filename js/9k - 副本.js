const pageContent = {
    profileImage: {
        src: "img/1.jpg",
        alt: "三橋貴明"
    },
    mainTitle: {
        nameHighlight: "三橋貴明",
        lineHighlight: "LINE",
        suffix: "市場分析情報"
    },
    mainDescription: {
        primary: "無料で市場情報を取得し、明日上昇する可能性のある銘柄についてお知らせします。",
        secondary: "「7」を送信するだけで、最新の株式分析をお受け取りいただけます。"
    },
    features: [
        "毎週、有望株の情報を共有し、賢明な投資判断をサポート",
        "市場動向の専門的な分析と洞察を提供",
        "質の高い投資アドバイスを無料で配信"
    ],
    callToAction: {
        description: "今すぐ参加して、より多くの優良投資情報を手に入れましょう。",
        buttonText: "今すぐ参加"
    },
    legalLinks: {
        privacy: {
            text: "プライバシーポリシー",
            url: "/privacy.html"
        },
        terms: {
            text: "利用規約",
            url: "/terms.html"
        },
        separator: "｜"
    },
    disclaimer: "※投資に関する情報提供を目的としており、投資勧誘を意図したものではありません。投資判断は自己責任で行ってください。株式投資にはリスクが伴い、元本割れの可能性があります。過去の運用実績は将来の運用成果を保証するものではありません。金融商品取引法に基づく表示：当サービスは情報提供のみを目的としており、特定の銘柄の売買を推奨するものではありません。"
};

function renderPageContent() {
    // 渲染主要内容
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="profile-image-container-circular">
            <img src="img/1.jpg" alt="${pageContent.profileImage.alt}" class="profile-image-element">
        </div>
        
        <h1 class="main-heading-title">
            <span class="accent-text-highlight">${pageContent.mainTitle.nameHighlight}</span>の<br>
            <span class="line-brand-highlight">${pageContent.mainTitle.lineHighlight}</span>${pageContent.mainTitle.suffix}
        </h1>
        
        <div class="highlight-box-emphasis">
            <p class="instruction-text-emphasis">
                ${pageContent.mainDescription.primary}
            </p>
            <p class="description-text-block">
                ${pageContent.mainDescription.secondary}
            </p>
        </div>
        
        <div class="features-list-container">
            ${pageContent.features.map(feature => `
                <div class="feature-item-entry">
                    <span class="feature-icon-marker"></span>
                    ${feature}
                </div>
            `).join('')}
        </div>
        
        <p class="description-text-block">
            ${pageContent.callToAction.description}
        </p>
    `;

    // 渲染按钮文字
    const joinButton = document.getElementById('join-button');
    joinButton.textContent = pageContent.callToAction.buttonText;

    // 渲染法律链接
    const legalLinks = document.getElementById('legal-links');
    legalLinks.innerHTML = `
        <div class="legal-links-container">
            <a href="privacy.html" target="_blank" class="legal-link-item">${pageContent.legalLinks.privacy.text}</a>
            <span class="legal-link-separator">${pageContent.legalLinks.separator}</span>
            <a href="terms.html" target="_blank" class="legal-link-item">${pageContent.legalLinks.terms.text}</a>
        </div>
    `;

    // 渲染免责声明
    const disclaimer = document.getElementById('disclaimer');
    disclaimer.innerHTML = `
        <div class="disclaimer-text-content">
            ${pageContent.disclaimer}
        </div>
    `;
}

function initializePage() {
    // 渲染页面内容
    renderPageContent();

    // 页面加载动画
    const mainContentElement = document.querySelector('.content-section-primary');
    mainContentElement.style.opacity = '0';
    mainContentElement.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        mainContentElement.style.transition = 'all 0.8s ease';
        mainContentElement.style.opacity = '1';
        mainContentElement.style.transform = 'translateY(0)';
    }, 100);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializePage);

// 触摸设备兼容性
document.addEventListener('touchstart', function() {}, true);
// トップに戻るボタン
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// スムーズスクロール（ハッシュリンクだけ処理）
document.querySelectorAll(".navbar a").forEach(anchor => {
  anchor.addEventListener("click", e => {
    const href = anchor.getAttribute("href");
    if (href === "index.html") {
      // index.htmlへのリンクは通常のページ遷移なので何もしない（preventDefaultしない）
      return;
    } else if (href.startsWith("#")) {
      e.preventDefault(); // ページ内リンクのみ preventDefault
      const targetId = href.slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      navbar.classList.remove("open");
    }
  });
});

// ハンバーガーメニューのトグル
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});

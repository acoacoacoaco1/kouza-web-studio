const contactEmail = "hello@example.com";
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const topic = data.get("topic")?.toString().trim();
  const message = data.get("message")?.toString().trim();

  const subject = encodeURIComponent(`HP制作の相談: ${topic}`);
  const body = encodeURIComponent(
    [
      "Kouza Web Studio への相談",
      "",
      `お名前: ${name}`,
      `メール: ${email}`,
      `相談内容: ${topic}`,
      "",
      "メッセージ:",
      message,
    ].join("\n"),
  );

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  formNote.textContent = "メール作成画面を開きました。送信前に宛先メールアドレスを実際のものへ変更してください。";
});

const div = document.querySelector(".answer");

const input = prompt("");
if (!input) return;

const oneLine = input.replace(/\r/g, "").replace(/\n/g, " ");

// Protect common abbreviations so their periods don't trigger splits
const abbrevs = /\b(Mr|Mrs|Ms|Dr|Prof|Sr|Jr|vs|etc|e\.g|i\.e|Fig|No|Vol|pp|St)\./g;
const protected = oneLine.replace(abbrevs, (m) => m.replace(".", "\x00"));

const sentences = protected
  .split(/(?<=[.?!])\s+/)
  .map((s) => s.replace(/\x00/g, ".").trim())
  .filter(Boolean);

div.innerHTML = sentences.join("<br><br>");

// Auto-copy plain text to clipboard
const plain = sentences.join("\n\n");
navigator.clipboard.writeText(plain).catch(() => {
  const ta = document.createElement("textarea");
  ta.value = plain;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
});

// Copy button
const btn = document.createElement("button");
btn.className = "copy-btn";
btn.textContent = "Copied!";
setTimeout(() => (btn.textContent = "Copy"), 2000);
btn.onclick = () => {
  navigator.clipboard.writeText(plain);
  btn.textContent = "Copied!";
  setTimeout(() => (btn.textContent = "Copy"), 2000);
};
document.body.appendChild(btn);

const TYPES = {
  guess: {
    title: "关系猜测型",
    subtitle: "你最容易被不确定感消耗",
    symbol: "◌",
    summary: "当关系里出现空白，例如回复变慢、语气变化或态度不明时，你的大脑会迅速补全答案。反复分析能短暂带来控制感，却也容易把猜测当成事实。",
    advice: [
      "做一次“事实／猜测”分栏：只写能被观察到的事实，再单独写你的解释。",
      "给不确定感设置等待窗口，例如 3 小时内不补发解释性消息，也不反复检查聊天记录。",
      "需要确认时直接询问具体信息，用“我想确认一下……”替代试探和脑补。"
    ],
    boundary: "没有得到回复，只能说明此刻没有回复，不能自动证明我做错了什么。"
  },
  blame: {
    title: "自动自责型",
    subtitle: "你习惯把关系问题先归到自己身上",
    symbol: "♡",
    summary: "一旦出现冲突或冷淡，你会先检查自己，甚至替双方承担责任。自省本来有价值，但如果结论总是“都是我不好”，它就会变成持续的自我审判。",
    advice: [
      "把一次冲突的责任分成三部分：我的选择、对方的选择、客观情境，避免把比例全部写给自己。",
      "把“是不是我太差”改成一个可验证的问题，例如“我具体哪句话需要澄清？”",
      "像安慰朋友一样复述这件事，保留责任，也保留对自己的基本善意。"
    ],
    boundary: "我可以为自己的部分负责，但不需要替整段关系独自负责。"
  },
  please: {
    title: "习惯讨好型",
    subtitle: "你常用压住自己来维持关系",
    symbol: "✿",
    summary: "你很会察觉别人的需要，却容易跳过自己的感受。快速答应能暂时避免冲突，但事后的委屈、后悔和生气，也在提醒你：真实意愿长期没有被放进关系里。",
    advice: [
      "遇到请求先延迟回答：“我看一下安排，晚点回复你。”为真实意愿留出空间。",
      "从低风险场景练习一次温和拒绝：“这次我可能帮不了，但谢谢你先来问我。”",
      "每天记录一件“我其实想／不想”的小事，重新练习辨认自己的需要。"
    ],
    boundary: "拒绝一件事，不等于拒绝一个人；照顾自己，也属于关系的一部分。"
  },
  boundary: {
    title: "边界模糊型",
    subtitle: "你容易把别人的情绪当成自己的责任",
    symbol: "◐",
    summary: "别人不高兴时，你会立刻紧张、解释或补救，仿佛必须让所有人恢复舒服。关心他人并没有错，但对方的情绪、决定和后果，并不都由你管理。",
    advice: [
      "画两个责任圈：圈内写我能决定的事，圈外写对方的情绪、评价和选择。",
      "先共情，再保留边界：“我知道你现在不舒服，但这件事我需要按自己的安排来。”",
      "当你想立刻补救时，先停十分钟，问自己：对方真的提出需要，还是我在自动接管？"
    ],
    boundary: "我可以关心别人的感受，但不需要负责让每个人都满意。"
  }
};

const QUESTIONS = [
  { text: "对方迟迟没有回复消息时，我会：", options: [
    ["先做自己的事，等有空再看", "boundary"], ["反复检查刚才说了什么", "guess"], ["主动补发消息缓和气氛", "please"], ["默认是自己哪里做错了", "blame"]
  ]},
  { text: "朋友临时请我帮一个不太方便的忙，我更可能：", options: [
    ["先答应，之后再自己想办法", "please"], ["询问时间和范围后再决定", "boundary"], ["担心拒绝以后关系会变差", "guess"], ["觉得不帮就是自己不够好", "blame"]
  ]},
  { text: "发生争吵后，我最常做的是：", options: [
    ["不断回放细节，寻找对方态度变化", "guess"], ["马上道歉，先让冲突停下来", "please"], ["认定问题主要出在自己", "blame"], ["等情绪稳定后再谈各自的责任", "boundary"]
  ]},
  { text: "当伴侣或朋友情绪不好时，我会：", options: [
    ["觉得必须马上让对方开心起来", "boundary"], ["猜测对方是不是对我不满", "guess"], ["先放下自己的安排去照顾对方", "please"], ["反省是不是我造成了这一切", "blame"]
  ]},
  { text: "在群聊里发言后一直没人回应，我会：", options: [
    ["删除消息或再发一句补救", "please"], ["认为大家可能只是没空回复", "boundary"], ["反复分析是不是说得不合适", "guess"], ["责怪自己不该多嘴", "blame"]
  ]},
  { text: "当我其实不想参加一次聚会时，我通常：", options: [
    ["直接但礼貌地说明这次不参加", "boundary"], ["担心缺席后大家会疏远我", "guess"], ["还是参加，避免别人失望", "please"], ["觉得不合群是自己的问题", "blame"]
  ]},
  { text: "对方的语气突然变冷，我的第一反应是：", options: [
    ["回忆每句话，寻找隐藏含义", "guess"], ["用更热情的方式把气氛救回来", "please"], ["认定是自己让对方失望了", "blame"], ["先观察，再找合适时机直接确认", "boundary"]
  ]},
  { text: "我表达不同意见时，最难受的是：", options: [
    ["怕对方不高兴，需要我负责", "boundary"], ["怕对方因此重新评价我", "guess"], ["怕自己显得不够体贴", "please"], ["觉得有分歧说明自己做错了", "blame"]
  ]},
  { text: "一段关系变得不明确时，我更容易：", options: [
    ["先满足对方，希望换来确定感", "please"], ["提出自己的需要和可接受范围", "boundary"], ["分析每个信号，试图提前得出结论", "guess"], ["怀疑是自己不值得被认真对待", "blame"]
  ]},
  { text: "别人对我提出批评时，我通常会：", options: [
    ["先问清具体事实和期待", "boundary"], ["猜测对方是不是早就不喜欢我", "guess"], ["快速承诺全部按对方说的改", "please"], ["把一次问题扩大成“我就是不好”", "blame"]
  ]},
  { text: "连续照顾别人很久后，我发现自己很累，会：", options: [
    ["继续撑着，怕停下来让人失望", "please"], ["调整投入，并说明自己的状态", "boundary"], ["怀疑别人是否真的在乎我", "guess"], ["怪自己为什么这么计较", "blame"]
  ]},
  { text: "如果一段关系让我反复消耗，我更需要练习：", options: [
    ["少用线索猜结论，多直接确认", "guess"], ["在答应别人以前先确认自己的意愿", "please"], ["区分我的责任和对方的责任", "boundary"], ["停止把一次问题等同于个人价值", "blame"]
  ]}
];

const els = {
  start: document.querySelector("#start-screen"), quiz: document.querySelector("#quiz-screen"), result: document.querySelector("#result-screen"),
  startBtn: document.querySelector("#start-btn"), backBtn: document.querySelector("#back-btn"), nextBtn: document.querySelector("#next-btn"),
  number: document.querySelector("#question-number"), percent: document.querySelector("#progress-percent"), bar: document.querySelector("#progress-bar"),
  question: document.querySelector("#question-text"), options: document.querySelector("#options"),
  resultTitle: document.querySelector("#result-title"), resultSubtitle: document.querySelector("#result-subtitle"), resultSummary: document.querySelector("#result-summary"), resultSymbol: document.querySelector("#result-symbol"),
  secondaryTitle: document.querySelector("#secondary-title"), adviceBtn: document.querySelector("#advice-btn"), advicePanel: document.querySelector("#advice-panel"), adviceList: document.querySelector("#advice-list"), boundary: document.querySelector("#boundary-copy"),
  copyBtn: document.querySelector("#copy-btn"), restartBtn: document.querySelector("#restart-btn"), toast: document.querySelector("#toast")
};

let current = 0;
let answers = Array(QUESTIONS.length).fill(null);
let lastResult = null;

function showScreen(screen) {
  [els.start, els.quiz, els.result].forEach(el => el.classList.toggle("active", el === screen));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const q = QUESTIONS[current];
  const pct = Math.round(((current + 1) / QUESTIONS.length) * 100);
  els.number.textContent = current + 1;
  els.percent.textContent = `${pct}%`;
  els.bar.style.width = `${pct}%`;
  els.question.textContent = q.text;
  els.options.innerHTML = "";

  q.options.forEach(([label, type], index) => {
    const button = document.createElement("button");
    const selected = answers[current] === type;
    button.type = "button";
    button.className = `option${selected ? " selected" : ""}`;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(selected));
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${label}</span><span class="option-check" aria-hidden="true"></span>`;
    button.addEventListener("click", () => {
      answers[current] = type;
      renderQuestion();
      els.nextBtn.focus();
    });
    els.options.appendChild(button);
  });

  els.backBtn.style.visibility = current === 0 ? "hidden" : "visible";
  els.nextBtn.disabled = answers[current] === null;
  els.nextBtn.textContent = current === QUESTIONS.length - 1 ? "查看结果" : "下一题";
}

function calculateResult() {
  const scores = Object.keys(TYPES).reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
  answers.forEach(type => { scores[type] += 1; });
  return Object.entries(scores).sort((a, b) => b[1] - a[1]);
}

function renderResult() {
  const ranking = calculateResult();
  const [primaryKey] = ranking[0];
  const [secondaryKey] = ranking[1];
  const primary = TYPES[primaryKey];
  lastResult = primary;
  els.resultTitle.textContent = primary.title;
  els.resultSubtitle.textContent = primary.subtitle;
  els.resultSummary.textContent = primary.summary;
  els.resultSymbol.textContent = primary.symbol;
  els.secondaryTitle.textContent = TYPES[secondaryKey].title;
  els.adviceList.innerHTML = primary.advice.map(item => `<li>${item}</li>`).join("");
  els.boundary.textContent = primary.boundary;
  els.advicePanel.classList.remove("open");
  els.adviceBtn.textContent = "看看我的行动建议";
  showScreen(els.result);
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  setTimeout(() => els.toast.classList.remove("show"), 1800);
}

els.startBtn.addEventListener("click", () => { showScreen(els.quiz); renderQuestion(); });
els.backBtn.addEventListener("click", () => { if (current > 0) { current -= 1; renderQuestion(); } });
els.nextBtn.addEventListener("click", () => {
  if (answers[current] === null) return;
  if (current < QUESTIONS.length - 1) { current += 1; renderQuestion(); }
  else renderResult();
});
els.adviceBtn.addEventListener("click", () => {
  els.advicePanel.classList.add("open");
  els.adviceBtn.textContent = "行动建议已展开";
  els.advicePanel.focus({ preventScroll: true });
  els.advicePanel.scrollIntoView({ behavior: "smooth", block: "start" });
});
els.restartBtn.addEventListener("click", () => {
  current = 0; answers = Array(QUESTIONS.length).fill(null); lastResult = null; showScreen(els.start);
});
els.copyBtn.addEventListener("click", async () => {
  if (!lastResult) return;
  const text = `我的关系内耗小测试结果：${lastResult.title}\n${lastResult.subtitle}\n边界提醒：${lastResult.boundary}\n（结果仅用于自我探索，不是心理诊断）`;
  try { await navigator.clipboard.writeText(text); toast("结果已复制"); }
  catch { toast("浏览器未允许复制，请手动截图保存"); }
});


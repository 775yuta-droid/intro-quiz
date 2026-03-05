// ============================================================
//  SONG CLASS
// ============================================================
/**
 * イントロクイズの1問分データを表すクラス
 *
 * @property {string} title          - 曲名
 * @property {string} artist         - アーティスト名
 * @property {string} questionAudio  - 問題用音源（musicdata/ 以下の相対パス or URL）
 * @property {string} answerYtId     - 正解用 YouTube 動画ID
 * @property {string} answerVideo    - 正解用 ローカル動画または直接URL（answerYtIdがない場合に使用）
 * @property {number} answerStartSec - YouTube 再生開始秒数（サビの頭など）
 * @property {number} answerVolume   - 正解用 ローカル動画の音量（0.0 ~ 1.0。デフォルトは 1.0）
 */
class Song {
  constructor({
    title,
    artist,
    questionAudio = "",
    answerYtId = "",
    answerVideo = "",
    answerStartSec = 0,
    answerVolume = 1.0,
  }) {
    this.title = title;
    this.artist = artist;
    this.questionAudio = questionAudio;
    this.answerYtId = answerYtId;
    this.answerVideo = answerVideo;
    this.answerStartSec = answerStartSec;
    this.answerVolume = answerVolume;
  }
}

// ============================================================
//  曲リスト（ここを編集して問題を追加・変更する）
//
//  questionAudio : 例) "musicdata/lemon.mp3"
//                  （musicdata フォルダに音源ファイルを置いてください）
//  answerYtId    : YouTube の動画ID（URLの v= 以降）
//  answerStartSec: YouTube の再生開始秒数（サビが始まる秒など）
// ============================================================
const DEFAULT_SONGS = [
  new Song({
    title: "アゲハ蝶",
    artist: "ポルノグラフィティ",
    questionAudio: "music_data/01_アゲハ蝶.mp3",
    answerYtId: "swxob0SJyHg",
    answerStartSec: 8,
  }),
  new Song({
    title: "どんなときも",
    artist: "槇原敬之",
    questionAudio: "music_data/02_どんなときも.mp3",
    answerVideo: "correct-music/ans-どんなときも.mp4",
    answerStartSec: 16,
  }),
  new Song({
    title: "ロマンスの神様",
    artist: "広瀬香美",
    questionAudio: "music_data/03_ロマンスの神様.mp3",
    answerYtId: "T8yZWCg85Cs",
    answerStartSec: 74,
  }),
  new Song({
    title: "だんご三兄弟",
    artist: "速水けんたろう、茂森あゆみ、ひまわりキッズ、だんご合唱団",
    questionAudio: "music_data/04_だんご3兄弟.mp3",
    answerYtId: "TifE3hqyBfA",
    answerStartSec: 107,
  }),
  new Song({
    title: "チャンカパーナ",
    artist: "NEWS",
    questionAudio: "music_data/05チャンカパーナ.mp3",
    answerYtId: "Ou1UG_PC43Q",
    answerStartSec: 76,
  }),
  new Song({
    title: "マツケンサンバ",
    artist: "松平健",
    questionAudio: "music_data/06_マツケンサンバ.mp3",
    answerYtId: "XazyhnymUQo",
    answerStartSec: 101,
  }),
  new Song({
    title: "おジャ魔女カーニバル",
    artist: "堀江美都子",
    questionAudio: "music_data/07_ojamajo_carnical.mp3",
    answerYtId: "_mN4xKRRUkg",
    answerStartSec: 60,
  }),
  new Song({
    title: "キセキ",
    artist: "GReeeeN",
    questionAudio: "music_data/08_キセキ(Green).mp3",
    answerVideo: "correct-music/ans-キセキ.mp4",
    answerStartSec: 4,
  }),
  new Song({
    title: "らしさ",
    artist: "Official髭男dism",
    questionAudio: "music_data/09_らしさ(ひげだん).mp3",
    answerVideo: "correct-music/ans-らしさ.mp4",
    answerStartSec: 5,
  }),
  new Song({
    title: "WXY",
    artist: "Tani Yuuki",
    questionAudio: "music_data/10_WXY(たにゆうき).mp3",
    answerYtId: "mp2-w15SXms",
    answerStartSec: 56,
  }),
  new Song({
    title: "ヘビーローテーション",
    artist: "AKB48",
    questionAudio: "music_data/11_ヘビーローテーション.mp3",
    answerYtId: "lkHlnWFnA0c",
    answerStartSec: 19,
  }),
  new Song({
    title: "インフルエンサー",
    artist: "乃木坂46",
    questionAudio: "music_data/12_インフルエンサー.mp3",
    answerVideo: "correct-music/ans-インフルエンサー.mp4",
    answerStartSec: 1,
  }),
  new Song({
    title: "Love2000",
    artist: "hitomi",
    questionAudio: "music_data/13_Love2000.mp3",
    answerVideo: "correct-music/ans-Love2000.mp4",
    answerStartSec: 7,
  }),
  new Song({
    title: "2億4千万の瞳",
    artist: "郷ひろみ",
    questionAudio: "music_data/14_2億4000万の瞳 .mp3",
    answerYtId: "JqRPs9hBap8",
    answerStartSec: 192,
  }),
  new Song({
    title: "浪漫飛行",
    artist: "米米CLUB",
    questionAudio: "music_data/15_浪漫飛行 .mp3",
    answerYtId: "8AA-QRI3u-4",
    answerStartSec: 104,
  }),
  new Song({
    title: "明治安田生命",
    artist: "",
    questionAudio: "music_data/16_明治安田生命.mp3",
    answerYtId: "SMQvZiB9QRU",
    answerStartSec: 26,
  }),
  new Song({
    title: "永谷園",
    artist: "",
    questionAudio: "music_data/17_永谷園.mp3",
    answerYtId: "XPTw4GCkcKU",
    answerStartSec: 0,
  }),
  new Song({
    title: "清水建設",
    artist: "",
    questionAudio: "music_data/18_清水建設.mp3",
    answerYtId: "G8CpD4E2des",
    answerStartSec: 14,
  }),
  new Song({
    title: "チキンラーメン",
    artist: "",
    questionAudio: "music_data/19_チキンラーメン.mp3",
    answerYtId: "ZkzFnC_3ZDQ",
    answerStartSec: 0,
  }),
  new Song({
    title: "レイク",
    artist: "",
    questionAudio: "music_data/20_レイク.mp3",
    answerYtId: "VsbK71PO4cE",
    answerStartSec: 0,
  }),
  new Song({
    title: "スジャータ",
    artist: "",
    questionAudio: "music_data/21_スジャータめいらくグループ.mp3",
    answerYtId: "zg8QS3czN-U",
    answerStartSec: 0,
  }),
];

// ============================================================
//  STATE
// ============================================================
const songs = [...DEFAULT_SONGS];
let currentQ = 0;
let countdownTimer = null;
let isPlaying = false;
const TOTAL = songs.length;

// ============================================================
//  CANVAS BACKGROUND VISUALIZER
// ============================================================
(function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let W,
    H,
    particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Create particles
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * 2000,
      y: Math.random() * 1200,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      hue: Math.random() * 60 + 180, // cyan to blue range
      life: Math.random(),
    });
  }

  // Waveform lines
  let waveOffset = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Gradient background
    const grad = ctx.createRadialGradient(
      W / 2,
      H / 2,
      0,
      W / 2,
      H / 2,
      W * 0.8,
    );
    grad.addColorStop(0, "#0d0d20");
    grad.addColorStop(1, "#080810");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Waveform lines
    waveOffset += 0.02;
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      ctx.strokeStyle =
        j === 0
          ? "rgba(255,60,110,0.15)"
          : j === 1
            ? "rgba(0,229,255,0.1)"
            : "rgba(255,230,0,0.08)";
      ctx.lineWidth = 1.5;
      for (let x = 0; x <= W; x += 4) {
        const amp = 30 + j * 15;
        const freq = 0.005 + j * 0.003;
        const y =
          H / 2 +
          Math.sin(x * freq + waveOffset * (j + 1) * 0.7) * amp +
          Math.sin(x * 0.002 + waveOffset * 0.3) * 20;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Particles
    particles.forEach((p) => {
      p.x = (p.x + p.vx + W) % W;
      p.y = (p.y + p.vy + H) % H;
      ctx.beginPath();
      ctx.arc((p.x * W) / 2000, (p.y * H) / 1200, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, 0.5)`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

// ============================================================
//  WAVE BARS HELPER
// ============================================================
function createWaveBars(containerId, count = 20) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const b = document.createElement("div");
    b.className = "wave-bar";
    const maxH = (20 + Math.random() * 50).toFixed(0);
    const dur = (0.4 + Math.random() * 0.6).toFixed(2);
    const delay = (Math.random() * 0.5).toFixed(2);
    b.style.cssText = `--max-h:${maxH}px; --dur:${dur}s; --delay:${delay}s`;
    c.appendChild(b);
  }
}

createWaveBars("title-wave", 28);
createWaveBars("play-wave", 20);
createWaveBars("countdown-wave", 24);
createWaveBars("result-wave", 28);

// Update title screen question count
document.getElementById("title-total").textContent = TOTAL;

// ============================================================
//  SCREEN TRANSITIONS
// ============================================================
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    target.style.animation = "none";
    target.offsetHeight;
    target.style.animation = "";
  }
}

function flashEffect() {
  const f = document.getElementById("flash");
  f.style.animation = "none";
  f.offsetHeight;
  f.style.animation = "flash 0.3s ease";
}

// ============================================================
//  AUDIO
// ============================================================
let audioCtx = null;

function playBeep(freq = 880, type = "sine", duration = 0.15, vol = 0.8) {
  try {
    if (!audioCtx)
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(vol, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioCtx.currentTime + duration,
    );
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.error("Audio beep failed", e);
  }
}

function playWhistle(duration = 0.8) {
  try {
    if (!audioCtx)
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();

    // ホイッスルに近い音を作るために、2つの高い周波数を同時に鳴らしてうねり（ビブラート）を出す
    const createTone = (freq) => {
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      osc.type = "sine";

      // 出だしで少し周波数が上がる（ピロッという吹き始めの感じ）
      osc.frequency.setValueAtTime(freq - 150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(
        freq,
        audioCtx.currentTime + 0.05,
      );

      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      // 音量を少し大きくする(0.9)
      gainNode.gain.linearRampToValueAtTime(0.9, audioCtx.currentTime + 0.05);
      gainNode.gain.setValueAtTime(0.9, audioCtx.currentTime + duration - 0.2);
      gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + duration);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    };

    createTone(2600);
    createTone(2650); // 50Hzずらすことで「ピーー」という笛特有のうねりを作る
  } catch (e) {
    console.error("Audio whistle failed", e);
  }
}

const audioPlayer = document.getElementById("audio-player");

function togglePlay() {
  const song = songs[currentQ];
  const btn = document.getElementById("play-btn");
  const hint = document.getElementById("audio-hint");
  const bars = document.querySelectorAll("#play-wave .wave-bar");

  if (!song.questionAudio) {
    hint.textContent = "⚠ 音源ファイルが設定されていません";
    return;
  }

  if (!isPlaying) {
    audioPlayer.src = song.questionAudio;
    audioPlayer.play().catch(() => {
      hint.textContent = "再生できませんでした";
    });
    btn.textContent = "⏸";
    hint.textContent = "再生中...";
    bars.forEach((b) => b.classList.remove("paused"));
    isPlaying = true;
    // Auto start countdown after 5s
    setTimeout(() => {
      if (isPlaying) startCountdown();
    }, 5000);
  } else {
    audioPlayer.pause();
    btn.textContent = "▶";
    hint.textContent = "クリックして再生";
    bars.forEach((b) => b.classList.add("paused"));
    isPlaying = false;
  }
}

audioPlayer.addEventListener("ended", () => {
  isPlaying = false;
  document.getElementById("play-btn").textContent = "▶";
  document.getElementById("audio-hint").textContent = "再生終了";
  startCountdown();
});

// ============================================================
//  QUIZ FLOW
// ============================================================
function startQuiz() {
  flashEffect();
  currentQ = 0;
  document.getElementById("header-bar").style.display = "flex";
  document.getElementById("progress-bar-wrap").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  if (currentQ >= Math.min(songs.length, TOTAL)) {
    showResultScreen();
    return;
  }

  // Update header
  document.getElementById("header-progress").textContent =
    `${currentQ + 1} / ${Math.min(songs.length, TOTAL)}`;
  document.getElementById("progress-bar-fill").style.width =
    `${(currentQ / Math.min(songs.length, TOTAL)) * 100}%`;

  // Reset audio
  audioPlayer.pause();
  audioPlayer.src = "";
  isPlaying = false;
  document.getElementById("play-btn").textContent = "▶";

  const hasAudio = !!songs[currentQ].questionAudio;
  document.getElementById("audio-hint").textContent = hasAudio
    ? "クリックして再生"
    : "⚠ 音源なし";

  // Question display
  document.getElementById("q-counter").textContent = currentQ + 1;
  document.getElementById("q-label-num").textContent = currentQ + 1;

  // Wave bars animate
  document
    .querySelectorAll("#play-wave .wave-bar")
    .forEach((b) => b.classList.remove("paused"));

  flashEffect();
  showScreen("screen-question");

  // If no audio, show skip button instead
  if (!hasAudio) {
    document.getElementById("audio-hint").innerHTML =
      '<button onclick="startCountdown()" style="background:transparent;border:1px solid var(--accent2);border-radius:4px;color:var(--accent2);padding:clamp(8px, 2vw, 16px) clamp(20px, 4vw, 40px);cursor:pointer;font-size:clamp(14px, 3vw, 24px);letter-spacing:0.1em;font-family:\'Noto Sans JP\';">⏭ カウントダウンへ進む</button>';
  }
}

function startCountdown() {
  audioPlayer.pause();
  isPlaying = false;
  clearInterval(countdownTimer);

  let remaining = 30;
  const numEl = document.getElementById("countdown-num");
  const arc = document.getElementById("countdown-arc");
  const circumference = 439.6;

  numEl.textContent = remaining;
  arc.style.stroke = "var(--accent2)";
  arc.style.strokeDashoffset = "0";

  // Reset skip button style if it exists
  const skipBtn = document.getElementById("skip-ans-btn");
  if (skipBtn) {
    skipBtn.textContent = "⏩ 正解を見る";
    skipBtn.style.color = "var(--muted)";
    skipBtn.style.borderColor = "var(--muted)";
    skipBtn.style.transform = "scale(1)";
  }

  flashEffect();
  showScreen("screen-countdown");

  countdownTimer = setInterval(() => {
    remaining--;
    numEl.textContent = remaining;

    // Arc progress
    const progress = (30 - remaining) / 30;
    arc.style.strokeDashoffset = circumference * progress;

    // Color shift in final 10s
    if (remaining <= 10) {
      arc.style.stroke = remaining <= 5 ? "var(--accent)" : "var(--accent3)";
      numEl.style.color = remaining <= 5 ? "var(--accent)" : "var(--accent3)";
    }

    // Play beep sound
    if (remaining <= 5 && remaining > 0) {
      playBeep(880, "sine", 0.15, 0.9); // Beep for last 5 seconds (音量大)
    } else if (remaining <= 0) {
      playWhistle(0.8); // 笛の音 (ピーーーッ)

      clearInterval(countdownTimer);
      // 自動遷移を廃止し、ボタンで手動遷移を促す
      // showAnswer();
      if (skipBtn) {
        skipBtn.textContent = "TIME UP! 正解を見る ⏩";
        skipBtn.style.color = "var(--accent)";
        skipBtn.style.borderColor = "var(--accent)";
        skipBtn.style.transform = "scale(1.1)";
      }
    }
  }, 1000);
}

function showAnswer() {
  const song = songs[currentQ];
  document.getElementById("answer-song-title").textContent = song.title;
  document.getElementById("answer-artist").textContent = song.artist;

  // YouTube / Local Video playback
  const ytId = song.answerYtId || "";
  const localVideo = song.answerVideo || "";
  const start = song.answerStartSec || 0;
  const answerVol = song.answerVolume !== undefined ? song.answerVolume : 1.0;

  const ytWrap = document.getElementById("yt-wrap");
  const ytIframe = document.getElementById("yt-iframe");
  const localVideoEl = document.getElementById("local-video");

  if (ytId) {
    ytIframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&start=${start}&rel=0&modestbranding=1`;
    ytIframe.style.display = "block";
    localVideoEl.style.display = "none";
    localVideoEl.pause();
    ytWrap.style.display = "block";
  } else if (localVideo) {
    localVideoEl.src = localVideo;
    localVideoEl.volume = answerVol;
    localVideoEl.style.display = "block";
    ytIframe.style.display = "none";
    ytIframe.src = "";
    ytWrap.style.display = "block";

    // 読み込みが完了してから開始秒数を設定し、再生する
    localVideoEl.onloadedmetadata = () => {
      localVideoEl.currentTime = start;
      localVideoEl.play().catch((e) => console.error(e));
    };

    // すでに読み込み済みだった場合のためのフォールバック
    if (localVideoEl.readyState >= 1) {
      localVideoEl.currentTime = start;
      localVideoEl.play().catch((e) => console.error(e));
    }
  } else {
    ytWrap.style.display = "none";
    ytIframe.src = "";
    ytIframe.style.display = "none";
    localVideoEl.src = "";
    localVideoEl.style.display = "none";
  }

  // Last question: change button text
  const isLast = currentQ + 1 >= Math.min(songs.length, TOTAL);
  document.getElementById("next-btn").textContent = isLast
    ? "FINISH 🎉"
    : "NEXT QUESTION →";

  flashEffect();
  showScreen("screen-answer");
}

function nextQuestion() {
  // Stop YouTube & Local Video
  document.getElementById("yt-iframe").src = "";
  document.getElementById("local-video").pause();
  clearInterval(countdownTimer);

  currentQ++;

  if (currentQ >= Math.min(songs.length, TOTAL)) {
    showResultScreen();
  } else {
    loadQuestion();
  }
}

function showResultScreen() {
  document.getElementById("header-bar").style.display = "none";
  document.getElementById("progress-bar-wrap").style.display = "none";
  flashEffect();
  showScreen("screen-result");
}

function restartQuiz() {
  document.getElementById("yt-iframe").src = "";
  document.getElementById("local-video").pause();
  clearInterval(countdownTimer);
  currentQ = 0;
  showScreen("screen-title");
  document.getElementById("header-bar").style.display = "none";
  document.getElementById("progress-bar-wrap").style.display = "none";
}

// ============================================================
//  SKIP BUTTON (countdown screen)
// ============================================================
document.getElementById("screen-countdown").addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "BUTTON") return;
  },
  false,
);

(function () {
  const screen = document.getElementById("screen-countdown");
  const skipBtn = document.createElement("button");
  skipBtn.id = "skip-ans-btn";
  skipBtn.textContent = "⏩ 正解を見る";
  skipBtn.style.cssText =
    'margin-top:8px;background:transparent;border:1px solid var(--muted);border-radius:4px;color:var(--muted);padding:clamp(8px, 2vw, 16px) clamp(24px, 5vw, 48px);cursor:pointer;font-size:clamp(14px, 3vw, 24px);letter-spacing:0.15em;font-family:"Noto Sans JP";transition:all 0.2s';
  skipBtn.onmouseover = () => {
    skipBtn.style.borderColor = "var(--accent2)";
    skipBtn.style.color = "var(--accent2)";
  };
  skipBtn.onmouseout = () => {
    skipBtn.style.borderColor = "var(--muted)";
    skipBtn.style.color = "var(--muted)";
  };
  skipBtn.onclick = () => {
    clearInterval(countdownTimer);
    showAnswer();
  };
  screen.appendChild(skipBtn);
})();

// ============================================================
//  JUMP MENU LOGIC
// ============================================================
function toggleJumpMenu() {
  const menu = document.getElementById("jump-menu");
  const isOpening = !menu.classList.contains("open");

  if (isOpening) {
    renderJumpGrid();
    menu.classList.add("open");
  } else {
    menu.classList.remove("open");
  }
}

function renderJumpGrid() {
  const grid = document.getElementById("jump-grid");
  grid.innerHTML = "";
  for (let i = 0; i < TOTAL; i++) {
    const item = document.createElement("div");
    item.className = "jump-item" + (i === currentQ ? " active" : "");
    item.textContent = i + 1;
    item.onclick = () => jumpToQuestion(i);
    grid.appendChild(item);
  }
}

function jumpToQuestion(index) {
  // Stop everything (Audio, YouTube, Local Video, Countdown)
  audioPlayer.pause();
  audioPlayer.src = "";
  document.getElementById("yt-iframe").src = "";
  document.getElementById("local-video").pause();
  clearInterval(countdownTimer);

  // Set current index
  currentQ = index;

  // Make sure header is visible (if jumping from title screen or result)
  document.getElementById("header-bar").style.display = "flex";
  document.getElementById("progress-bar-wrap").style.display = "block";

  // Hide menu and Load question
  toggleJumpMenu();
  loadQuestion();
}

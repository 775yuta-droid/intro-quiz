// ============================================================
//  SONG CLASS
// ============================================================
/**
 * イントロクイズの1問分データを表すクラス
 *
 * @property {string} title          - 曲名
 * @property {string} artist         - アーティスト名
 * @property {string} questionAudio  - 問題用音源（music_data/ 以下の相対パス or URL）
 * @property {string} answerYtId     - 正解用 YouTube 動画ID（URLの v= 以降）
 * @property {string} answerVideo    - 正解用 ローカル動画または直接URL（answerYtId がない場合に使用）
 * @property {number} answerStartSec - 正解動画の再生開始秒数（サビの頭など）
 * @property {number} answerVolume   - 正解用ローカル動画の音量（0.0 〜 1.0、デフォルト: 1.0）
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
//  questionAudio : 例) "music_data/lemon.mp3"
//                  （music_data フォルダに音源ファイルを置いてください）
//  answerYtId    : YouTube の動画ID（URLの v= 以降）
//  answerVideo   : ローカル動画ファイルのパス（answerYtId がない場合のみ使用）
//  answerStartSec: 再生開始秒数（サビが始まる秒など）
//  answerVolume  : ローカル動画の音量（0.0〜1.0、省略時は 1.0）
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
    questionAudio: "music_data/09_らしさ(ひげだん).mp3",
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
    questionAudio: "music_data/11_ヘビーローテーション.mp3",
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
    questionAudio: "music_data/21_スジャータめいらくグループ.mp3",
    answerYtId: "zg8QS3czN-U",
    answerStartSec: 0,
  }),
];

// ============================================================
//  STATE
// ============================================================
const songs = [...DEFAULT_SONGS];
const TOTAL = songs.length;
let currentQ = 0;
let countdownTimer = null;
let isPlaying = false;

// ============================================================
//  DOM CACHE（毎回 getElementById を呼ばないためにキャッシュ）
// ============================================================
const $ = {
  headerBar: document.getElementById("header-bar"),
  headerProgress: document.getElementById("header-progress"),
  progressBarWrap: document.getElementById("progress-bar-wrap"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  titleTotal: document.getElementById("title-total"),
  qCounter: document.getElementById("q-counter"),
  qLabelNum: document.getElementById("q-label-num"),
  playBtn: document.getElementById("play-btn"),
  audioHint: document.getElementById("audio-hint"),
  noAudioBtn: document.getElementById("no-audio-btn"),
  audioPlayer: document.getElementById("audio-player"),
  countdownNum: document.getElementById("countdown-num"),
  countdownArc: document.getElementById("countdown-arc"),
  skipAnsBtn: document.getElementById("skip-ans-btn"),
  answerTitle: document.getElementById("answer-song-title"),
  answerArtist: document.getElementById("answer-artist"),
  ytWrap: document.getElementById("yt-wrap"),
  ytIframe: document.getElementById("yt-iframe"),
  localVideo: document.getElementById("local-video"),
  nextBtn: document.getElementById("next-btn"),
  flash: document.getElementById("flash"),
  jumpMenu: document.getElementById("jump-menu"),
  jumpGrid: document.getElementById("jump-grid"),
};

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

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * 2000,
      y: Math.random() * 1200,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      hue: Math.random() * 60 + 180,
      life: Math.random(),
    });
  }

  let waveOffset = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);

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

    waveOffset += 0.02;
    const waveColors = [
      "rgba(255,60,110,0.15)",
      "rgba(0,229,255,0.1)",
      "rgba(255,230,0,0.08)",
    ];
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      ctx.strokeStyle = waveColors[j];
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
    b.style.cssText = `--max-h:${(20 + Math.random() * 50).toFixed(0)}px; --dur:${(0.4 + Math.random() * 0.6).toFixed(2)}s; --delay:${(Math.random() * 0.5).toFixed(2)}s`;
    c.appendChild(b);
  }
}

createWaveBars("title-wave", 28);
createWaveBars("play-wave", 20);
createWaveBars("countdown-wave", 24);
createWaveBars("result-wave", 28);

$.titleTotal.textContent = TOTAL;

// ============================================================
//  HELPER: SCREEN TRANSITIONS
// ============================================================
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    target.style.animation = "none";
    target.offsetHeight; // reflow trigger
    target.style.animation = "";
  }
}

function flashEffect() {
  $.flash.style.animation = "none";
  $.flash.offsetHeight;
  $.flash.style.animation = "flash 0.3s ease";
}

// ============================================================
//  HELPER: MEDIA CONTROL
// ============================================================
/** YouTube iframeとローカル動画の再生を両方止める */
function stopMedia() {
  $.ytIframe.src = "";
  $.localVideo.pause();
}

// ============================================================
//  HELPER: HEADER / PROGRESS BAR VISIBILITY
// ============================================================
/** ヘッダーとプログレスバーの表示・非表示を切り替える */
function setHeaderVisible(visible) {
  $.headerBar.style.display = visible ? "flex" : "none";
  $.progressBarWrap.style.display = visible ? "block" : "none";
}

// ============================================================
//  AUDIO: WEB AUDIO API (ビープ・笛の音)
// ============================================================
let audioCtx = null;

/** AudioContext を遅延初期化して返す */
function getAudioCtx() {
  if (!audioCtx)
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

/**
 * 単音のビープを鳴らす
 * @param {number} freq     - 周波数 (Hz)
 * @param {string} type     - オシレーター波形 ("sine" など)
 * @param {number} duration - 長さ (秒)
 * @param {number} vol      - 音量 (0.0〜1.0)
 */
function playBeep(freq = 880, type = "sine", duration = 0.15, vol = 0.8) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.error("Audio beep failed", e);
  }
}

/**
 * ホイッスル（笛）に近い音を鳴らす
 * 2つの周波数をわずかにずらして同時発音し、特有のうねりを出す
 * @param {number} duration - 長さ (秒)
 */
function playWhistle(duration = 0.8) {
  try {
    const ctx = getAudioCtx();

    const createTone = (freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq - 150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.9, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.9, ctx.currentTime + duration - 0.2);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    };

    createTone(2600);
    createTone(2650); // 50Hz ずらすことで笛特有のうねりを作る
  } catch (e) {
    console.error("Audio whistle failed", e);
  }
}

// ============================================================
//  AUDIO: QUESTION PLAYBACK (MP3 etc.)
// ============================================================
function togglePlay() {
  const song = songs[currentQ];

  if (!song.questionAudio) {
    $.audioHint.textContent = "⚠ 音源ファイルが設定されていません";
    return;
  }

  const bars = document.querySelectorAll("#play-wave .wave-bar");

  if (!isPlaying) {
    $.audioPlayer.src = song.questionAudio;
    $.audioPlayer.play().catch(() => {
      $.audioHint.textContent = "再生できませんでした";
    });
    $.playBtn.textContent = "⏸";
    $.audioHint.textContent = "再生中...";
    bars.forEach((b) => b.classList.remove("paused"));
    isPlaying = true;
    // 5秒後に自動的にカウントダウンへ
    setTimeout(() => {
      if (isPlaying) startCountdown();
    }, 5000);
  } else {
    $.audioPlayer.pause();
    $.playBtn.textContent = "▶";
    $.audioHint.textContent = "クリックして再生";
    bars.forEach((b) => b.classList.add("paused"));
    isPlaying = false;
  }
}

$.audioPlayer.addEventListener("ended", () => {
  isPlaying = false;
  $.playBtn.textContent = "▶";
  $.audioHint.textContent = "再生終了";
  startCountdown();
});

// ============================================================
//  QUIZ FLOW
// ============================================================
function startQuiz() {
  flashEffect();
  currentQ = 0;
  setHeaderVisible(true);
  loadQuestion();
}

function loadQuestion() {
  if (currentQ >= Math.min(songs.length, TOTAL)) {
    showResultScreen();
    return;
  }

  const total = Math.min(songs.length, TOTAL);

  // ヘッダー更新
  $.headerProgress.textContent = `${currentQ + 1} / ${total}`;
  $.progressBarFill.style.width = `${(currentQ / total) * 100}%`;

  // 音声リセット
  $.audioPlayer.pause();
  $.audioPlayer.src = "";
  isPlaying = false;
  $.playBtn.textContent = "▶";

  // 音源の有無で UI を切り替え
  const hasAudio = !!songs[currentQ].questionAudio;
  $.audioHint.textContent = hasAudio ? "クリックして再生" : "⚠ 音源なし";
  $.audioHint.style.display = hasAudio ? "" : "none";
  $.noAudioBtn.style.display = hasAudio ? "none" : "";

  // 問題番号表示
  $.qCounter.textContent = currentQ + 1;
  $.qLabelNum.textContent = currentQ + 1;

  // ウェーブバーをアニメーション
  document
    .querySelectorAll("#play-wave .wave-bar")
    .forEach((b) => b.classList.remove("paused"));

  flashEffect();
  showScreen("screen-question");
}

function startCountdown() {
  $.audioPlayer.pause();
  isPlaying = false;
  clearInterval(countdownTimer);

  let remaining = 30;
  const circumference = 439.6;

  $.countdownNum.textContent = remaining;
  $.countdownNum.style.color = "";
  $.countdownArc.style.stroke = "var(--accent2)";
  $.countdownArc.style.strokeDashoffset = "0";

  // スキップボタンを初期状態に戻す
  $.skipAnsBtn.textContent = "⏩ 正解を見る";
  $.skipAnsBtn.classList.remove("timeup");

  flashEffect();
  showScreen("screen-countdown");

  countdownTimer = setInterval(() => {
    remaining--;
    $.countdownNum.textContent = remaining;

    // アーク進捗
    $.countdownArc.style.strokeDashoffset =
      circumference * ((30 - remaining) / 30);

    // 残り10秒から色変化
    if (remaining <= 10) {
      const color = remaining <= 5 ? "var(--accent)" : "var(--accent3)";
      $.countdownArc.style.stroke = color;
      $.countdownNum.style.color = color;
    }

    // ビープ・笛の音
    if (remaining <= 5 && remaining > 0) {
      playBeep(880, "sine", 0.15, 0.9);
    } else if (remaining <= 0) {
      playWhistle(0.8);
      clearInterval(countdownTimer);
      // タイムアップ：ボタンを強調して手動遷移を促す
      $.skipAnsBtn.textContent = "TIME UP! 正解を見る ⏩";
      $.skipAnsBtn.classList.add("timeup");
    }
  }, 1000);
}

/** スキップボタン（「⏩ 正解を見る」）からの遷移 */
function skipToAnswer() {
  clearInterval(countdownTimer);
  showAnswer();
}

// ============================================================
//  HELPER: ANSWER MEDIA PLAYBACK
// ============================================================
/**
 * 正解画面でYouTubeまたはローカル動画を再生する
 * @param {Song} song
 */
function playAnswerMedia(song) {
  const ytId = song.answerYtId || "";
  const localPath = song.answerVideo || "";
  const start = song.answerStartSec || 0;
  const vol = song.answerVolume ?? 1.0;

  if (ytId) {
    $.ytIframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&start=${start}&rel=0&modestbranding=1`;
    $.ytIframe.style.display = "block";
    $.localVideo.style.display = "none";
    $.localVideo.pause();
    $.ytWrap.style.display = "block";
  } else if (localPath) {
    $.localVideo.src = localPath;
    $.localVideo.volume = vol;
    $.localVideo.style.display = "block";
    $.ytIframe.style.display = "none";
    $.ytIframe.src = "";
    $.ytWrap.style.display = "block";

    // メタデータ読み込み完了後に開始秒数をセットして再生
    $.localVideo.onloadedmetadata = () => {
      $.localVideo.currentTime = start;
      $.localVideo.play().catch((e) => console.error(e));
    };
    // すでに読み込み済みの場合のフォールバック
    if ($.localVideo.readyState >= 1) {
      $.localVideo.currentTime = start;
      $.localVideo.play().catch((e) => console.error(e));
    }
  } else {
    // 動画なし
    $.ytWrap.style.display = "none";
    $.ytIframe.src = "";
    $.ytIframe.style.display = "none";
    $.localVideo.src = "";
    $.localVideo.style.display = "none";
  }
}

// ============================================================
//  QUIZ FLOW (continued)
// ============================================================
function showAnswer() {
  const song = songs[currentQ];
  $.answerTitle.textContent = song.title;
  $.answerArtist.textContent = song.artist;

  playAnswerMedia(song);

  const isLast = currentQ + 1 >= Math.min(songs.length, TOTAL);
  $.nextBtn.textContent = isLast ? "FINISH 🎉" : "NEXT QUESTION →";

  flashEffect();
  showScreen("screen-answer");
}

function nextQuestion() {
  stopMedia();
  clearInterval(countdownTimer);
  currentQ++;

  if (currentQ >= Math.min(songs.length, TOTAL)) {
    showResultScreen();
  } else {
    loadQuestion();
  }
}

function showResultScreen() {
  setHeaderVisible(false);
  flashEffect();
  showScreen("screen-result");
}

function restartQuiz() {
  stopMedia();
  clearInterval(countdownTimer);
  currentQ = 0;
  setHeaderVisible(false);
  showScreen("screen-title");
}

// ============================================================
//  JUMP MENU
// ============================================================
function toggleJumpMenu() {
  const isOpening = !$.jumpMenu.classList.contains("open");
  if (isOpening) {
    renderJumpGrid();
    $.jumpMenu.classList.add("open");
  } else {
    $.jumpMenu.classList.remove("open");
  }
}

function renderJumpGrid() {
  $.jumpGrid.innerHTML = "";
  for (let i = 0; i < TOTAL; i++) {
    const item = document.createElement("div");
    item.className = "jump-item" + (i === currentQ ? " active" : "");
    item.textContent = i + 1;
    item.onclick = () => jumpToQuestion(i);
    $.jumpGrid.appendChild(item);
  }
}

function jumpToQuestion(index) {
  $.audioPlayer.pause();
  $.audioPlayer.src = "";
  stopMedia();
  clearInterval(countdownTimer);

  currentQ = index;
  setHeaderVisible(true);
  toggleJumpMen

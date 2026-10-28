(function() {
  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.getElementById('drawer');
  var overlay = document.getElementById('drawer-overlay');
  var close = document.getElementById('drawer-close');
  function open() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.removeAttribute('inert');
    drawer.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    close.focus();
  }
  function closeDrawer(returnFocus) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('inert', '');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', open);
  close.addEventListener('click', function() { closeDrawer(true); });
  overlay.addEventListener('click', function() { closeDrawer(true); });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && drawer.classList.contains('open')) closeDrawer(true);
  });
})();
(function() {
  var dropdown = document.querySelector('.nav-dropdown');
  if (!dropdown) return;
  var toggle = dropdown.querySelector('.nav-dropdown-toggle');
  function closeDropdown() {
    dropdown.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function() {
    var open = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  dropdown.addEventListener('focusout', function(event) {
    if (!dropdown.contains(event.relatedTarget)) closeDropdown();
  });
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) closeDropdown();
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && dropdown.classList.contains('open')) {
      closeDropdown();
      toggle.focus();
    }
  });
})();
(function() {
  var slides = document.querySelectorAll('.page-hero-slideshow img');
  if (slides.length < 2) return;
  var current = 0;
  setInterval(function() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
})();
(function() {
  var g = document.querySelector('.photo-gallery');
  if (!g) return;
  var mainLink = g.querySelector('.gallery-main a');
  var mainImg = g.querySelector('.gallery-main img');
  var thumbs = g.querySelectorAll('.gallery-thumbs a');
  var prev = g.querySelector('.gallery-prev');
  var next = g.querySelector('.gallery-next');
  var images = [];
  thumbs.forEach(function(t) { images.push({ href: t.getAttribute('href'), src: t.querySelector('img').getAttribute('src'), alt: t.querySelector('img').getAttribute('alt') }); });
  if (!images.length) return;
  var current = 0;
  function show(idx) {
    if (typeof idx !== 'number') return;
    current = (idx + images.length) % images.length;
    var img = images[current];
    if (!img) return;
    mainImg.src = img.src;
    mainImg.alt = img.alt;
    mainLink.href = img.href;
    thumbs.forEach(function(t, i) { t.classList.toggle('active', i === current); });
  }
  var ol = document.createElement('div');
  ol.className = 'gl-overlay';
  ol.innerHTML = '<button class="gl-close">&times;</button><button class="gl-prev">&#8249;</button><img alt=""><button class="gl-next">&#8250;</button>';
  document.body.appendChild(ol);
  var olImg = ol.querySelector('img');
  var olClose = ol.querySelector('.gl-close');
  var olPrev = ol.querySelector('.gl-prev');
  var olNext = ol.querySelector('.gl-next');
  function openOverlay(idx) {
    current = (idx + images.length) % images.length;
    olImg.src = images[current].href;
    olImg.alt = images[current].alt;
    ol.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeOverlay() {
    ol.classList.remove('open');
    document.body.style.overflow = '';
  }
  mainLink.addEventListener('click', function(e) {
    e.preventDefault();
    openOverlay(current);
  });
  thumbs.forEach(function(t, i) {
    t.addEventListener('click', function(e) { e.stopPropagation(); e.preventDefault(); show(i); }, true);
  });
  if (prev) prev.addEventListener('click', function() { show(current - 1); });
  if (next) next.addEventListener('click', function() { show(current + 1); });
  ol.addEventListener('click', function(e) { if (e.target === ol) closeOverlay(); });
  olClose.addEventListener('click', closeOverlay);
  olPrev.addEventListener('click', function() { openOverlay(current - 1); });
  olNext.addEventListener('click', function() { openOverlay(current + 1); });
  document.addEventListener('keydown', function(e) {
    if (!ol.classList.contains('open')) return;
    if (e.key === 'Escape') closeOverlay();
    if (e.key === 'ArrowLeft') openOverlay(current - 1);
    if (e.key === 'ArrowRight') openOverlay(current + 1);
  });
})();
(function() {
  var cards = document.querySelectorAll('.escape-card, .vr-game-card');
  if (!cards.length) return;
  var items = [];
  cards.forEach(function(c) {
    var img = c.getAttribute('data-vr-img');
    var title = c.getAttribute('data-vr-title');
    var meta = c.getAttribute('data-vr-meta');
    var desc = c.getAttribute('data-vr-desc');
    if (!img || !title) return;
    items.push({ img: img, title: title, meta: meta, desc: desc });
  });
  if (!items.length) return;
  var current = 0;
  var ol = document.createElement('div');
  ol.className = 'vr-overlay';
  ol.innerHTML = '<button class="vr-overlay-close">&times;</button><button class="vr-overlay-prev">&#8249;</button><div class="vr-overlay-inner"><div class="vr-overlay-fig"><img alt=""></div><div class="vr-overlay-body"><h2></h2><div class="vr-overlay-meta"></div><p></p></div></div><button class="vr-overlay-next">&#8250;</button>';
  document.body.appendChild(ol);
  var olImg = ol.querySelector('.vr-overlay-fig img');
  var olTitle = ol.querySelector('.vr-overlay-body h2');
  var olMeta = ol.querySelector('.vr-overlay-meta');
  var olDesc = ol.querySelector('.vr-overlay-body p');
  var olClose = ol.querySelector('.vr-overlay-close');
  var olPrev = ol.querySelector('.vr-overlay-prev');
  var olNext = ol.querySelector('.vr-overlay-next');
  function openOverlay(idx) {
    current = (idx + items.length) % items.length;
    var item = items[current];
    olImg.src = item.img;
    olImg.alt = item.title;
    olTitle.textContent = item.title;
    olMeta.textContent = item.meta;
    olDesc.textContent = item.desc;
    ol.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeOverlay() {
    ol.classList.remove('open');
    document.body.style.overflow = '';
  }
  cards.forEach(function(c, i) {
    c.addEventListener('click', function() { openOverlay(i); });
  });
  ol.addEventListener('click', function(e) { if (e.target === ol) closeOverlay(); });
  olClose.addEventListener('click', closeOverlay);
  olPrev.addEventListener('click', function() { openOverlay(current - 1); });
  olNext.addEventListener('click', function() { openOverlay(current + 1); });
  document.addEventListener('keydown', function(e) {
    if (!ol.classList.contains('open')) return;
    if (e.key === 'Escape') closeOverlay();
    if (e.key === 'ArrowLeft') openOverlay(current - 1);
    if (e.key === 'ArrowRight') openOverlay(current + 1);
  });
})();

(function() {
  var slides = document.querySelectorAll('.hero-slideshow img');
  if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var current = 0;
  setInterval(function() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
})();

(function () {
  var WMO = {
    0:['Clear','sun'],1:['Mainly clear','sun'],2:['Partly cloudy','partly'],3:['Overcast','cloud'],
    45:['Fog','fog'],48:['Rime fog','fog'],
    51:['Light drizzle','rain'],53:['Drizzle','rain'],55:['Heavy drizzle','rain'],
    56:['Freezing drizzle','rain'],57:['Freezing drizzle','rain'],
    61:['Light rain','rain'],63:['Rain','rain'],65:['Heavy rain','rain'],
    66:['Freezing rain','rain'],67:['Freezing rain','rain'],
    71:['Light snow','snow'],73:['Snow','snow'],75:['Heavy snow','snow'],77:['Snow grains','snow'],
    80:['Light showers','rain'],81:['Showers','rain'],82:['Heavy showers','rain'],
    85:['Snow showers','snow'],86:['Heavy snow showers','snow'],
    95:['Thunderstorm','storm'],96:['Thunderstorm + hail','storm'],99:['Thunderstorm + hail','storm']
  };
  var ICON = {
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    partly:'<circle cx="8" cy="8" r="2.5"/><path d="M8 3.5v1M12.5 8h-1M8 12.5v-1M3.5 8h1M4.8 4.8l.9.9"/><path d="M9 19h9a3.5 3.5 0 0 0 .4-6.98A5 5 0 0 0 9.2 11 3.5 3.5 0 0 0 9 19Z"/>',
    cloud:'<path d="M6 18h11a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 9.5 4.25 4.25 0 0 0 6 18Z"/>',
    rain:'<path d="M6 15h11a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 6.5 4.25 4.25 0 0 0 6 15Z"/><path d="M8 18v2M12 19v2M16 18v2"/>',
    snow:'<path d="M6 15h11a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 6.5 4.25 4.25 0 0 0 6 15Z"/><path d="M8 18h.01M12 19h.01M16 18h.01"/>',
    storm:'<path d="M6 15h11a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 6.5 4.25 4.25 0 0 0 6 15Z"/><path d="M13 17l-2 4h3l-2 3"/>',
    fog:'<path d="M4 9h16M4 13h16M4 17h10"/>'
  };
  function svg(kind){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICON[kind]||ICON.cloud)+'</svg>'; }
  function info(code){ return WMO[code] || ['—','cloud']; }
  function dayLabel(iso){ return new Date(iso+'T12:00:00').toLocaleDateString('en-US',{weekday:'short'}); }

  document.querySelectorAll('.weather-widget[data-lat]').forEach(function(el){
    var url='https://api.open-meteo.com/v1/forecast?latitude='+el.getAttribute('data-lat')+
      '&longitude='+el.getAttribute('data-lon')+
      '&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min'+
      '&forecast_days=3&timezone=America%2FNew_York&temperature_unit=fahrenheit';
    fetch(url).then(function(r){ if(!r.ok) throw new Error(r.status); return r.json(); }).then(function(d){
      var cur=d.current||{}, ci=info(cur.weather_code), daily=d.daily||{};
      var html='<div class="wx-now"><span class="wx-icon">'+svg(ci[1])+'</span><div><span class="wx-temp">'+Math.round(cur.temperature_2m)+'&deg;</span><span class="wx-cond">'+ci[0]+'</span></div></div>';
      if(daily.time && daily.time.length){
        html+='<div class="wx-days">';
        for(var i=0;i<Math.min(3,daily.time.length);i++){
          var di=info(daily.weather_code[i]);
          html+='<div class="wx-day"><span class="wx-dname">'+dayLabel(daily.time[i])+'</span><span class="wx-icon">'+svg(di[1])+'</span><span class="wx-hl">'+Math.round(daily.temperature_2m_max[i])+'&deg; / '+Math.round(daily.temperature_2m_min[i])+'&deg;</span></div>';
        }
        html+='</div>';
      }
      el.innerHTML=html;
    }).catch(function(){ el.innerHTML='<div class="wx-loading">Weather unavailable right now.</div>'; });
  });
})();

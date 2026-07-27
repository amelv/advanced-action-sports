# Gallery overhaul + overlay fix

## 1. Overlay — `_layouts/default.html:82-83`

```
--hero-overlay-start: rgba(0, 0, 0, 0.65);
--hero-overlay-end: rgba(0, 0, 0, 0.40);
```

## 2. Gallery CSS — replace `.page-gallery` rules

Find and **replace** these lines in `_layouts/default.html`:

```css
    .page-gallery { margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .page-gallery a { display: block; border-radius: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.2s; }
    .page-gallery a:hover { border-color: #7440a3; }
    .page-gallery img { width: 100%; height: auto; display: block; }
    @media (max-width: 600px) { .page-gallery { grid-template-columns: repeat(2, 1fr); } }
```

Replace with:

```css
    .photo-gallery { margin-top: 48px; }
    .gallery-main { position: relative; display: flex; align-items: center; justify-content: center; background: #383940; border-radius: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
    .gallery-main img { width: 100%; max-height: 450px; object-fit: contain; display: block; }
    .gallery-main a { display: flex; width: 100%; }
    .gallery-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: #fff; border: none; width: 40px; height: 40px; font-size: 24px; cursor: pointer; z-index: 2; border-radius: 4px; display: flex; align-items: center; justify-content: center; line-height: 1; transition: background 0.2s; padding: 0; }
    .gallery-arrow:hover { background: rgba(0,0,0,0.7); }
    .gallery-prev { left: 8px; }
    .gallery-next { right: 8px; }
    .gallery-thumbs { display: flex; gap: 8px; margin-top: 10px; overflow-x: auto; padding-bottom: 4px; }
    .gallery-thumbs a { flex: 0 0 80px; border-radius: 4px; overflow: hidden; border: 2px solid transparent; transition: border-color 0.2s; }
    .gallery-thumbs a.active { border-color: #7440a3; }
    .gallery-thumbs a:hover { border-color: #7440a3; }
    .gallery-thumbs img { width: 100%; height: 60px; object-fit: cover; display: block; cursor: pointer; }
```

## 3. Gallery JS — add to script block in `_layouts/default.html`

Before `if (typeof GLightbox !== 'undefined')`, add:

```javascript
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
    current = (idx + images.length) % images.length;
    mainImg.src = images[current].src;
    mainImg.alt = images[current].alt;
    mainLink.href = images[current].href;
    thumbs.forEach(function(t, i) { t.classList.toggle('active', i === current); });
  }
  thumbs.forEach(function(t, i) { t.addEventListener('click', function(e) { e.preventDefault(); show(i); }); });
  if (prev) prev.addEventListener('click', function() { show(current - 1); });
  if (next) next.addEventListener('click', function() { show(current + 1); });
})();
```

## 4. Airsoft page HTML — `airsoft/index.html:38-49`

Replace the current `.page-gallery` div with:

```html
      <h2 style="clear: both;">Photos</h2>
      <div class="photo-gallery">
        <div class="gallery-main">
          <button class="gallery-arrow gallery-prev" aria-label="Previous">‹</button>
          <a href="{{ site.baseurl }}/assets/images/airsoft-player-barricade-aiming.webp" class="glightbox" data-gallery="airsoft-gallery">
            <img src="{{ site.baseurl }}/assets/images/airsoft-player-barricade-aiming.webp" alt="Airsoft player with tactical helmet aiming over a barricade" loading="lazy">
          </a>
          <button class="gallery-arrow gallery-next" aria-label="Next">›</button>
        </div>
        <div class="gallery-thumbs">
          <a href="{{ site.baseurl }}/assets/images/airsoft-player-barricade-aiming.webp" class="active"><img src="{{ site.baseurl }}/assets/images/airsoft-player-barricade-aiming.webp" alt="Airsoft player with tactical helmet aiming over a barricade" loading="lazy"></a>
          <a href="{{ site.baseurl }}/assets/images/airsoft-player-indoor-arena.webp"><img src="{{ site.baseurl }}/assets/images/airsoft-player-indoor-arena.webp" alt="Airsoft player aiming and firing in the indoor arena" loading="lazy"></a>
          <a href="{{ site.baseurl }}/assets/images/airsoft-arena-drone-overview.webp"><img src="{{ site.baseurl }}/assets/images/airsoft-arena-drone-overview.webp" alt="Drone aerial view of active airsoft match" loading="lazy"></a>
          <a href="{{ site.baseurl }}/assets/images/airsoft-indoor-laser-peek.webp"><img src="{{ site.baseurl }}/assets/images/airsoft-indoor-laser-peek.webp" alt="Indoor arena corridor with player aiming around a corner with lasers" loading="lazy"></a>
          <a href="{{ site.baseurl }}/assets/images/airsoft-corridor-barricade-peek.webp"><img src="{{ site.baseurl }}/assets/images/airsoft-corridor-barricade-peek.webp" alt="Outdoor corridor with barricades and players peeking out" loading="lazy"></a>
          <a href="{{ site.baseurl }}/assets/images/airsoft-player-celebrating.webp"><img src="{{ site.baseurl }}/assets/images/airsoft-player-celebrating.webp" alt="Airsoft player raising gun and fist celebrating" loading="lazy"></a>
          <a href="{{ site.baseurl }}/assets/images/airsoft-woman-pink-bandana.webp"><img src="{{ site.baseurl }}/assets/images/airsoft-woman-pink-bandana.webp" alt="Woman player in full gear with pink bandana" loading="lazy"></a>
          <a href="{{ site.baseurl }}/assets/images/airsoft-woman-geared-up.webp"><img src="{{ site.baseurl }}/assets/images/airsoft-woman-geared-up.webp" alt="Geared-up woman airsoft player" loading="lazy"></a>
          <a href="{{ site.baseurl }}/assets/images/airsoft-custom-gun-moody.webp"><img src="{{ site.baseurl }}/assets/images/airsoft-custom-gun-moody.webp" alt="Close-up of heavily customized airsoft gun" loading="lazy"></a>
        </div>
      </div>
```

Note: The `.gallery-main a` links use class `glightbox` so clicking the main image still opens the full-size lightbox with click-through.

## Order of execution

1. Overlay values
2. Gallery CSS (find+replace the old grid rules)
3. Gallery JS (add to script block)
4. Airsoft page HTML (replace gallery section)

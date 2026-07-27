# Airsoft page: Static hero + lightbox gallery

## 1. Homepage hero — replace watermarked slide

**File:** `index.html:14`

Replace slide #1 `airsoft-team-charging.webp` with `airsoft-team-barricade-advance.webp`:
```html
<img src="assets/images/airsoft-team-barricade-advance.webp" alt="Airsoft team behind a wall barricade prepping to advance, bright dynamic shot" class="active">
```

## 2. Airsoft page — static hero

**File:** `airsoft/index.html:10-21`

Replace the slideshow section with a single-image static hero using the include:
```html
{% include page-hero.html hero_title="AIRSOFT" hero_btn_url="https://advancedactionsports.square.site/s/search?q=airsoft%20admission" hero_btn_text="Book Now" hero_bg_img="airsoft-player-barricade-aiming.webp" hero_bg_alt="Epic moody shot of airsoft player with tactical helmet aiming over a barricade at an opponent" %}
```

This keeps the same `page-hero` styling (overlay, heading, CTA button) but uses one image instead of slideshow. The JS slideshow code still runs but won't break — it just won't have 2+ images to cycle.

## 3. GLightbox CDN — add to layout

**File:** `_layouts/default.html`

Add these in `<head>` (before `</head>`):
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">
<script src="https://cdn.jsdelivr.net/gh/mcstudios/glightbox@develop/dist/js/glightbox.min.js"></script>
```

Add init after the closing `</style>` tag or in the existing `<script>` block:
```javascript
var lightbox = GLightbox({ selector: '.glightbox' });
```

## 4. Gallery CSS

**File:** `_layouts/default.html`

Add before `.page-actions`:
```css
    .page-gallery { margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .page-gallery a { display: block; border-radius: 4px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.2s; }
    .page-gallery a:hover { border-color: #7440a3; }
    .page-gallery img { width: 100%; height: auto; display: block; }
    @media (max-width: 600px) { .page-gallery { grid-template-columns: repeat(2, 1fr); } }
```

## 5. Gallery HTML on airsoft page

**File:** `airsoft/index.html`

After the last `</p>` inside `.page-content .container` (before the closing `</div></section>`), add:

```html
      <div class="page-gallery">
        <a href="{{ site.baseurl }}/assets/images/airsoft-player-barricade-aiming.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-player-barricade-aiming.webp" alt="Airsoft player with tactical helmet aiming over a barricade" loading="lazy"></a>
        <a href="{{ site.baseurl }}/assets/images/airsoft-player-indoor-arena.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-player-indoor-arena.webp" alt="Airsoft player aiming and firing in the indoor arena" loading="lazy"></a>
        <a href="{{ site.baseurl }}/assets/images/airsoft-arena-drone-overview.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-arena-drone-overview.webp" alt="Drone aerial view of active airsoft match" loading="lazy"></a>
        <a href="{{ site.baseurl }}/assets/images/airsoft-indoor-laser-peek.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-indoor-laser-peek.webp" alt="Indoor arena corridor with player aiming around a corner with lasers" loading="lazy"></a>
        <a href="{{ site.baseurl }}/assets/images/airsoft-corridor-barricade-peek.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-corridor-barricade-peek.webp" alt="Outdoor corridor with barricades and players peeking out" loading="lazy"></a>
        <a href="{{ site.baseurl }}/assets/images/airsoft-player-celebrating.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-player-celebrating.webp" alt="Airsoft player raising gun and fist celebrating" loading="lazy"></a>
        <a href="{{ site.baseurl }}/assets/images/airsoft-woman-pink-bandana.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-woman-pink-bandana.webp" alt="Woman player in full gear with pink bandana" loading="lazy"></a>
        <a href="{{ site.baseurl }}/assets/images/airsoft-woman-geared-up.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-woman-geared-up.webp" alt="Geared-up woman airsoft player" loading="lazy"></a>
        <a href="{{ site.baseurl }}/assets/images/airsoft-custom-gun-moody.webp" class="glightbox"><img src="{{ site.baseurl }}/assets/images/airsoft-custom-gun-moody.webp" alt="Close-up of heavily customized airsoft gun" loading="lazy"></a>
      </div>
```

## 6. Cleanup — homepage hero (remove airsoft-team-charging)

**File:** `index.html:13-19`

After the edit in step 1, the full slideshow block should be:
```html
    <div class="hero-slideshow">
      <img src="assets/images/airsoft-team-barricade-advance.webp" alt="Airsoft team behind a wall barricade prepping to advance, bright dynamic shot" class="active">
      <img src="assets/images/paintball-splatter-action.webp" alt="Bright colorful paintball action with paint splattering around a barricade">
      <img src="assets/images/airsoft-arena-drone-overview.webp" alt="Drone aerial overview of an active airsoft match showing the full arena layout">
      <img src="assets/images/paintball-player-running.webp" alt="Young paintball player running across the field in dynamic action shot">
      <img src="assets/images/airsoft-player-barricade-aiming.webp" alt="Airsoft player with tactical helmet aiming over a barricade at an opponent">
    </div>
```

## Order of execution

1. Add GLightbox CDN links + CSS + JS init to `_layouts/default.html`
2. Add gallery CSS to `_layouts/default.html`
3. Replace slideshow on `airsoft/index.html` with static hero include
4. Add gallery HTML to `airsoft/index.html`
5. Update `index.html` — replace watermarked slide with `airsoft-team-barricade-advance.webp`

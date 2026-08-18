# PulseWire — Live News Portal

Ek single-file HTML project ko 3 alag files mein split kiya gaya hai taake code manage karna aasan ho.

## 📁 File Structure

```
pulsewire/
├── index.html   → Sirf HTML structure/markup
├── style.css    → Saara CSS (design tokens, layout, animations)
├── script.js    → Saara JavaScript (data, logic, event handlers)
└── README.md    → Ye file
```

## 🚀 Kaise Chalayein

1. Teeno files (`index.html`, `style.css`, `script.js`) ek hi folder mein rakhein — ye zaroori hai kyunke `index.html` inhe relative path se link karta hai:
   ```html
   <link rel="stylesheet" href="style.css"/>
   ...
   <script src="script.js"></script>
   ```
2. `index.html` ko browser mein double-click karke seedha open kar sakte hain, ya koi bhi local server (e.g. VS Code "Live Server" extension) use kar lein.

## 🛠️ Kya Hai Kis File Mein

- **index.html** — Navbar, ticker, article cards, modals, footer waghera ka markup.
- **style.css** — CSS variables/theme (dark + light mode), responsive layout, animations, sab styling.
- **script.js** — Sample articles/comments data, category filtering, search, bookmarks, admin panel, auth (mock), theme toggle, aur baaki saari interactivity.

## ✏️ Editing Tips

- Sirf design change karna ho → `style.css` kholein.
- Naya article field ya logic change karna ho → `script.js` mein `CATS` / `ARTICLES` arrays aur related functions dekhein.
- Naya section ya markup add karna ho → `index.html` mein.

# La Vee — Reusable Master Product Card Verification (`lpHRh` & `bazdQ`)

## 1. Master Component Overview
- **Component ID:** `lpHRh`
- **Component Name:** `Component/ProductCard`
- **Reusability:** `reusable: true`
- **Canvas Location:** `x: -1200, y: 0`
- **Card Dimensions:** `310px` width × `580px` overall height (`440px` image container + `140px` details stack).

---

## 2. Integrated Visual & Functional Features

| Element | Node ID | Description & Styling |
| :--- | :--- | :--- |
| **Product Image Container** | `imfbG` | `310px` × `440px`, `cornerRadius: 6px`, High-fashion portrait crop. |
| **Top Badge Overlay** | `O3fxn` / `KbZcw` | Dark pill (`#161616`), `NEW ARRIVAL`, `VIRAL BESTSELLER`, `ATELIER EXCLUSIVE`, etc. |
| **Wishlist Heart Toggle** | `BFy6u` / `FvVFg` | `28px` × `28px` circular white badge (`#FFFFFF`) with burgundy heart (`♥`). |
| **On-Hover Quick Size Bar** | `Z8FFb` | White floating card with `QUICK SIZE SELECT:`, `Size Guide 📏` link, and interactive pills (`XS`, `S`, `M`, `L`, `XL`). |
| **Color Swatches Row** | `BVcdG` | 4 circular swatch dots (`14px` × `14px`) displaying available colorways. |
| **Title & Rating Row** | `H9Mxd` | `Cormorant Garamond` title + `★★★★★ 4.9 (48)` review rating in burgundy (`#6E1F2A`). |
| **Price Label** | `HYfiw` | `$189.00 USD` in bold `Inter` typography. |
| **Dual CTA Row** | `pFmr2` | `+ QUICK ADD` (solid black button) + `ADD TO CART` (ivory outlined button). |

---

## 3. Product Grid Linkage (`bazdQ` - New Arrivals Grid)
The `bazdQ` product grid inside `Node ID: GvscT` uses clean component references (`type: "ref"`, `ref: "lpHRh"`):

1. **Card 1:** `Aura Corset Satin Midi` (`$189.00 USD`, `NEW ARRIVAL`)
2. **Card 2:** `Seraphina Sculpted Linen Set` (`$215.00 USD`, `VIRAL BESTSELLER`)
3. **Card 3:** `Elysian Backless Corset Gown` (`$265.00 USD`, `ATELIER EXCLUSIVE`)
4. **Card 4:** `Celeste Silk Satin Corset Top` (`$145.00 USD`, `LIMITED BATCH`)

*Note: Component references have also been propagated to Best Sellers (`YMhKQ`), Search Results (`gWxFt`), Collection PLP (`y4rhp`), and Wishlist (`o1uX8`) grids.*

# La Vee — Luxury Feminine Shopify Design System & Tokens

**Brand:** La Vee Design  
**Design Philosophy:** Luxury Editorial Fashion + High-Conversion Restraint  
**Core Benchmark:** House of CB (fit & luxury) + DISSH (minimalist restraint) + MESHKI (campaign commerce)  
**Version:** 2.0 (Upgraded)  

---

## 1. Executive Aesthetic Analysis & Principles

### Luxury Restraint & Conversion Focus
1. **Restraint Over Decoration:** Avoid heavy gold accents, excessive pastel pink, border clutter, or low-contrast beige-on-beige. Perceived luxury comes from generous whitespace, strict grid alignment, and high-impact editorial photography.
2. **Prominent Conversion Signals:** High visual restraint must **never conceal CTAs**. Primary actions (Add to Bag, Checkout, Size Selector) feature max contrast (`#161616` on `#FFFFFF` / `#F7F4EF`).
3. **PDP Visual Hierarchy Rule:**
   $$\text{Product Image} \longrightarrow \text{Title} \longrightarrow \text{Price} \longrightarrow \text{Variant/Size} \longrightarrow \text{Add to Cart} \longrightarrow \text{Delivery/Returns} \longrightarrow \text{Details}$$

---

## 2. Color System & Tokens

| Token Name | Color Code | CSS Custom Property | Application / Usage |
| :--- | :--- | :--- | :--- |
| `color-bg-primary` | `#F7F4EF` | `--color-bg-primary` | **Warm Ivory** — Primary site background |
| `color-bg-secondary` | `#EDE6DC` | `--color-bg-secondary` | **Soft Sand** — Secondary sections, banner cards |
| `color-bg-surface` | `#FFFFFF` | `--color-bg-surface` | Modals, slide-out cart drawer, dropdown menus |
| `color-text-primary` | `#161616` | `--color-text-primary` | **Near Black** — Main titles, primary text, dark CTAs |
| `color-text-muted` | `#77716B` | `--color-text-muted` | **Taupe Grey** — Subtitles, meta info, breadcrumbs |
| `color-accent-burgundy` | `#6E1F2A` | `--color-accent-burgundy` | **Deep Burgundy** — Editorial highlight, promo callouts |
| `color-accent-espresso` | `#3A2B26` | `--color-accent-espresso` | **Dark Espresso** — Subtle luxury secondary accent |
| `color-border` | `#D8D2CA` | `--color-border` | Subtle divider lines, card strokes, input outlines |
| `color-cta-bg` | `#161616` | `--color-cta-bg` | Primary button background (Near Black) |
| `color-cta-text` | `#FFFFFF` | `--color-cta-text` | Primary button text (Pure White) |
| `color-sale` | `#6E1F2A` | `--color-sale` | Sale badges & discount prices |

---

## 3. Typography System

### Font Pairing
* **Headings & Display:** `Cormorant Garamond` (Elegant, Refined Editorial Serif)
* **Body & UI Commerce:** `Inter` (Modern, High-legibility Sans-serif)

### Typography Scale & Spec Table

| Element | Desktop Size | Mobile Size | Weight | Line-Height | Tracking | Font Family |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | `56–72px` | `36–44px` | `500` | `1.05–1.15` | `-0.02em` | `Cormorant Garamond` |
| **H2 Section** | `40–48px` | `30–34px` | `500` | `1.10–1.20` | `-0.01em` | `Cormorant Garamond` |
| **H3 Subsection** | `28–32px` | `24–28px` | `500` | `1.20–1.25` | `0` | `Cormorant Garamond` |
| **Product Title** | `18–20px` | `16–18px` | `500` | `1.30` | `0` | `Inter` |
| **Body Regular** | `16px` | `15–16px` | `400` | `1.50–1.60` | `0` | `Inter` |
| **Small / UI Info** | `13–14px` | `13–14px` | `500` | `1.40` | `0.02em` | `Inter` |
| **Button Text** | `14–15px` | `14px` | `600` | `1.00` | `0.06em` | `Inter` (Uppercase) |

---

## 4. Spacing & Layout System (8px Grid Standard)

### Base Spacing Scale
$$\text{Scale: } 4\text{px} \;\vert\; 8\text{px} \;\vert\; 12\text{px} \;\vert\; 16\text{px} \;\vert\; 24\text{px} \;\vert\; 32\text{px} \;\vert\; 48\text{px} \;\vert\; 64\text{px} \;\vert\; 96\text{px} \;\vert\; 128\text{px}$$

### Layout Token Mapping
* **Section Padding (Desktop):** `80px–120px` vertical
* **Section Padding (Mobile):** `48px–64px` vertical
* **Container Max-Width:** `1440px` (Gutter: `32px` desktop, `16px` mobile)
* **Product Grid Gap:** `24px–32px` (Desktop) / `12px–16px` (Mobile)
* **Text-to-Button Gap:** `24px–32px`
* **Card Internal Spacing:** `12px–16px`

---

## 5. UI Components & Interaction States

### A. Primary CTA Button (`.btn-primary`)
* **Background:** `#161616` (Near Black)
* **Text:** `#FFFFFF` (Pure White)
* **Font:** `Inter`, `14–15px`, Weight `600`, Uppercase, Letter-spacing `0.06em`
* **Padding:** `16px 32px` | **Height:** `52px` (Desktop) / `48px` (Mobile)
* **Border Radius:** `0px` (Architectural sharp edge)
* **Hover State:** Background `#333333` with smooth `200ms ease` transition
* **Focus State:** `2px` offset outline in `#6E1F2A` (Burgundy)

### B. Secondary / Outline Button (`.btn-secondary`)
* **Background:** Transparent
* **Border:** `1px solid #161616`
* **Text:** `#161616`
* **Hover State:** Fill `#161616`, Text `#FFFFFF` (`200ms ease`)

### C. Fashion Product Card Component
* **Aspect Ratio:** `3:4` or `4:5` (Editorial Portrait)
* **Container Spacing:** `12px–16px` internal text stack
* **Hover Effect:** Cross-fade to 2nd lifestyle image (`300ms cubic-bezier(0.16, 1, 0.3, 1)`)
* **Badge Pill:** `#EDE6DC` background, `#161616` text, `11px` uppercase (`NEW`, `BESTSELLER`)
* **Wishlist Action:** Top-right floating glassmorphism circle (`36px` diameter, `#FFFFFF` at 80% opacity)
* **Title:** `Inter` `14–16px`, Medium weight (`500`), `#161616`
* **Price:** `Inter` `14–16px`, Regular weight (`400`), `#161616`
* **Quick Add Trigger:** Bottom slide-up pill button (`+ QUICK ADD`)

### D. Slide-out Cart Drawer (`Component/CartDrawer`)
* **Width:** `440px` Desktop / `100%` Mobile
* **Free Shipping Bar:** Dynamic threshold meter (`Height 6px`, Fill `#6E1F2A` Deep Burgundy)
* **Line Items:** `3:4` thumbnail image, title, variant picker, quantity step `- 1 +`, line price
* **Checkout CTA:** Fixed bottom panel with subtotal & full-width `#161616` button

---

## 6. Pen.dev Handoff Specifications

When creating components in Pen.dev:
1. Apply **Warm Ivory `#F7F4EF`** to the main artboard canvases (`1440px` and `390px`).
2. Set all display headlines to `Cormorant Garamond` (Weight 500).
3. Set all body text, UI labels, and buttons to `Inter`.
4. Ensure primary CTA buttons use `#161616` background for maximum visual weight.

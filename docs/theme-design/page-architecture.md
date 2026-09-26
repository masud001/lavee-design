# La Vee — Pen.dev Page Architecture Specification

**Project:** La Vee Design Storefront  
**Purpose:** Precise structure for building editable UI screens in Pen.dev  

---

## 1. Screen Set Overview

The following screens must be designed in Pen.dev (Desktop 1440px & Mobile 390px viewports):

1. **Homepage** (High-converting fashion campaign landing)
2. **Product Detail Page (PDP)** (High-converting fit & detail view)
3. **Collection / Product List Page (PLP)** (Grid & filter discovery)
4. **Slide-out Cart Drawer & Full Cart Page** (AOV booster & friction-free checkout)
5. **Predictive Search Overlay & Results Page**

---

## 2. Homepage Screen Architecture (14 Sections)

```
+-------------------------------------------------------+
| 01. Announcement Bar ("Complimentary Shipping...")   |
+-------------------------------------------------------+
| 02. Sticky Header (Logo | Nav | Search | Wishlist | Cart)|
+-------------------------------------------------------+
| 03. Hero Campaign (90vh Image/Video + Dual CTAs)      |
+-------------------------------------------------------+
| 04. Category Entry Tiles (Dresses, Sets, Tops, etc.)  |
+-------------------------------------------------------+
| 05. New Arrivals Carousel (Product Cards + Quick Add) |
+-------------------------------------------------------+
| 06. Editorial Brand Moment (50/50 Split Campaign)     |
+-------------------------------------------------------+
| 07. Best Sellers Grid ("Most Wanted" - 4 Columns)     |
+-------------------------------------------------------+
| 08. Shop the Look (Hotspot Image + Shoppable Outfit)  |
+-------------------------------------------------------+
| 09. Shop by Occasion Tiles (Date Night, Evening, etc.)|
+-------------------------------------------------------+
| 10. Brand Reassurance Strip (Shipping, Returns, Trust)|
+-------------------------------------------------------+
| 11. Customer Reviews & Social Proof Slider            |
+-------------------------------------------------------+
| 12. Instagram UGC Gallery (Grid of Real Customer Looks)|
+-------------------------------------------------------+
| 13. VIP Email Capture (Early Access & 10% Off Hook)   |
+-------------------------------------------------------+
| 14. Luxury 4-Column Footer                            |
+-------------------------------------------------------+
```

---

## 3. Product Detail Page (PDP) Architecture

### Desktop Layout (Split 60 / 40)
* **Left Column (60% width):** Sticky media grid / scrollable gallery (2-column high-res photography layout).
* **Right Column (40% width):** Fixed/Sticky Product Buy Box containing:
  1. Breadcrumb navigation (`Home / Dresses / The Aura Midi`)
  2. Product Title (`H1 - 28px Serif`) & Price (`$189.00`)
  3. Review summary rating (`★★★★★ 48 Reviews`)
  4. Short descriptor / fit statement
  5. Color selection swatches
  6. Size selector pills (`XS, S, M, L, XL`) + "Size & Fit Guide" link
  7. **Primary Action:** `ADD TO BAG` button (`52px` full width)
  8. **Secondary Action:** Express Checkout buttons (Shop Pay / Apple Pay)
  9. Trust Badges (Free 30-Day Returns, Express Delivery, Secure Checkout)
  10. Product Accordions (Fabric & Care, Shipping & Returns, Model Measurement)
  11. "Complete the Look" / Cross-sell recommendation module

### Mobile PDP Rules
* Swipeable image carousel with pagination dots.
* Floating **Sticky Add-to-Cart Bar** pinned to bottom of viewport when scrolled past main CTA.

---

## 4. Collection Page (PLP) Architecture

* **Hero Banner:** Minimal editorial image with collection title & description.
* **Filter & Sort Bar (Sticky):**
  * Desktop: Horizontal filter dropdowns (Category, Size, Color, Price, Fit) + Sort dropdown + Layout View Toggle (2-col vs 4-col).
  * Mobile: Filter button opening slide-over drawer + Count badge.
* **Product Grid:** 4 columns desktop / 2 columns mobile with 3:4 portrait cards.
* **Pagination / Load More:** Infinite scroll or "Load More Products" CTA button.

---

## 5. Slide-Out Cart Drawer Architecture

* **Header:** Title ("YOUR BAG (2)"), Close (X) button.
* **Free Shipping Threshold Progress Bar:**
  * Message: *"You are $21.00 away from Complimentary Express Shipping!"*
  * Dynamic Progress Bar (80% filled).
* **Cart Items List:**
  * Product thumbnail, title, selected size/color, unit price, quantity modifier (`- 1 +`), remove item action.
* **In-Cart Cross-Sell Carousel:** "Pairs Perfectly With" (1-click Add accessories or shapewear).
* **Cart Summary:**
  * Subtotal (`$358.00`)
  * Shipping calculation note
* **Checkout Button:** Full-width high-contrast `PROCEED TO CHECKOUT` button.

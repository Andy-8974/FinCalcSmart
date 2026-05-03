# FinCalcSmart — Strategic Content & SEO Status Report

*Audited: 46 pages (40 calculators + 9 blog posts + index + all-calculators + blog index) · May 2026*

---

## Audit Summary

| Standard | Site-Wide Status | Scope |
|---|---|---|
| 1. Intent-Title Alignment | ⚠️ Partial — 10 strong, 30+ generic | All calculators |
| 2. Regional Localization | ✅ Solid — minor inconsistencies | CA/US tools |
| 3. Utility-First Fold | ✅ Passes across the board | All calculators |
| 4. Snippet Readiness | ⚠️ Broken — JSON-LD answers are truncated | All FAQs |
| 5. Internal Utility Graph | ⚠️ Siloed — same-category only | All pages |

**Single biggest systemic issue: 30 of 40 calculator pages have a blank `<meta name="description" content="">`.**
Google will auto-generate descriptions from body text — but they won't match user intent and will hurt CTR.
This alone is the highest-ROI fix in the entire site.

---

## Standard 1 — Intent-Title Alignment

### ✅ High Performance — Title states the exact result

| Page | Title | Why it works |
|---|---|---|
| `roth-ira.html` | *Roth IRA Calculator 2026 — Growth, Limits & Eligibility* | Answers three questions in the subtitle |
| `fire.html` | *FIRE Calculator 2026 — Financial Independence* | Clear movement category |
| `rent-vs-buy.html` | *Rent vs Buy Calculator 2026* | Frames a decision, not a tool |
| `mortgage-calculator.html` | *Mortgage Calculator 2026 — USA & Canada* | Year + dual-market signal |
| `investment-fees.html` | *Investment Fees Calculator 2026 — MER Impact* | "MER Impact" answers the actual user fear |
| `capital-gains-tax.html` | *Capital Gains Tax Calculator — USA & Canada 2026* | Specificity on country + year |
| `ira-comparison.html` | *Traditional vs Roth IRA Calculator 2026 — USA* | Question format implicit in "vs" |
| `credit-card-payoff.html` | *Credit Card Payoff Calculator 2026* | "Payoff" = result, not tool |

### ⚠️ Content Refresh — Title describes the tool, not the outcome

| Page | Current Title | Recommended Rewrite |
|---|---|---|
| `retirement-planning.html` | *Retirement Planning Calculator 2026* | *How Much Do I Need to Retire? — Retirement Calculator 2026* |
| `retirement-withdrawal.html` | *Retirement Withdrawal Calculator 2026* | *How Long Will My Retirement Savings Last? — Withdrawal Calculator 2026* |
| `mortgage-qualifier.html` | *Mortgage Qualifier Calculator 2026* | *How Much Mortgage Can I Afford? — Qualifier 2026* |
| `compound-interest.html` | *Compound Interest Calculator* | *Compound Interest Calculator 2026 — Growth Projector* |
| `net-worth.html` | *Net Worth Calculator 2026* | *Calculate Your Net Worth 2026 — Assets vs. Liabilities* |
| `emergency-fund.html` | *Emergency Fund Calculator 2026* | *How Much Emergency Fund Do I Need? — 2026 Calculator* |
| `rule-of-72.html` | *Rule of 72 Calculator* | *Rule of 72 Calculator — How Many Years to Double Your Money?* |
| `auto-investment-plan.html` | *Automatic Investment Plan (AIP) Calculator* | *Dollar-Cost Averaging Calculator 2026 — Automatic Investment Plan* |
| `roi.html` | *Return on Investment (ROI) Calculator* | *ROI Calculator 2026 — Calculate Investment Returns & CAGR* |
| `annuity.html` | *Annuity Calculator 2026* | *Annuity Calculator 2026 — Monthly Payment & Present Value* |

---

## Standard 2 — Regional Localization

### ✅ What's done well

- **CA-specific tools** (TFSA, RRSP, CMHC) correctly use: CRA, CPP/OAS, contribution room, stress test, GIC, provincial tax, EI, 30-year amortization.
- **US-specific tools** (401k, Roth IRA, IRA Comparison) show a "USA only" badge and use IRS/FICA terminology.
- **Dual tools** (mortgage, income tax, FIRE) have a working country toggle that changes inputs/labels contextually.
- TFSA FAQ correctly flags the US withholding tax issue inside TFSAs — expert-level localization.
- FIRE FAQ explicitly contrasts Roth conversion ladder (US) vs. RRSP drawdown strategy (CA) — excellent.

### ⚠️ Inconsistencies to fix

| Page | Issue |
|---|---|
| `income-tax.html` | Meta description says *"Updated 2025 brackets"* but `<title>` says 2026. Will confuse Google and searchers. |
| `roth-ira.html` | Meta description says *"2025"* but `<title>` says 2026. Same conflict. |
| `auto-investment-plan.html` | "AIP" is Canadian banking language. US users search "DCA calculator" — title buries the hook. |
| `salary.html` | No country badge in hero. Canadian users expect to see "Canada/USA" declared up front. |
| `simple-interest.html` | No year, no region — looks stale against competitors. |

---

## Standard 3 — Utility-First Fold

### ✅ Passes site-wide

Every calculator page follows this HTML render order:

```
<body>
  <script src="../nav.js">  ← nav (minimal, injected)
  <div class="calc-hero">   ← title + one-liner + country badge
  <div class="calc-wrapper">
    <div class="calc-inputs"> ← TOOL IS HERE — above any content text
```

The interactive tool is the second visible element on every page. **This is a genuine competitive
advantage over most finance sites** that bury calculators under 400 words of preamble.

**One risk to monitor:** The `<script src="../nav.js">` is synchronous and render-blocking. Consider
adding `defer` once the site has real traffic to optimize LCP.

---

## Standard 4 — Snippet Readiness

### ❌ Critical issue: JSON-LD FAQ answers are truncated

The structured data that Google reads for Featured Snippets is broken on nearly every page.
The `acceptedAnswer.text` fields are being cut mid-sentence. Google requires complete sentences
in `acceptedAnswer` to serve a Featured Snippet. Truncated answers are simply ignored.

### ✅ HTML FAQ bodies are well-written

The visible on-page FAQ answers are the right length (40–60 words) and well-structured.
The TFSA "TFSA vs RRSP" answer is a model example. The fix is to match JSON-LD to HTML body text.

### ⚠️ Missing: `<meta name="description">` on 30+ pages

Every page with `content=""` is losing its SERP snippet. Pages confirmed blank:

`compound-interest`, `simple-interest`, `rule-of-72`, `annuity`, `401k-contribution`,
`401k-save-max`, `asset-allocation`, `auto-investment-plan`, `black-scholes`,
`cmhc-mortgage-insurance`, `car-loan`, `car-lease`, `currency-exchange`, `debt-repayment`,
`emergency-fund`, `hourly-to-salary`, `investment-fees`, `ira-comparison`, `mortgage-qualifier`,
`net-worth`, `personal-loan`, `retirement-planning`, `retirement-withdrawal`, `roi`, `rrsp-loan`,
`rrsp-savings`, `salary`, `sales-tax`, `tfsa`, `vacation-savings`, `debt-repayment`

All 9 blog posts also have `og:description content=""`.

---

## Standard 5 — Internal Utility Graph

### ✅ The sidebar "Related Calculators" is present everywhere

Every calculator has 3–7 related links in a sidebar card. Good baseline architecture.

### ⚠️ The graph is category-siloed — missing Personal Finance → Investing bridges

**Missing cross-cluster links (high priority):**

| Source Page (Personal Finance) | Currently Links To | Add Link To |
|---|---|---|
| `salary.html` | Hourly-to-Salary, Income Tax, Net Worth | `compound-interest.html`, `tfsa.html`, `investment-fees.html` |
| `debt-repayment.html` | Personal Loan, Compound Interest, Net Worth, Credit Card | `tfsa.html`, `roi.html`, `fire.html` |
| `emergency-fund.html` | Net Worth, Vacation Savings, TFSA | `compound-interest.html`, `investment-fees.html` |
| `net-worth.html` | TFSA, RRSP, FIRE, Debt Repayment | `compound-interest.html`, `investment-fees.html`, `roi.html` |

**Missing Retirement ↔ Tax bridges:**

| Source Page | Add Link To |
|---|---|
| `fire.html` | `income-tax.html`, `capital-gains-tax.html` |
| `retirement-withdrawal.html` | `income-tax.html`, `capital-gains-tax.html` |
| `rrsp-savings.html` | `capital-gains-tax.html` |

**Blog posts link to nothing:** None of the 9 blog posts link to calculator pages.
The compound interest guide linking to `compound-interest.html` is the most obvious quick win.

---

## Consolidated Status Report

### 🏆 High Performance — No changes needed

| Page | Strengths |
|---|---|
| `mortgage-calculator.html` | Full meta desc, FAQ answers in range, CA/US specifics, 7 related links |
| `fire.html` | Full meta desc, CA/US FAQ differentiation, cross-category related links |
| `rent-vs-buy.html` | Full meta desc, decision-framed title, broad related links |
| `capital-gains-tax.html` | Full meta desc, CA inclusion rate detail, 2026 year |
| `credit-card-payoff.html` | Full meta desc with result promise, good related links |
| `roth-ira.html` | Best title format on site, full meta desc, detailed subtopics |
| `student-loan.html` | Full meta desc, OSAP CA localization, broad cross-category links |
| `inflation.html` | Full meta desc, specific CPI reference, cross-category links |
| `mortgage-refinance.html` | Full meta desc, break-even framing |

### 🔁 Content Refresh Required — Fix in Priority Order

**Priority 1 — Fix meta descriptions (all blank-description pages above)**
Fixes 30 pages in one pass. ~150 characters each. Model after `credit-card-payoff.html`.

**Priority 2 — Fix truncated JSON-LD FAQ answers**
Copy full HTML answer text into `acceptedAnswer.text`. Affects every page with FAQ structured data.

**Priority 3 — Title rewrites for 10 intent-gap pages**
See Standard 1 table above. Focus first on `retirement-planning`, `mortgage-qualifier`, `retirement-withdrawal`.

**Priority 4 — Add 12 targeted cross-cluster internal links**
See Standard 5 table. Focus on salary → investing and debt → TFSA bridges first.

**Priority 5 — Fix year inconsistencies**
`income-tax.html` and `roth-ira.html` meta descriptions say 2025. Update to 2026.

**Priority 6 — Add CTA links in all 9 blog posts**
Each post should link to 2–3 relevant calculators. Compound interest guide → calculator is the #1 win.

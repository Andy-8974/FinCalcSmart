/* FinCalc Smart — sidebar.js
   Populates .calc-sidebar (calculator pages) and .article-sidebar (blog pages)
   with Related Articles + Related Calculators (no ads).
   Order: calc pages → Articles first, then Calculators
          blog pages → Calculators first, then Articles                         */

(function () {

  /* ── Blog articles catalogue ───────────────────────────────────────── */
  var ARTICLES = {
    '4-percent-rule':              { cat: 'Retirement',   title: 'The 4% Rule Explained',             href: '4-percent-rule.html' },
    'asset-allocation-by-age':     { cat: 'Investing',    title: 'Asset Allocation by Age',            href: 'asset-allocation-by-age.html' },
    'cmhc-insurance-explained':    { cat: 'Mortgage',     title: 'CMHC Insurance Explained',           href: 'cmhc-insurance-explained.html' },
    'coast-fire-explained':        { cat: 'FIRE',         title: 'Coast FIRE Explained',               href: 'coast-fire-explained.html' },
    'compound-interest-guide':     { cat: 'Investing',    title: 'Compound Interest Guide',            href: 'compound-interest-guide.html' },
    'cpp-oas-retirement-income':   { cat: 'Retirement',   title: 'CPP & OAS in 2026',                 href: 'cpp-oas-retirement-income.html' },
    'debt-payoff-strategies':      { cat: 'Debt',         title: 'Debt Payoff Strategies',             href: 'debt-payoff-strategies.html' },
    'etf-investing-canada':        { cat: 'Investing',    title: 'ETF Investing in Canada',            href: 'etf-investing-canada.html' },
    'fire-number-canada':          { cat: 'FIRE',         title: 'FIRE Number in Canada',              href: 'fire-number-canada.html' },
    'first-home-buyer-canada-2026':{ cat: 'Mortgage',     title: 'First-Time Home Buyer 2026',         href: 'first-home-buyer-canada-2026.html' },
    'how-much-retirement-savings': { cat: 'Retirement',   title: 'How Much to Save for Retirement',    href: 'how-much-retirement-savings.html' },
    'mortgage-calculator-guide':   { cat: 'Mortgage',     title: 'Mortgage Calculator Guide',          href: 'mortgage-calculator-guide.html' },
    'rent-vs-buy-canada':          { cat: 'Real Estate',  title: 'Rent vs. Buy in Canada',             href: 'rent-vs-buy-canada.html' },
    'tfsa-vs-rrsp':                { cat: 'Savings',      title: 'TFSA vs RRSP',                       href: 'tfsa-vs-rrsp.html' },
    'traditional-vs-roth-ira':     { cat: 'Retirement',   title: 'Traditional vs Roth IRA',            href: 'traditional-vs-roth-ira.html' },
  };

  /* ── Sidebar data per page ─────────────────────────────────────────── */
  /* calcs: array of {title, href}  (relative to /calculators/)
     articles: array of article keys from ARTICLES above               */

  var CALC_PAGES = {
    'mortgage-calculator': {
      articles: ['mortgage-calculator-guide','rent-vs-buy-canada','first-home-buyer-canada-2026','cmhc-insurance-explained'],
      calcs: [
        {title:'Rent vs. Buy',          href:'rent-vs-buy.html'},
        {title:'CMHC Insurance',        href:'cmhc-mortgage-insurance.html'},
        {title:'Mortgage Qualifier',    href:'mortgage-qualifier.html'},
        {title:'Mortgage Refinance',    href:'mortgage-refinance.html'},
        {title:'Income Tax',            href:'income-tax.html'},
        {title:'Net Worth',             href:'net-worth.html'},
        {title:'Capital Gains Tax',     href:'capital-gains-tax.html'},
      ]
    },
    'cmhc-mortgage-insurance': {
      articles: ['cmhc-insurance-explained','first-home-buyer-canada-2026','mortgage-calculator-guide'],
      calcs: [
        {title:'Mortgage Calculator',   href:'mortgage-calculator.html'},
        {title:'Mortgage Qualifier',    href:'mortgage-qualifier.html'},
        {title:'Mortgage Refinance',    href:'mortgage-refinance.html'},
      ]
    },
    'mortgage-qualifier': {
      articles: ['mortgage-calculator-guide','first-home-buyer-canada-2026','cmhc-insurance-explained'],
      calcs: [
        {title:'Mortgage Calculator',   href:'mortgage-calculator.html'},
        {title:'CMHC Insurance',        href:'cmhc-mortgage-insurance.html'},
        {title:'Income Tax',            href:'income-tax.html'},
      ]
    },
    'mortgage-refinance': {
      articles: ['mortgage-calculator-guide','rent-vs-buy-canada'],
      calcs: [
        {title:'Mortgage Calculator',   href:'mortgage-calculator.html'},
        {title:'Mortgage Qualifier',    href:'mortgage-qualifier.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
      ]
    },
    'rent-vs-buy': {
      articles: ['rent-vs-buy-canada','first-home-buyer-canada-2026','cmhc-insurance-explained'],
      calcs: [
        {title:'Mortgage Calculator',   href:'mortgage-calculator.html'},
        {title:'CMHC Insurance',        href:'cmhc-mortgage-insurance.html'},
        {title:'Mortgage Qualifier',    href:'mortgage-qualifier.html'},
        {title:'Net Worth Calculator',  href:'net-worth.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
      ]
    },
    'retirement-planning': {
      articles: ['how-much-retirement-savings','4-percent-rule','cpp-oas-retirement-income'],
      calcs: [
        {title:'Retirement Withdrawal', href:'retirement-withdrawal.html'},
        {title:'FIRE Calculator',       href:'fire.html'},
        {title:'Asset Allocation',      href:'asset-allocation.html'},
        {title:'401k Contribution',     href:'401k-contribution.html'},
        {title:'Roth IRA Calculator',   href:'roth-ira.html'},
      ]
    },
    'retirement-withdrawal': {
      articles: ['4-percent-rule','how-much-retirement-savings','fire-number-canada'],
      calcs: [
        {title:'Retirement Planning',   href:'retirement-planning.html'},
        {title:'FIRE Calculator',       href:'fire.html'},
        {title:'Asset Allocation',      href:'asset-allocation.html'},
        {title:'Annuity Calculator',    href:'annuity.html'},
        {title:'Income Tax',            href:'income-tax.html'},
        {title:'Capital Gains Tax',     href:'capital-gains-tax.html'},
      ]
    },
    'fire': {
      articles: ['fire-number-canada','coast-fire-explained','4-percent-rule'],
      calcs: [
        {title:'Retirement Planning',   href:'retirement-planning.html'},
        {title:'Retirement Withdrawal', href:'retirement-withdrawal.html'},
        {title:'Asset Allocation',      href:'asset-allocation.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Income Tax',            href:'income-tax.html'},
        {title:'Capital Gains Tax',     href:'capital-gains-tax.html'},
      ]
    },
    'annuity': {
      articles: ['how-much-retirement-savings','4-percent-rule'],
      calcs: [
        {title:'Retirement Planning',   href:'retirement-planning.html'},
        {title:'Retirement Withdrawal', href:'retirement-withdrawal.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
      ]
    },
    'asset-allocation': {
      articles: ['asset-allocation-by-age','etf-investing-canada'],
      calcs: [
        {title:'Retirement Planning',   href:'retirement-planning.html'},
        {title:'FIRE Calculator',       href:'fire.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
      ]
    },
    '401k-contribution': {
      articles: ['traditional-vs-roth-ira','how-much-retirement-savings'],
      calcs: [
        {title:'401k Save Max',         href:'401k-save-max.html'},
        {title:'IRA Comparison',        href:'ira-comparison.html'},
        {title:'Retirement Planning',   href:'retirement-planning.html'},
      ]
    },
    '401k-save-max': {
      articles: ['traditional-vs-roth-ira','how-much-retirement-savings'],
      calcs: [
        {title:'401k Contribution',     href:'401k-contribution.html'},
        {title:'IRA Comparison',        href:'ira-comparison.html'},
        {title:'Retirement Planning',   href:'retirement-planning.html'},
      ]
    },
    'ira-comparison': {
      articles: ['traditional-vs-roth-ira','how-much-retirement-savings'],
      calcs: [
        {title:'401k Contribution',     href:'401k-contribution.html'},
        {title:'401k Save Max',         href:'401k-save-max.html'},
        {title:'Retirement Planning',   href:'retirement-planning.html'},
        {title:'Roth IRA Calculator',   href:'roth-ira.html'},
      ]
    },
    'roth-ira': {
      articles: ['traditional-vs-roth-ira','4-percent-rule'],
      calcs: [
        {title:'IRA Comparison',        href:'ira-comparison.html'},
        {title:'401k Contribution',     href:'401k-contribution.html'},
        {title:'Retirement Planning',   href:'retirement-planning.html'},
      ]
    },
    'tfsa': {
      articles: ['tfsa-vs-rrsp','compound-interest-guide','etf-investing-canada'],
      calcs: [
        {title:'RRSP Savings',          href:'rrsp-savings.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Income Tax',            href:'income-tax.html'},
        {title:'FIRE Calculator',       href:'fire.html'},
      ]
    },
    'rrsp-savings': {
      articles: ['tfsa-vs-rrsp','how-much-retirement-savings'],
      calcs: [
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'RRSP Loan',             href:'rrsp-loan.html'},
        {title:'Income Tax',            href:'income-tax.html'},
        {title:'Retirement Planning',   href:'retirement-planning.html'},
        {title:'Capital Gains Tax',     href:'capital-gains-tax.html'},
      ]
    },
    'rrsp-loan': {
      articles: ['tfsa-vs-rrsp','debt-payoff-strategies'],
      calcs: [
        {title:'RRSP Savings',          href:'rrsp-savings.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'Income Tax',            href:'income-tax.html'},
      ]
    },
    'income-tax': {
      articles: ['tfsa-vs-rrsp','etf-investing-canada'],
      calcs: [
        {title:'Salary Calculator',     href:'salary.html'},
        {title:'RRSP Savings',          href:'rrsp-savings.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'Retirement Planning',   href:'retirement-planning.html'},
        {title:'Capital Gains Tax',     href:'capital-gains-tax.html'},
        {title:'Roth IRA',              href:'roth-ira.html'},
      ]
    },
    'capital-gains-tax': {
      articles: ['etf-investing-canada','asset-allocation-by-age'],
      calcs: [
        {title:'Income Tax',            href:'income-tax.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
        {title:'ROI Calculator',        href:'roi.html'},
      ]
    },
    'compound-interest': {
      articles: ['compound-interest-guide','etf-investing-canada'],
      calcs: [
        {title:'Simple Interest',       href:'simple-interest.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'Rule of 72',            href:'rule-of-72.html'},
      ]
    },
    'investment-fees': {
      articles: ['etf-investing-canada','compound-interest-guide'],
      calcs: [
        {title:'ROI Calculator',        href:'roi.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Rule of 72',            href:'rule-of-72.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'Capital Gains Tax',     href:'capital-gains-tax.html'},
      ]
    },
    'rule-of-72': {
      articles: ['compound-interest-guide','etf-investing-canada'],
      calcs: [
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
        {title:'ROI Calculator',        href:'roi.html'},
      ]
    },
    'roi': {
      articles: ['etf-investing-canada','compound-interest-guide'],
      calcs: [
        {title:'Investment Fees',       href:'investment-fees.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Rule of 72',            href:'rule-of-72.html'},
      ]
    },
    'auto-investment-plan': {
      articles: ['etf-investing-canada','compound-interest-guide'],
      calcs: [
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
        {title:'FIRE Calculator',       href:'fire.html'},
      ]
    },
    'inflation': {
      articles: ['compound-interest-guide','asset-allocation-by-age'],
      calcs: [
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Retirement Planning',   href:'retirement-planning.html'},
        {title:'FIRE Calculator',       href:'fire.html'},
        {title:'Currency Exchange',     href:'currency-exchange.html'},
      ]
    },
    'black-scholes': {
      articles: ['etf-investing-canada','asset-allocation-by-age'],
      calcs: [
        {title:'ROI Calculator',        href:'roi.html'},
        {title:'Rule of 72',            href:'rule-of-72.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
      ]
    },
    'debt-repayment': {
      articles: ['debt-payoff-strategies','compound-interest-guide'],
      calcs: [
        {title:'Personal Loan',         href:'personal-loan.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Net Worth Calculator',  href:'net-worth.html'},
        {title:'Credit Card Payoff',    href:'credit-card-payoff.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'ROI Calculator',        href:'roi.html'},
        {title:'FIRE Calculator',       href:'fire.html'},
      ]
    },
    'personal-loan': {
      articles: ['debt-payoff-strategies','compound-interest-guide'],
      calcs: [
        {title:'Car Loan',              href:'car-loan.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Debt Repayment',        href:'debt-repayment.html'},
        {title:'Credit Card Payoff',    href:'credit-card-payoff.html'},
      ]
    },
    'credit-card-payoff': {
      articles: ['debt-payoff-strategies','compound-interest-guide'],
      calcs: [
        {title:'Debt Repayment',        href:'debt-repayment.html'},
        {title:'Personal Loan',         href:'personal-loan.html'},
        {title:'Simple Interest',       href:'simple-interest.html'},
      ]
    },
    'student-loan': {
      articles: ['debt-payoff-strategies','compound-interest-guide'],
      calcs: [
        {title:'Personal Loan Calculator', href:'personal-loan.html'},
        {title:'Compound Interest',        href:'compound-interest.html'},
        {title:'Debt Repayment',           href:'debt-repayment.html'},
        {title:'Income Tax Calculator',    href:'income-tax.html'},
        {title:'Salary Calculator',        href:'salary.html'},
        {title:'Net Worth Calculator',     href:'net-worth.html'},
      ]
    },
    'car-loan': {
      articles: ['debt-payoff-strategies'],
      calcs: [
        {title:'Car Lease',             href:'car-lease.html'},
        {title:'Personal Loan',         href:'personal-loan.html'},
        {title:'Debt Repayment',        href:'debt-repayment.html'},
      ]
    },
    'car-lease': {
      articles: ['debt-payoff-strategies'],
      calcs: [
        {title:'Car Loan',              href:'car-loan.html'},
        {title:'Personal Loan',         href:'personal-loan.html'},
        {title:'Sales Tax',             href:'sales-tax.html'},
      ]
    },
    'salary': {
      articles: ['tfsa-vs-rrsp','etf-investing-canada'],
      calcs: [
        {title:'Hourly to Salary',      href:'hourly-to-salary.html'},
        {title:'Income Tax',            href:'income-tax.html'},
        {title:'Net Worth Calculator',  href:'net-worth.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
      ]
    },
    'hourly-to-salary': {
      articles: ['tfsa-vs-rrsp'],
      calcs: [
        {title:'Salary Calculator',     href:'salary.html'},
        {title:'Income Tax',            href:'income-tax.html'},
      ]
    },
    'net-worth': {
      articles: ['how-much-retirement-savings','tfsa-vs-rrsp'],
      calcs: [
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'RRSP Savings',          href:'rrsp-savings.html'},
        {title:'FIRE Calculator',       href:'fire.html'},
        {title:'Debt Repayment',        href:'debt-repayment.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
        {title:'ROI Calculator',        href:'roi.html'},
      ]
    },
    'simple-interest': {
      articles: ['compound-interest-guide'],
      calcs: [
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Personal Loan',         href:'personal-loan.html'},
        {title:'Rule of 72',            href:'rule-of-72.html'},
      ]
    },
    'emergency-fund': {
      articles: ['tfsa-vs-rrsp','debt-payoff-strategies'],
      calcs: [
        {title:'Net Worth Calculator',  href:'net-worth.html'},
        {title:'Vacation Savings',      href:'vacation-savings.html'},
        {title:'TFSA Calculator',       href:'tfsa.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
        {title:'Investment Fees',       href:'investment-fees.html'},
      ]
    },
    'vacation-savings': {
      articles: ['compound-interest-guide'],
      calcs: [
        {title:'Emergency Fund',        href:'emergency-fund.html'},
        {title:'Currency Exchange',     href:'currency-exchange.html'},
        {title:'Compound Interest',     href:'compound-interest.html'},
      ]
    },
    'sales-tax': {
      articles: ['rent-vs-buy-canada'],
      calcs: [
        {title:'Car Loan',              href:'car-loan.html'},
        {title:'Car Lease',             href:'car-lease.html'},
        {title:'Income Tax',            href:'income-tax.html'},
      ]
    },
    'currency-exchange': {
      articles: ['compound-interest-guide'],
      calcs: [
        {title:'Sales Tax',             href:'sales-tax.html'},
        {title:'Vacation Savings',      href:'vacation-savings.html'},
        {title:'Salary Calculator',     href:'salary.html'},
      ]
    },
  };

  /* ── Blog sidebar data ─────────────────────────────────────────────── */
  /* order: calcs first, then articles (per user request)                */

  var BLOG_PAGES = {
    '4-percent-rule': {
      calcs: [
        {cat:'Retirement', title:'FIRE Calculator',               href:'../calculators/fire.html'},
        {cat:'Retirement', title:'Retirement Withdrawal',         href:'../calculators/retirement-withdrawal.html'},
        {cat:'Retirement', title:'Retirement Planning',           href:'../calculators/retirement-planning.html'},
      ],
      articles: ['fire-number-canada','coast-fire-explained']
    },
    'asset-allocation-by-age': {
      calcs: [
        {cat:'Investing',  title:'Asset Allocation Calculator',   href:'../calculators/asset-allocation.html'},
        {cat:'Retirement', title:'F.I.R.E. Calculator',           href:'../calculators/fire.html'},
        {cat:'Retirement', title:'Retirement Planning',           href:'../calculators/retirement-planning.html'},
      ],
      articles: ['etf-investing-canada','fire-number-canada']
    },
    'cmhc-insurance-explained': {
      calcs: [
        {cat:'Mortgage',   title:'CMHC Insurance Calculator',     href:'../calculators/cmhc-mortgage-insurance.html'},
        {cat:'Mortgage',   title:'Mortgage Calculator',           href:'../calculators/mortgage-calculator.html'},
        {cat:'Mortgage',   title:'Mortgage Qualifier',            href:'../calculators/mortgage-qualifier.html'},
      ],
      articles: ['mortgage-calculator-guide','first-home-buyer-canada-2026']
    },
    'coast-fire-explained': {
      calcs: [
        {cat:'Retirement', title:'F.I.R.E. Calculator',           href:'../calculators/fire.html'},
        {cat:'Investing',  title:'Compound Interest Calculator',  href:'../calculators/compound-interest.html'},
        {cat:'Retirement', title:'Retirement Planning',           href:'../calculators/retirement-planning.html'},
      ],
      articles: ['fire-number-canada','cpp-oas-retirement-income']
    },
    'compound-interest-guide': {
      calcs: [
        {cat:'Investing',  title:'Compound Interest Calculator',  href:'../calculators/compound-interest.html'},
        {cat:'Investing',  title:'Investment Fees Calculator',    href:'../calculators/investment-fees.html'},
        {cat:'Investing',  title:'Rule of 72 Calculator',         href:'../calculators/rule-of-72.html'},
        {cat:'Investing',  title:'ROI Calculator',                href:'../calculators/roi.html'},
      ],
      articles: ['etf-investing-canada','asset-allocation-by-age']
    },
    'cpp-oas-retirement-income': {
      calcs: [
        {cat:'Retirement', title:'Retirement Planning',           href:'../calculators/retirement-planning.html'},
        {cat:'Retirement', title:'F.I.R.E. Calculator',           href:'../calculators/fire.html'},
        {cat:'Retirement', title:'Retirement Withdrawal',         href:'../calculators/retirement-withdrawal.html'},
      ],
      articles: ['fire-number-canada','coast-fire-explained']
    },
    'debt-payoff-strategies': {
      calcs: [
        {cat:'Debt',       title:'Debt Repayment Calculator',     href:'../calculators/debt-repayment.html'},
        {cat:'Debt',       title:'Credit Card Payoff Calculator', href:'../calculators/credit-card-payoff.html'},
        {cat:'Debt',       title:'Personal Loan Calculator',      href:'../calculators/personal-loan.html'},
      ],
      articles: ['compound-interest-guide','tfsa-vs-rrsp']
    },
    'etf-investing-canada': {
      calcs: [
        {cat:'Investing',  title:'Investment Fees Calculator',    href:'../calculators/investment-fees.html'},
        {cat:'Investing',  title:'Asset Allocation Calculator',   href:'../calculators/asset-allocation.html'},
        {cat:'Investing',  title:'Compound Interest Calculator',  href:'../calculators/compound-interest.html'},
      ],
      articles: ['compound-interest-guide','asset-allocation-by-age']
    },
    'fire-number-canada': {
      calcs: [
        {cat:'Retirement', title:'F.I.R.E. Calculator',           href:'../calculators/fire.html'},
        {cat:'Retirement', title:'Retirement Planning',           href:'../calculators/retirement-planning.html'},
        {cat:'Retirement', title:'Retirement Withdrawal',         href:'../calculators/retirement-withdrawal.html'},
      ],
      articles: ['coast-fire-explained','cpp-oas-retirement-income']
    },
    'first-home-buyer-canada-2026': {
      calcs: [
        {cat:'Mortgage',   title:'CMHC Insurance Calculator',     href:'../calculators/cmhc-mortgage-insurance.html'},
        {cat:'Mortgage',   title:'Mortgage Calculator',           href:'../calculators/mortgage-calculator.html'},
        {cat:'Savings',    title:'RRSP Savings Calculator',       href:'../calculators/rrsp-savings.html'},
      ],
      articles: ['cmhc-insurance-explained','mortgage-calculator-guide']
    },
    'how-much-retirement-savings': {
      calcs: [
        {cat:'Retirement', title:'Retirement Planning Calculator',href:'../calculators/retirement-planning.html'},
        {cat:'Savings',    title:'RRSP Savings Calculator',       href:'../calculators/rrsp-savings.html'},
        {cat:'Retirement', title:'Retirement Withdrawal',         href:'../calculators/retirement-withdrawal.html'},
      ],
      articles: ['4-percent-rule','cpp-oas-retirement-income']
    },
    'mortgage-calculator-guide': {
      calcs: [
        {cat:'Mortgage',   title:'Mortgage Calculator',           href:'../calculators/mortgage-calculator.html'},
        {cat:'Mortgage',   title:'Mortgage Qualifier',            href:'../calculators/mortgage-qualifier.html'},
        {cat:'Mortgage',   title:'CMHC Insurance Calculator',     href:'../calculators/cmhc-mortgage-insurance.html'},
        {cat:'Mortgage',   title:'Mortgage Refinance Calculator', href:'../calculators/mortgage-refinance.html'},
      ],
      articles: ['cmhc-insurance-explained','first-home-buyer-canada-2026']
    },
    'rent-vs-buy-canada': {
      calcs: [
        {cat:'Mortgage',   title:'Rent vs. Buy Calculator',       href:'../calculators/rent-vs-buy.html'},
        {cat:'Mortgage',   title:'Mortgage Calculator',           href:'../calculators/mortgage-calculator.html'},
        {cat:'Mortgage',   title:'CMHC Insurance Calculator',     href:'../calculators/cmhc-mortgage-insurance.html'},
      ],
      articles: ['first-home-buyer-canada-2026','cmhc-insurance-explained']
    },
    'tfsa-vs-rrsp': {
      calcs: [
        {cat:'Savings',    title:'TFSA Calculator',               href:'../calculators/tfsa.html'},
        {cat:'Savings',    title:'RRSP Savings Calculator',       href:'../calculators/rrsp-savings.html'},
        {cat:'Tax',        title:'Income Tax Calculator',         href:'../calculators/income-tax.html'},
      ],
      articles: ['etf-investing-canada','cpp-oas-retirement-income']
    },
    'traditional-vs-roth-ira': {
      calcs: [
        {cat:'Retirement', title:'Traditional vs Roth IRA',       href:'../calculators/ira-comparison.html'},
        {cat:'Retirement', title:'Roth IRA Calculator',           href:'../calculators/roth-ira.html'},
        {cat:'Retirement', title:'401(k) Contribution',           href:'../calculators/401k-contribution.html'},
      ],
      articles: ['4-percent-rule','how-much-retirement-savings']
    },
  };

  /* ── HTML builders ──────────────────────────────────────────────────── */

  function calcCard(calcs) {
    if (!calcs || !calcs.length) return '';
    var items = calcs.map(function(c){
      return '<li><a href="' + c.href + '">' + c.title + '</a></li>';
    }).join('');
    return '<div class="related-card"><h4>Related Calculators</h4><ul class="related-list">' + items + '</ul></div>';
  }

  function articleCard(keys, isCalcPage) {
    if (!keys || !keys.length) return '';
    var prefix = isCalcPage ? '../blog/' : '';
    if (isCalcPage) {
      /* Calculator pages: use related-card + related-list (same style as calcCard, no extra CSS needed) */
      var items = keys.map(function(k){
        var a = ARTICLES[k]; if (!a) return '';
        return '<li><a href="' + prefix + a.href + '">' + a.title + '</a></li>';
      }).join('');
      return '<div class="related-card"><h4>Related Articles</h4><ul class="related-list">' + items + '</ul></div>';
    }
    /* Blog pages: use sidebar-card + related-posts (from blog.css) */
    var items = keys.map(function(k){
      var a = ARTICLES[k]; if (!a) return '';
      return '<a href="' + a.href + '"><div><div class="rp-cat">' + a.cat + '</div><div class="rp-title">' + a.title + '</div></div></a>';
    }).join('');
    return '<div class="sidebar-card"><h4>Related Articles</h4><div class="related-posts">' + items + '</div></div>';
  }

  function blogCalcCard(calcs) {
    if (!calcs || !calcs.length) return '';
    var items = calcs.map(function(c){
      return '<a href="' + c.href + '"><div><div class="rp-cat">' + c.cat + '</div><div class="rp-title">' + c.title + '</div></div></a>';
    }).join('');
    return '<div class="sidebar-card"><h4>Related Calculators</h4><div class="related-posts">' + items + '</div></div>';
  }

  /* ── Inject on DOMContentLoaded ─────────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', function () {
    var path  = window.location.pathname;
    var slug  = path.split('/').pop().replace('.html', '');
    var inCalc = path.indexOf('/calculators/') !== -1;
    var inBlog = path.indexOf('/blog/') !== -1 && slug !== 'index';

    if (inCalc) {
      var sidebar = document.querySelector('.calc-sidebar');
      var data    = CALC_PAGES[slug];
      if (!sidebar || !data) return;
      /* order: Related Articles first, then Related Calculators */
      sidebar.innerHTML = articleCard(data.articles, true) + calcCard(data.calcs);
    }

    if (inBlog) {
      var sidebar = document.querySelector('.article-sidebar');
      var data    = BLOG_PAGES[slug];
      if (!sidebar || !data) return;
      /* order: Related Calculators first, then Related Articles */
      sidebar.innerHTML = blogCalcCard(data.calcs) + articleCard(data.articles, false);
    }
  });

})();

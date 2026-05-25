// Summit & Shore — site interactions

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');

  if (!navToggle || !navLinks) return;

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile navigation
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    header.classList.toggle('menu-open');
    navToggle.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      header.classList.remove('menu-open');
      navToggle.classList.remove('active');
    });
  });

  // Scroll reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateSelectors = [
    '.intro-content',
    '.intro-image',
    '.section-header',
    '.service-card',
    '.feature-card',
    '.cta-banner-content',
    '.cta-banner-image',
    '.hybrid-content',
    '.hybrid-image',
    '.design-content',
    '.design-image',
    '.pillar-card',
    '.owner-service-card',
    '.credibility-callout',
    '.trust-strip-list',
    '.calculator-intro',
    '.revenue-stat',
    '.calculator-panel',
    '.calculator-footer-inner',
    '.calculator-footer',
    '.property-card',
    '.properties-cta',
    '.about-image',
    '.about-content',
    '.faq-item',
    '.contact-content',
    '.contact-form',
    '.page-hero-inner',
    '.page-cta-inner',
    '.markets-area-card',
    '.philosophy-content',
    '.revenue-standalone .revenue-content',
  ];

  animateSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${(i % 6) * 0.08}s`;
      observer.observe(el);
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Thank you! We\'ll be in touch.';
      btn.disabled = true;
      setTimeout(() => {
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 3000);
    });
  }

  // Smooth scroll for same-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  initPropertyCalculator();
});

const MARKET_DATA = {
  seneca: { adrMultiplier: 1.12, occupancy: 60, label: 'Seneca Lake' },
  cayuga: { adrMultiplier: 1.08, occupancy: 58, label: 'Cayuga Lake' },
  keuka: { adrMultiplier: 1.06, occupancy: 57, label: 'Keuka Lake' },
  canandaigua: { adrMultiplier: 1.04, occupancy: 56, label: 'Canandaigua Lake' },
  skaneateles: { adrMultiplier: 1.18, occupancy: 62, label: 'Skaneateles Lake' },
  owasco: { adrMultiplier: 0.96, occupancy: 52, label: 'Owasco Lake' },
  wine: { adrMultiplier: 0.98, occupancy: 50, label: 'Wine Country' },
  countryside: { adrMultiplier: 0.82, occupancy: 46, label: 'Countryside' },
};

const BASE_ADR_BY_BEDROOM = {
  1: 115,
  2: 165,
  3: 215,
  4: 285,
  5: 355,
  6: 425,
};

const MANAGEMENT_UPLIFT = 0.25;
const PLATFORM_FEE_RATE = 0.03;
const MANAGEMENT_FEE_RATE = 0.22;
const MAINTENANCE_RESERVE_RATE = 0.05;
const CLEANING_COST_PER_TURNOVER = 165;

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function initPropertyCalculator() {
  const form = document.getElementById('propertyCalculator');
  if (!form) return;

  const fields = {
    market: document.getElementById('calcMarket'),
    bedrooms: document.getElementById('calcBedrooms'),
    bathrooms: document.getElementById('calcBathrooms'),
    lakefront: document.getElementById('calcLakefront'),
    dock: document.getElementById('calcDock'),
    hotTub: document.getElementById('calcHotTub'),
    firePit: document.getElementById('calcFirePit'),
    occupancy: document.getElementById('calcOccupancy'),
    nightlyRate: document.getElementById('calcNightlyRate'),
    avgStay: document.getElementById('calcAvgStay'),
    reset: document.getElementById('calcReset'),
  };

  const displays = {
    occupancy: document.getElementById('calcOccupancyValue'),
    nightlyRate: document.getElementById('calcNightlyRateValue'),
    avgStay: document.getElementById('calcAvgStayValue'),
    grossAnnual: document.getElementById('resultGrossAnnual'),
    grossMonthly: document.getElementById('resultGrossMonthly'),
    bookedNights: document.getElementById('resultBookedNights'),
    nightlyRateResult: document.getElementById('resultNightlyRate'),
    occupancyResult: document.getElementById('resultOccupancy'),
    reservations: document.getElementById('resultReservations'),
    selfNet: document.getElementById('resultSelfNet'),
    managedNet: document.getElementById('resultManagedNet'),
    selfBreakdown: document.getElementById('resultSelfBreakdown'),
    managedBreakdown: document.getElementById('resultManagedBreakdown'),
    uplift: document.getElementById('resultUplift'),
  };

  function getBedroomCount() {
    return Number.parseInt(fields.bedrooms.value, 10);
  }

  function getBathroomBonus() {
    const baths = Number.parseFloat(fields.bathrooms.value);
    if (baths >= 3) return 1.08;
    if (baths >= 2.5) return 1.05;
    if (baths >= 2) return 1.03;
    return 1;
  }

  function getAmenityBonus() {
    let bonus = 0;
    if (fields.lakefront.checked) bonus += 0.22;
    if (fields.dock.checked) bonus += 0.1;
    if (fields.hotTub.checked) bonus += 0.08;
    if (fields.firePit.checked) bonus += 0.04;
    return bonus;
  }

  function computeEstimates() {
    const market = MARKET_DATA[fields.market.value];
    const bedrooms = getBedroomCount();
    const baseAdr = BASE_ADR_BY_BEDROOM[bedrooms] || BASE_ADR_BY_BEDROOM[6];
    const adr = Math.round(baseAdr * market.adrMultiplier * getBathroomBonus() * (1 + getAmenityBonus()) / 5) * 5;

    let occupancy = market.occupancy;
    if (bedrooms >= 5) occupancy -= 3;
    if (bedrooms <= 2) occupancy += 2;
    if (fields.lakefront.checked) occupancy += 4;
    occupancy = Math.min(78, Math.max(38, occupancy));

    return { adr, occupancy };
  }

  function applyEstimates() {
    const { adr, occupancy } = computeEstimates();
    fields.nightlyRate.value = adr;
    fields.occupancy.value = occupancy;
  }

  function renderBreakdown(listEl, items) {
    listEl.innerHTML = items
      .map(({ label, value }) => `<li><span>${label}</span><span>${value}</span></li>`)
      .join('');
  }

  function calculate() {
    const occupancy = Number(fields.occupancy.value);
    const nightlyRate = Number(fields.nightlyRate.value);
    const avgStay = Number(fields.avgStay.value);

    displays.occupancy.textContent = `${occupancy}%`;
    displays.nightlyRate.textContent = currencyFormatter.format(nightlyRate);
    displays.avgStay.textContent = `${avgStay.toFixed(1)} nights`;

    const bookedNights = Math.round(365 * (occupancy / 100));
    const grossAnnual = bookedNights * nightlyRate;
    const reservations = Math.max(1, Math.round(bookedNights / avgStay));
    const cleaningCost = reservations * CLEANING_COST_PER_TURNOVER;
    const platformFees = grossAnnual * PLATFORM_FEE_RATE;
    const maintenance = grossAnnual * MAINTENANCE_RESERVE_RATE;

    const selfNet = grossAnnual - platformFees - cleaningCost - maintenance;

    const managedGross = grossAnnual * (1 + MANAGEMENT_UPLIFT);
    const managedPlatform = managedGross * PLATFORM_FEE_RATE;
    const managedReservations = Math.max(1, Math.round((365 * (Math.min(occupancy + 5, 85) / 100)) / avgStay));
    const managedCleaning = managedReservations * CLEANING_COST_PER_TURNOVER;
    const managementFee = managedGross * MANAGEMENT_FEE_RATE;
    const managedMaintenance = managedGross * MAINTENANCE_RESERVE_RATE;
    const managedNet = managedGross - managementFee - managedPlatform - managedCleaning - managedMaintenance;

    displays.grossAnnual.textContent = currencyFormatter.format(grossAnnual);
    displays.grossMonthly.textContent = `≈ ${currencyFormatter.format(grossAnnual / 12)} / month`;
    displays.bookedNights.textContent = bookedNights.toLocaleString();
    displays.nightlyRateResult.textContent = currencyFormatter.format(nightlyRate);
    displays.occupancyResult.textContent = `${occupancy}%`;
    displays.reservations.textContent = reservations.toLocaleString();
    displays.selfNet.textContent = currencyFormatter.format(selfNet);
    displays.managedNet.textContent = currencyFormatter.format(managedNet);

    const upliftAmount = managedNet - selfNet;
    displays.uplift.textContent = `${upliftAmount >= 0 ? '+' : ''}${currencyFormatter.format(upliftAmount)} more per year vs. self-managed`;

    renderBreakdown(displays.selfBreakdown, [
      { label: 'Gross revenue', value: currencyFormatter.format(grossAnnual) },
      { label: 'Platform fees (~3%)', value: `−${currencyFormatter.format(platformFees)}` },
      { label: 'Cleaning (~$165/turn)', value: `−${currencyFormatter.format(cleaningCost)}` },
      { label: 'Maintenance reserve (~5%)', value: `−${currencyFormatter.format(maintenance)}` },
    ]);

    renderBreakdown(displays.managedBreakdown, [
      { label: 'Gross revenue (+25%)', value: currencyFormatter.format(managedGross) },
      { label: 'Management fee (~22%)', value: `−${currencyFormatter.format(managementFee)}` },
      { label: 'Platform fees (~3%)', value: `−${currencyFormatter.format(managedPlatform)}` },
      { label: 'Cleaning & upkeep', value: `−${currencyFormatter.format(managedCleaning + managedMaintenance)}` },
    ]);
  }

  const structuralInputs = [
    fields.market,
    fields.bedrooms,
    fields.bathrooms,
    fields.lakefront,
    fields.dock,
    fields.hotTub,
    fields.firePit,
  ];

  structuralInputs.forEach((input) => {
    input.addEventListener('change', () => {
      applyEstimates();
      calculate();
    });
  });

  [fields.occupancy, fields.nightlyRate, fields.avgStay].forEach((input) => {
    input.addEventListener('input', calculate);
  });

  fields.reset.addEventListener('click', () => {
    applyEstimates();
    fields.avgStay.value = 3.2;
    calculate();
  });

  applyEstimates();
  calculate();
}

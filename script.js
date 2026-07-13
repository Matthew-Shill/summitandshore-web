// Summit & Shore — site interactions

const CALENDLY_BOOKING_URL =
  'https://calendly.com/justin-summitandshore/30min?month=2026-05';

const LEGAL_DOCUMENTS = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'July 13, 2026',
    html: `
      <p>Summit &amp; Shore Hospitality LLC (“<strong>Summit &amp; Shore</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”) respects your privacy. This Privacy Policy explains how we collect, use, share, and protect personal information when you visit <strong>summitandshore.co</strong> or contact us about short-term rental co-hosting and related hospitality services in the Finger Lakes region of New York.</p>

      <h3>1. Information We Collect</h3>
      <p>We may collect information you choose to provide, including through our website inquiry form:</p>
      <ul>
        <li><strong>Contact details</strong> — such as your name and email address</li>
        <li><strong>Property information</strong> — such as a property address or location you share with us</li>
        <li><strong>Communications</strong> — messages, call notes, or booking details related to your inquiry</li>
      </ul>
      <p>If you schedule a consultation through Calendly or a similar scheduling tool, that provider may collect additional information (for example, name, email, phone number, and meeting preferences) under its own privacy policy.</p>
      <p>We may also collect limited technical data automatically, such as browser type, device information, pages viewed, and general usage analytics that help us operate and improve the site.</p>

      <h3>2. How We Use Information</h3>
      <p>We use personal information to:</p>
      <ul>
        <li>Respond to inquiries and provide revenue assessments or consultations</li>
        <li>Schedule and prepare for owner conversations</li>
        <li>Communicate about our services, follow-ups, and (where appropriate) operational updates</li>
        <li>Operate, secure, and improve our website and business processes</li>
        <li>Comply with legal obligations and protect our rights</li>
      </ul>
      <p>We do <strong>not</strong> sell your personal information.</p>

      <h3>3. How We Share Information</h3>
      <p>We share information only as needed to run our business, including with:</p>
      <ul>
        <li><strong>Service providers</strong> that help us process form submissions, send email, schedule meetings, host our website, or provide IT support (for example, form-delivery and scheduling tools)</li>
        <li><strong>Professional advisors</strong> such as attorneys or accountants, when reasonably necessary</li>
        <li><strong>Authorities</strong> when required by law, legal process, or to protect Summit &amp; Shore, our clients, guests, or the public</li>
      </ul>
      <p>If we enter into a management or co-hosting relationship with you, additional information sharing may occur as described in a separate written agreement and as needed to operate the property (for example, with cleaning partners, maintenance vendors, or booking platforms).</p>

      <h3>4. Form Submissions &amp; Third-Party Tools</h3>
      <p>Website inquiry forms are processed through third-party services so your message can be delivered to us. Scheduling links may open third-party booking pages. Those providers process data according to their own terms and privacy practices. We encourage you to review them before submitting information.</p>

      <h3>5. Retention</h3>
      <p>We retain personal information only as long as reasonably necessary for the purposes described above, to maintain business records, resolve disputes, and meet legal or contractual requirements. Inquiry information that does not lead to an ongoing relationship is typically kept for a limited administrative period and then deleted or anonymized, unless a longer retention period is required or appropriate.</p>

      <h3>6. Security</h3>
      <p>We take reasonable administrative, technical, and organizational measures to protect personal information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

      <h3>7. Your Choices &amp; Requests</h3>
      <p>Depending on applicable law, you may request access to, correction of, or deletion of personal information we hold about you, or ask us to limit certain processing. To make a request, contact us at <a href="mailto:Justin@summitandshore.co">Justin@summitandshore.co</a> or <a href="tel:+15857700563">(585) 770-0563</a>. We may need to verify your identity before responding.</p>

      <h3>8. Children’s Privacy</h3>
      <p>Our website and services are directed to property owners and adults. We do not knowingly collect personal information from children under 13. If you believe a child has provided information to us, please contact us so we can delete it.</p>

      <h3>9. External Links</h3>
      <p>Our site may link to third-party websites or tools. We are not responsible for the privacy practices or content of those third parties.</p>

      <h3>10. Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time. The “Last updated” date at the top of this notice reflects the latest revision. Continued use of the website after changes means you acknowledge the updated policy.</p>

      <h3>11. Contact Us</h3>
      <p>Summit &amp; Shore Hospitality LLC<br>Finger Lakes Region, New York<br>Email: <a href="mailto:Justin@summitandshore.co">Justin@summitandshore.co</a><br>Phone: <a href="tel:+15857700563">(585) 770-0563</a></p>
    `,
  },
  terms: {
    title: 'Terms of Service',
    updated: 'July 13, 2026',
    html: `
      <p>These Terms of Service (“<strong>Terms</strong>”) govern your use of the website <strong>summitandshore.co</strong> and related online materials operated by Summit &amp; Shore Hospitality LLC (“<strong>Summit &amp; Shore</strong>,” “<strong>we</strong>,” “<strong>us</strong>,” or “<strong>our</strong>”). By accessing or using this website, or by submitting an inquiry through our forms, you agree to these Terms.</p>

      <h3>1. Who We Are</h3>
      <p>Summit &amp; Shore provides boutique short-term rental co-hosting, management, staging, and related hospitality services in the Finger Lakes region of New York. Website content is for general information about our business and how to contact us.</p>

      <h3>2. Informational Use Only</h3>
      <p>Nothing on this website creates a property-management, co-hosting, agency, partnership, employment, or other professional relationship. Any co-hosting or management engagement is formed only through a separate written agreement signed by you and Summit &amp; Shore.</p>

      <h3>3. Inquiries &amp; Consultations</h3>
      <p>When you submit your name, email, property location, or other details through our contact form, you represent that the information is accurate and that you are authorized to share it. Submitting an inquiry does not obligate us to offer services, accept a property, or enter into an agreement.</p>
      <p>If a scheduling link opens (for example, Calendly), that booking experience is provided by a third party and may be subject to additional terms.</p>

      <h3>4. Estimates, Calculators &amp; Projections</h3>
      <p>Any revenue calculator, occupancy estimate, nightly-rate projection, comparison, or similar tool on this site is provided for <strong>illustrative purposes only</strong>. Results are estimates based on assumptions and general market inputs. They are <strong>not</strong> guarantees, appraisals, financial advice, tax advice, or legal advice. Actual performance varies based on property condition, location, seasonality, regulations, guest demand, pricing, and many other factors outside our control.</p>

      <h3>5. Acceptable Use</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Use the site for any unlawful, harmful, or fraudulent purpose</li>
        <li>Attempt to disrupt, scrape, reverse engineer, or interfere with the site or its security</li>
        <li>Submit malicious code, spam, or misleading information</li>
        <li>Impersonate another person or misrepresent your affiliation with a property</li>
      </ul>
      <p>We may suspend or restrict access to the site at any time.</p>

      <h3>6. Intellectual Property</h3>
      <p>All website content, branding, logos, text, imagery, design, and related materials are owned by Summit &amp; Shore or used with permission. You may not copy, modify, distribute, or commercially exploit site content without our prior written consent, except for limited personal, non-commercial viewing.</p>

      <h3>7. Third-Party Services &amp; Links</h3>
      <p>The site may integrate or link to third-party services (including form delivery and scheduling tools). We do not control and are not responsible for third-party sites, services, availability, or practices. Your use of those services is at your own risk and subject to their terms.</p>

      <h3>8. Disclaimer of Warranties</h3>
      <p>THE WEBSITE AND ALL CONTENT, TOOLS, AND MATERIALS ARE PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.</p>

      <h3>9. Limitation of Liability</h3>
      <p>TO THE FULLEST EXTENT PERMITTED BY LAW, SUMMIT &amp; SHORE HOSPITALITY LLC AND ITS OWNERS, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATED TO YOUR USE OF THE WEBSITE, INQUIRY SUBMISSIONS, ESTIMATES, OR RELIANCE ON SITE CONTENT — WHETHER BASED IN CONTRACT, TORT, OR OTHERWISE — EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      <p>OUR TOTAL LIABILITY FOR CLAIMS ARISING FROM WEBSITE USE OR ONLINE INQUIRIES WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (US $100), EXCEPT WHERE LIABILITY CANNOT BE LIMITED UNDER APPLICABLE LAW.</p>
      <p>These limitations do not affect rights or remedies under a separate signed management or co-hosting agreement, which will control for those services.</p>

      <h3>10. Indemnification</h3>
      <p>You agree to indemnify and hold harmless Summit &amp; Shore Hospitality LLC and its owners, officers, employees, and agents from claims, losses, damages, liabilities, and expenses (including reasonable attorneys’ fees) arising from your misuse of the website, your submission of inaccurate or unauthorized information, or your violation of these Terms.</p>

      <h3>11. Privacy</h3>
      <p>Our collection and use of personal information is described in our Privacy Policy. By using the site or submitting a form, you acknowledge that policy.</p>

      <h3>12. Governing Law</h3>
      <p>These Terms are governed by the laws of the State of New York, without regard to conflict-of-law principles. You agree that exclusive venue for disputes arising from these Terms or website use will be the state or federal courts located in New York, unless applicable law requires otherwise.</p>

      <h3>13. Changes</h3>
      <p>We may update these Terms at any time by posting a revised version on this website. The “Last updated” date reflects the latest revision. Continued use of the site after changes constitutes acceptance of the updated Terms.</p>

      <h3>14. Contact</h3>
      <p>Questions about these Terms may be sent to:<br>Summit &amp; Shore Hospitality LLC<br>Email: <a href="mailto:Justin@summitandshore.co">Justin@summitandshore.co</a><br>Phone: <a href="tel:+15857700563">(585) 770-0563</a></p>
    `,
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const contactForm = document.getElementById('contactForm');

  initLegalModals();

  if (header && navToggle && navLinks) {
    // Sticky header on scroll
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });

    const setMobileMenuOpen = (open) => {
      navLinks.classList.toggle('open', open);
      header.classList.toggle('menu-open', open);
      navToggle.classList.toggle('active', open);
      document.body.classList.toggle('menu-open', open);
    };

    // Mobile navigation
    navToggle.addEventListener('click', () => {
      setMobileMenuOpen(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMobileMenuOpen(false));
    });

    // Smooth scroll for same-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        if (this.hasAttribute('data-legal-open')) return;
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
  }

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
    '.intro-cta',
    '.section-header',
    '.service-card',
    '.feature-card',
    '.cta-banner-content',
    '.cta-banner-image',
    '.hybrid-content',
    '.hybrid-image',
    '.design-content',
    '.design-image',
    '.advantage-simple-card',
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
    '.contact-prelude',
    '.contact-form',
    '.page-hero-inner',
    '.page-cta-inner',
    '.markets-area-card',
    '.philosophy-content',
    '.revenue-standalone .revenue-content',
    '.service-pillar',
    '.services-philosophy',
    '.presentation-editorial',
    '.presentation-lead',
    '.presentation-hero-content',
  ];

  animateSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${(i % 6) * 0.08}s`;
      observer.observe(el);
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending…';

      window.open(CALENDLY_BOOKING_URL, '_blank', 'noopener,noreferrer');

      try {
        const response = await fetch('https://formsubmit.co/ajax/Justin@summitandshore.co', {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });
        if (!response.ok) throw new Error('Form submission failed');

        btn.textContent = 'Thank you! We\'ll be in touch.';
        contactForm.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 3000);
      } catch {
        btn.textContent = 'Could not send — please email Justin@summitandshore.co';
        btn.disabled = false;
      }
    });
  }

  initPropertyCalculator();
});

function initLegalModals() {
  if (document.getElementById('legalModal')) return;

  const modal = document.createElement('div');
  modal.id = 'legalModal';
  modal.className = 'legal-modal';
  modal.setAttribute('hidden', '');
  modal.innerHTML = `
    <button type="button" class="legal-modal-backdrop" data-legal-close aria-label="Close dialog"></button>
    <div class="legal-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="legalModalTitle">
      <div class="legal-modal-header">
        <div>
          <h2 id="legalModalTitle"></h2>
          <p class="legal-modal-updated" id="legalModalUpdated"></p>
        </div>
        <button type="button" class="legal-modal-close" data-legal-close aria-label="Close">&times;</button>
      </div>
      <div class="legal-modal-body" id="legalModalBody" tabindex="0"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const titleEl = document.getElementById('legalModalTitle');
  const updatedEl = document.getElementById('legalModalUpdated');
  const bodyEl = document.getElementById('legalModalBody');
  let lastFocus = null;

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.classList.remove('legal-modal-open');
    modal.setAttribute('hidden', '');
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
  };

  const openModal = (docKey) => {
    const doc = LEGAL_DOCUMENTS[docKey];
    if (!doc) return;
    lastFocus = document.activeElement;
    titleEl.textContent = doc.title;
    updatedEl.textContent = `Last updated ${doc.updated}`;
    bodyEl.innerHTML = doc.html;
    bodyEl.scrollTop = 0;
    modal.removeAttribute('hidden');
    document.body.classList.add('legal-modal-open');
    requestAnimationFrame(() => modal.classList.add('is-open'));
    modal.querySelector('.legal-modal-close').focus();
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-legal-open]');
    if (!trigger) return;
    e.preventDefault();
    openModal(trigger.getAttribute('data-legal-open'));
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-legal-close]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

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

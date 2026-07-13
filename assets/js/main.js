(() => {
  const root = document.documentElement;
  const langButton = document.querySelector('[data-lang-toggle]');
  const themeButton = document.querySelector('[data-theme-toggle]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const navLinks = document.querySelector('.nav-links');

  const translations = {
    en: {
      languageLabel: 'FR',
      languageTitle: 'Afficher en français',
      themeTitle: 'Change color theme'
    },
    fr: {
      languageLabel: 'EN',
      languageTitle: 'Show in English',
      themeTitle: 'Changer le thème'
    }
  };

  function setLanguage(lang) {
    const selected = lang === 'fr' ? 'fr' : 'en';
    root.lang = selected;
    localStorage.setItem('site-language', selected);
    document.querySelectorAll('[data-en][data-fr]').forEach((el) => {
      const value = el.getAttribute(`data-${selected}`);
      if (value !== null) el.textContent = value;
    });
    document.querySelectorAll('[data-html-en][data-html-fr]').forEach((el) => {
      const value = el.getAttribute(`data-html-${selected}`);
      if (value !== null) el.innerHTML = value;
    });
    if (langButton) {
      langButton.textContent = translations[selected].languageLabel;
      langButton.title = translations[selected].languageTitle;
      langButton.setAttribute('aria-label', translations[selected].languageTitle);
    }
    document.title = document.body.getAttribute(`data-title-${selected}`) || document.title;
  }

  function setTheme(theme) {
    const selected = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = selected;
    localStorage.setItem('site-theme', selected);
    if (themeButton) {
      themeButton.textContent = selected === 'dark' ? '☀' : '◐';
      themeButton.setAttribute('aria-pressed', String(selected === 'dark'));
    }
  }

  const savedLanguage = localStorage.getItem('site-language');
  const browserLanguage = navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  setLanguage(savedLanguage || browserLanguage);

  const savedTheme = localStorage.getItem('site-theme');
  const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (preferredDark ? 'dark' : 'light'));

  langButton?.addEventListener('click', () => setLanguage(root.lang === 'fr' ? 'en' : 'fr'));
  themeButton?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  menuButton?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(navLinks?.classList.contains('open')));
  });
  navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => navLinks.classList.remove('open')));

  document.querySelectorAll('[data-current-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
})();

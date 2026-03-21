# Project Configuration
const CONFIG = {
  // Site Info
  site: {
    title: 'СоцЧистка',
    description: 'Очистите свои аккаунты от старого контента',
    version: '1.0.0'
  },

  // Platform URLs
  platforms: {
    vk: 'https://vk.com',
    ok: 'https://ok.ru',
    tiktok: 'https://tiktok.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    telegram: 'https://telegram.org',
    twitter: 'https://x.com'
  },

  // Script Settings
  scripts: {
    vk: {
      delay: 1500,        // ms between actions
      scrollDistance: 1000
    },
    youtube: {
      delay: 1200
    }
  },

  // Tracker Storage Key
  storageKey: 'social-cleaner-progress',

  // Modal Animation Duration
  modalAnimationDuration: 250,

  // Copy Feedback Duration
  copyFeedbackDuration: 2000
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

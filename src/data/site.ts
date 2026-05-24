export type Locale = 'zh-tw' | 'en';

export const site = {
  name: {
    'zh-tw': '青銀共創百歲人生',
    en: 'Co-Creating a 100-Year Life Across Generations',
  },
  shortName: {
    'zh-tw': '青銀共創百歲人生',
    en: '100-Year Life Lab',
  },
  description: {
    'zh-tw': '以青銀共學、地方實踐與影像紀錄，探索百歲人生的學習、照顧與連結。',
    en: 'A bilingual field notebook for intergenerational learning, local practice, and the shared imagination of a 100-year life.',
  },
};

export const navItems = {
  'zh-tw': [
    { label: '關於我們', path: '/about/' },
    { label: '計畫與實踐', path: '/projects/' },
    { label: '影像紀錄', path: '/media/' },
    { label: '成果與報導', path: '/outcomes/' },
    { label: '團隊成員', path: '/people/' },
    { label: '聯絡合作', path: '/contact/' },
  ],
  en: [
    { label: 'About', path: '/en/about/' },
    { label: 'Projects', path: '/en/projects/' },
    { label: 'Media', path: '/en/media/' },
    { label: 'Outcomes', path: '/en/outcomes/' },
    { label: 'People', path: '/en/people/' },
    { label: 'Contact', path: '/en/contact/' },
  ],
} satisfies Record<Locale, { label: string; path: string }[]>;

export const home = {
  'zh-tw': {
    eyebrow: '研究手札 / Field Notebook',
    title: '青銀共創百歲人生',
    subtitle: '把世代相遇的現場，寫成一份共同生活的研究手札。',
    primaryCta: '了解計畫',
    secondaryCta: '觀看影像紀錄',
    themesTitle: '我們關心的三件事',
    themes: [
      {
        title: '青銀共學',
        text: '讓不同世代在真實場域中相遇、學習與合作。',
      },
      {
        title: '百歲人生',
        text: '從高齡化社會出發，探索更有尊嚴與連結的生活想像。',
      },
      {
        title: '地方實踐',
        text: '透過課程、研究與行動，連結社區、學校與公共議題。',
      },
    ],
    projectTitle: '計畫與實踐',
    projectIntro: '先放代表性計畫卡，後續再補正式名稱、年份、地點與成果。',
    mediaTitle: '影像紀錄',
    mediaIntro: '照片、影片與剪報會成為網站主體；這裡先保留拼貼式版面。',
    outcomesTitle: '成果與報導',
    outcomesIntro: '報導、活動紀錄與成果摘要會用剪報簿形式呈現。',
    invitationTitle: '一起想像百歲人生',
    invitationText: '期待與學校、社區、公共部門與在地組織共同推動青銀共創。',
  },
  en: {
    eyebrow: 'Field Notebook',
    title: 'Co-Creating a 100-Year Life Across Generations',
    subtitle: 'A warm research notebook for the places where generations meet, learn, and build possible futures together.',
    primaryCta: 'Explore Projects',
    secondaryCta: 'View Media',
    themesTitle: 'Three Things We Care About',
    themes: [
      {
        title: 'Intergenerational Learning',
        text: 'Creating real-world spaces where generations meet, learn, and collaborate.',
      },
      {
        title: '100-Year Life',
        text: 'Exploring dignified, connected ways of living in an aging society.',
      },
      {
        title: 'Local Practice',
        text: 'Connecting communities, universities, courses, and public issues through action.',
      },
    ],
    projectTitle: 'Projects and Practice',
    projectIntro: 'Featured project cards will later include official names, years, places, and outcomes.',
    mediaTitle: 'Media Notebook',
    mediaIntro: 'Photos, videos, and press clippings are the main storytelling material.',
    outcomesTitle: 'Outcomes and Reports',
    outcomesIntro: 'Reports, activity records, and media coverage will be presented like a field scrapbook.',
    invitationTitle: 'Let Us Imagine a 100-Year Life Together',
    invitationText: 'We welcome collaboration with schools, communities, public agencies, and local organizations.',
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const pageCopy = {
  'zh-tw': {
    about: {
      title: '關於我們',
      intro: '這裡將放研究室的理念、老師介紹、研究主題與合作脈絡。',
      sections: ['研究室使命', '老師與研究方向', '合作對象', '青銀共創的方法'],
    },
    projects: {
      title: '計畫與實踐',
      intro: '以計畫故事頁整理進行中與歷年計畫，讓照片、影片與報導可以連回完整脈絡。',
      sections: ['進行中計畫', '歷年計畫', '場域與合作夥伴', '計畫故事模板'],
    },
    media: {
      title: '影像紀錄',
      intro: '照片牆與影片索引會是網站的主要入口，適合用年份、主題與地點篩選。',
      sections: ['照片拼貼牆', '影片精選', '活動現場', '素材上傳規則'],
    },
    outcomes: {
      title: '成果與報導',
      intro: '以剪報簿形式整理新聞、活動紀錄、成果摘要、簡報與公開文件。',
      sections: ['媒體報導', '活動紀錄', '成果摘要', '公開資源'],
    },
    people: {
      title: '團隊成員',
      intro: '以名片牆呈現老師、研究生、助理、合作夥伴與歷屆成員。',
      sections: ['主持人', '研究團隊', '合作夥伴', '歷屆成員'],
    },
    contact: {
      title: '聯絡合作',
      intro: '放置合作邀請、聯絡方式、學校單位資訊與社群連結。',
      sections: ['合作邀請', '聯絡資訊', '學校單位', '社群連結'],
    },
  },
  en: {
    about: {
      title: 'About',
      intro: 'This page will introduce the lab, principal investigator, research themes, and collaboration context.',
      sections: ['Mission', 'Research Direction', 'Partners', 'Our Approach'],
    },
    projects: {
      title: 'Projects',
      intro: 'Project story pages will connect ongoing and past work with photos, videos, and public reports.',
      sections: ['Ongoing Projects', 'Past Projects', 'Sites and Partners', 'Story Template'],
    },
    media: {
      title: 'Media',
      intro: 'The media wall will become a visual index organized by year, topic, and place.',
      sections: ['Photo Wall', 'Featured Videos', 'Field Moments', 'Media Guidelines'],
    },
    outcomes: {
      title: 'Outcomes',
      intro: 'News, activity records, outcome summaries, slide decks, and public documents will be collected here.',
      sections: ['News Coverage', 'Activity Records', 'Outcome Highlights', 'Public Resources'],
    },
    people: {
      title: 'People',
      intro: 'A warm card wall for the principal investigator, students, assistants, partners, and alumni.',
      sections: ['Principal Investigator', 'Research Team', 'Partners', 'Alumni'],
    },
    contact: {
      title: 'Contact',
      intro: 'Collaboration invitations, contact information, university affiliation, and social links.',
      sections: ['Collaborate With Us', 'Contact', 'Affiliation', 'Social Links'],
    },
  },
} satisfies Record<Locale, Record<string, { title: string; intro: string; sections: string[] }>>;

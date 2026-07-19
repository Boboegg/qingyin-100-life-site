export type Locale = 'zh-tw' | 'en';

export const site = {
  name: {
    'zh-tw': '青銀共創百歲人生 LAB',
    en: '100-Year Life Co-Creation Lab',
  },
  shortName: {
    'zh-tw': '青銀共創 LAB',
    en: '100-Year Life Lab',
  },
  description: {
    'zh-tw': '以代間共創、高齡學習、健康促進與社區照顧為核心，連結研究、學程、場域計畫與成果資源。',
    en: 'A bilingual lab portal for intergenerational learning, caring communities, healthy aging, field projects, and credit-program resources.',
  },
};

export const navItems = {
  'zh-tw': [
    { label: '關於 LAB', path: '/about/' },
    { label: '研究主題', path: '/research/' },
    { label: '場域計畫', path: '/field-projects/' },
    { label: '學分學程', path: '/program/' },
    { label: '成果資源', path: '/resources/' },
    { label: '團隊合作', path: '/team/' },
  ],
  en: [
    { label: 'About', path: '/en/about/' },
    { label: 'Research', path: '/en/research/' },
    { label: 'Field Projects', path: '/en/field-projects/' },
    { label: 'Credit Program', path: '/en/program/' },
    { label: 'Resources', path: '/en/resources/' },
    { label: 'Team & Partners', path: '/en/team/' },
  ],
} satisfies Record<Locale, { label: string; path: string }[]>;

export const home = {
  'zh-tw': {
    eyebrow: 'LAB Portal',
    title: '青銀共創百歲人生 LAB',
    subtitle: '以代間共創、高齡學習、健康促進與社區照顧為核心，連結大學課程、地方場域與行動研究。',
    primaryCta: '看研究主題',
    secondaryCta: '看成果資源',
    pillarsTitle: 'LAB 做什麼',
    researchTitle: '研究主題',
    researchIntro: '這裡整理 LAB 的學術關懷，也讓每個主題都能連回場域、學程與成果。',
    fieldTitle: '場域計畫',
    fieldIntro: 'Young Village、Young Stay、籐寮仔與其他社區據點，會逐步整理成可追蹤的場域故事。',
    programTitle: '青銀共創跨域學分學程',
    programIntro: '學程是課程、實習、暑期駐村與學生作品的上層容器。',
    resourcesTitle: '成果資源',
    resourcesIntro: '用標籤把研究主題、場域計畫與學程串在一起，成果只維護一次。',
    invitationTitle: '一起打開百歲人生的地方現場',
    invitationText: '歡迎研究夥伴、社區組織、學校與公共部門，與我們共同推動跨世代關懷社區據點。',
  },
  en: {
    eyebrow: 'LAB Portal',
    title: '100-Year Life Co-Creation Lab',
    subtitle: 'A research and action portal connecting intergenerational learning, healthy aging, caring communities, university courses, and local field practice.',
    primaryCta: 'Explore Research',
    secondaryCta: 'View Resources',
    pillarsTitle: 'What the Lab Connects',
    researchTitle: 'Research Themes',
    researchIntro: 'The lab’s academic agenda connects directly to field projects, the credit program, and tagged resources.',
    fieldTitle: 'Field Projects',
    fieldIntro: 'Young Village, Young Stay, Tengliaozai, and other community sites will grow into traceable field stories.',
    programTitle: 'Qingyin Intergenerational Credit Program',
    programIntro: 'The credit program is the container for courses, practicum, summer residency, and student work.',
    resourcesTitle: 'Resources',
    resourcesIntro: 'Tags connect research themes, field projects, and the credit program so each output is maintained once.',
    invitationTitle: 'Open the Local Field of a 100-Year Life',
    invitationText: 'We welcome research partners, community organizations, schools, and public agencies to build intergenerational caring community centers with us.',
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const pageCopy = {
  'zh-tw': {
    about: {
      title: '關於我們',
      intro: '這裡將放研究室的理念、老師介紹、研究主題與合作脈絡。',
      sections: ['研究室使命', '老師與研究方向', '合作對象', '青銀共創的方法'],
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
    contact: {
      title: 'Contact',
      intro: 'Collaboration invitations, contact information, university affiliation, and social links.',
      sections: ['Collaborate With Us', 'Contact', 'Affiliation', 'Social Links'],
    },
  },
} satisfies Record<Locale, Record<string, { title: string; intro: string; sections: string[] }>>;

import type { Locale } from './site';

type LocalizedString = Record<Locale, string>;

export type RelationCategory = 'research' | 'field' | 'program';
export type ContentStatus = 'confirmed' | 'pending';
export type ResourceVisibility = 'public' | 'internal' | 'needs-consent';
export type ResourceRelations = Record<RelationCategory, string[]>;

export type PortalItem = {
  id: string;
  title: LocalizedString;
  eyebrow?: LocalizedString;
  summary: LocalizedString;
  detail?: LocalizedString;
  // Display keywords only. Linkable cross-page relations live on ResourceItem.relations.
  tags: string[];
};

export type ResourceItem = PortalItem & {
  year: string;
  type: LocalizedString;
  status: ContentStatus;
  visibility: ResourceVisibility;
  relations: ResourceRelations;
};

export const labIdentity = {
  'zh-tw': {
    eyebrow: 'LAB Portal',
    title: '青銀共創百歲人生 LAB',
    englishName: '100-Year Life Co-Creation Lab',
    concept: 'Intergenerational Learning, Caring Communities, and Healthy Aging',
    summary:
      '以代間共創、高齡學習、健康促進與社區照顧為核心，連結大學課程、地方場域與行動研究，探索百歲人生中的學習、照顧與共生可能。',
  },
  en: {
    eyebrow: 'LAB Portal',
    title: '100-Year Life Co-Creation Lab',
    englishName: '青銀共創百歲人生 LAB',
    concept: 'Intergenerational Learning, Caring Communities, and Healthy Aging',
    summary:
      'A research and action portal connecting intergenerational learning, healthy aging, caring communities, university courses, and local field practice.',
  },
};

export const portalPillars: PortalItem[] = [
  {
    id: 'research',
    title: { 'zh-tw': '研究主題', en: 'Research' },
    summary: {
      'zh-tw': '整理 LAB 的學術關懷，包含代間學習、高齡學習、健康促進、社區照顧、AI / 數位健康與地方實踐。',
      en: 'The lab’s research agenda: intergenerational learning, older-adult learning, health promotion, community care, AI and digital health, and local practice.',
    },
    tags: ['research'],
  },
  {
    id: 'field-projects',
    title: { 'zh-tw': '場域計畫', en: 'Field Projects' },
    summary: {
      'zh-tw': '放置 Young Village、Young Stay、籐寮仔與其他社區據點，讓每個場域有自己的故事與成果脈絡。',
      en: 'Field-based work including Young Village, Young Stay, Tengliaozai, and other community sites, each with its own story and resource trail.',
    },
    tags: ['field'],
  },
  {
    id: 'program',
    title: { 'zh-tw': '學分學程', en: 'Credit Program' },
    summary: {
      'zh-tw': '青銀共創跨域學分學程是人才培育容器，課程、社區實習、暑期駐村與學生作品都放在這裡。',
      en: 'The credit program is the talent-development container for courses, community practicum, summer residency, and student work.',
    },
    tags: ['program'],
  },
  {
    id: 'resources',
    title: { 'zh-tw': '成果資源', en: 'Resources' },
    summary: {
      'zh-tw': '用標籤串聯研究、場域與學程，讓影片、教材、活動紀錄、研討會與成果摘要只維護一次。',
      en: 'A tagged resource library connecting research, field projects, and the credit program without duplicating the same output across pages.',
    },
    tags: ['resource'],
  },
];

export const researchThemes: PortalItem[] = [
  {
    id: 'intergenerational-learning',
    title: { 'zh-tw': '代間學習', en: 'Intergenerational Learning' },
    summary: {
      'zh-tw': '關注青年與長者如何在真實場域中互相教、互相學，從服務關係走向共同創作。',
      en: 'How younger and older generations teach, learn, and co-create in real-world settings instead of staying in one-way service roles.',
    },
    tags: ['代間學習', 'intergenerational-learning'],
  },
  {
    id: 'older-adult-learning',
    title: { 'zh-tw': '高齡學習', en: 'Older-Adult Learning' },
    summary: {
      'zh-tw': '從百歲人生的角度看晚年學習、生活智慧、社會參與與尊嚴感。',
      en: 'Learning, life wisdom, social participation, and dignity across a longer life course.',
    },
    tags: ['高齡學習', 'older-adult-learning'],
  },
  {
    id: 'health-promotion',
    title: { 'zh-tw': '健康促進', en: 'Health Promotion' },
    summary: {
      'zh-tw': '把健康老化、營養、睡眠、慢性病照顧與健康資訊判讀轉化為可操作的課程與社區行動。',
      en: 'Turning healthy aging, nutrition, sleep, chronic-care awareness, and health-information judgment into courses and community action.',
    },
    tags: ['健康促進', 'health-promotion'],
  },
  {
    id: 'community-care',
    title: { 'zh-tw': '社區照顧', en: 'Community Care' },
    summary: {
      'zh-tw': '觀察社區據點、志工組織、地方協會與公共資源如何一起支持在地老化。',
      en: 'How community centers, volunteer teams, local associations, and public resources support aging in place.',
    },
    tags: ['社區照顧', 'community-care'],
  },
  {
    id: 'ai-digital-health',
    title: { 'zh-tw': 'AI / 數位健康', en: 'AI and Digital Health' },
    summary: {
      'zh-tw': '研究 AI 工具、手機設定、健康資訊查核與數位中介如何進入高齡學習現場。',
      en: 'How AI tools, mobile settings, health-information verification, and digital mediation enter older-adult learning contexts.',
    },
    tags: ['AI', '數位健康', 'ai-digital-health'],
  },
  {
    id: 'local-practice',
    title: { 'zh-tw': '地方實踐', en: 'Local Practice' },
    summary: {
      'zh-tw': '以 USR、田野調查、地方協作與社區自主發展，檢視大學如何成為地方行動的夥伴。',
      en: 'USR, fieldwork, local collaboration, and community self-development as ways for universities to become local partners.',
    },
    tags: ['地方實踐', 'local-practice'],
  },
];

export const fieldProjects: PortalItem[] = [
  {
    id: 'young-village',
    eyebrow: { 'zh-tw': '平地農村', en: 'Rural Plain Site' },
    title: { 'zh-tw': 'Young Village', en: 'Young Village' },
    summary: {
      'zh-tw': '以平地農村的長期經營為主軸，串聯賴阿姨的地方經驗與新住民合作，作為未來可持續擴充的場域計畫。',
      en: 'A rural plain field project centered on long-term village engagement, local experience around Auntie Lai, and collaboration with new immigrant communities.',
    },
    detail: {
      'zh-tw': '正式年份、合作單位、活動名稱與成果仍待老師研究室確認；網站先保留為 LAB 旗下代表性場域入口。',
      en: 'Official years, partners, activity names, and outcomes still need lab confirmation; the site keeps it as a representative field-project entry.',
    },
    tags: ['Young Village', '平地農村', '新住民合作'],
  },
  {
    id: 'young-stay',
    eyebrow: { 'zh-tw': '偏鄉山村', en: 'Rural Mountain Site' },
    title: { 'zh-tw': 'Young Stay', en: 'Young Stay' },
    summary: {
      'zh-tw': '以偏鄉山村為主，串聯籐寮仔、廢棄小學規劃與學生暑期社區實習，讓青年能在地方停留、學習與共作。',
      en: 'A rural mountain field project connecting Tengliaozai, abandoned-school planning, and student summer community practicum.',
    },
    detail: {
      'zh-tw': 'Young Stay 是否等同籐寮仔基地、以及廢棄小學的正式名稱與狀態，仍需後續校正。',
      en: 'Whether Young Stay maps exactly to Tengliaozai, and the official name/status of the abandoned-school site, still need confirmation.',
    },
    tags: ['Young Stay', '籐寮仔', '廢棄小學', '暑期社區實習'],
  },
  {
    id: 'tengliaozai',
    eyebrow: { 'zh-tw': 'USR 旗艦場域', en: 'USR Flagship Site' },
    title: { 'zh-tw': '籐寮仔社區', en: 'Tengliaozai Community' },
    summary: {
      'zh-tw': '青銀共創百歲人生 USR Hub 的核心場域，累積食農教育、健康促進、文化傳承、協會成立與祈福燈會等實踐。',
      en: 'The flagship USR Hub field site, with accumulated work in food-and-farming education, health promotion, cultural transmission, association building, and the blessing lantern festival.',
    },
    tags: ['籐寮仔', 'USR', '社區照顧', '地方實踐'],
  },
  {
    id: 'community-centers',
    eyebrow: { 'zh-tw': '可擴充據點', en: 'Expandable Sites' },
    title: { 'zh-tw': '跨世代關懷社區據點', en: 'Intergenerational Caring Community Centers' },
    summary: {
      'zh-tw': '未來可把不同社區據點放在同一套標籤架構下，依照研究主題、學程活動與成果資源串聯。',
      en: 'A scalable structure for connecting multiple community centers by research theme, program activity, and resource outputs.',
    },
    tags: ['跨世代關懷社區據點', 'intergenerational-caring-community'],
  },
];

export const programSections: PortalItem[] = [
  {
    id: 'program-overview',
    title: { 'zh-tw': '學程介紹', en: 'Program Overview' },
    summary: {
      'zh-tw': '青銀共創跨域學分學程是 LAB 的人才培育主軸，讓課程、場域實習與研究成果互相支撐。',
      en: 'The credit program is the lab’s talent-development backbone, connecting courses, field practicum, and research outputs.',
    },
    tags: ['青銀共創跨域學分學程'],
  },
  {
    id: 'course-map',
    title: { 'zh-tw': '課程地圖', en: 'Course Map' },
    summary: {
      'zh-tw': '包含健康老化與健康促進、代間共學與其他跨域課程；課程不獨立於學程之外。',
      en: 'Includes healthy aging and health promotion, intergenerational co-learning, and other interdisciplinary courses; courses live inside the program.',
    },
    tags: ['課程地圖', '健康老化與健康促進'],
  },
  {
    id: 'community-practicum',
    title: { 'zh-tw': '社區實習', en: 'Community Practicum' },
    summary: {
      'zh-tw': '學生進入場域，學習與長者、社區組織、公共部門一起工作，而不是只完成一次性服務。',
      en: 'Students enter field sites and learn to work with elders, community organizations, and public agencies beyond one-off service.',
    },
    tags: ['社區實習'],
  },
  {
    id: 'summer-residency',
    title: { 'zh-tw': '暑期駐村', en: 'Summer Residency' },
    summary: {
      'zh-tw': '可串聯 Young Village / Young Stay 的場域需求，讓學生在暑期停留、觀察、提案與共作。',
      en: 'Connects Young Village and Young Stay field needs with students’ summer stay, observation, proposal-making, and co-work.',
    },
    tags: ['暑期駐村', 'Young Village', 'Young Stay'],
  },
  {
    id: 'student-work',
    title: { 'zh-tw': '學生作品', en: 'Student Work' },
    summary: {
      'zh-tw': '把學生在課程、實習、駐村與工作坊中的作品，回收到成果與資源資料庫。',
      en: 'Student outputs from courses, practicum, residencies, and workshops are collected back into the resource library.',
    },
    tags: ['學生作品', '成果資源'],
  },
];

const relationRegistries: Record<RelationCategory, PortalItem[]> = {
  research: researchThemes,
  field: fieldProjects,
  program: programSections,
};

export const resourceStatusLabels = {
  confirmed: { 'zh-tw': '已確認', en: 'Confirmed' },
  pending: { 'zh-tw': '待校正', en: 'Pending Review' },
} satisfies Record<ContentStatus, LocalizedString>;

export const resourceVisibilityLabels = {
  public: { 'zh-tw': '可公開', en: 'Public' },
  internal: { 'zh-tw': '內部素材', en: 'Internal' },
  'needs-consent': { 'zh-tw': '待授權', en: 'Consent Needed' },
} satisfies Record<ResourceVisibility, LocalizedString>;

export function resolveTitle(category: RelationCategory, id: string, lang: Locale) {
  return relationRegistries[category].find((item) => item.id === id)?.title[lang] ?? id;
}

export function resolveRelationTitles(relations: ResourceRelations, category: RelationCategory, lang: Locale) {
  return relations[category].map((id) => resolveTitle(category, id, lang));
}

export const resourceItems: ResourceItem[] = [
  {
    id: 'tengliaozai-lantern-festival',
    year: '2026',
    type: { 'zh-tw': '活動紀錄', en: 'Activity Record' },
    status: 'pending',
    visibility: 'needs-consent',
    title: { 'zh-tw': '籐寮仔祈福燈會暨社規師成果展', en: 'Tengliaozai Blessing Lantern Festival and Community Planner Showcase' },
    summary: {
      'zh-tw': '以「月色不暗，心星為伴」為主題，呈現場域長期陪伴、社區共同參與與文化傳承成果。',
      en: 'A field showcase around long-term companionship, community participation, and cultural transmission under the theme “The moon is not dark; the heart-stars keep company.”',
    },
    tags: ['Young Stay', '籐寮仔', '代間學習', '影片'],
    relations: {
      research: ['intergenerational-learning', 'community-care'],
      field: ['young-stay', 'tengliaozai'],
      program: ['community-practicum'],
    },
  },
  {
    id: 'health-aging-ai-module',
    year: '2026',
    type: { 'zh-tw': '課程教材', en: 'Course Material' },
    status: 'pending',
    visibility: 'internal',
    title: { 'zh-tw': '健康老化與健康促進 AI 模組', en: 'Healthy Aging and Health Promotion AI Module' },
    summary: {
      'zh-tw': '把 AI 三原則、健康資訊判讀、營養、餐盤、睡眠與數位故事牆整合進代間共學課程。',
      en: 'A course module integrating AI principles, health-information judgment, nutrition, meal plates, sleep, and digital storytelling into intergenerational learning.',
    },
    tags: ['健康促進', 'AI / 數位健康', '學分學程'],
    relations: {
      research: ['health-promotion', 'ai-digital-health', 'older-adult-learning'],
      field: ['community-centers'],
      program: ['course-map', 'student-work'],
    },
  },
  {
    id: 'food-farming-camp',
    year: '2022',
    type: { 'zh-tw': '場域活動', en: 'Field Activity' },
    status: 'pending',
    visibility: 'needs-consent',
    title: { 'zh-tw': '食農教育代間體驗營', en: 'Food and Farming Intergenerational Camp' },
    summary: {
      'zh-tw': '長輩成為小朋友的老師，帶領認識蔬果、種植與共食，形成從產地到餐桌的代間學習活動。',
      en: 'Elders teach children vegetables, planting, and shared meals through a field-to-table intergenerational learning activity.',
    },
    tags: ['食農教育', '籐寮仔', '代間學習'],
    relations: {
      research: ['intergenerational-learning', 'local-practice'],
      field: ['tengliaozai'],
      program: ['community-practicum'],
    },
  },
  {
    id: 'rural-reverse-flow',
    year: '2022',
    type: { 'zh-tw': '學生駐村', en: 'Student Residency' },
    status: 'pending',
    visibility: 'needs-consent',
    title: { 'zh-tw': '水保局大專生洄游農村競賽駐村', en: 'SWCB Rural Reverse-Flow Student Residency' },
    summary: {
      'zh-tw': '跨系所學生暑期駐村，發現麻竹筍特產，與美蓁阿嬤合作開發醬筍與產品 LOGO。',
      en: 'A cross-departmental summer residency that surfaced moso bamboo as a community specialty and co-developed a bamboo-shoot product and logo.',
    },
    tags: ['暑期駐村', '學生作品', '地方實踐'],
    relations: {
      research: ['local-practice', 'intergenerational-learning'],
      field: ['tengliaozai', 'young-stay'],
      program: ['summer-residency', 'student-work'],
    },
  },
  {
    id: 'intergenerational-symposium',
    year: '2021',
    type: { 'zh-tw': '研討會', en: 'Symposium' },
    status: 'pending',
    visibility: 'public',
    title: { 'zh-tw': '代間學習融入課程之教學研究成果發表暨代間方案學術研討會', en: 'Academic Symposium on Intergenerational Learning in Curricula' },
    summary: {
      'zh-tw': '線上會議與海報展，串接代間學習、教學研究成果與跨域學分學程招生資訊。',
      en: 'An online meeting and poster session connecting intergenerational learning, teaching-research outputs, and credit-program admission information.',
    },
    tags: ['研討會', '代間學習', '學分學程'],
    relations: {
      research: ['intergenerational-learning'],
      field: ['community-centers'],
      program: ['program-overview'],
    },
  },
];

export const teamGroups: PortalItem[] = [
  {
    id: 'principal-investigator',
    title: { 'zh-tw': '主持人', en: 'Principal Investigator' },
    summary: {
      'zh-tw': '陳毓璟教授，國立中正大學成人及繼續教育學系。',
      en: 'Professor Yu-Ching Chen, Department of Adult and Continuing Education, National Chung Cheng University.',
    },
    tags: ['主持人', 'principal-investigator'],
  },
  {
    id: 'research-team',
    title: { 'zh-tw': '研究團隊', en: 'Research Team' },
    summary: {
      'zh-tw': '包含研究生、助理與跨系所合作成員；正式公開名單需由老師研究室確認。',
      en: 'Graduate students, assistants, and cross-departmental collaborators; public names should be confirmed by the lab.',
    },
    tags: ['研究團隊'],
  },
  {
    id: 'student-team',
    title: { 'zh-tw': '學生團隊', en: 'Student Team' },
    summary: {
      'zh-tw': '學生團隊「菜一起」與學程修課學生，是場域學習、實習與成果作品的重要行動者。',
      en: 'The “Vegetable Together” student team and credit-program students are key actors in field learning, practicum, and student outputs.',
    },
    tags: ['學生團隊', '菜一起'],
  },
  {
    id: 'partner-network',
    title: { 'zh-tw': '合作網絡', en: 'Partner Network' },
    summary: {
      'zh-tw': '串聯社區協會、學校、衛生所、基金會、地方政府與公共部門。',
      en: 'A network connecting community associations, schools, health stations, foundations, local government, and public agencies.',
    },
    tags: ['合作網絡', 'partner-network'],
  },
];

export const partnerNames = {
  'zh-tw': [
    '嘉義縣籐惜社區共好協會',
    '中埔鄉中山國民小學',
    '中埔鄉衛生所',
    '福智文教基金會中埔教室',
    '嘉義縣果然社區活力協進會',
    '農委會水土保持局',
    '嘉義縣政府',
    '伊甸社會福利慈善基金會',
  ],
  en: [
    'Tengxi Community Co-Prosperity Association',
    'Zhongshan Elementary School, Zhongpu Township',
    'Zhongpu Township Health Station',
    'Bliss and Wisdom Foundation, Zhongpu Classroom',
    'Chiayi Guoran Community Vitality Association',
    'Soil and Water Conservation Bureau',
    'Chiayi County Government',
    'Eden Social Welfare Foundation',
  ],
} satisfies Record<Locale, string[]>;

export const labStats = [
  {
    value: '170+',
    label: { 'zh-tw': '學生團隊累計參與人次', en: 'Student team participations' },
  },
  {
    value: '300+',
    label: { 'zh-tw': '健康促進累計人次', en: 'Health promotion participations' },
  },
  {
    value: '240+',
    label: { 'zh-tw': '跨世代活動累計人次', en: 'Intergenerational activity participations' },
  },
  {
    value: '400+',
    label: { 'zh-tw': '2025 年度總參與人次', en: 'Total participations in 2025' },
  },
];

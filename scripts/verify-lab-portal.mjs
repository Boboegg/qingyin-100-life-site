import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const requiredPages = [
  ['dist/index.html', ['青銀共創百歲人生 LAB', '研究主題', '場域計畫', '學分學程', '成果資源', '團隊合作']],
  ['dist/research/index.html', ['研究主題', '健康促進', 'AI / 數位健康', '代間學習']],
  ['dist/field-projects/index.html', ['場域計畫', 'Young Village', 'Young Stay', '籐寮仔']],
  ['dist/program/index.html', ['青銀共創跨域學分學程', '課程地圖', '社區實習', '暑期駐村']],
  ['dist/resources/index.html', ['成果與資源', '標籤', '研究主題', '場域計畫', '學分學程', '待校正', '待授權']],
  ['dist/team/index.html', ['團隊與合作', '主持人', '合作網絡']],
  ['dist/en/index.html', ['100-Year Life Co-Creation Lab', 'Research', 'Field Projects', 'Credit Program', 'Resources', 'Team &amp; Partners']],
  ['dist/en/research/index.html', ['Research Themes', 'Health Promotion', 'AI and Digital Health', 'Intergenerational Learning']],
  ['dist/en/field-projects/index.html', ['Field Projects', 'Young Village', 'Young Stay', 'Tengliaozai']],
  ['dist/en/program/index.html', ['Qingyin Intergenerational Credit Program', 'Course Map', 'Community Practicum', 'Summer Residency']],
  ['dist/en/resources/index.html', ['Resources', 'Tags', 'Research Themes', 'Field Projects', 'Credit Program', 'Pending Review', 'Consent Needed']],
  ['dist/en/team/index.html', ['Team & Partners', 'Principal Investigator', 'Partner Network']],
];

let failures = 0;

for (const [relativePath, expectedSnippets] of requiredPages) {
  const file = path.join(root, relativePath);
  if (!fs.existsSync(file)) {
    console.error(`Missing page: ${relativePath}`);
    failures += 1;
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  for (const snippet of expectedSnippets) {
    if (!html.includes(snippet)) {
      console.error(`Missing "${snippet}" in ${relativePath}`);
      failures += 1;
    }
  }
}

const pagesWithoutRelationSlugs = [
  'dist/research/index.html',
  'dist/field-projects/index.html',
  'dist/program/index.html',
  'dist/resources/index.html',
  'dist/en/research/index.html',
  'dist/en/field-projects/index.html',
  'dist/en/program/index.html',
  'dist/en/resources/index.html',
];

const forbiddenRelationSlugs = [
  'intergenerational-learning',
  'older-adult-learning',
  'health-promotion',
  'community-care',
  'ai-digital-health',
  'local-practice',
  'young-village',
  'young-stay',
  'tengliaozai',
  'community-centers',
  'program-overview',
  'course-map',
  'community-practicum',
  'summer-residency',
  'student-work',
];

for (const relativePath of pagesWithoutRelationSlugs) {
  const file = path.join(root, relativePath);
  if (!fs.existsSync(file)) continue;

  const html = fs.readFileSync(file, 'utf8');
  for (const slug of forbiddenRelationSlugs) {
    if (html.includes(slug)) {
      console.error(`Internal relation slug "${slug}" should not be visible in ${relativePath}`);
      failures += 1;
    }
  }
}

if (failures > 0) {
  console.error(`LAB Portal verification failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log('LAB Portal verification passed.');

# LAB Portal Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing Astro/GitHub Pages site from a single USR project site into the first working version of the "青銀共創百歲人生 LAB" portal.

**Architecture:** Keep the static Astro deployment and introduce a small TypeScript content layer for research themes, field projects, program items, resources, team, and partners. Build new top-level pages around the LAB Portal information architecture while keeping old routes as migration pages so existing links do not break.

**Tech Stack:** Astro 6, TypeScript data modules, static GitHub Pages build, Node.js content verification script.

---

### Task 1: Content Verification Harness

**Files:**
- Create: `scripts/verify-lab-portal.mjs`
- Modify: `package.json`

- [ ] **Step 1: Create a verification script that asserts the LAB Portal architecture after build**

```js
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const requiredPages = [
  ['dist/index.html', ['青銀共創百歲人生 LAB', '研究主題', '場域計畫', '學分學程', '成果資源', '團隊合作']],
  ['dist/research/index.html', ['研究主題', '健康促進', 'AI / 數位健康', '代間學習']],
  ['dist/field-projects/index.html', ['場域計畫', 'Young Village', 'Young Stay', '籐寮仔']],
  ['dist/program/index.html', ['青銀共創跨域學分學程', '課程地圖', '社區實習', '暑期駐村']],
  ['dist/resources/index.html', ['成果與資源', '標籤', '研究主題', '場域計畫', '學分學程']],
  ['dist/team/index.html', ['團隊與合作', '主持人', '合作網絡']],
  ['dist/en/index.html', ['100-Year Life Co-Creation Lab', 'Research', 'Field Projects', 'Credit Program', 'Resources', 'Team & Partners']],
  ['dist/en/research/index.html', ['Research Themes', 'Health Promotion', 'AI and Digital Health', 'Intergenerational Learning']],
  ['dist/en/field-projects/index.html', ['Field Projects', 'Young Village', 'Young Stay', 'Tengliaozai']],
  ['dist/en/program/index.html', ['Qingyin Intergenerational Credit Program', 'Course Map', 'Community Practicum', 'Summer Residency']],
  ['dist/en/resources/index.html', ['Resources', 'Tags', 'Research Themes', 'Field Projects', 'Credit Program']],
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

if (failures > 0) {
  console.error(`LAB Portal verification failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log('LAB Portal verification passed.');
```

- [ ] **Step 2: Add the script to package.json**

```json
{
  "scripts": {
    "dev": "ASTRO_TELEMETRY_DISABLED=1 astro dev",
    "build": "ASTRO_TELEMETRY_DISABLED=1 astro build",
    "preview": "ASTRO_TELEMETRY_DISABLED=1 astro preview",
    "test:content": "node scripts/verify-lab-portal.mjs"
  }
}
```

- [ ] **Step 3: Run RED verification**

Run: `npm run build && npm run test:content`

Expected: `npm run test:content` fails because the new LAB Portal pages and labels do not exist yet.

### Task 2: LAB Portal Data Layer

**Files:**
- Create: `src/data/lab.ts`

- [ ] **Step 1: Add bilingual data for the portal**

Create typed arrays for research themes, field projects, program sections, resource examples, team roles, partners, and old route migration links.

- [ ] **Step 2: Keep uncertain items explicit**

Represent still-unconfirmed items such as Young Village details, Young Stay scope, and English naming through careful copy that avoids invented numbers or unverified claims.

### Task 3: Site Metadata, Navigation, and Homepage

**Files:**
- Modify: `src/data/site.ts`
- Modify: `src/components/HomePage.astro`

- [ ] **Step 1: Update site identity and navigation**

Change the site name to "青銀共創百歲人生 LAB", use "100-Year Life Co-Creation Lab" as the English working name, and replace old nav items with:

Chinese: 關於 LAB, 研究主題, 場域計畫, 學分學程, 成果資源, 團隊合作

English: About, Research, Field Projects, Credit Program, Resources, Team & Partners

- [ ] **Step 2: Rebuild the homepage around the LAB Portal**

Use the shared data layer to render the hero, "LAB 做什麼", research theme cards, field project cards, program cards, resource highlights, stats, and collaboration invitation.

### Task 4: New LAB Portal Pages

**Files:**
- Modify: `src/pages/about.astro`
- Create: `src/pages/research.astro`
- Create: `src/pages/field-projects.astro`
- Create: `src/pages/program.astro`
- Create: `src/pages/resources.astro`
- Create: `src/pages/team.astro`
- Modify: `src/pages/contact.astro`
- Modify: `src/pages/en/about.astro`
- Create: `src/pages/en/research.astro`
- Create: `src/pages/en/field-projects.astro`
- Create: `src/pages/en/program.astro`
- Create: `src/pages/en/resources.astro`
- Create: `src/pages/en/team.astro`
- Modify: `src/pages/en/contact.astro`

- [ ] **Step 1: Update About**

Frame the site as a LAB portal, with the USR project as one flagship effort instead of the whole website.

- [ ] **Step 2: Add Research**

Render research themes and show example connections to field projects, program work, and resources.

- [ ] **Step 3: Add Field Projects**

Render Young Village, Young Stay, Tengliaozai, and other community centers with status-aware copy.

- [ ] **Step 4: Add Program**

Render the credit program as the container for course map, community practicum, summer residency, and student work.

- [ ] **Step 5: Add Resources**

Render resources as a tagged database and show how each item connects back to research, field projects, and the program.

- [ ] **Step 6: Add Team**

Render principal investigator, research team, student team, community partners, and collaboration network.

- [ ] **Step 7: Keep Contact focused**

Keep concrete contact information, but update copy to LAB Portal language.

### Task 5: Old Route Migration Pages

**Files:**
- Modify: `src/pages/projects.astro`
- Modify: `src/pages/media.astro`
- Modify: `src/pages/outcomes.astro`
- Modify: `src/pages/people.astro`
- Modify: `src/pages/en/projects.astro`
- Modify: `src/pages/en/media.astro`
- Modify: `src/pages/en/outcomes.astro`
- Modify: `src/pages/en/people.astro`

- [ ] **Step 1: Replace old content with migration pages**

Each old route should explain where the content moved:

- `/projects/` and `/en/projects/` -> field projects
- `/media/` and `/en/media/` -> resources
- `/outcomes/` and `/en/outcomes/` -> resources
- `/people/` and `/en/people/` -> team

### Task 6: Styling

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Add reusable layouts**

Add compact, reusable styles for portal grids, tag pills, relation rows, resource cards, migration panels, and status labels.

- [ ] **Step 2: Preserve existing visual style**

Keep the hand-drawn field notebook style, high readability, and mobile responsiveness.

### Task 7: Verification

**Files:**
- No new files.

- [ ] **Step 1: Run build**

Run: `npm run build`

Expected: Astro builds all static routes without errors.

- [ ] **Step 2: Run content verification**

Run: `npm run test:content`

Expected: `LAB Portal verification passed.`

- [ ] **Step 3: Inspect git diff**

Run: `git diff --stat`

Expected: only website source, plan/spec docs, and verification script changed.

- [ ] **Step 4: Start local preview**

Run: `npm run dev -- --host 127.0.0.1`

Expected: local Astro server starts and shows the LAB Portal.

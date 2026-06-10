# Similar LAB / Center Website Benchmark Summary

Date: 2026-06-10
Project: `qingyin-100-life-site`
Purpose: Inform the Qingyin 100-Year Life LAB Portal content architecture and visual/content patterns.

## High-Level Finding

The best-matching references usually do **not** present themselves as a single project page. They behave like **portal sites**: a clear mission/identity page, research or focus areas, education/training, community engagement or field work, resources/news/events, people/team, and contact.

This supports the current decision for Qingyin:

> Use **LAB Portal** as the top-level identity. Treat USR, Young Village, Young Stay, health promotion, the credit program, and resources as connected modules underneath the lab.

## Patterns by Reference

### src-001 University of New England Center for Healthy Aging

Observed IA:

- Center landing page
- Section menu: center overview, Legacy Scholars, Research, Wellness Center, People, News, Events
- Frames the center as applied learning, service, and research on healthful aging
- Highlights intergenerational engagement and older-adult participants as research partners

Takeaway for Qingyin:

- Add a strong "About LAB" page and keep "學分學程 / 場域 / 成果" as sibling entries.
- Older adults and community members should appear as partners, not only service recipients.

### src-002 Cornell Health Design Innovations Lab

Observed IA:

- Lab page embedded under Education & Research
- Defines the lab as a multidisciplinary community of faculty, students, practitioners, and community members
- Uses Current Projects and Past Projects as the content backbone

Takeaway for Qingyin:

- "場域計畫" can use a current/past or confirmed/pending structure.
- Young Village and Young Stay can be project cards with status notes when formal details are not yet confirmed.

### src-003 Georgetown Center for Healthy Aging

Observed IA:

- Navigation separates Healthy Aging Research, Education, Community Engagement, News & Events, Contact
- Mission and Director’s Welcome appear near the top
- Training programs are visible from the homepage

Takeaway for Qingyin:

- Our current nav split is aligned: 研究主題 / 學分學程 / 場域計畫 / 成果資源 / 團隊合作.
- Consider adding a short "老師的話 / Director’s note" later if the professor wants a warmer academic entrance.

### src-004 Rutgers Center for Healthy Aging Research

Observed IA:

- Page starts with "hub" positioning
- Then overview, news, director quote, mission, vision, values, and resource-center content
- Emphasizes research + community partnership + translation into care strategies

Takeaway for Qingyin:

- "青銀共創百歲人生 LAB" should continue using "hub / portal" language.
- Resources should not be isolated; they should be tied to translation, education, community, and research.

### src-005 UW-Madison CARE

Observed IA:

- Very simple homepage promise: improving how people age
- Three action verbs: prepares, fosters, translates
- Resource/product cards are prominent

Takeaway for Qingyin:

- Homepage "LAB 做什麼" should stay compact.
- The lab can use action verbs: 研究、培育、陪伴、轉譯.
- 成果資源 can include products/toolkits/materials, not only news.

### src-006 Population Health Innovation Lab

Observed IA:

- Strong action-lab phrase: innovate, measure, share, scale
- Major nav: How We Work, Projects, Resources, The Collective, Events, Donate
- Projects and resources are deeply nested and treated as ongoing work streams

Takeaway for Qingyin:

- Qingyin can use a similar action-lab structure: 方法 / 場域 / 成果資源.
- For future growth, resource tags should support work streams such as Young Village, Young Stay, health promotion, AI/digital health.

### src-007 University of Illinois Human Factors & Aging Laboratory

Observed IA:

- Directory-style page: lab name, website, contact details, overview
- Research scope is presented in a single compact paragraph

Takeaway for Qingyin:

- Add a concise LAB one-paragraph description for external directory uses.
- Contact and affiliation details should remain easy to find.

### src-008 Generations United Intergenerational Program Database

Observed IA:

- Database page for intergenerational programs
- Invites users to search by keyword/state and add/update entries
- Connects database to resource library and technical assistance

Takeaway for Qingyin:

- Confirms our tag-based "成果與資源" direction.
- Long term: resources could be filterable by type, year, research theme, field project, and program relation.

## Recommended Qingyin LAB Portal Adjustments

The current Astro implementation is already close to the benchmark pattern. Suggested next refinements:

1. **Add a one-paragraph external profile**
   - For use on About, footer, and directory contexts.
   - Keep it under 80 Chinese characters plus an English version.

2. **Rename homepage section "LAB 做什麼" into four action verbs**
   - Example: 研究 / 培育 / 陪伴 / 轉譯.
   - It may feel more active and less like a file cabinet.

3. **Keep "學分學程" as the training/education pillar**
   - Benchmarks commonly separate Education / Training from Research.
   - Our "學程包含課程、實習、駐村" rule is correct.

4. **Keep "成果資源" as a database, not a blog**
   - Tag resources by research theme, field project, program relation, type, year, and visibility.

5. **Add Professor / Director note later**
   - Optional, but common on healthy-aging center sites.
   - This would make the LAB Portal feel less generic and more academic-human.

6. **Do not move to WordPress just for tags**
   - Benchmarks show strong IA matters more than CMS.
   - Astro + structured data is enough for Phase 1.

## Design Implications

Visual direction for Qingyin should stay warmer than typical medical research centers:

- Keep the hand-drawn field notebook texture.
- Increase the feeling of "portal / map" through connected cards and tags.
- Avoid over-medical imagery; prioritize field, course, community, and resource relationships.
- Use real photos only after consent; until then, content architecture can carry the site.

## Sources

- University of New England Center for Healthy Aging: https://www.une.edu/cha
- Cornell Health Design Innovations Lab: https://ihf.cornell.edu/education-research/health-design-innovations-lab/
- Georgetown Center for Healthy Aging: https://healthyaging.georgetown.edu/
- Rutgers Center for Healthy Aging Research: https://ifh.rutgers.edu/research/centers-and-programs/research-centers/center-for-healthy-aging-research/
- UW-Madison CARE: https://care.nursing.wisc.edu/
- Population Health Innovation Lab: https://pophealthinnovationlab.org/
- University of Illinois Human Factors & Aging Laboratory: https://research.illinois.edu/researchunit/human-factors-aging-laboratory
- Generations United Intergenerational Program Database: https://www.gu.org/home/ig-program-database/

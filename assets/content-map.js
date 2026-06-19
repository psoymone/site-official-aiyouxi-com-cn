const contentMap = {
  sections: [
    {
      id: "intro",
      title: "欢迎来到爱游戏",
      tags: ["首页", "爱游戏", "推荐"],
      keywords: ["爱游戏", "游戏资讯", "新手入门"]
    },
    {
      id: "news",
      title: "最新动态",
      tags: ["新闻", "更新", "爱游戏"],
      keywords: ["爱游戏新闻", "版本更新", "活动公告"]
    },
    {
      id: "guides",
      title: "攻略中心",
      tags: ["攻略", "教程", "爱游戏"],
      keywords: ["爱游戏攻略", "技巧", "通关秘籍"]
    },
    {
      id: "community",
      title: "玩家社区",
      tags: ["社区", "论坛", "爱游戏"],
      keywords: ["爱游戏社区", "玩家交流", "热门话题"]
    }
  ],
  siteUrl: "https://site-official-aiyouxi.com.cn",
  defaultKeywords: ["爱游戏", "游戏平台", "在线娱乐"]
};

function searchContent(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();

  contentMap.sections.forEach(section => {
    const allText = [
      section.title,
      ...section.tags,
      ...section.keywords
    ].join(" ").toLowerCase();

    if (allText.includes(lowerQuery)) {
      results.push(section);
    }
  });

  return results;
}

function getTagsBySection(sectionId) {
  const section = contentMap.sections.find(s => s.id === sectionId);
  return section ? section.tags : [];
}

function getKeywordsBySection(sectionId) {
  const section = contentMap.sections.find(s => s.id === sectionId);
  return section ? section.keywords : [];
}

function listAllTags() {
  const tagSet = new Set();
  contentMap.sections.forEach(section => {
    section.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

function listAllKeywords() {
  const kwSet = new Set();
  contentMap.sections.forEach(section => {
    section.keywords.forEach(kw => kwSet.add(kw));
  });
  return Array.from(kwSet);
}

function addSection(id, title, tags, keywords) {
  if (!id || !title) return false;
  const exists = contentMap.sections.some(s => s.id === id);
  if (exists) return false;
  contentMap.sections.push({
    id,
    title,
    tags: tags || [],
    keywords: keywords || []
  });
  return true;
}

function removeSection(sectionId) {
  const index = contentMap.sections.findIndex(s => s.id === sectionId);
  if (index === -1) return false;
  contentMap.sections.splice(index, 1);
  return true;
}

function printSiteInfo() {
  console.log(`站点: ${contentMap.siteUrl}`);
  console.log(`分区数: ${contentMap.sections.length}`);
  console.log(`默认关键词: ${contentMap.defaultKeywords.join(", ")}`);
}

export {
  contentMap,
  searchContent,
  getTagsBySection,
  getKeywordsBySection,
  listAllTags,
  listAllKeywords,
  addSection,
  removeSection,
  printSiteInfo
};
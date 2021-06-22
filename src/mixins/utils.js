export function getPageTitle(route, vue) {
  if (route === 'pages/mine/index') {
    return vue.$t('mine')
  } else if (route === 'pages/news/index') {
    return vue.$t('news')
  } else if (route === 'pages/main/index') {
    return vue.$t('home')
  } else if (route === 'pages/mine/language/index') {
    return vue.$t('languageSetting')
  } else if (route === 'pages/mine/theme/index') {
    return vue.$t('themeSetting')
  } else {
    return route
  }
}

export function getParent(vue, pname = 'Page') {
  let parent = vue.$parent;
  let parentName = parent.$options.name;
  while (parentName !== pname) {
    parent = parent.$parent;
    if (!parent) {
      return false
    }
    parentName = parent.$options.name
  }
  return parent;
}

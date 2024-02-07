const { writeFileSync } = require('fs')

const pages = []

for (let i = 1; i <= 10; i++) {
  const newPage = {
    pageNum: i,
    content: [],
  }
  for (let j = 1; j <= 16; j++) {
    const newContent = {
      id: pages[pages.length - 1]
        ? pages[pages.length - 1].content[15].id + j
        : j,
      name: 'divida',
      payDay: new Date().toISOString(),
      remainingInstallments: Math.ceil(Math.random() * 20),
      value: Math.ceil(Math.random() * 2000),
    }
    newPage.content.push(newContent)
  }
  pages.push(newPage)
}

writeFileSync('../db/DebtsPages.json', JSON.stringify(pages))

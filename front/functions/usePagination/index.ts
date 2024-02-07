/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PageProps<T = any> {
  pageNum: number
  content: T[]
}

export function usePagination<PageContentType = any>(
  currentPage: number,
  pages: PageProps<PageContentType>[],
  linksRange: number,
) {
  const currentPageIndex = pages.findIndex(
    (page) => page.pageNum === currentPage,
  )
  /** initial pagination, probably with duplicated pages  */
  const paginationPattern: () => PageProps[] = () => {
    const holder: PageProps[] = []

    for (
      let wantedPageIndex = 0 - linksRange;
      wantedPageIndex <= linksRange;
      wantedPageIndex++
    ) {
      const wantedPage = pages[currentPageIndex + wantedPageIndex]
      wantedPage !== undefined && holder.push(wantedPage)
    }
    holder.unshift(pages[0])
    holder.push(pages[pages.length - 1])
    return holder
  }

  /** pages list with no duplicates */
  const visiblePages = [...new Set(paginationPattern())]

  /** list of page links separated by "..." if current page pass the 'linksRange'
   * (1 ... 9 10 11 ... 22)
   */
  const finalPagination = () => {
    const holder = visiblePages
    const nullPage: PageProps = { content: [], pageNum: -1 }

    if (currentPageIndex > linksRange + 1) {
      holder.splice(1, 0, nullPage)
    }
    if (currentPageIndex < pages.length - (2 + linksRange)) {
      holder.splice(holder.length - 1, 0, nullPage)
    }
    return holder
  }

  return finalPagination()
}

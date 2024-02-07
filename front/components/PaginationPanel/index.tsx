'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import PageLink from './PageLink'
import { PageProps, usePagination } from '@/functions/usePagination'

export interface PaginationDataProps {
  currentPage: number
  pages: PageProps[]
}
interface PaginationPanelProps extends PaginationDataProps {
  pageName: string
}
const PaginationPanel = ({
  currentPage,
  pages,
  pageName,
}: PaginationPanelProps) => {
  const visiblePages = usePagination(currentPage, pages, 2)
  const params = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const requestMissingPage = () => {
    const currentPageIndex = pages.findIndex(
      (page) => page.pageNum === currentPage,
    )
    const requiredPagesList: number[] = []

    /** wantedPageRelativeIndex has this name because it's relative the current page index */
    for (
      let wantedPageRelativeIndex = -4;
      wantedPageRelativeIndex <= 4;
      wantedPageRelativeIndex++
    ) {
      const wantedPageIndex = currentPageIndex + wantedPageRelativeIndex

      /** this conditional evades pages that doesn't exist */
      if (
        wantedPageIndex >= 0 &&
        wantedPageIndex < pages[pages.length - 1].pageNum - 1 // last page index
      ) {
        const expeceted = currentPage + wantedPageRelativeIndex
        const currentPageNum = pages[wantedPageIndex]?.pageNum

        if (expeceted !== currentPageNum) {
          requiredPagesList.push(expeceted)
        }
      }
    }

    return requiredPagesList
  }

  function currentPageHandler(newCurrentPage: number) {
    const paramsHandler = new URLSearchParams(params)
    paramsHandler.set(pageName, newCurrentPage.toString())
    replace(`${pathname}?${paramsHandler.toString()}`)
  }
  return (
    <div className="flex rounded">
      {visiblePages?.map((page) => (
        <PageLink
          key={
            page.pageNum > 0
              ? `pageNum${page.pageNum}`
              : `pageNum${Math.floor(Math.random() * 100)}`
          }
          currentPageHandler={currentPageHandler}
          isCurrentPage={page.pageNum === currentPage}
          pageNum={page.pageNum}
        />
      ))}
    </div>
  )
}

export { PaginationPanel }

export default function PageLink({
  isCurrentPage,
  pageNum,
  currentPageHandler,
}: {
  isCurrentPage: boolean
  pageNum: number
  /** it need to be a function that handle URL search params of current page */
  currentPageHandler: (newCurrentPage: number) => void
}) {
  if (pageNum > 0) {
    return (
      <div
        onClick={() => {
          currentPageHandler(pageNum)
        }}
        key={pageNum}
        data-current-page={isCurrentPage}
        className="grid h-7 w-7 cursor-pointer place-items-center rounded transition hover:font-bold data-[current-page=true]:bg-neutral-200 data-[current-page=true]:font-bold dark:hover:bg-neutral-700 dark:data-[current-page=true]:bg-neutral-600 data-[current-page=true]:dark:bg-neutral-700"
      >
        {pageNum}
      </div>
    )
  }
  return (
    <div className="grid h-7 w-7 cursor-default place-items-center text-center">
      ...
    </div>
  )
}

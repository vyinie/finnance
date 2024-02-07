import { IconButton } from '@/components/globals/IconBtnTemplate'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { Moon, Sun } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ThemeHandler({ isBarOpen }: { isBarOpen: boolean }) {
  const router = useRouter()
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const theme = getCookie('theme')
    setDarkTheme(theme === 'dark')
  }, [])

  function themeHander() {
    const theme = !darkTheme && 'dark'
    document.documentElement.classList.toggle('dark', !darkTheme)
    if (theme) {
      setCookie('theme', theme)
      localStorage.setItem('theme', theme)
    } else {
      localStorage.removeItem('theme')
      deleteCookie('theme')
    }

    setDarkTheme((old) => !old)
    router.refresh()
  }

  return (
    <IconButton
      data-is-bar-open={isBarOpen}
      className="mb-2 flex w-44 items-center justify-around overflow-hidden rounded-md bg-gray-200 p-1 text-xl font-bold capitalize tracking-wide transition-all data-[is-bar-open=false]:w-10 dark:bg-neutral-600 "
      onClick={themeHander}
    >
      {darkTheme ? (
        <>
          <Moon className="h-8 w-8" />
          <h1
            data-is-bar-open={isBarOpen}
            className="w-36 overflow-hidden whitespace-nowrap transition-all data-[is-bar-open=false]:w-0"
          >
            tema escuro
          </h1>
        </>
      ) : (
        <>
          <Sun className="h-8 w-8" />
          <h1
            data-is-bar-open={isBarOpen}
            className="w-32 overflow-hidden whitespace-nowrap transition-all data-[is-bar-open=false]:w-0"
          >
            tema claro
          </h1>
        </>
      )}
    </IconButton>
  )
}

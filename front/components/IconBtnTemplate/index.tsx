import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  kaseClassName?: string
}
/** This component is specifically used to execute functions that have target events
 ** the kaseClassName param is to the div that hovers de icon
 */
export function IconButton({ children, kaseClassName, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        ' relative grid place-items-center overflow-hidden',
        rest.className,
      )}
    >
      <div
        className={twMerge(
          'absolute left-0 z-[2] h-full w-full transition-colors lg:hover:bg-black/10 lg:dark:hover:bg-white/20',
          kaseClassName,
        )}
      />
      {children}
    </button>
  )
}

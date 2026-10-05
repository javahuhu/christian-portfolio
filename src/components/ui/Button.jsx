import { Arrow } from './Arrow'
import './Button.css'

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  small = false,
  arrow = 'right',
  className = '',
  download,
}) {
  const classes = ['button', `button--${variant}`, small && 'button--small', className]
    .filter(Boolean)
    .join(' ')
  const content = <>{children}{arrow && <Arrow direction={arrow} size={small ? 12 : 14} />}</>

  if (href) {
    return <a className={classes} href={href} download={download}>{content}</a>
  }

  return <button type="button" className={classes} onClick={onClick}>{content}</button>
}

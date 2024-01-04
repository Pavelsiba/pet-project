import { memo, type FC, useMemo, type CSSProperties } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar: FC<AvatarProps> = memo((props) => {
  const { className, src, alt, size = 100 } = props
  const mode: Mods = {}

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size ?? 100,
      height: size ?? 100
    }
  }, [size])

  return (
    <img
      src={src}
      className={classNames(cls.avatar, mode, [className])}
      alt={alt}
      style={styles}
    />
  )
})

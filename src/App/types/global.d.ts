declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpge'
declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.sass' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare const __IS_DEV__: boolean  // eslint-disable-line

import localFont from 'next/font/local'

export const miSansLatin = localFont({
  src: [
    {
      path: './MiSansLatin-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './MiSansLatin-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './MiSansLatin-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './MiSansLatin-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './MiSansLatin-Normal.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './MiSansLatin-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './MiSansLatin-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './MiSansLatin-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './MiSansLatin-Demibold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './MiSansLatin-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-mi-sans-latin',
})
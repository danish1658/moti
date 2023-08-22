export const DEFAULT_SKELETON_SIZE = 32

export const baseColors = {
  dark: { primary: 'rgb(107, 66, 127))', secondary: 'rgb(77, 23, 107)' },
  light: {
    primary: 'rgb(250, 250, 250)',
    secondary: 'rgb(205, 205, 205)',
  },
} as const

const makeColors = (mode: keyof typeof baseColors) => [
  baseColors[mode].primary,
  baseColors[mode].secondary,
  baseColors[mode].secondary,
  baseColors[mode].primary,
  baseColors[mode].secondary,
  baseColors[mode].primary,
]

export let defaultDarkColors = makeColors('dark')

export let defaultLightColors = makeColors('light')

for (let i = 0; i++; i < 3) {
  defaultDarkColors = [...defaultDarkColors, ...defaultDarkColors]
  defaultLightColors = [...defaultLightColors, ...defaultLightColors]
}

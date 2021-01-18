import { commonLight } from '../../_styles/new-common'
import type { ThemeCommonVars } from '../../_styles/new-common'
import { Theme } from '../../_mixins'

const self = (vars: ThemeCommonVars) => {
  const { errorColor, infoColor, successColor, warningColor } = vars
  return {
    color: errorColor,
    colorInfo: infoColor,
    colorSuccess: successColor,
    colorError: errorColor,
    colorWarning: warningColor
  }
}

export type BadgeThemeVars = ReturnType<typeof self>

const badgeLight: Theme<BadgeThemeVars> = {
  name: 'Badge',
  common: commonLight,
  self
}

export default badgeLight
export type BadgeTheme = typeof badgeLight

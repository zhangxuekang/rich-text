import { Map } from 'immutable'
import * as React from 'react'

const ulType = ['ul_none', 'ul_disc', 'ul_circle', 'ul_square']
const olType = ['ol_decimal', 'ol_lower_alpha', 'ol_upper_alpha', 'ol_lower_roman', 'ol_upper_roman', 'ol_ideographic', 'ol_heavenly_stem']

const UL_WRAP_DEFAULT = React.createElement('ul', { className: 'public-DraftStyleDefault-ul' })
const OL_WRAP_DEFAULT = React.createElement('ol', { className: 'public-DraftStyleDefault-ol' })

const ulWrapperDefault = { element: 'li', wrapper: UL_WRAP_DEFAULT }
const olWrapperDefault = { element: 'li', wrapper: OL_WRAP_DEFAULT }

const ulLiListDefault = {}
ulType.forEach((item) => {
  ulLiListDefault[item] = { ...ulWrapperDefault }
})
const olLiListDefault = {}
olType.forEach((item) => {
  olLiListDefault[item] = { ...olWrapperDefault }
})

// const ulLiListDefault = {
//   ul_none: { ...ulWrapperDefault },
//   ul_disc: { ...ulWrapperDefault },
//   ul_circle: { ...ulWrapperDefault },
//   ul_square: { ...ulWrapperDefault },
// }
// const olLiListDefault = {
//   ol_decimal: { ...olWrapperDefault },
//   ol_lower_alpha: { ...olWrapperDefault },
//   ol_upper_alpha: { ...olWrapperDefault },
//   ol_lower_roman: { ...olWrapperDefault },
//   ol_upper_roman: { ...olWrapperDefault },
//   ol_ideographic: { ...olWrapperDefault },
//   ol_heavenly_stem: { ...olWrapperDefault },
// }

// 默认渲染列表
const blockRenderMapDefault = Map({
  ...ulLiListDefault, ...olLiListDefault,
})

// 类列表
const stylesMap = {
  ul_none: 'ul-none',
  ul_disc: 'ul-disc',
  ul_circle: 'ul-circle',
  ul_square: 'ul-square',

  ol_decimal: 'ol-decimal',
  ol_lower_alpha: 'ol-lower-alpha',
  ol_upper_alpha: 'ol-upper-alpha',
  ol_lower_roman: 'ol-lower-roman',
  ol_upper_roman: 'ol-upper-roman',
  ol_ideographic: 'ol-ideographic',
  ol_heavenly_stem: 'ol-heavenly-stem',
}

/**
 * 获取类名
 * @param block
 * @returns {any}
 */
function getBlockStyle(block) {
  return stylesMap[block.getType()]
}

function getBlockRender(color, size) {
  return blockRenderMapDefault
  if (color === '#434343' && size === 30) {
  } else {
    const olWrap1 = React.createElement('ol', { className: 'public-DraftStyleDefault-ol', style: { color, fontSize: `${size}px` } })
    const olLiWrapper = { element: 'li', wrapper: olWrap1 }

    const ulWrap1 = React.createElement('ul', { className: 'public-DraftStyleDefault-ul', style: { color, fontSize: `${size}px` } })
    const ulLiWrapper = { element: 'li', wrapper: ulWrap1 }

    const ulList = {
      ul_none: { ...ulLiWrapper },
      ul_disc: { ...ulLiWrapper },
      ul_circle: { ...ulLiWrapper },
      ul_square: { ...ulLiWrapper },
    }
    const olList = {
      ol_decimal: { ...olLiWrapper },
      ol_lower_alpha: { ...olLiWrapper },
      ol_upper_alpha: { ...olLiWrapper },
      ol_lower_roman: { ...olLiWrapper },
      ol_upper_roman: { ...olLiWrapper },
      ol_ideographic: { ...olLiWrapper },
      ol_heavenly_stem: { ...olLiWrapper },
    }

    return Map({
      ...ulList,
      ...olList
    })
  }
}

export { getBlockStyle, getBlockRender, olType, ulType }

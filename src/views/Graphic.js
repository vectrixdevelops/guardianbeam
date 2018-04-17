
import { h } from 'hyperapp'

const image = 'hyperapp-graphic-small-jp.png'

const Graphic = d => (state, actions) => {
  const saved = state.Images[image]
  return saved
    ? h('div', {
      class: 'launchpad-graphic',
      style: {
        'background-image': `url(${saved})`
      }
    })
    : h('div', {
      class: 'launchpad-graphic',
      onupdate: () => {
        window.fetch(`images/${image}`)
          .then(res => res.blob())
          .then(blob => {
            actions.Images.update({
              [image]: window.URL.createObjectURL(blob)
            })
          })
      }
    })
}

export default Graphic

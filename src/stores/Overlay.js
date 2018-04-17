
const Overlay = {
  init: data => state => {
    if (!data.target.classList.contains('_overlay') && state.overlay != null) {
      return {
        overlay: null
      }
    }
  },
  toggle: data => state => ({
    overlay: state.overlay === data ? null : data
  })
}

export { Overlay }

// would this work instead?
// overlay: !state.overlay === data && data

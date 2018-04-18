
import { h } from 'hyperapp'

const Profile = (state, actions) =>
  h('div', { class: 'profile-container' }, [
    h('h1', {}, 'Profile'),
    h('h2', {}, 'Route: ' + state.Router.path)
  ])

export default Profile

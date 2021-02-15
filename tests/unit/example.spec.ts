import { shallowMount } from '@vue/test-utils'
import DropZone from '@/components/DropZone.vue'

describe('DropZone.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(DropZone, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

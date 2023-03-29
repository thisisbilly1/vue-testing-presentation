import { mount } from '@vue/test-utils'
import SimpleExample from '@/views/SimpleExample.vue'

describe('SimpleExample.vue', () => {
  // const wrapper = mount(SimpleExample)
  let wrapper;

  // beforeEach(() => {
  wrapper = mount(SimpleExample)
  // })

  it('mounts', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('adds ones correctly', () => {
    wrapper.vm.incrementNumber()
    expect(wrapper.vm.number).toEqual(1)

    wrapper.vm.incrementNumber()
    wrapper.vm.incrementNumber()
    wrapper.vm.incrementNumber()
    expect(wrapper.vm.number).toEqual(4)
  })

  it('adds ones correctly', () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.number).toEqual(5)

    wrapper.findComponent({ref: 'exampleButton'}).trigger('click')
    expect(wrapper.vm.number).toEqual(6)
  })

})
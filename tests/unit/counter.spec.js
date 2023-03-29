import { mount } from '@vue/test-utils'
import counter from '@/components/counter.vue'

describe('counter.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(counter)
  });

  it('test props', async () => {
    expect(wrapper.vm.$options.props.obj.validator({
      name: 'test',
      value: ''
    })).toBeTruthy()

    await wrapper.setProps({
      startingNumber: 100
    })
    expect(wrapper.text()).toContain('100')

    await wrapper.setProps({
      startingNumber: 123
    })
    expect(wrapper.text()).toContain('123')
  })

  it('emits correctly', () => {
    wrapper.vm.incrementNumber();
    wrapper.vm.incrementNumber();
    wrapper.vm.incrementNumber();
    expect(wrapper.emitted().three[0]).toEqual([3])
    wrapper.vm.incrementNumber();
    wrapper.vm.incrementNumber();
    wrapper.vm.incrementNumber();
    expect(wrapper.emitted().three[1]).toEqual([6])
  })
})
import { mount } from '@vue/test-utils'
import mixin from '@/views/mixin';

const mockedComp = {
  render() {},
  title: 'mocked comp',
  mixins: [mixin],
}

describe('mixin test', () => {
  const wrapper = mount(mockedComp)

  it('test incrementCounter', () => {
    expect(wrapper.vm.counter).toEqual(0)
    wrapper.vm.incrementCounter()
    expect(wrapper.vm.counter).toEqual(1)
  })
})
import { mount } from '@vue/test-utils'
import APIExample from '@/views/APIExample';

const mockedData = {
  user: [
    {
      id: 1,
      userName: 'bob'
    },
    {
      id: 2,
      userName: 'fred'
    }
  ]
}
jest.mock('@/views/apiHelper', () => ({
  callApi(url) {
    if (url === 'testfail')
      return Promise.reject('fail test')
    return Promise.resolve(mockedData)
  }
}))

describe('api', () => {
  it('gets api response', async () => {
    const wrapper = mount(APIExample)
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.apiResponse).toEqual(mockedData)
  })

  it('tset error handling', async () => {
    const wrapper = mount(APIExample, {
      propsData: {
        url: 'testfail'
      }
    })
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.apiResponse).toEqual(null)
    expect(wrapper.vm.error).toEqual('fail test')
  })
})
import {mount, createLocalVue} from '@vue/test-utils'
import counterStore from '@/components/counterStore.vue'
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

const state = {
  counterNumber: 0,
}

const actions = {
  changeNumber: (_, number) => state.counterNumber += number
}

const mutations = {
  CHANGE_NUMBER: (_, number) => state.counterNumber += number
}

describe('counterStore.vue', () => {
  const store = new Vuex.Store({
    state,
    actions,
    mutations,
  })
  let wrapper;

  beforeEach(() => {
    wrapper = mount(counterStore, {
      store,
      localVue
    })
  });

  it('updates the store correctly', () => {
    wrapper.vm.incrementNumber();
    // expect(actions.changeNumber).toHaveBeenCalled()
    expect(state.counterNumber).toBe(1)
  })

  it('persists store', () => {
    expect(wrapper.vm.stateCounter).toBe(1)
    wrapper.vm.incrementNumber2();
    expect(wrapper.vm.stateCounter).toBe(3)
    // expect(actions.changeNumber).toHaveBeenCalled()
    
  })
})
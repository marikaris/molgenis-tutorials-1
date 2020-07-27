import { shallowMount } from '@vue/test-utils'
import MolgenisTutorialPreview from '@/components/MolgenisTutorialPreview.vue'

function sleep (ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

describe('MolgenisTutorialPreview', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallowMount(MolgenisTutorialPreview, { propsData: { tutorials: [] }, stubs: ['router-link'] })
  })

  it('should render the component', () => {
    expect(wrapper).toBeDefined()
  })

  describe('setHover', () => {
    it('should set isVisible to true and isStacked to false', () => {
      wrapper.vm.setHover()
      expect(wrapper.vm.isVisible).toBe(true)
      expect(wrapper.vm.isStacked).toBe(false)
    })
    it('should set isVisible to false and isStacked to true after 500 ms', () => {
      wrapper.vm.isVisible = true
      wrapper.vm.isStacked = false
      wrapper.vm.setHover()
      expect(wrapper.vm.isVisible).toBe(false)
      expect(wrapper.vm.isStacked).toBe(false)
      sleep(500).then(() => { expect(wrapper.vm.isStacked).toBe(true) })
    })
  })
})

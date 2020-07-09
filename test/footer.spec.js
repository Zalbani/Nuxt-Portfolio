import { mount } from '@vue/test-utils'
import footer from '@/components/footer'

describe('footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(footer)
    expect(wrapper.vm).toBeTruthy()
  })
})

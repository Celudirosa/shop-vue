import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Login from '../components/Login.vue'

describe('Login.vue', () => {
  it('renders login card', () => {
    const wrapper = mount(Login)
    expect(wrapper.text()).toContain('Iniciar sesión')
  })
})

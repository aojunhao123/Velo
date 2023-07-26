import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import VeButton from '../button.vue';
describe('VeButton', () => {
  it('renders button text', () => {
    const wrapper = mount(VeButton, {
      slots: {
        default: 'Click me'
      }
    });
    expect(wrapper.text()).toContain('Click me');
  });
  it('emits click event when clicked', async () => {
    const wrapper = mount(VeButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it('disables button when disabled prop is true', () => {
    const wrapper = mount(VeButton, {
      props: {
        disabled: true
      }
    });
    expect(wrapper.find('button').attributes('disabled')).toBeTruthy();
  });

  it('applies correct button style classes', () => {
    const wrapper = mount(VeButton, {
      props: {
        type: 'primary',
        size: 'small',
        plain: true,
        round: true,
        soft: true,
        circle: true,
        disabled: true
      }
    });
    expect(wrapper.classes()).toContain('ve-button--primary');
    expect(wrapper.classes()).toContain('ve-button--small');
    expect(wrapper.classes()).toContain('is-plain');
    expect(wrapper.classes()).toContain('is-round');
    expect(wrapper.classes()).toContain('is-soft');
    expect(wrapper.classes()).toContain('is-circle');
    expect(wrapper.classes()).toContain('is-disabled');
  });
});

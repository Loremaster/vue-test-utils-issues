import { shallowMount } from '@vue/test-utils';
import List from '@/components/List.vue';
import ListItem from '@/components/ListItem.vue';

describe('List.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(List, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('ListItem receives text as a prop', () => {
    const wrapper = shallowMount(List);
    const listItem = wrapper.find(ListItem);
    expect(listItem.props().text).toEqual("Learn Vue");
  });
});

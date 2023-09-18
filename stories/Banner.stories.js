import bannerVue from '../components/banner.vue';


// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Banner',
  component: bannerVue,
  tags: ['autodocs'],
  parameters: {
    md: false
  }
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    md: true
  },
};
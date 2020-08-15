export const state = () => ({
  news: []
});

export const mutations = {
  setUsers(state, news) {
    state.news = news;
  }
};

export const actions = {
  async fetch({ commit }) {
    const news = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    commit("setUsers", news);
  }
};

export const getters = {
  news: s => s.news
};

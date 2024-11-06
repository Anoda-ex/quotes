import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useQuotesStore = defineStore('counter', () => {
  const history = ref([])
  const quote = ref(null);
  const loading = ref(false);
  const error = ref('');
  const fetchQuote = async () => {
    loading.value = true;
    error.value = '';
    try {
      const response = await axios.get('https://api.quotable.io/random');
      await new Promise((resolve) => setTimeout(() => resolve(), 500))
      quote.value = response.data;
      addHistory(response.data)
    } catch (e) {
      error.value = 'Oops, something went wrong. Please try again later.';
    } finally {
      loading.value = false;
    }
  };
  function addHistory(item) {
    history.value.unshift(item)
  }

  return { history, quote, loading, error, fetchQuote }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'history',
        storage: localStorage,
        paths: ['history'],
      },
    ],
  },
})

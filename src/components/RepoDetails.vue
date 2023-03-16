<template>
  <div v-if="repo">
    <h1>{{ repo.name }}</h1>
    <p>{{ repo.description }}</p>
    <p>{{ repo.language }}</p>
    <a :href="repo.html_url" target="_blank">View on Github</a>
  </div>
  <RouterLink :to="{name: 'RepositoryGithub'}">Back to Repository</RouterLink>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      repo: {},
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        `https://api.github.com/repositories/${this.id}`
      );
      this.repo = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

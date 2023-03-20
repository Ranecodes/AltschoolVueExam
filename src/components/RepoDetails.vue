<template>
  <div class="srepo-container" v-if="repo">
    <div class="card-container">
      <h1>{{ repo.name }}</h1>
      <p class="description">{{ repo.description }}</p>
      <div class="table-container">
        <table class="table">
          <tr>
            <td>Language:</td>
            <td>{{ repo.language }}</td>
          </tr>
          <tr>
            <td>Stars:</td>
            <td>{{ repo.stargazers_count }}</td>
          </tr>
          <tr>
            <td>Watchers:</td>
            <td>{{ repo.watchers_count }}</td>
          </tr>
          <tr>
            <td>Forks:</td>
            <td>{{ repo.forks_count }}</td>
          </tr>
        </table>
      </div>

      <button class="sr-btn">
        <a :href="repo.html_url" target="_blank">View on Github</a>
      </button>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


    <footer>
      <div class="footer-container">
        <div class="footer-section-left">
          <h3>Privacy Policy</h3>
          <h3>Terms and Conditions</h3>
        </div>
        <div class="footer-section-right">
          <a href="mailto: ranehobasi@gmail.com">Contact Me</a>
        </div>
      </div>
    </footer>
  </div>
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

<style>
html,
body {
  margin: 0;
  padding: 0;
}
.srepo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #24292e;
}
.card-container {
  font-family: "DM Sans", sans-serif;
  background-color: #ffd233;
  color: #fff;
  width: fit-content;
  padding: 4rem 3rem;
  border-radius: 2.3125rem;
  margin: 1rem;
  margin-top: 3rem;
  margin-bottom: auto;
}

.card-container h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1c1d21;
}

.card-container p {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #1c1d21;
}
.description {
  padding-bottom: 1rem;
  font-size: 1rem;
}
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.table {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #1c1d21;
  border-collapse: collapse;
}

td {
  padding: 0.5rem;
  border: none;
}

th {
  border: none;
}

td:first-child {
  font-weight: bold;
}
.card-container table td {
  padding: 1.5rem 3rem;
}
.sr-btn {
  animation: bounce 2s ease-in-out infinite;
  font-family: "DM Sans", sans-serif;
  background-color: #7e12ff;
  color: #fff;
  border: none;
  margin-top: 4rem;
  padding: 1rem 3rem;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: bounce 0.3s ease-in-out;
}
.sr-btn:hover {
  background-color: #a76bff;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
footer {
  font-family: "DM Sans", sans-serif;
  background-color: #101011;
  bottom: 0;
  left: 0;
  width: 100%;
}
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 14px;
}
.footer-section-left {
  display: flex;
  justify-content: flex-start;
  color: #fff;
  padding-left: 3rem;
}

.footer-section-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
}

.footer-section-right a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-family: "DM Sans", sans-serif;
}

.footer-section-left h3 {
  margin-right: 50px;
  font-weight: 400;
}

@media only screen and (max-width: 600px){
  .card-container{
    width: 50%;
    padding: 2rem;
  }
  .card-container h1{
    font-size: 1rem;
  }
  .description{
    font-size: 0.75rem;
  }
  .card-container table td{
    padding: 1rem;
  }
  .sr-btn{
    margin-top: 0;
    padding: 1rem 2rem;
    font-size: 0.75rem;
  }
  .footer-container{
    font-size: 10px;
  }
  .footer-section-right a{
    font-size: 11px;
  }
  


}
</style>

<template>
    <div class="not-found">
        <!-- <h1 class="fade-in">404</h1>
        <p class="fade-in">Page not found</p> -->
        <img :src="require('/src/assets/Frame1.png')" alt="404 bot">
        <RouterLink class="btn" to="/">Go back to home</RouterLink>
        <br><br><br><br>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    name: "NotFound",
    components: {
        RouterLink,
    },
};
</script>

<style>
.not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #24292e;
}

.fade-in {
    font-size: 64px;
    color: #fff;
    animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.btn {
    animation: bounce 2s ease-in-out infinite;
    font-family: "Poppins", sans-serif;
    background-color: #7E12FF;
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

.btn:hover {
    background-color: #A76BFF;
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


</style>

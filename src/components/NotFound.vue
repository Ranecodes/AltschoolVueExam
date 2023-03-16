<template>
    <div>
        <h1>404</h1>
        <p>Page not found</p>
        <RouterLink to="/">Go back to home</RouterLink>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    name: "NotFound",
    components: {
        RouterLink,
    },
}
</script>


<template>
  <!-- NavBar -->
  <nav>
    <RouterLink to="/" class="logo">
      <img :src="require('/src/assets/bi_github.png')" alt="logo" />
      <h3>Githall</h3>
    </RouterLink>
    <ul>
      <li class="nav-link nav-link-repo">
        <RouterLink to="/repos">Repositories</RouterLink>
      </li>
      <li class="nav-link nav-link-test">
        <RouterLink to="//:notFound(.*)">404 Test</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
        display: flex;
        justify-content: space-between;
        align-items: center;         
        background-color: #24292e;
        font-family: 'DM Sans', sans-serif;
        padding: 1rem 5rem;
    }

    .logo {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
    }

    .logo h3{
        font-size: 20px;
    }
    .logo img {
        width: 2rem;
        margin-right: 1rem;
    }

    ul {
        display: flex;
        list-style: none;
    }

    .nav-link {
        margin-left: 2rem;
        font-size: 16px;
    }

    .nav-link-test{
        padding-left: 6.8rem;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

</style>

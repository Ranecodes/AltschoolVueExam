<template>
  <!-- NavBar -->
  <nav>
    <RouterLink to="/" class="logo">
      <img :src="require('/src/assets/bi_github.png')" alt="logo" />
      <h3>Githall</h3>
    </RouterLink>
    <button class="hamburger-menu-btn" @click="toggleMenu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
    <ul :class="{ 'show-menu': showMenu }">
      <li class="nav-link nav-link-repo">
        <RouterLink to="/repos">Repositories</RouterLink>
      </li>
      <li class="nav-link nav-link-test">
        <RouterLink to="//:notFound(.*)">404 Test</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #24292e;
  font-family: "DM Sans", sans-serif;
  padding: 1rem 5rem;
}

.logo {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
}

.logo h3 {
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

.nav-link-test {
  padding-left: 6.8rem;
}

a {
  color: #fff;
  text-decoration: none;
}
.showMenu{
  display:none;
}
.hamburger-menu-btn{
  display:none;
}
/* For Smaller Screens */

@media screen and (max-width: 768px) {
  nav {
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .logo {
    margin-bottom: 1rem;
  }

  .nav-link {
    margin-left: 0;
  }

  .nav-link-test {
    padding-left: 0;
  }
  .hamburger-menu-btn {
    display: flex;
  }
  ul {
  display: none;
  list-style: none;
}

}

.show-menu {
  display: flex !important;
  flex-direction: column;
  align-items: center;
}

.hamburger-menu-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  padding-bottom: 15px;
}

.hamburger-menu-btn:focus {
  outline: none;
}
</style>

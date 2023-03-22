<template>
  <div class="home-container">
    <div class="hero-section">
      <div class="hero-section-images">
          <img
            class="square hs-img"
            :src="require('/src/assets/Rectangle.png')"
            alt=""
          />
          <img
            class="raneh-img hs-img"
            :src="require('/src/assets/raneh.png')"
            alt=""
          />
          <div class="name-tag">
            <h3>Ranehobasi Egbe</h3>
            <h3 style="font-weight: 400;">Ranecodes</h3>
          </div>
      </div>
      <div class="hero-section-text">
        <h1>Hello there; Welcome 👋🏾</h1>
        <hr />
        <div class="hero-section-text-p">
          <p>
            I’m a student at Altschool Africa currently learning Frontend
            Development.
          </p>
          <p>Here's a quick summary about me:</p>
          <ul>
            <li>• 😊 Pronouns: She/her</li>
            <li>
              • 💡 Fun fact: I'm currently studying at AltSchool Africa School
              of Software <br />
              Engineering Class of 2022.
            </li>
            <li>• 🌱 I’m currently learning JavaScript and Reactjs.</li>
            <li>
              • 😊 I’m looking for help with open source projects, hackathons,
              internships,<br />
              and entry-level opportunities.
            </li>
            <li>
              • 💼 Job interests: Software Engineer, Front Engineer, or <br />
              UI Engineer (Intern or Junior level).
            </li>
            <li>
              • 📫 You can view my resume and contact me by emailing <br />
              ranehobasi@gmail.com.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mid-section">
        <img class="git-stats" :src="require('/src/assets/git-stats.png') " alt="Github Stats">
        <img class="lang-stats" :src="require('/src/assets/lang-stats.png')" alt="Language stats">
    </div>
    <div class="before-footer-section">
        <div class="b4-ft-top">
            <h1>Hall of fame... but for gits!</h1>
            <button>
                <RouterLink to="/repos">Go to Repos</RouterLink>
            </button>
        </div>
        <div class="b4-ft-bottom">
            <RouterLink class="logo" to="/">
                <img :src="require('/src/assets/bi_github.png')" alt="logo" />
                <h3>Githall</h3>
            </RouterLink>
            <div class="b4-ft-links">
                <RouterLink to="/repos">Repositories</RouterLink>
                <RouterLink to="//:notFound(.*)">404 Test</RouterLink>
            </div>
        </div>
    </div>
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

export default {
  name: "HomePage",
};
</script>

<style scoped>
.home-container {
  background-color: #24292e;
  color: #ffff;
}
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.hero-section-images {
  display: flex;
  flex-direction: column;
  margin-left: 6.25rem;
  bottom: 0;
  left: 100px;
}

.name-tag{
  font-family: "DM Sans", sans-serif;
  margin-left: 2rem;
  margin-top: 3.125rem;
  text-align: left;
  padding-top: 3rem;
  font-size: 1.25rem;
  line-height: 0.4;
}

.hero-section-images:hover .square {
  transform: translate(20px, 20px); 
}

.hero-section-images:hover .raneh-img {
  transform: translate(-20px, -20px);
}
.hs-img {
  position: absolute;
  bottom: 0;
  top: 4rem;
  animation: bottom 1s, left 1s;
  cursor: pointer;
}
.raneh-img {
  border-radius: 50%;
  margin-left: 3.125rem;
  height: 40%;
  transition: transform 0.3s ease-out;
}

.raneh-img:hover {
  transform: translate(20px, 0);
}

.square {
  margin-right: 3.125rem;
  height: 40%;
  transition: transform 0.3s ease-out;
}

.square:hover {
  transform: translate(0, 20px);
}

.hero-section-text {
  font-family: "DM Sans", sans-serif;
  padding: 0 8rem 0 10rem;
  text-align: left;
}

.hero-section-text h1 {
  font-size: 3rem;
  font-weight: 400;
}

.hero-section-text hr {
  width: 100%;
  border: 1px solid #fff;
}

.hero-section-text p {
  font-size: 1rem;
  font-weight: 400;
}
.hero-section-text ul {
  display: block;
  font-size: 1rem;
}

.hero-section-text-p {
  line-height: 1.5rem;
}

                       /* Middle Section */

.mid-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem;
    background-color: #24292e;
}

.git-stats{
    padding-left: 3rem;
}

.lang-stats{
    padding-right: 3rem;
}


          /* Before Footer Section */
.before-footer-section{
    background-color: #101011;
    padding-top: 30px;
    padding-bottom: 55px;
}
.b4-ft-top h1{
    font-size: 2.5rem;
    font-weight: 400;
    padding-top: 4.8125rem;
    padding-bottom: 2rem;
}
.b4-ft-top button{
    font-family: "Poppins", sans-serif;
    background-color: #7E12FF;
    color: #fff;
    border: none;
    padding: 0.75rem 3rem;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-out;
    animation: bounce 2s ease-in-out infinite;
}

.b4-ft-top button:hover{
    background-color: #A76BFF;
    transform: scale(1.1);
}


.b4-ft-bottom{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8rem;
}

.b4-ft-links{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 2.0;
    font-size: 16px;
    padding-right: 19rem;
}

.logo{
    padding-left: 7.5rem;
}
.logo h3{
  font-size: 16px;
}

     /* Footer Section */

     footer {
    font-family: "DM Sans", sans-serif;
    background-color: #101011;
  justify-content: space-between;
  align-items: center;
}
.footer-container{
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

        /* For smaller laptops */

@media screen and (max-width: 1024px) {
  .hero-section-text{
    padding: 0 3rem 0 4rem;
  }
  .hero-section-text h1{
    font-size: 2rem;
  }
  .hero-section-text p{
    font-size: 1rem;
  }
  .hero-section-text ul{
    font-size: 1rem;
  }
  .raneh-img{
    height: 30%;
  }
  .square{
    height: 30%;
  }
  .mid-section{
    justify-content: space-around;
  }
  .mid-section img{
    width: 400px;
  }
  .git-stats{
    padding-left: 0;
  }
  .lang-stats{
    padding-right: 0;
  }
  .name-tag{
    font-size: 1rem;
    margin-top: 0;
    line-height: 1;
    padding-top: 0;
  }
}

         /* For Smaller Screens */

@media screen and (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-section-images {
    margin-left: 0;
  }

  .hero-section-text {
    padding: 0 2rem;
    text-align: left;
  }

  .hero-section-text h1 {
    font-size: 2rem;
  }

  .hero-section-text p {
    font-size: 1rem;
  }

  .hero-section-text ul {
    font-size: 1rem;
  }

  .hero-section-text-p {
    line-height: 1rem;
  }

  .hero-section-images .raneh-img {
    margin-left: 0;
    top: 0;
    left: 112px;
    max-width: 20%;
    height: auto;
  }

  .hero-section-images .square {
    margin-right: 0;
    display: none;
  }

  .mid-section {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  .git-stats {
    padding-left: 0;
  }

  .lang-stats {
    padding-right: 0;
    padding-top: 20px;
  }

  .b4-ft-top h1 {
    font-size: 2rem;
    padding-top: 2.8125rem;
    padding-bottom: 1rem;
  }

  .b4-ft-top button {
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  .b4-ft-bottom {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
  }

  .b4-ft-links {
    padding-right: 0;
  }

  .logo {
    padding-left: 0;
  }
  .name-tag{
    text-align: left;
    font-size: 1.5rem;
  }
}
        /* For mobile screens */

@media only screen and (max-width: 600px) {
  .hero-section {
    padding: 0 1rem;
  }

  .hero-section-text {
    padding: 0.5rem 1rem;
  }

  .hero-section-text h1 {
    font-size: 1.5rem;
  }

  .hero-section-text p {
    font-size: 0.75rem;
  }

  .hero-section-text ul {
    font-size: 0.75rem;
  }

  .hero-section-text-p {
    line-height: 1rem;
  }

  .hero-section-images .raneh-img {
    margin-left: 0;
    top: 0;
    left: 80px;
    max-width: 20%;
    height: auto;
  }

  .mid-section img{
    width: 100%;
  }

  .b4-ft-top h1 {
    font-size: 1.5rem;
    padding-top: 1.8125rem;
    padding-bottom: 0.5rem;
  }

  .b4-ft-top button {
    padding: 0.4rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
  }

  .b4-ft-top button:hover {
    transform: scale(1);
  }

  .b4-ft-bottom {
    padding-top: 2rem;
  }

  .b4-ft-links {
    padding-right: 0;
  }

  .logo {
    padding-left: 0;
  }
  .name-tag{
    text-align: left;
    font-size: 0.75rem;
    padding-left: 40px;
    line-height: 0.5;
  }
  .lang-stats {
    padding-right: 0;
    padding-top: 20px;
  }
  .footer-container{
    font-size: 10px;
  }
  .footer-section-right a{
    font-size: 11px;
  }
}

</style>

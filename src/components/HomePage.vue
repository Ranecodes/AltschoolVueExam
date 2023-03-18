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
  color: #fff;
}
.hero-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.hero-section-images {
  margin-left: 6.25rem;
  bottom: 0;
  left: 100px;
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
  height: 50%;
  transition: transform 0.3s ease-out;
}

.raneh-img:hover {
  transform: translate(20px, 0);
}

.square {
  margin-right: 3.125rem;
  height: 50%;
  transition: transform 0.3s ease-out;
}

.square:hover {
  transform: translate(0, 20px);
}

.hero-section-text {
  font-family: "DM Sans", sans-serif;
  padding: 0 10rem;
  text-align: left;
}

.hero-section-text h1 {
  font-size: 4rem;
  font-weight: 400;
}

.hero-section-text hr {
  width: 100%;
  border: 1px solid #fff;
}

.hero-section-text p {
  font-size: 1.25rem;
  font-weight: 400;
}
.hero-section-text ul {
  display: block;
  font-size: 1.25rem;
}

.hero-section-text-p {
  line-height: 2.2275rem;
}

                       /* Middle Section */

.mid-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem;
}

.git-stats{
    padding-left: 3rem;
}

.lang-stats{
    padding-right: 3rem;
}
</style>

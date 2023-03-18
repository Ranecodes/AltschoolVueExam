<template>
    <!-- Footer Bar -->
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
</template>

<style>
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
    padding: 1rem 5rem;
    font-size: 20px;
    
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
}

.footer-section-right a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-family: "DM Sans", sans-serif;
}

.footer-section-left h3 {
  margin-right: 50px;
  font-weight: 400;
}
</style>
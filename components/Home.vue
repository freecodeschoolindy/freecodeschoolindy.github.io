<template>
  <i-container class="home">
    
    <h1>FreeCodeSchool Indy</h1>
    <p>FreeCodeSchool is a free training program for web development aimed at helping students learn the skills needed to transition into a career as web designers, developers, and software engineers. The program is free, however limited to a small number of enrollee's. Students will learn HTML, CSS, and JavaScript in a collaborative environment, develop skills for a career in tech, and create portfolio-ready projects. freeCodeSchool is presented by freeCodeCamp Indy in partnership with the Indianapolis Central Library.</p>


    <i-container>
      <i-row>
        <i-column md="4" class="_text-center">
            <i-row>
              <i-column md="12" sm="6">
                <img src="../_imgs/freeIcon.svg" alt="Free" class="about-icon"/>
              </i-column>
              <i-column md="12" sm="6">
                <label><strong>Completely Free</strong></label>
              </i-column>
            </i-row>
          <p>Volunteers and our partnership with the Public library allows us to offer this program for free.</p>
        </i-column>
        <i-column md="4" class="_text-center">
          <label>
            <img src="../_imgs/freeIcon.svg" alt="Free" class="about-icon"/>
            <strong>Completely Free</strong>
          </label>
          <p>Volunteers and our partnership with the Public library allows us to offer this program for free.</p>
        </i-column>
        <i-column md="4" class="_text-center">
          <label>
            <img src="../_imgs/freeIcon.svg" alt="Free" class="about-icon"/>
            <strong>Completely Free</strong>
          </label>
          <p>Volunteers and our partnership with the Public library allows us to offer this program for free.</p>
        </i-column>
      </i-row>
    </i-container>


    <h3> What is <strong>"freeCodeCamp"</strong></h3>

    <p>FreeCodeCamp is an international non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications, and local organizations that intend to make learning web development accessible to anyone.</p>


    <h3> What is <strong>freeCodeCamp Indy</strong></h3>

    <p>We are a group that meets regularly to hold events around learning to code, coding with others, support for those learning, and talks on topics relevant to this field. The group began in 2015 and has held monthly talks/workshops, and occasional mini-hackathons and code-n-coffee's. Each event is free and marked on Meetup.com.</p>

    <ul><li> https://meetup.com/Free-Code-Camp-Indy</li> </ul>


  </i-container>
</template>

<script>
module.exports = {
  name: 'Home',
  props: {
    file: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.about-icon {
  width: 30px;
}
</style>

<template>
  <section class="metaverse-about">
    <metaverse-page>
      <div>
        <h1>About</h1>
        <img class="metaverse-about__image mt-10" src="../../public/placeholder.png" />
      </div>

      <span class="metaverse-about__text">
        <p><em>Author's Note</em></p>
        <p>Anyone who knows me knows I am one of the more technology-averse members of Gen Z. I don’t use social media unless absolutely necessary, it took me an obscenely long time to transition from CDs to iTunes to streaming services and I still prefer wired earphones over bluetooth ones. This begs the question, ‘Why would I spend an entire semester delving into the metaverse, one of the most complex technological phenomenons of our time?’</p>
        <p>I suppose I wanted to challenge myself. My favorite thing about being a journalist is that my job is to learn. I learn from renowned leaders and experts and tell their stories. This topic arose after a conversation with a friend where we disagreed on the implications of the metaverse, which made me realize how polarizing it is - even when it does not yet exist.</p>
        <p>I used this project to learn the ins and outs of a system I would otherwise never broach and reported it in a way that would help people like me understand it - from a human, rather than technical, perspective. Whether you enjoy technology or not, the metaverse will play a big role in your future and we all need to know more about it.</p>
        <p>Throughout this intensive process, I learned not only about the metaverse but about myself as a journalist. I think this project is one of my proudest achievements. Don’t get me wrong; these pieces are not going to teach you everything about the metaverse, nor do I believe any single piece of journalism could achieve that. But it will give you a foundational understanding of the concept we will continue hearing about over the next few years.</p>
        <p>Take your time; I hope you learn a little something.</p>
      </span>

      <span class="metaverse-about__text">
        <p><em>About the Project</em></p>
        <p>In the College of Arts, Media and Design at Northeastern University, the Honors in the Discipline program offers students the opportunity to complete an advanced project in an area related to their academic program, typically through a four-credit course.</p>
        <p>Beginning with a proposal and ending with a presentation for the Dean, faculty members and other students, the program participants work with a supervising faculty member to execute the project over one semester. Students who successfully complete the Honors in the Discipline program will earn an Honors credential on their official transcript.</p>
      </span>

      <div class="metaverse-about__acknowledgements mt-15">
        <h2>Acknowledgements</h2>

        <span class="metaverse-about__text">
          <p>
            This website is the product of four months of detailed research, interviewing, reporting and synthesizing. But I couldn’t do it alone.
          </p>

          <p>
            My biggest thanks goes to Carlene Hempel, a teaching professor at the School of Journalism and my supervising instructor for this project. She has been my greatest supporter and a brilliant mentor; I could not have completed this project without her patience, foresight and guidance and I owe many of my journalistic accomplishments to her teachings.
          </p>

          <p>
            I’m grateful for Natalie Hsu, my website developer. Natalie is a PlusOne student at Northeastern University. Last year, she received her bachelor’s degree in computer science and interaction design and is currently working toward a master’s degree in information design and data visualization. She’s responsible for this beautiful website; she carefully helped me design and implement my vision for this project.
          </p>

          <p>Lastly, I would like to thank the School of Journalism as well as my family and friends for their continued support throughout not only this project but my collegiate education as a whole.</p>

        </span>
      </div>
    </metaverse-page>
  </section>
</template>

<script>
import metaversePage from "../components/metaverse-page.vue";

export default {
  name: "metaverse-about",
  components: {
    metaversePage
  }
}
</script>

<style lang="scss" scoped>

.metaverse-about {
  &__image {
    width: 100%;
    height: 500px;
  }

  &__text {
    margin-top: 10vh;

    span {
      margin: 10px 0;
    }
  }
}

</style>
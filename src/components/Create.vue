<template>

  <section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffffff" fill-opacity="1"
            d="M0,160L48,160C96,160,192,160,288,186.7C384,213,480,267,576,282.7C672,299,768,277,864,256C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            style="--darkreader-inline-fill:#181a1b;" data-darkreader-inline-fill=""></path>
    </svg>
    <div class="container flex main">
      <img class="img" src="https://uv97gofhf5.a.trbcdn.net/app/images/home/sport/QUIZ.svg?ver=20210915.9.38027">
      <div class="flex block">
        <div class="text">
          <h2>The online quiz maker that's easy to use, fun and fully customizable</h2>
          <h3>Create a quiz that engages students, generates leads or promotes your brand.</h3>
        </div>


        <img class="img img-gif"
             src="https://myquizhub-waveaccess.netdna-ssl.com/app/images/home/animation.gif?ver=20210915.9.38027"
             alt="game demo"
             data-src="https://myquizhub-waveaccess.netdna-ssl.com/app/images/home/animation.gif?ver=20210915.9.38027">


      </div>
      <div class="flex block-grid">
        <h2 class="title-grid">Templates for our online quiz maker</h2>
        <p class="p-grid">Want some ideas for your next scored quiz? Check out these ready-to-go templates:</p>
        <div class="grid">
          <div class="flex grid-item geo">
            <img class="mini-logo" alt=""
                 src="//images.ctfassets.net/co0pvta7hzrh/5rZOXuwVEs4kiePPQ9HdRW/fd32ab23adf174311063c14abc95eecb/Geography-Quiz.svg"
                 title="" style="max-width: 42px; max-height: 42px;">

            <h3>GEOGRAPHY QUIZ</h3>
            <p>This template tests general knowledge and keeps them engaged with a friendly tone.</p>
            <p>Learn more</p>

          </div>
          <div class="flex grid-item vocabulary">
            <img class="mini-logo" alt=""
                 src="//images.ctfassets.net/co0pvta7hzrh/g6rIrBRV8nm9YeQtShnXL/ee719b281ddde0bac885129966834290/vocabulary-quiz.svg"
                 title="" style="max-width: 42px; max-height: 42px;">
            <h3>VOCABULARY QUIZ</h3>
            <p>This template is ideal for English teachers wishing to make learning more fun.</p>
            <p>Learn more</p>
          </div>
          <div class="flex grid-item trivia-">
            <img class="mini-logo" alt=""
                 src="//images.ctfassets.net/co0pvta7hzrh/6ebVqmL0Tq3xPMy35n6Zdw/e9240c407bc032a3628037119971d5e8/Trivia-Quiz.svg"
                 title="" style="max-width: 42px; max-height: 42px;">
            <h3>TRIVIA QUIZ</h3>
            <p>This quiz template lets you build your own trivia game. Add some GIFs and modify the questions to launch
              your online quiz today.</p>
            <p>Learn more</p>
          </div>
          <div class="flex grid-item science">
            <img class="mini-logo" alt=""
                 src="//images.ctfassets.net/co0pvta7hzrh/6dCZNhjlPNSQXVwd9sYEPu/7a499029568599aa3b33f26ff239e104/Science-Quiz.svg"
                 title="" style="max-width: 42px; max-height: 42px;">
            <h3>SCIENCE QUIZ</h3>
            <p>Here’s another good example of online teaching. This quiz uses images, icons, and personalized messages
              to
              make learning enjoyable and efficient.</p>
            <p>Learn more</p>
          </div>
          <div class="flex grid-item english">
            <img class="mini-logo" alt=""
                 src="//images.ctfassets.net/co0pvta7hzrh/3pHiJonAMDaa3Wy2D81Kla/d124a2c599500c85a2ce74584efe6960/English-Placement-Test.svg"
                 title="" style="max-width: 42px; max-height: 42px;">
            <h3>ENGLISH TEST</h3>
            <p>A placement test like this is fun, engaging, but takes a little time to edit. When you’re ready to flex
              its
              power, our online quiz maker won’t disappoint.</p>
            <p>Learn more</p>
          </div>
          <div class="flex grid-item math">
            <img class="mini-logo" alt=""
                 src="//images.ctfassets.net/co0pvta7hzrh/2lotpfUWawqUYNZUSKKNWZ/55d9dac1dc5a3c2760033ea1b6512b35/Math-Quiz.svg"
                 title="" style="max-width: 42px; max-height: 42px;">
            <h3>MATH QUIZ</h3>
            <p>Math. Just the name brings some people to tears. But this math quiz makes learning as easy as Pi.</p>
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </div>

    <svg class="svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ffff" fill-opacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>

  </section>
</template>

<script>

export default {
  name: "Create",
  components: {}
}
</script>

<style scoped>

.img {
  width: 70%;
}
.svg-bottom {
  box-shadow: white 0px 10px;
}

section {
  background: black;
  color: white;
}

.main {
  padding-bottom: 3em;
  flex-direction: column;
  align-items: center;
}

.img-gif {
  display: none;
}

button {
  font-size: 1.5em;
  background: white;
  color: black;
  border: none;
  padding: 0 1.1em;
  border-radius: 30px;
}

a {
  letter-spacing: 0.25em;
}

.block-grid {
  flex-direction: column;
  align-items: flex-start;
}

.block-grid {
  margin-top: 4em;
}

.grid {
  padding-top: 2em;
}

.grid-item {
  margin-bottom: 2em;
  padding: 1em 1.5em;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.grid-item p {
  margin-bottom: 1em;
}

.geo {
  grid-area: geo;
}

.vocabulary {
  grid-area: vocabulary;
}

.trivia- {
  grid-area: trivia-;
}

.science {
  grid-area: science;
}

.english {
  grid-area: english;
}

.math {
  grid-area: math;
}


@media (min-width: 1000px) {
  * {
    text-align: left;
  }

  .block {
    justify-content: space-around;
  }

  .text {
    margin: 1em 0;
    width: 45%;
    align-self: flex-start;
  }

  .img-gif {
    display: initial;
  }

  h2 {
    font-size: 4em;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 2em;
    color: #dddddd;
  }

  .img-gif {
    height: auto;
    max-width: 400px;
    border-radius: 30px;
    box-shadow: 7px 7px 0 white, 14px 14px 0 purple;
  }

  button {
    font-size: 3em;
  }

  .title-grid {
    margin-top: 5em;
    font-size: 2em;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1em 4em;
    grid-auto-flow: row;
    grid-template-areas:
    "geo vocabulary ."
    "trivia- science ."
    "english math .";
  }

  .grid-item {
    flex-direction: column;
    justify-content: space-between;
  }

  .grid-item h3,
  .grid-item p {
    align-self: flex-start;
  }

  .grid-item p {
    align-self: flex-start;
    max-width: 35ch;
  }

  .mini-logo {
    margin-left: 0.5em;
    align-self: flex-start;
  }
}

</style>
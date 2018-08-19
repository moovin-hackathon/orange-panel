<template>
  <div class="animated fadeIn" v-if="question">
    <b-row class="margin-bottom">
      <b-col md="12">
        <b-progress :value="actual" :max="total"></b-progress>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12">
        <b-card>
          <div slot="header">
            <span class="card-title">{{ question.subject.name }}</span>
            <b-badge variant="success" class="float-right align">{{ `${actual + 1}/${total}` }}</b-badge>
          </div>

          <span class="question">{{ actual + 1 }}. {{ question.description }}</span>

          <div class="margin-top">
            <label v-for="(answer, index) in question.answers" :key="answer.id" class="d-block pointer">
              <input type="radio" v-model="question.answerSelected" :value="answer.id">
              <span class="radio"></span>
              <span class="txt">{{ letters[index]}}) {{ answer.description }}</span>
            </label>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="2">
        <b-button block variant="success" @click="previous()" :disabled="actual === 0">Voltar</b-button>
      </b-col>

      <b-col md="2" offset="8">
        <b-button block variant="success" @click="next()" :disabled="!question.answerSelected" v-if="actual !== (total - 1)">Avançar</b-button>
        <b-button block variant="success" @click="done()" v-else>Finalizar</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    question: null,
    actual: 0,
    letters: ['a', 'b', 'c', 'd', 'e']
  }),
  mounted () {
    if (!this.questions.length) {
      this.$router.push('/questions')
    }
    this.question = this.questions[this.actual]
  },
  methods: {
    ...mapActions('questions', [
      'sendAnswers'
    ]),
    previous () {
      this.actual--
    },
    next () {
      this.actual++
    },
    async done () {
      await this.sendAnswers()

      this.$router.push('/finishquiz')
    }
  },
  computed: {
    ...mapState('questions', [
      'total',
      'questions'
    ])
  },
  watch: {
    actual (value) {
      this.question = this.questions[value]
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }

  .btn-action {
    font-size: 40px;
    text-align: center;
    padding: 100px 0;
  }

  .align{
    font-size: 15px;
    margin-top: 5px;
  }
  .pointer {
    cursor: pointer;
  }

  .margin-top {
    margin-top: 20px;
    font-size: 18px;
  }

  .card-title {
    font-size: 20px;
  }

  .question {
    font-size: 18px;
  }

  .margin-bottom {
    margin-bottom: 16px;
  }

  .txt {
    display: inline-block;
    vertical-align: middle;
    line-height: 18px;
  }

  .radio {
    width: 14px;
    height: 14px;
    border-radius: 100%;
    border: 1px solid #39b2d5;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    margin-right: 10px;
    line-height: 18px;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + .radio::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    top: 2px;
    left: 2px;
    background: #43b6d7;
    border-radius: 100%;
  }
</style>

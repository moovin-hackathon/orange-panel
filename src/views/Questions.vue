<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" @click="redirectToChallenger()" class="pointer">
        <b-card class="text-white bg-danger">
          <div class="btn-action">Desafio</div>
        </b-card>
      </b-col>

      <b-col sm="6" @click="redirectToPersonalize()" class="pointer">
        <b-card class="text-white bg-info">
          <div class="btn-action">Personalizar</div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('questions', [
      'fetchQuestions'
    ]),
    async redirectToChallenger () {
      await this.fetchQuestions({
        options: this.options
      })

      this.$router.push('/quiz')
    },
    redirectToPersonalize () {
      this.$router.push('/personalize')
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

  .pointer {
    cursor: pointer;
  }
</style>

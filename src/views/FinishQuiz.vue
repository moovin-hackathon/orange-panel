<template>
  <div class="animated fadeIn" v-if="report">
    <b-row>
      <b-col sm="6" lg="4">
        <b-card no-body class="bg-success">
          <b-card-body class="pb-0">
            <div class="margin">
              <p>Acertos</p>
              <h4 class="mb-0">{{ report.accerts }}</h4>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" lg="4">
        <b-card no-body class="bg-danger">
          <b-card-body class="pb-0">
            <div class="margin">
              <p>Erros</p>
              <h4 class="mb-0">{{ report.errors }}</h4>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="6" lg="4">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <div class="margin">
              <p>Nota</p>
              <h4 class="mb-0">{{ report.average }}</h4>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  mounted () {
    if (!this.questions.length) {
      this.$router.push('/questions')
    }
  },
  computed: {
    ...mapState('questions', [
      'questions'
    ]),
    ...mapGetters('questions', [
      'getReport'
    ]),
    report () {
      return this.getReport()
    }
  }
}

</script>

<style>
  .margin {
    font-size: 40px;
    text-align: center;
    padding: 60px 0;
  }
</style>

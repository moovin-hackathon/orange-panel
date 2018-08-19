<script src="../../../../placemarket/marketplace-panel/src/api/index.js"></script>
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-form-group>
          <label>Ano</label>
          <b-form-select v-model="options.year"
                         :plain="true"
                         :options="years">
          </b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="6" v-show="show">
        <b-form-group>
          <label>Disciplina</label>
          <b-form-select v-model="options.subject"
                         :plain="true"
                         :options="subjects">
          </b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="6" v-show="show">
        <b-form-group>
          <label>Quantidade máxima de questões</label>
          <b-form-input v-model="options.totalQuestions"/>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="2" offset="10">
        <b-button block variant="success" @click="startQuiz()" :disabled="disabled">Iniciar prova</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import api from '@/api'

export default {
  data: () => ({
    show: false,
    years: [],
    subjects: [],
    options: {
      year: 'Escolha',
      subject: '',
      totalQuestions: 0,
      duration: 0
    }
  }),
  async mounted () {
    try {
      this.years = await api.getYears()
      this.years.unshift('Escolha')
    } catch (e) {
    }
  },
  methods: {
    ...mapActions('questions', [
      'fetchQuestions'
    ]),
    async startQuiz () {
      await this.fetchQuestions({
        options: this.options
      })

      this.$router.push('/quiz')
    }
  },
  computed: {
    disabled () {
      return this.options.year === 'Escolha' || this.options.subject === 'Escolha'
    }
  },
  watch: {
    async 'options.year' (value) {
      this.show = true
      this.subjects = []
      this.options.subject = 'Escolha'

      try {
        this.subjects = await api.getSubjects(value)
        this.subjects
      } catch (e) {
      }
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

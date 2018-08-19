import api from '@/api'

export default {
  namespaced: true,
  state: {
    questions: [],
    total: 0,
    fetching: false
  },
  actions: {
    async fetchQuestions ({ state, commit }, { options }) {
      commit('fetching')

      const questions = await api.makeQuiz(options)

      commit('setFetchData', questions)
    },
    async sendAnswers ({ state, commit }) {
      for (let i in state.questions) {
        try {
          await api.sendAnswer({
            user_id: 1,
            question_id: state.questions[i].id,
            selectedAnswer_id: state.questions[i].answerSelected
          })
        } catch (e) {
        }
      }
    }
  },
  getters: {
    getReport: state => () => {
      let totalAccerts = 0
      for (let i in state.questions) {
        const question = state.questions[i]

        for (let j in question.answers) {
          const answer = question.answers[j]

          if (answer.correct) {
            if (answer.id === question.answerSelected) {
              totalAccerts++
            }
          }
        }
      }

      return {
        accerts: totalAccerts,
        errors: state.total - totalAccerts,
        average: (10 * totalAccerts) / state.total
      }
    }
  },
  mutations: {
    setFetchData (state, questions) {
      state.questions = questions
      state.total = questions.length
      state.fetching = false
    },
    fetching (state) {
      state.fetching = true
    }
  }
}

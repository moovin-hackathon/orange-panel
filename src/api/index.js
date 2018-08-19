import axios from 'axios'
import request from '@/api/request'

export default {
  /**
   * Retorna os anos das perguntas.
   *
   * @returns {Promise<*>}
   */
  async getYears () {
    return (await request.get(`/years`)).data
  },
  /**
   * Retorna as disciplinas das perguntas.
   *
   * @returns {Promise<*>}
   */
  async getSubjects (year) {
    return (await request.get(`/subjects/${year}`)).data
  },
  async makeQuiz (options) {
    return (await request.get(`/quiz`, {
      params: options
    })).data
  },
  async sendAnswer (answer) {
    return (await request.get(`/quiz`, {
      params: answer
    })).data
  }
}

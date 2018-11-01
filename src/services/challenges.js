import Backendless from '../adapters/Backendless'

const backendless = new Backendless()

export const getChallenges = () => {
  return backendless.getStorageData('challenges', { sortBy: 'created' })
}

export const getChallenge = id => {
  return backendless.getStorageData('challenges', { where: `id = '${id}'` })
    .then(challenges => challenges[0] || {})
}

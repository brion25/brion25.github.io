import showdown from 'showdown'

import Backendless from '../adapters/Backendless'

const backendless = new Backendless()

export const getChallenges = () => {
    return backendless.getStorageData('challenges', { sortBy: 'created' })
}

export const getChallenge = id => {
    return backendless.getStorageData('challenges', { where: `id = '${id}'` })
        .then(challenges => {
            const converter = new showdown.Converter()
            const challenge = challenges[0] || {}

            challenge.html = converter.makeHtml(challenge.description || '')

            return challenge
        })
}

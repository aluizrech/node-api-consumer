const axios = require('axios').default

const getEndereco = async (cep) => {
    try {
        const viaCepURL = `https://viacep.com.br/ws/${cep}/json/`
        const {data} = await axios.get(viaCepURL)
        return data
    } catch (error) {
        console.error(error)
    }
}

module.exports = { getEndereco }

import axios from 'axios';

let state = () => ({
    dadosPessoais: {
        nome: '',
        email: '',
        outroEmail: '',
        dataNascimento: '',
        genero: '',
        cpf: '',
        rg: '',
        ufEmissor: '',
    },

    dadosContato: {
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cep: '',
        uf: '',
        cidade: '',
        telefone: '',
        email: '',
    },

    dadosUsuario: {
        usuario: '',
        senha: '',
        confirmacaoSenha: '',
    },

    api: {
        estados: [],
        cidades: [],
    }
});

const getters = {
    dadosPessoais: (state) => {
        return state.dadosPessoais;
    },

    dadosContato: (state) => {
        return state.dadosContato;
    },

    dadosUsuario: (state) => {
        return state.dadosUsuario;
    },

    listaUfs: (state) => {
        return state.api.estados.map((estado) => ({
            id: estado.id,
            uf: estado.uf
        }));
    },

    listaCidades: (state) => {
        return state.api.cidades.map((cidade) => ({
            id: cidade.id,
            nome: cidade.nome
        }));
    },
};

const mutations = {
    syncEmail(state){
        state.dadosContato.email = state.dadosPessoais.email;
    },
};

const actions = {
    async fetchUfs({state}) {
        let valor = await axios.get('http://localhost:8000/api/estado');
        state.api.estados = valor.data.estados
    },
    async fetchCidades({state}, city = 4) {
        let resp = await axios.get(`http://localhost:8000/api/${city}/cidades`);
        state.api.cidades = resp.data.cidades
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
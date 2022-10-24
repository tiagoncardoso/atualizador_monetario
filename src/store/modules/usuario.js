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
        cidade: [],
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
};

const mutations = {
    syncEmail(state){
        state.dadosContato.email = state.dadosPessoais.email;
    }
};

const actions = {
    async fetchUfs({state}) {
        let valor = await axios.get('http://localhost:8000/api/estado');
        state.api.estados = valor.data.estados
    },

    async fetchCity( {state} ) {
        let valor = await axios.get(`http://localhost:8000/api/4/cidades`);
        state.api.cidade = valor.data.cidades
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
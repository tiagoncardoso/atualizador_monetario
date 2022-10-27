import axios from 'axios';

let state = () => ({
    dadosPessoais: {
        nome: '',
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
        email2: '',
    },

    dadosUsuario: {
        usuario: '',
        senha: '',
        confirmacaoSenha: '',
    },

    api: {
        estados: [],
        cidades: [],
    },

    overlay: false,
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

    loading: (state) => {
        return state.overlay
    },
};

const mutations = {
    syncEmail(state){
        state.dadosContato.email = state.dadosPessoais.email;
    },

    mostraOverlay(state){
        state.overlay = true;
    },

    paraOverlay(state){
        state.overlay = false;
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
    async saveUsuario({state}){
        const payload = {
            pessoa: {
                nome: state.dadosPessoais.nome,
                dataNascimento: state.dadosPessoais.dataNascimento,
                genero: state.dadosPessoais.genero,
                cpf: state.dadosPessoais.cpf,
                rg: state.dadosPessoais.rg,
                ufEmissor: state.dadosPessoais.ufEmissor,
            },
        
            contato: {
                logradouro: state.dadosContato.logradouro,
                numero: state.dadosContato.numero,
                complemento: state.dadosContato.complemento,
                bairro: state.dadosContato.bairro,
                cep: state.dadosContato.cep,
                uf: state.dadosContato.uf,
                cidade: state.dadosContato.cidade,
                telefone: state.dadosContato.telefone,
                email: state.dadosContato.email,
                email2: state.dadosContato.email2,
            },
        
            usuario: {
                usuario: state.dadosUsuario.usuario,
                senha: state.dadosUsuario.senha,
            },
        };
        return await axios.post('http://localhost:8000/api/usuario', payload);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
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
            uf: estado.uf,
        }));
    },

    listaCidades: (state) => {
        return state.api.cidades.map((cidade) => ({
            id: cidade.id,
            nome: cidade.nome,
        }));
    },

    loading: (state) => {
        return state.overlay;
    },
};

const mutations = {
    syncEmail(state) {
        state.dadosContato.email = state.dadosPessoais.email;
    },

    mostraOverlay(state) {
        state.overlay = true;
    },

    paraOverlay(state) {
        state.overlay = false;
    },

    reset(state) {
        state.dadosPessoais.nome = '';
        state.dadosPessoais.dataNascimento = '';
        state.dadosPessoais.genero = '';
        state.dadosPessoais.cpf = '';
        state.dadosPessoais.rg = '';
        state.dadosPessoais.ufEmissor = '';

        state.dadosContato.logradouro = '';
        state.dadosContato.numero = '';
        state.dadosContato.complemento = '';
        state.dadosContato.bairro = '';
        state.dadosContato.cep = '';
        state.dadosContato.uf = '';
        state.dadosContato.cidade = '';
        state.dadosContato.telefone = '';
        state.dadosContato.email = '';
        state.dadosContato.email2 = '';

        state.dadosUsuario.usuario = '';
        state.dadosUsuario.senha = '';
        state.dadosUsuario.confirmacaoSenha = '';
    },

    editarDados ( state, dados) {
        state.dadosPessoais.nome = dados.nome;
        state.dadosPessoais.dataNascimento = dados.nascimento;
        state.dadosPessoais.genero = dados.genero;
        state.dadosPessoais.cpf = dados.cpf;
        state.dadosPessoais.rg = dados.rg;
        state.dadosPessoais.ufEmissor = getItemByUf(dados.uf_rg, state);

        state.dadosContato.logradouro = dados.logradouro;
        state.dadosContato.numero = dados.numero;
        state.dadosContato.complemento = dados.complemento;
        state.dadosContato.bairro = dados.bairro;
        state.dadosContato.cep = dados.cep;
        state.dadosContato.uf = getItemByUf(dados.uf, state);;
        state.dadosContato.cidade = dados.cidade;
        state.dadosContato.telefone = dados.telefone;
        state.dadosContato.email = dados.email;
        state.dadosContato.email2 = dados.email2;

        state.dadosUsuario.usuario = dados.usuario;
        state.dadosUsuario.senha = dados.senha;
    },
};

const actions = {
    async fetchUfs({ state }) {
        let valor = await axios.get('http://localhost:8000/api/estado');
        state.api.estados = valor.data.estados;
    },
    async fetchCidades({ state }, city = 4) {
        let resp = await axios.get(`http://localhost:8000/api/${city}/cidades`);
        state.api.cidades = resp.data.cidades;
    },
    async saveUsuario({ state }) {
        const payload = {
            pessoa: {
                nome: state.dadosPessoais.nome,
                dataNascimento: state.dadosPessoais.dataNascimento,
                genero: state.dadosPessoais.genero,
                cpf: state.dadosPessoais.cpf,
                rg: state.dadosPessoais.rg,
                ufEmissor: state.dadosPessoais.ufEmissor.id,
            },

            contato: {
                logradouro: state.dadosContato.logradouro,
                numero: state.dadosContato.numero,
                complemento: state.dadosContato.complemento,
                bairro: state.dadosContato.bairro,
                cep: state.dadosContato.cep,
                uf: state.dadosContato.uf.id,
                cidade: state.dadosContato.cidade.id,
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

    async editUsuario({ state }, id) {
        debugger
        const edit = {
            pessoa: {
                nome: state.dadosPessoais.nome,
                dataNascimento: state.dadosPessoais.dataNascimento,
                genero: state.dadosPessoais.genero,
                cpf: state.dadosPessoais.cpf,
                rg: state.dadosPessoais.rg,
                ufEmissor: state.dadosPessoais.ufEmissor.id,
            },

            contato: {
                logradouro: state.dadosContato.logradouro,
                numero: state.dadosContato.numero,
                complemento: state.dadosContato.complemento,
                bairro: state.dadosContato.bairro,
                cep: state.dadosContato.cep,
                uf: state.dadosContato.uf.id,
                cidade: state.dadosContato.cidade.id,
                telefone: state.dadosContato.telefone,
                email: state.dadosContato.email,
                email2: state.dadosContato.email2,
            },

            usuario: {
                usuario: state.dadosUsuario.usuario,
            },
        };
        return await axios.put(`http://localhost:8000/api/usuario/${id}`, edit);
    },
};

function getItemByUf(ufStr, state) {
    const estados = state.api.estados
    return estados
            .filter((item) => item.uf === ufStr)
            .map((item) => ({ id: item.id, uf: item.uf }))[0]
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

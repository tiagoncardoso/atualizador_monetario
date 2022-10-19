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
};

const mutations = {
    syncEmail(state){
        state.dadosContato.email = state.dadosPessoais.email;
    }
};

const actions = {
    cadastro() {
        alert("Confirmado");
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
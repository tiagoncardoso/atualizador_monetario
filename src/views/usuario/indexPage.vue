<template>
    <div>
        <v-card>
            <v-card-title> Usuários </v-card-title>
            <v-btn class="botao" :to="link" color="primary">Novo</v-btn>

            <v-data-table :headers="headers" :items="buscaPessoa" :items-per-page="5" class="elevation-1">
                <template v-slot:item.cidade="{ item }">
                    <v-simple-table> {{ item.cidade }}/{{ item.uf }} </v-simple-table>
                </template>
                <template v-slot:item.acoes="{ item }">
                    <v-btn :to="linkEdicao(item)" color="yellow" class="pequeno">
                        <v-icon small> mdi-pencil </v-icon>
                    </v-btn>
                    <v-btn @click="deletar(item)" color="red" class="pequeno">
                        <v-icon small> mdi-delete </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            headers: [
                {
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'Nome', value: 'nome' },
                { text: 'Gênero', value: 'genero' },
                { text: 'Cidade/UF', value: 'cidade' },
                { text: 'E-mail', value: 'email' },
                { text: 'Status', value: 'status' },
                { text: 'Ações', value: 'acoes' },
            ],
            buscaPessoa: [],
            link: 'usuario/novo',
        };
    },
    methods: {
        async buscaUsuario() {
            let resp = await axios.get(`http://localhost:8000/api/usuario`);
            this.buscaPessoa = resp.data.usuarios;
        },
        linkEdicao(objPessoa) {
            return `usuario/edit/${objPessoa.id}`;
        },

        async deletar(rota) {
            this.popout(rota.id);
        },

        popout(id) {
            this.$swal({
                title: 'Tem certeza que deseja deletar ?',
                showDenyButton: true,
                confirmButtonText: 'Deletar',
                denyButtonText: `Cancelar`,
            }).then( async (result) => {
                if(result.isConfirmed){
                    await axios.delete(`http://localhost:8000/api/usuario/${id}`)
                    this.$swal('Deletado!', '', 'success').then(() => {
                        this.buscaUsuario(); 
                    })
                }
            });
        },
    },

    async mounted() {
        await this.buscaUsuario();
    },
};
</script>

<style scoped>
.v-card__title {
    flex-direction: column;
}

.botao {
    margin-left: 10px;
}

.v-btn:not(.v-btn--round).v-size--default {
    min-width: 40px;
}
</style>
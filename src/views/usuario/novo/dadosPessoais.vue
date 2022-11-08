<template>
    <div>
        <v-form>
            <v-card elevation="12">
                <v-toolbar> Dados pessoais </v-toolbar>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="dadosPessoais.nome"
                                label="Nome*"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder=""
                                :rules="nomePessoa"
                            />
                        </v-col>

                        <v-col cols="6">
                            <input-date 
                                v-model="dadosPessoais.dataNascimento" 
                                label="Data de nascimento" 
                                rules 
                            />
                        </v-col>

                        <v-col cols="6">
                            <v-select
                                v-model="dadosPessoais.genero"
                                :items="itemsGenero"
                                :rules="[(v) => !!v || 'Campo obrigatório']"
                                label="Gênero"
                                required
                                outlined
                                dense
                            />
                        </v-col>

                        <v-col cols="5">
                            <input-cpf 
                                v-model="dadosPessoais.cpf" 
                                label="CPF (apenas digitos)*" 
                                dense 
                                outlined 
                                counter="14" 
                                rules 
                                placeholder
                                persistent-placeholder
                            />
                        </v-col>

                        <v-col cols="5">
                            <v-text-field
                                v-model="dadosPessoais.rg"
                                :rules="itemsRg"
                                :counter="7"
                                label="RG (apenas digitos)*"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="0000000"
                            />
                        </v-col>

                        <v-col cols="2">
                            <v-select
                                v-model="dadosPessoais.ufEmissor"
                                :rules="[(v) => !!v || 'Campo obrigatório']"
                                label="UF Emissor*"
                                required
                                outlined
                                dense
                                :items="listaUfs"
                                return-object
                                item-value="id"
                                item-text="uf"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-form>
    </div>
</template>

<script>
import InputDate from '@/components/shared/InputDate.vue';
import InputCpf from '@/components/shared/InputCpf.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'DadosPessoais',
    components: {
        InputDate,
        InputCpf,
    },
    computed: {
        ...mapGetters('usuario', ['dadosPessoais', 'listaUfs']),
    },

    data() {
        return {
            nomePessoa: [(v) => !!v || 'O nome é obrigatório', (v) => v.length <= 100 || 'Digite o seu nome completo'],
            itemsRg: [(v) => !!v || 'O RG é obrigatório', (v) => v.length <= 7 || 'Digite apenas 7 dígitos'],
            itemsGenero: ['Masculino', 'Feminino', 'Outros'],
        };
    },

    methods: {
        ...mapMutations('usuario', ['syncEmail', 'padrao']),
        
    },

    watch: {
        'dadosPessoais.email'() {
            this.syncEmail()
        },

        'dadosPessoais.dataNascimento'() {
            debugger
            this.padrao()
        }
    }
};
</script>

<style scoped></style>

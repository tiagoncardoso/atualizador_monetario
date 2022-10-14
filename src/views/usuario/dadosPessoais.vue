<template>
    <div>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field 
                            v-model="nome" 
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
                        <v-text-field 
                            v-model="email" 
                            label="E-mail*"
                            :rules="emailRules"
                            required 
                            outlined
                            dense
                            persistent-placeholder
                            placeholder="usuario@usuario.com"
                        />
                    </v-col>

                    <v-col cols="6">
                        <v-text-field
                            v-model="outroEmail"
                            label="Outro e-mail"
                            required
                            outlined
                            dense
                            persistent-placeholder
                            placeholder="usuario@usuario.com"
                        />
                    </v-col>

                    <v-col cols="6">
                        <input-date
                            v-model="dataNascimento"
                            label="Data de nascimento"
                            rules
                        />
                    </v-col>

                    <v-col cols="6">
                        <v-select
                            v-model="genero"
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
                            v-model="cpf"
                            label="CPF (apenas digitos)*"
                            dense
                            outlined
                            counter="14"
                            rules
                        />
                    </v-col>

                    <v-col cols="5">
                        <v-text-field
                            v-model="rg"
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
                            v-model="ufEmissor"
                            :rules="[(v) => !!v || 'Campo obrigatório']"
                            label="UF Emissor*"
                            required
                            outlined
                            dense
                        />
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
import InputDate from '@/components/shared/InputDate.vue';
import InputCpf from '@/components/shared/InputCpf.vue';

export default {
    name: 'DadosPessoais',
    data() {
        return{
            nome: '',
            email: '',
            outroEmail: '',
            dataNascimento: '',
            genero: '',
            cpf: '',
            rg: '',
            ufEmissor: '',
            nomePessoa: [(v) => !!v || 'O nome é obrigatório', (v) => v.length <= 100 || 'Digite o seu nome completo'],
            itemsRg: [(v) => !!v || 'O RG é obrigatório', (v) => v.length <= 7 || 'Digite apenas 7 dígitos'],
            emailRules: [(v) => !!v || 'Campo obrigatório', (v) => /.+@.+/.test(v) || 'E-mail inválido'],
            itemsGenero: ['Masculino', 'Feminino', 'Outros'],
        }
    },
    components: {
        InputDate,
        InputCpf,
    },
};
</script>

<style scoped>
</style>
<template>
    <div>
        <v-form>
            <v-card elevation="12" class="mt-10">
                <v-toolbar> Dados do usuário </v-toolbar>
                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <v-text-field
                                v-model="dadosUsuario.usuario"
                                label="Usuário*"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="usuario_usuario"
                                :rules="nomePessoa"
                            />
                        </v-col>

                        <v-col cols="4">
                            <v-text-field
                                v-model="dadosUsuario.senha"
                                label="Senha*"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="******"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rulesSenha.required, rulesSenha.min]"
                                :type="show1 ? 'text' : 'password'"
                                counter
                                @click:append="show1 = !show1"
                            />
                        </v-col>

                        <v-col cols="4">
                            <v-text-field
                                v-model="dadosUsuario.confirmacaoSenha"
                                label="Confirmação de senha*"
                                required
                                outlined
                                dense
                                persistent-placeholder
                                placeholder="******"
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[
                                    rulesConfirmacaoSenha.required,
                                    rulesConfirmacaoSenha.min,
                                    rulesConfirmacaoSenha.valid,
                                ]"
                                :type="show1 ? 'text' : 'password'"
                                counter
                                @click:append="show1 = !show1"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'DadosUsuario',

    computed: {
        ...mapGetters('usuario', ['dadosUsuario']),
    },

    data() {
        return {
            show1: false,
            nomePessoa: [(v) => !!v || 'Campo Obrigatório', (v) => v.length <= 100 || 'Digite o seu usuário'],
            senhaPessoa: [(v) => !!v || 'Campo Obrigatório', (v) => v.length >= 6 || 'No mínimo 6 dígitos'],
            rulesSenha: {
                required: (value) => !!value || 'Campo Obrigatório',
                min: (v) => v.length >= 6 || 'Mínimo 6 dígitos',
            },
            rulesConfirmacaoSenha: {
                required: (value) => !!value || 'Campo Obrigatório',
                min: (v) => v.length >= 6 || 'Mínimo 6 dígitos',
                valid: (v) => this.senha == v || 'Senhas não coincidem',
            },
        };
    },
};
</script>

<style scoped></style>

<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height id="principal">
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <h1><img src="../../assets/logo.png" alt="#" width="80" height="80"/></h1>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>ACESSE SUA CONTA</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        label="Login"
                                        type="text"
                                        outlined
                                        dense
                                        placeholder="exemplo@empresa.com"
                                    />
                                    <v-text-field
                                        label="Senha"
                                        hint="Mínimo 8 caracteres"
                                        outlined
                                        dense
                                        counter
                                        placeholder="********"
                                        :type="show1 ? 'text' : 'password'"
                                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="show1 = !show1"
                                        :rules="[rules.required, rules.min]"
                                    />
                                    <v-row>
                                        <v-col cols="12" offset="8">
                                            <a href="#">Esqueceu a senha?</a>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn block depressed color="primary"> ENTRAR </v-btn>
                            </v-card-actions>
                            <v-row>
                                <v-col cols="12" class="link">
                                    <v-text>
                                        <span>Não tem uma conta? </span>
                                        <a href="#">Crie uma</a>
                                    </v-text>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

export default {
    data() {
        return {
            show1: false,
            rules: {
                required: (value) => !!value || 'Required.',
                min: (v) => v.length >= 8 || 'Mínimo 8 caracteres',
                emailMatch: () => `The email and password you entered don't match`,
            },
        };
    },
};
</script>

<style scoped>
#principal {
    background-image: url(https://images.pexels.com/photos/373584/pexels-photo-373584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    font-family: 'Poppins', sans-serif;
    background-size: cover;
    padding: 50px;
}

#principal::before {
    opacity: 0.8;
}

h1{
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    color: rgb(13, 131, 194);
}

.link{
    text-align: center;
    margin-top: 10px;
    padding: 20px;
    font-size: 15px;
}
</style>
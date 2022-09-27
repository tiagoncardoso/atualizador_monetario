<template>
    <div>
        <v-row style="position:fixed">
            <v-col cols="9">
                <v-parallax class="v-parallax" :src="imageLink.sub_main" height="660">
                    <h1 class="titulo">Manage your order</h1>
                    <p class="paragrafoSimples">Add captions to your slides easily with the .carousel-caption element within any 
                        .carousel-item. They can be easily hidden on smaller viewports, 
                        as shown below, with optional display utilities. 
                        We hide them initially with .d-none and bring them back on medium-sized devices</p>
                    <hr/>
                    <div class="paragrafoFone">
                        <span class="margem">Ph :- +91 9756545434</span>
                        <span>Fax :- (+7867 65 544)</span>
                    </div>
                </v-parallax>
            </v-col>

            <v-col cols="3">
                <v-row class="segundoTitulo semPadding">
                    <img src="../../assets/logo.png" alt="#" width="45" height="45"/>
                    <v-col class="semPadding">
                        <span class="letraSegundoTitulo">True Login</span>
                    </v-col>
                </v-row>
                <p class="ajusteLogin">Login into Your Account</p>
                <v-col class="semPadding">
                    <label class="letraPadrao" for="">Email ID</label>
                    <v-text-field type="text" name="#" id="#" outlined dense
                    class="semPadding inputPadrao"/>

                    <label class="letraPadrao" for="">Password</label>                        
                    <v-text-field type="text" name="#" id="#" outlined dense
                    class="semPadding inputPadrao"/>
                    <v-row class="letraPequena">
                        <v-col cols="1">
                            <v-checkbox/>
                        </v-col>
                        <v-col cols="4" class="mt-6">
                            <span class="letraPequena semPadding">Keep me Sign In</span>
                        </v-col>
                        <v-col cols="6" class="mt-6">
                            <a href="#">Forget Password ?</a>
                        </v-col>
                    </v-row>
                    <v-col>
                        <v-btn color="primary ml-16 mt-6">
                            Login
                        </v-btn>
                    </v-col>
                </v-col>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                imageLink: {
                    sub_main:
                        "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
                },
                po: "osdsaadsi",
            }
        }
    }
</script>

<style scoped>
.test {
    background-color: black;
}

.test2 {
    background-color: red;
}

.titulo {
    font-family: "mouse-500", Arial, Helvetica, sans-serif;
    font-size: 2.0rem;
    margin-top: 350px !important;
    margin-left: 40px;
}

.paragrafoSimples {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 40px;
}

hr{
    margin-left: 40px;
    margin-right: 50px;
}

.paragrafoFone {
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 50px;
    margin-top: 10px;
    font-size: 12.8px;
}
.margem {
    margin-right: 20px;
}

.segundoTitulo {
    margin-left: 65px;
    margin-top: 78px;
}

.letraSegundoTitulo {
    font-size: 25px;
    margin-top: 10px;
    font-weight: bolder;
    color: rgb(14, 138, 107);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.semPadding {
    padding: 0px !important;
}

.ajusteLogin {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    margin-left: 70px;
    font-size: 12.8px;
}

.inputPadrao{
    width: 250px;
}

.letraPadrao {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12.8px;
}

.letraPequena{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10.8px !important;
}
</style>
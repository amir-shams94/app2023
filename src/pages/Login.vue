<template>
    <q-page class="login_back">
        <div class="row justify-center">
            <div class="col-md-4 ">


                <q-card class="my-card " flat style="background:none;">
                    <q-img position="relative" fit="cover" width="" src="../assets/images/logo-login.svg">


                    </q-img>



                    <q-card-section class="description"
                        style="background: rgb(255, 255, 255);background-image: url('@/assets/images/RADIN.png');border-radius: 25px 25px 0 0;">
                        <div class="absolute-top text-h6 text-center" style="
    top: -26px;
">


                            <q-btn color="white" class="q-px-xl q-py-xs" text-color="black" label="ورود"
                                @click="trueLogin" />
                            <q-btn color="white" class="q-px-xl q-py-xs" text-color="black" label="ثبت نام " />

                        </div>
                        <div class="text-h6 justify-center" style="">
                            پلتفرم معاملات آنلاین و کیف پول ارز دیجیتال
                        </div>

                    </q-card-section>
                </q-card>
            </div>

        </div>
    </q-page>
    <q-dialog v-model="login" position="bottom">
        <q-card class=" " style="width: 700px; max-width: 80vw;">
            <q-card-section>
                <div class="row">

                    <div class="text-h6">ورود به رادین </div>
                    <q-btn icon="close" flat round dense v-close-popup />
                </div>
            </q-card-section>
            <q-form @reset="onReset" class="q-gutter-md">
                <q-card-section class="q-pt-none">

                    <q-input filled type="text" v-model="username" label="Your UserName *" hint="Your UserName" />

                    <q-input filled type="text" v-model="pass" label="Your password *" />

                    <router-link to="">فراموشی رمز عبور </router-link>

                    <div>

                    </div>

                </q-card-section>

                <q-card-actions align="right" class="text-primary">

                    <q-btn label="Submit" @click="loginOn(username, pass)" color="primary" />
                    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </q-card-actions>
            </q-form>
        </q-card>
    </q-dialog>

</template>

<script setup>
import { ref } from 'vue'
import { useLoginStore } from '@/store';
import { useRouter } from 'vue-router';
const login = ref(false)
const router = useRouter()
const username = ref('')
const pass = ref('')
const store = useLoginStore()
function trueLogin() {
    login.value = true
}
async function loginOn() {

    await store.login(username.value, pass.value)
    router.push('/')

}

</script>
<style>
.login_back {
    background: linear-gradient(102.32deg, #2F046B -7.72%, #4D72FF 50.99%);

}

.description {
    background: url('@/assets/images/RADIN.png');
}
</style>
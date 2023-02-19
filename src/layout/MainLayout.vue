
<template>
    <q-layout view="hHh lpR fFf">

        <q-header elevated v-if="route.name != 'login'" >
            <q-toolbar class="bg-grey-3 text-white rounded-borders">

                <q-btn round to="/login" dense flat icon="person" color="teal-5" class="q-mr-xs" />
                <q-avatar class="gt-xs">
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>

                <q-space />

                <q-input outlined rounded  dense standout v-model="text" input-class="text-right " class="q-ml-xl">
                    <template v-slot:append>
                   
                        <q-icon  name="search" class="search" @click="text = ''" />
                    </template>
                </q-input>
                <q-btn flat round dense color="teal-5" icon="mail" class="q-mr-sm" />
                <q-btn flat round dense color="teal-5" icon="support_agent" class="q-mr-sm" />
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer reveal bordered class="bg-grey-8 text-white" v-if="route.name != 'login'">
            <q-toolbar>
                <q-toolbar-title>
             
                     <q-btn-group :spread="true">
               <q-btn label="معرفی دوستان" style="color: #6694FF" icon="supervised_user_circle" stack />
                    <q-btn label="کیف پول" style="color: #6694FF" icon="account_balance_wallet" stack />
                    <q-btn label="واریز" style="color: #6694FF" icon="download" stack />
                    <q-btn label="برداشت" style="color: #6694FF" icon="upload" stack />
                </q-btn-group>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>

    </q-layout>
</template>


<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()




</script>



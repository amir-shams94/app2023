<template>
    <q-page>


        <div class="col-md-12">
            <div class="q-pa-md">
                <q-carousel animated v-model="slide" rounded navigation infinite :autoplay="autoplay">
                    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
                    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
                    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
                    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
                </q-carousel>
            </div>

        </div>


        <div class="col-md-12">
            <div class="q-pa-md">
                <Carousel :settings="settings" :wrap-around="true" :breakpoints="breakpoints">
                    <Slide v-for="slide in 10" :key="slide">
                        <div class="carousel__item"><q-card flat class="my-card">
                                <q-card-section>
                                    <div class="text-h5">بیت کوین/تومان</div>
                                </q-card-section>

                                <q-card-section class="q-pt-none">
                                    <div class="text-h6">
                                        20142.2 $
                                    </div>
                                </q-card-section>
                                <q-card-section class="q-pt-none">
                                    <div class="text-h6 text-positive">
                                        + 0.15%
                                    </div>
                                </q-card-section>


                            </q-card></div>

                    </Slide>

                    <template #addons>

                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>


        <div class="col-md-12">
            <div class="q-pa-md">
                <q-btn-group :spread="true">
               <q-btn label="معرفی دوستان" style="color: #6694FF" icon="supervised_user_circle" stack />
                    <q-btn label="کیف پول" style="color: #6694FF" icon="account_balance_wallet" stack />
                    <q-btn label="واریز" style="color: #6694FF" icon="download" stack />
                    <q-btn label="برداشت" style="color: #6694FF" icon="upload" stack />
                </q-btn-group>
            </div>
        </div>
        <div class="q-pa-md">
            <div class="q-gutter-y-md">


                
                    <q-tabs v-model="tab" dense class="bg-grey-3" align="justify" narrow-indicator
                        style="width: 370px;margin: 0 0px;margin: 0 auto;direction:rtl">
                        <q-tab name="IRT" label="تومان IRT" />
                        <q-tab name="USDT" label="تتر USDT" />

                    </q-tabs>
                    <q-tab-panels class="tran" v-model="tab" animated>
                        <q-tab-panel name="IRT">
                           <Table virtual-scroll :limit="limitData"  :marketData="rial" />
                            <div class="q-pa-md q-gutter-sm"> <q-btn  color="white" text-color="black" label="Read More" @click="showReadMoreButton" /></div>
                        </q-tab-panel>

                        <q-tab-panel name="USDT">
                    <Table virtual-scroll :limit="limitData"  :marketData="usdt" />
                    <div class="q-pa-md q-gutter-sm"> <q-btn color="white" text-color="black" label="Read More"
                            @click="showReadMoreButton" /></div>
                        </q-tab-panel>


                    </q-tab-panels>

                    <q-separator />


            
            </div>
        </div>
    </q-page>

</template>


<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { computed, reactive, ref } from 'vue'
import { useMarketsStore } from '../store/markets.js'
import { useLoginStore } from '@/store';
import Table from '@/components/Table.vue'
const slide = ref(3)
const tab = ref('IRT');
const store = useMarketsStore()
const storeLogin = useLoginStore()


const breakpoints = reactive({
    700: {
        itemsToShow: 2.5,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 4.5,
        snapAlign: 'center',
    },
})
const settings = reactive({
    itemsToShow: 2.5,
    snapAlign: 'center',
})

async function fetchMeProfile(){
    await storeLogin.getMe()
}
fetchMeProfile()
async function getMarkets() {
    await store.fetchMarkets()
}
getMarkets()
const limitData =ref(5)
const rial = computed(() =>store.marketsRls) 
function showReadMoreButton() {
    console.log(store.marketsRls.length);
    if (limitData.value < store.marketsRls.length)
    {
        limitData.value = store.marketsRls.length
    }else limitData.value=5

    // limitData.value

}

const usdt = computed(() => store.marketsUsdt) 




</script>


<style scoped>
.q-carousel {
    background-color: #fff;
    height: 189px;

    border-radius: 48px;
}

.dir {
    direction: rtl !important;
    
}
.tran{
    transition:.5s!important
}
</style>
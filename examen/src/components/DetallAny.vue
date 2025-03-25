<script setup>
import { useBeques } from '@/composables/useBeques';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const { fetchDetallBeques} = useBeques();
const detall = ref([]);

onMounted(async () => 
{detall.value = await fetchDetallBeques(route.params.anyBeca);},
)

const tornar = () => {
    router.push('/anys_beques');
};
</script>
<template>
    <div>
        <h2>Informe de l'any {{ route.params.anyBeca }}</h2>
        <p>Clica sobre el tipus de centre per visualitzar les dades</p>
        <h3>Centres:</h3>
        <div v-for="(any, index) in detall" :key="index">
            <ul>
                <li>
                    <RouterLink :to="`/detall_centre/${any}`">{{any.tipus_de_centres}}</RouterLink>
                </li>
            </ul>
        </div>
        <button @click="tornar">Tornar</button>
    </div>
</template>
<style scoped></style>

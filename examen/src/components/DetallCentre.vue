<script setup>
import { useBeques } from '@/composables/useBeques';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();
const { fetchCentresBeques} = useBeques();
const detallCentres = ref([]);

onMounted(async () => 
{detallCentres.value = await fetchCentresBeques(route.params.centre, route.params.any);},
)

const tornar = () => {
    router.push('/detall_any');
};
</script>
<template>
    <div>
        <h2>Informe sobre Beques i Mobilitat a {{ route.params.centre }}</h2>
        <h3>Any: {{ route.params.any }}</h3>
        <div v-for="(centre, index) in detallCentres" :key="index">
            <ul>
                <li>Beques Dones: {{ centre.formaci_dones }}</li>
                <li>Beques Dones: {{ centre.formaci_homes }}</li>
                <li>Mobilitat Dones: {{ centre.mobilitat_dones }}</li>
                <li>Mobilitat Homes: {{ centre.mobilitat_homes }}</li>
            </ul>
        </div>
        <button @click="tornar">Tornar</button>
    </div>
</template>
<style scoped></style>

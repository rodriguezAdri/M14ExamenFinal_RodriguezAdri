<script setup>
import { useBeques } from '@/composables/useBeques';
import { onMounted } from 'vue';

const { beques, fetchBeques } = useBeques()
onMounted(() => {
    fetchBeques();
})
</script>
<template>
    <div>
        <h2>Llistat d'anys</h2>
        <ul>
            <li v-for="any in beques" :key="any">
                <RouterLink :to="`/detall_any/${any}`">{{ any }}</RouterLink>
            </li>
        </ul>
    </div>
</template>
<style scoped></style>
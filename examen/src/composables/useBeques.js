import { ref } from "vue";

export function useBeques(){
    const beques = ref([]);

    const fetchBeques = async () => {
        const res = await fetch('https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json');
        const data = await res.json();
        const ultimsAnys = [...new Set(data.map(a => a.any))];
        beques.value = ultimsAnys;
    };

    const centres = ref([]);

    const fetchCentresBeques = async (centre, any) => {
        const res = await fetch(`https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json?tipus_de_centres=${centre}&any=${any}`);
        const data = await res.json();
        const ultimsCentres = [...new Set(data.map(c => c.tipus_de_centres))];
        centres.value = ultimsCentres;
    };

    //Filtra els centres per anys
    const fetchDetallBeques = async (any) => {
        const url = `https://analisi.transparenciacatalunya.cat/resource/rsgi-8ymj.json?any=${any}`
        const res = await fetch(url);
        return await res.json();
    };
    
    return { beques, centres, fetchBeques, fetchDetallBeques, fetchCentresBeques};
} 
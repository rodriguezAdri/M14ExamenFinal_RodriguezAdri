<script setup></script>
<template>
    <div>
        <nav>
            <ul>
                <li><router-link :to="`/`">Home</router-link></li>
                <li><router-link :to="`/anys_beques`">Beques</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<style scoped>
div{
    background-color: rgb(236, 236, 236);
}

ul{
    display: flex;
    justify-content: flex-end;
    padding: 2%;
    
    list-style: none;
}

li{
    margin-right: 5%;
    
}

a{
    text-decoration: none;
    color: rgb(0, 132, 255);
    border: 2px solid rgb(0, 132, 255);
    border-radius: 10px;
    padding: 15px;
    transition: 0.3s;
    
}

a:hover{
    color: white;
    background-color: rgb(0, 132, 255);
    
}
</style>
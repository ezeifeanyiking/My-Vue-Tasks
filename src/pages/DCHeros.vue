<template>
<div class="m-auto h-screen">
    <h1 class="text-2xl">DC Heros</h1>
    <li class="flex justify-between" v-for="(hero, index) in superheros" :key="hero"> 
        <div>{{ hero }} </div> 
        <button @click="removeHero(index)" class="border px-4">x</button>
    </li>
    <form class="mt-5" @submit.prevent="addHero">
        <input class="border rounded" v-model="newHero" placeholder="Enter hero name">
        <button class="border rounded bg-green-500" v-on:click="addHero">Add Hero</button>
    </form>
</div>
</template>

<script>
export default {
    data(){
        return{
            newHero: "",
            superheros: ["Eze Ifeanyi", "1", "2", "3", "4", "5", "6", "7"]
        }
    },
    methods: {
        addHero(){
            if (this.newHero !== ""){
                this.superheros.push(this.newHero); 
                this.newHero = '';
            }
        },
        removeHero(index){
            this.superheros.splice(index, 1);
        }
    },
    computed: { 
        herosCount(){
            return this.superheros.length;
        }
    }

}
</script>

<style>

</style>
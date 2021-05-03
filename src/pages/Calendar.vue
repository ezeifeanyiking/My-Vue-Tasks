<template>
<div class="m-auto h-screen">
  <h1 class="font-bold text-2xl text-center">Vue Calendar</h1>
  {{ daysInMonth() }} {{ startDay() }}
  <section class="flex flex-wrap m-auto justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold">{{ currentYear }}</h2>
  </section>
  <section class="flex text-center justify-center m-auto">
      <p class="w-10 h-10 font-bold" style="width:14.28%" v-for="day in days" :key="day"> {{ day }}</p>
  </section>
  <section class="flex flex-wrap m-auto">
      <p class="w-10 h-10 text-center" style="width:14.28%" v-for="num in startDay() " :key="num"> </p>
      <p class="w-10 h-10 text-center" style="width:14.28%" v-for="num1 in daysInMonth() " :key="num1" :class="currentDateClass(num1)"> {{ num1 }}</p>
  </section>
  <section class="flex flex-wrap m-auto justify-between">
      <button class="px-2 border rounded" @click="prev">Prev</button>
      <button class="px-2 border rounded" @click="next">Next</button>
  </section>
</div>
</template>

<script>
export default {
    data(){
        return {
            // currentDate: new Date().getUTCDate(),
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth(),
            days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        }
    },
    methods: {
        daysInMonth(){
            const month = new Date().getMonth();
            const year = new Date().getFullYear();
            console.log(year, month);
            return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        },
        startDay(){
            return new Date(this.currentYear, this.currentMonth, 1).getDay();
        },
        next(){
            if (this.currentMonth === 12){
                this.currentMonth = 0;
                this.currentYear++;
            }
            return this.currentMonth++;
        },
        prev(){
            if (this.currentMonth === 0){
                this.currentMonth = 12;
                this.currentYear--;
            }
            return this.currentMonth--;
        },
        currentDateClass(num1){
            const calendarFullDate = new Date(this.currentYear, this.currentMonth, num1).toDateString();
            const currentFullDate = new Date().toDateString();
            return calendarFullDate === currentFullDate ? 'text-red-600' : '';
        }
    },
    computed: { 
        currentMonthName(){
            return new Date(this.currentYear, this.currentMonth).toLocaleString("default", { month: "long"});
        }
    }

}
</script>

<style>

</style>
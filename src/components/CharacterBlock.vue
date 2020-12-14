<template>
    <div class="character">

        <div class="avatar"><img :src="character.image" alt=""></div>
        <div class="info-wrapper">
        <span>{{character.name}}</span>
        <span>{{character.status}}-{{character.species}}</span>
        <span>Last know location: {{character.location.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CharacterBlock",
        props: {
            character: {
                type: Object,
                required: true
            }
        },
        methods:{
            // getInfo(){
            //     console.log(character)
            // }
        }
    }
</script>

<style scoped>
.character{
    display: flex;
}
</style>
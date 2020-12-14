<template>
    <div>
        blogs
        <CharacterBlock v-for="character in characters"
                        :key="character.id"
                        :character="character"/>
    </div>
</template>

<script>
    import CharacterBlock from "../components/CharacterBlock";

    export default {
        name: "Blogs",
        components: {CharacterBlock},
        data() {
            return {
                currentPage: 1
            }
        },
        created() {
            this.$store.dispatch('fetchCharacters', this.currentPage)
        },
        computed: {
            characters() {
                return this.$store.getters['getCaractersByPage'](this.currentPage)
            }
        }
    }
</script>

<style scoped>

</style>
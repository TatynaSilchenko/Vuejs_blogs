<template>
    <div>
        blogs
        <CharacterBlock v-for="character in characters"
                        :key="character.id"
                        :character="character"/>
        <paginate
                v-model="currentPage"
                :page-count="pages"
                :page-range="3"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'">
        </paginate>
    </div>
</template>

<script>
    import CharacterBlock from "../components/CharacterBlock";
    import Paginate from 'vuejs-paginate';``

    export default {
        name: "Blogs",
        components: {CharacterBlock,Paginate},
        data() {
            return {
                currentPage: 1
            }
        },
        computed: {
            characters() {
                return this.$store.getters['getCaractersByPage'](this.currentPage)
            },
            pages(){
                return this.$store.state.pages.pages
            }
        },
        methods: {
            clickCallback(pageNum) {
                console.log(pageNum)
            }
        },
        watch: {
            currentPage: {
                handler(page){
                    this.$store.dispatch('fetchCharacters', page)
                },
                immediate:true
            }

        }
    }
</script>

<style scoped>
    .pagination {
    }
    .page-item {
    }
</style>
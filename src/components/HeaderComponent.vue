<template>
    <div class="header_container">
        <div>
            <p>{{ user }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data(){
        return {
            user: 'peter rock'
        }
    }
}
</script>

<style>
.header_container {
    height: 10vh;
    background-color: gray;
}
</style>
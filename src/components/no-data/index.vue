<template>
    <div class="nodata">
        <img src='../../assets/images/noData.png'>
        <p v-html='data'></p>
    </div>
</template>
<script>
    export default {
        name: 'no-data',
        props: {
            data: {
                type: String,
                default: ''
            }
        }
    }
</script>
<style lang="scss" scoped>
    .nodata{
        text-align: center;
        width: 100%;
        padding: 2rem 1rem 0;
        img{
            width: 80%;
        }
        p{
            font-size: .9rem;
            color: #e1523f;
            margin-top: -.5rem;
        }
    }
</style>

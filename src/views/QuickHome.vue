<template>
    <my-page title="速算">
        <ul class="type-list">
            <li class="item">
                <router-link class="link" to="/exam/1">启蒙</router-link>
            </li>
            <li class="item">
                <router-link class="link" to="/exam/2">休闲</router-link>
            </li>
            <li class="item">
                <router-link class="link" to="/exam/3">负重</router-link>
            </li>
            <li class="item">
                <router-link class="link" to="/exam/4">残酷</router-link>
            </li>
        </ul>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.type-list {
    .item {
        float: left;
        width: 80px;
        height: 80px;
        padding: 16px;
        margin-right: 16px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
    }
    .link {
        font-size: 18px;
    }
}
</style>

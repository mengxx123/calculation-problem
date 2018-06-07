<template>
    <my-page class="page-exam" :title="title" backable>

        <div class="count-box">
            <div>连续答对：{{ continuousRightCount }}</div>
            <div>答对：{{ rightCount }}</div>
            <div>答错：{{ errorCount }}</div>
        </div>
        <div class="screen">{{ question }} = {{ inputStr }}</div>

        <ul class="btn-list">
            <li class="item">
                <div class="btn" @click="input(1)">1</div>
            </li>
            <li class="item">
                <div class="btn" @click="input(2)">2</div>
            </li>
            <li class="item">
                <div class="btn" @click="input(3)">3</div>
            </li>
            <li class="item">
                <div class="btn" @click="input(4)">4</div>
            </li>
            <li class="item">
                <div class="btn" @click="input(5)">5</div>
            </li>
            <li class="item">
                <div class="btn" @click="input(6)">6</div>
            </li>
            <li class="item">
                <div class="btn" @click="input(7)">7</div>
            </li>
            <li class="item">
                <div class="btn" @click="input(8)">8</div>
            </li>
            <li class="item">
                <div class="btn" @click="input(9)">9</div>
            </li>
             <li class="item">
                <div class="btn"></div>
            </li>
            <li class="item">
                <div class="btn" @click="input(0)">0</div>
            </li>
            <li class="item">
                <div class="btn"></div>
            </li>
        </ul>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                title: '启蒙测试',
                type: 1,
                question: '9+8',
                inputStr: '',
                answer: '17',
                rightCount: 0,
                errorCount: 0,
                continuousRightCount: 0
            }
        },
        mounted() {
            let titles = ['', '启蒙', '休闲', '负重', '残酷']
            this.type = this.$route.params.type
            this.title = titles[this.type]
            this.timer = setInterval(() => {

            }, 1000)
            if (this.type === 1) {
            }
        },
        methods: {
            ramdom(min, max) {
                return Math.round(min + Math.random() * (max - min))
            },
            make() {
                let a = this.ramdom(0, 9)
                let b = this.ramdom(0, 9)
                this.question = a + '+' + b
                this.answer = '' + (a + b)
                this.inputStr = ''
            },
            input(value) {
                this.inputStr += value
                if (this.inputStr === this.answer) {
                    this.$message({
                        type: 'success',
                        text: '答对了'
                    })
                    this.continuousRightCount++
                    this.rightCount++
                    this.make()
                    return
                }
                if (!this.answer.includes(this.inputStr)) {
                    this.$message({
                        type: 'danger',
                        text: '答错了'
                    })
                    this.errorCount++
                    this.continuousRightCount = 0
                    this.make()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.screen {
    margin-bottom: 16px;
    font-size: 32px;
    text-align: center;
}
.btn-list {
    display: flex;
    flex-wrap: wrap;
    .item {
        flex-basis: 33.3%;
        // margin-bottom: 16px;
        height: 120px;
        padding: 8px;
        color: #42b5f4;
    }
    .btn {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 80px;
        color: #333;
        font-size: 24px;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #eee;
        cursor: pointer;
    }
}
.count-box {
    position: absolute;
    right: 16px;
    top: 16px;
}
</style>

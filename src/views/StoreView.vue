<template>
    <div>
        <from>
            <label>
                제품ID:
                <input type="text" v-model="productInfo.product_id">
            </label>
            <br>
            <label>
                제품명:
                <input type="text" v-model="productInfo.product_name">
            </label>
            <br>
            <label>
                카테고리:
                <input type="radio" value="A" v-model="productInfo.category">A
                <input type="radio" value="B" v-model="productInfo.category">B
            </label>
            <br>
            <button type="button" @click="addCart">추가</button>
        </from>
        <table>
            <thead>
            <caption> total : {{ total }}</caption>
            <tr>
                <th>카테고리</th>
                <th>제품ID</th>
                <th>제품명</th>
            </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(info, idx) in productList">
                    <td>{{ info.category }}</td>
                    <td>{{ info.product_id }}</td>
                    <td>{{ info.product_name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                productInfo: {
                    product_id : "",
                    product_name : "",
                    category : 'A'
                }
            }
        },
        computed : { // 데이터를 기준으로 연산된 결과를 가지고 있는것. (ex.원화를 기준으로 달러,엔화가 얼마인지알수있는것)
            productList(){ //state 전체를 보고싶은것
                return this.$store.state.cart;
            },
            total(){ //특정값을 갖고오는것
                return this.$store.getters.cartCount;
            }
        },
        methods: {
            addCart(){
                let obj = {
                    product_id : this.productInfo.product_id,
                    product_name : this.productInfo.product_name,
                    category : this.productInfo.category
                }
                this.$store.dispatch('addProduct', obj);
               // this.$store.commit('increment');
                
            }
        }
    }
</script>

<style scoped>
    table,th,td{
        border: 1px solid black;
    }
</style>


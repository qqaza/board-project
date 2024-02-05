//store.js
import { createStore } from 'vuex';
import createPresistedState from 'vuex-persistedstate';

export default createStore({
    state(){ //데이터 옵션과 같음(저장소에 등록하려는것을 입력)
        return{
            cart: [
                {
                    product_id : 1,
                    product_name :'아이폰 거치대',
                    category : 'A'
                }
            ],
            count : 0
        }
    },
    getters:{ // 가지고 오고자하는 데이터를 정의
        cartCount : (state) => { //매개변수를 데이터로 사용.
            return state.cart.length;
        }
    },
    mutations : { //실질적인 데이터 조작. 
        increment(state){
            state.count++;
        },
        addProduct(state, info){
            state.cart.push(info);
        }
    },
    actions : { 
        addProduct(context, info){
            context.commit('addProduct', info);
            setTimeout(()=>{
                context.commit('increment');
            },1000);
        }
    },
    plugins : [ createPresistedState() ]
})
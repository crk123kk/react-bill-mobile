// 账单列表相关 store

import axios from "axios";

// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const billStore = createSlice({
    name: 'bill',
    // 数据初始 state
    initialState: {
        billList: []
    },
    reducers: {
        // 同步修改方法
        setBillList(state, action) {
            state.billList = action.payload

        }
    }
})

// 解构出 actionCreate 函数
const { setBillList } = billStore.actions

// 异步
const getBillList = () => {
    return async (dispatch) => {
        // 异步请求
        const res = await axios.get('http://localhost:8888/ka')
        // 触发同步修改 reducer
        dispatch(setBillList(res.data))
    }
}

export { setBillList, getBillList }


// 导出 reducer
const billReducer = billStore.reducer
export default billReducer
<template>
    <div id="me">
        账号&#160;<Input v-model="value1" placeholder="请输入账号" style="width: 300px" />
        <br>
        密码&#160;<Input v-model="value2" placeholder="请输入密码" type="password" style="width: 300px" />
        <br>
        姓名&#160;<Input v-model="value3" placeholder="请输入姓名" style="width: 300px" />
        <br>
        身高<Select v-model="model1" style="width:300px">
            <Option v-for="item in hightList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <br>
        体重&#160;<Input v-model="value4" placeholder="请输入体重" style="width: 300px" />
        <br>
        腰围&#160;<Input v-model="value5" placeholder="请输入腰围" style="width: 300px" />
        <br>
        <i-button type="primary">注册</i-button>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
        return {
                cityList: [
                    {
                        value: '150',
                        label: '150'
                    },
                    {
                        value: '151',
                        label: '151'
                    },
                    {
                        value: '152',
                        label: '152'
                    },
                    {
                        value: '153',
                        label: '153'
                    },
                    {
                        value: '154',
                        label: '154'
                    },
                    {
                        value: '155',
                        label: '155'
                    }
                ],
                model1: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: ''              
        }
    }
}
</script>

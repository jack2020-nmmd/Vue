import Vue from 'vue';
import VeeValidate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
    messages: zh_CN.messages,
    attributes: {
    phone: '手机号',
    number: '验证码',
    user : '用户名',
    pwd : '密码'

    }
})

VeeValidate.Validator.extend('mobile', {
    validate: value => {
        return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(value)
    },
    getMessage: field => field + '必须是11位手机号码'
    })

    VeeValidate.Validator.extend('number', {
        validate: value => {
            return /^\d{4,6}$/.test(value)
        },
        getMessage: field => field + '必须是4-6位'
        })
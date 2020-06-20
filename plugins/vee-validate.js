import { localize, extend } from 'vee-validate'
import { required, max } from 'vee-validate/dist/rules'
import ja from 'vee-validate/dist/locale/ja.json'
localize('ja', ja)

extend('required', {
  ...required,
  message: '未入力になっています。'
})

extend('max', {
  ...max,
  message: '{length}文字以内で入力してください。'
})

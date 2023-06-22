import { defineStore } from 'pinia'
import _ from 'lodash'

export const langStore = defineStore('lang', {
    state: () => ({
        locale: {
            code: 'en',
            img: 'fi fi-us',
            name: 'English',
        },
        list_locales: [
            {
                name: 'English',
                code: 'en',
                img: 'fi fi-us',
            },
            {
                name: 'Vietnamese',
                code: 'vi',
                img: 'fi fi-vn',
            },
            {
                name: 'Chinese',
                code: 'zh',
                img: 'fi fi-cn',
            },
        ],
    }),
    actions: {
        setLang(code: any) {
            this.locale = _.find(this.list_locales, (item: { code: any; name: any; img: any }) => item.code === code)
        },
        resetState() {
            this.$reset()
        },
    },
})

// @ts-ignore
import * as currency from 'currency-formatter'
import { ethers } from 'ethers'
import moment from 'moment'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.globalProperties.$filters = {
        money: (money: number, symbol = '', symbol_left = true, fixed = 2) => {
            if (money == undefined) {
                money = 0
            }
            if (symbol_left) {
                return currency.format(money, {
                    symbol,
                    decimal: '.',
                    thousand: ',',
                    precision: fixed,
                    format: {
                        pos: '%s%v',
                        neg: '%s-%v',
                        zero: '%s%v',
                    },
                })
            }
            return currency.format(money, {
                symbol,
                decimal: '.',
                thousand: ',',
                precision: fixed,
                format: {
                    pos: '%v%s',
                    neg: '-%v%s',
                    zero: '%v%s',
                },
            })
        },
        countDownTo: (timestamp: string) => {
            const to = moment(timestamp, 'X').utc()
            const duration = moment.duration(to.diff(moment()))
            const exp = duration.asMonths() > 1 ? Math.floor(duration.asDays()) : duration.days()
            let days = exp + ' days'
            if (exp <= 0) {
                days = 'Out of date'
            }
            return days
        },
        convertDate: (date: string, format = 'YYYY-MM-DD HH:mm:ss') => {
            return moment(date).utc().format(format)
        },
        convertMicrosecond: (date: string, format = 'YYYY-MM-DD HH:mm:ss') => {
            return moment(date, 'x').utc().format(format)
        },
        convertTimeStamp: (timestamp: string, format = 'lll') => {
            return moment(timestamp, 'X').format(format)
        },
        convertTimeStampToTime: (timestamp: string, format = 'LT') => {
            return moment(timestamp, 'X').format(format)
        },
        convertMicroTimeStamp: (timestamp: string, format = 'YYYY-MM-DD HH:mm:ss') => {
            return moment(timestamp, 'x').format(format)
        },
        splitAddress: (address: string, show = 4) => {
            const strTemp = ''
            if (address == null || address.length === 0) {
                return ''
            }
            return strTemp.concat(address.slice(0, show), '...', address.slice(-1 * show))
        },
        toEther: (value: string) => {
            if (value !== undefined && value !== null) {
                return ethers.utils.parseUnits(String(value), 'ether')
            }
            return '0'
        },
        toBigNumber: (value: string) => {
            console.log('value', String(value))
            console.log(ethers.BigNumber.from('3'))
            if (value !== undefined && value !== null) {
                return ethers.BigNumber.from(String(value))
            }
            return ethers.BigNumber.from('0')
        },
        formatEther: (value: string) => {
            if (value !== undefined && value !== null) {
                return ethers.utils.formatEther(String(value))
            }
            return '0'
        },
        countdown: (to: any, format = 'YYYY/MM/DD HH:mm:ss') => {
            let result = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                isEnd: true,
            }
            to = moment(to, format).utc()

            const duration = moment.duration(to.diff(moment()))

            result = {
                days: duration.asMonths() > 1 ? Math.floor(duration.asDays()) : duration.days(),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds(),
                isEnd: false,
            }
            if (duration.asSeconds() <= 0) {
                result = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    isEnd: true,
                }
            }
            return result
        },
        zeroAddress: () => {
            return ethers.constants.AddressZero
        },
    }
})

import { defineStore } from 'pinia'
import { useFetchAPI } from '~/composables/useFetch'

export const profileStore = defineStore('profile', {
    state: () => ({
        user: {
            username: '',
            symbol: 'USDT',
            balance: 0,
            type: 'L'
        },
        assets: [
            {
                username: '',
                symbol: 'USDT',
                balance: 0,
            },
        ],
    }),
    actions: {
        postWithdrawInvest(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/withdraw-invest', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        get2FA(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/get-2fa', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        update2FA(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/update-2fa', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getLevelIB(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/get-level-ib', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getHistoryIBByDate(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/history-ib-by-date', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getHistoryIB(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/history-ib-detail', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getRefreshBalanceAccountDemo(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/refresh-demo-account', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getUserCP(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/get-user-cp', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        doBuyBot(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/do-buy-bot', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getBotBuy(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/get-bot-buy', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getHistoryWithdrawProfitCopy(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/history-withdraw-profit-copy', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        doUnfollowExpert(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/do-unfollow-expert', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        withdrawProfitExpert(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/withdraw-expert', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        withdrawProfitFollow(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/withdraw-follow', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        userExpertDetail(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/user-expert-detail', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        userFollowDetail(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/user-follow-detail', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        listUserFollowByExpert(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/list-user-follow', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        listOrderCopyTrade(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/list-order-copy-trade', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        registerExpert(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/register-expert', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        followExpert(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/follow-expert', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getListExpert(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/list-expert', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getListPackageExpert(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/list-package-expert', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getListPackageFollow(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/list-package-follow', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        getHistoryTransfer(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/transfer-history', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        getHistoryDeposit(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/deposit-history', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        postTransfer(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/transfer', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        updateListAsset(data: any) {
            this.assets = data
        },
        setAsset(data: any) {
            this.user = data
        },
        postUpdateProfile(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/update', body)
                    .then((response: any) => {
                        const { data, success } = response
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        postGetProfile(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/detail', body)
                    .then((response: any) => {
                        const { data, success } = response
                        if (success) {
                            this.assets = data
                        }
                        resolve(response)
                    })
                    .catch((reason) => {
                        reject(reason)
                    })
            })
        },
        setBalance(data: any) {
            switch (data.type) {
                case 'sub':
                    this.user.balance -= data.amount
                    break
                case 'add':
                    this.user.balance += data.amount
                    break
            }
        },
        setBalanceAsset(data: any) {
            switch (data.type) {
                case 'sub':
                    this.assets.forEach((item) => {
                        if(item.symbol == data.symbol){
                            item.balance -= data.amount
                        }
                    })
                    break
                case 'add':
                    this.assets.forEach((item) => {
                        if(item.symbol == data.symbol){
                            item.balance += data.amount
                        }
                    })
                    break
            }
        },
        postWithdraw(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/withdraw', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        postStatisticAccount(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/statistic-account', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        addInviteLink(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/add-invite-link', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        getSponsor(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/get-sponsor', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        getList(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/list-ref-id-invite', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        listCommission(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/list-commission', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        listPersonalStats(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/list-personal-stats', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        claimCommission(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/claim-commission', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        totalBetUser(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/total-bet-user', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        getTronAddress(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/get-tron-address', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        getBep20Address(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/get-bep20-address', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        tronHistoryDeposit(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/tron-history-deposit', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
        getHistoryWithraw(body: any) {
            return new Promise((resolve, reject) => {
                useFetchAPI('post', 'api/game/profile/withdraw-history', body)
                    .then((response: any) => {
                        resolve(response)
                    })
                    .catch(reject)
            })
        },
    },
})

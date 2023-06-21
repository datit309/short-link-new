import Swal from 'sweetalert2'
// @ts-ignore
import moment from 'moment'
import logo from '~/assets/images/logo.png'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('Swal', Swal)
    nuxtApp.provide('stepModal', {
        show: (data: any) => {
            Swal.fire({
                title: data.title,
                text: data.message,
                width: '50%',
                imageUrl: logo,
                background: `rgba(0, 0, 0, 1)`,
                color: '#fff',
                imageWidth: '50%',
                imageHeight: 100,
                backdrop: `rgba(0, 0, 0, 0.6)`,
                allowOutsideClick: false,
                allowEscapeKey: false,
                // timer: 3000,
                didOpen(popup) {
                    // @ts-ignore
                    Swal.showLoading()
                },
            })
        },
        hide: () => {
            Swal.hideLoading()
            Swal.close()
        },
    })
    nuxtApp.provide('maintenance', {
        show: (data: any) => {
            Swal.fire({
                title: '<h1 class="text-red text-uppercase font-monospace w-100">Website under maintenance</h1>',
                // text: 'Server is currently down for maintenance, please try again later',
                html: `<div class="row justify-content-center p-0 m-0"><div class="col-md-6 col-sm-12 text-default text-start fs-3 alert alert-warning font-monospace">
                    Our website is undergoing maintenance and upgrades on <span class="fw-bold">${moment().utc().format('LLL')}</span>.
                    During this time, the website may be temporarily unavailable.
                    We apologize for any inconvenience and appreciate your patience.<br/>
                    Thank you for your understanding.<br/>
                    Mobagame Team</div>
                `,
                width: '100%',
                // icon: 'error',
                imageUrl: logo,
                background: `rgba(0, 0, 0, 0.2)`,
                // color: '#fff',
                imageWidth: 200,
                // imageHeight: 128,
                imageAlt: 'Maintenance',
                padding: '0rem',
                backdrop: `rgba(255, 255, 255, 1)`,
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                didOpen(popup) {
                    // @ts-ignore
                    Swal.showLoading()
                },
            })
        },
        hide: () => {
            Swal.hideLoading()
            Swal.close()
        },
    })
    nuxtApp.provide('notify', {
        show: (data: any) => {
            Swal.fire({
                title: '<h1 class="text-red text-uppercase font-monospace w-100">Website under maintenance</h1>',
                // text: 'Server is currently down for maintenance, please try again later',
                html: `<div class="row justify-content-center p-0 m-0"><div class="col-md-6 col-sm-12 text-default text-start fs-3 alert alert-warning font-monospace">

                    - The company updates the system update 2023-04-30 00:00 AM until the official announcement, temporarily users do not trade during the maintenance system update data.<br/>
                    - All transactions will not be recorded during system upgrade<br/>
                    - To upgrade all IB volume staking system for all users in the past time<br/>
                    - The period is expected to end on March 5<br/>
                    We apologize for any inconvenience and appreciate your patience.<br/>
                    Thank you for your understanding.<br/>
                    Mobagame Team</div>
                `,
                width: '100%',
                // icon: 'error',
                imageUrl: logo,
                background: `rgba(0, 0, 0, 0.2)`,
                // color: '#fff',
                imageWidth: 200,
                // imageHeight: 128,
                imageAlt: 'Maintenance',
                padding: '0rem',
                backdrop: `rgba(255, 255, 255, 1)`,
                allowOutsideClick: false,
                allowEscapeKey: false,
                showConfirmButton: false,
                didOpen(popup) {
                    // @ts-ignore
                    Swal.showLoading()
                },
            })
        },
        hide: () => {
            Swal.hideLoading()
            Swal.close()
        },
    })
    nuxtApp.provide('confirm', {
        show: (data: any, callback: Function) => {
            Swal.fire({
                text: data.message,
                imageUrl: logo,
                background: '#063260',
                color: '#fff',
                showCancelButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    callback()
                }
            })
        },
    })
})

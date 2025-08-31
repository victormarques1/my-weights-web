import { Notify } from 'quasar'

export const triggerSuccess = (msg: string) => {
  Notify.create({
    type: 'positive',
    message: msg,
    iconColor: 'white',
  })
}

export const triggerNegative = (msg: string) => {
  Notify.create({
    type: 'negative',
    message: msg,
  })
}

export const triggerWarning = (msg: string) => {
  Notify.create({
    type: 'warning',
    message: msg,
    iconColor: 'white',
  })
}

export const triggerInfo = (msg: string) => {
  Notify.create({
    type: 'info',
    message: msg,
    color: 'secondary',
  })
}

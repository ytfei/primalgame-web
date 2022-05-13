interface AmountFormatOptions {
  thousandths?: boolean // 千分位
  rounding?: boolean // 四舍五入
  fractionDigits?: number // 分数位数
}

export function useFormat() {
  const amountFormat = (
    amount: number | string,
    {
      thousandths = true,
      rounding = false,
      fractionDigits = 4
    }: AmountFormatOptions = {
      thousandths: true,
      rounding: false,
      fractionDigits: 4
    }
  ) => {
    const number: number =
      typeof amount === 'string' ? Number.parseFloat(amount) : amount
    if (thousandths) {
      return Number.parseFloat(number.toFixed(fractionDigits))
        .toString()
        .replace(/\d{1,3}(?=(\d{3})+(\.|$))/gy, '$&,')
    } else {
      return Number.parseFloat(number.toFixed(fractionDigits))
    }
  }

  return { amountFormat }
}

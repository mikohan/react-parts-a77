// application
import { ICurrency } from '~/interfaces/currency';

const dataShopCurrencies: ICurrency[] = [
    {
        code: 'EUR',
        symbol: '€',
        name: 'Euro',
        rate: 0.92,
    },
    {
        code: 'GBP',
        symbol: '£',
        name: 'Pound Sterling',
        rate: 0.78,
    },
    {
        code: 'USD',
        symbol: '$',
        name: 'US Dollar',
        rate: 1,
    },
    {
        code: 'RUB',
        symbol: '₽',
        name: 'Russian Ruble',
        rate: 85,
    },
];

const dataShopDefaultCurrencyCode = 'RUB';

export const dataShopDefaultCurrency: ICurrency = dataShopCurrencies.find(
    (x) => x.code === dataShopDefaultCurrencyCode
)!;

export default dataShopCurrencies;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ComponentCustomProperties } from 'vue'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Pinia } from 'pinia'

declare module '@vue/runtime-core' {
  type Coffee = {
    available: boolean;
    id: number;
    image: string;
    name: string;
    popular: boolean;
    price: string;
    rating: number;
    votes: number;
  }
}

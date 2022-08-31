import {describe, expect, it} from 'vitest'
import {render} from '@testing-library/vue'

import App from './App.vue'

describe('App', () => {
    it('renders correctly', () => {
        const {getByText} = render(App)

        expect(getByText('Click on the Vite and Vue logos to learn more')).toBeDefined()
    })
})
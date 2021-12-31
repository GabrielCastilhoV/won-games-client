import { Story, Meta } from '@storybook/react/types-6-0'

import cardsMock from 'components/PaymentOptions/mock'

import CardsList, { CardsListProps } from '.'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)

import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => <GameCard {...args} />

export const WithRibbon: Story<GameCardProps> = (args) => <GameCard {...args} />

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}

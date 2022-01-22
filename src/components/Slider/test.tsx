import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Slider from '.'

describe('<Slider />', () => {
  it('should render children as slider item', () => {
    render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>One</p> <p>Two</p>
      </Slider>
    )

    expect(screen.getByText(/One/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    )

    expect(screen.getByText(/Two/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    )
  })
})

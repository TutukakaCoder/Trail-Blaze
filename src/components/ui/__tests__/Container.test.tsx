import { render } from '@testing-library/react';
import Container from '../Container';

describe('Container', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <div>Test content</div>
      </Container>
    );
    
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { container } = render(
      <Container variant="narrow">
        <div>Test content</div>
      </Container>
    );
    
    expect(container.firstChild).toHaveClass('max-w-2xl');
  });
}); 
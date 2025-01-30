import { render } from '@testing-library/react';
import Section from '../Section';

describe('Section', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Section>
        <div>Test content</div>
      </Section>
    );
    
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('applies correct spacing classes', () => {
    const { container } = render(
      <Section spacing="compact">
        <div>Test content</div>
      </Section>
    );
    
    expect(container.firstChild).toHaveClass('py-12');
  });
}); 
import { Button } from 'common-components-react';
import React from 'react';

function App() {
  return (
    <div className="testing-container">
      <h1>Common Components Testing</h1>
      
      <section className="test-section">
        <h2>Button Variants</h2>
        <div className="button-grid">
          <div className="button-test-case">
            <h3>Primary (Default)</h3>
            <Button>Primary Button</Button>
          </div>
          
          <div className="button-test-case">
            <h3>Secondary</h3>
            <Button variant="secondary">Secondary Button</Button>
          </div>
          
          <div className="button-test-case">
            <h3>Success</h3>
            <Button variant="success">Success Button</Button>
          </div>
          
          <div className="button-test-case">
            <h3>Danger</h3>
            <Button variant="danger">Danger Button</Button>
          </div>
          
          <div className="button-test-case">
            <h3>Outline</h3>
            <Button variant="outline">Outline Button</Button>
          </div>
        </div>
      </section>

      <section className="test-section">
        <h2>Button Sizes</h2>
        <div className="button-grid">
          <div className="button-test-case">
            <h3>Small</h3>
            <Button size="small">Small Button</Button>
          </div>
          
          <div className="button-test-case">
            <h3>Medium (Default)</h3>
            <Button>Medium Button</Button>
          </div>
          
          <div className="button-test-case">
            <h3>Large</h3>
            <Button size="large">Large Button</Button>
          </div>
        </div>
      </section>

      <section className="test-section">
        <h2>Full Width Button</h2>
        <div className="button-test-case">
          <Button fullWidth>Full Width Button</Button>
        </div>
      </section>

      <section className="test-section">
        <h2>Interactive States</h2>
        <div className="button-grid">
          <div className="button-test-case">
            <h3>Disabled</h3>
            <Button disabled>Disabled Button</Button>
          </div>
          
          <div className="button-test-case">
            <h3>With onClick</h3>
            <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

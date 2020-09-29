import Navigation from './navigation'

export default ({ children }) => (
  <div>
    <Navigation />
    <div id="main">
      <div>
        { children }
      </div>
    </div>
  </div>
);

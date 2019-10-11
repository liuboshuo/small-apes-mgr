import Loadable from 'react-loadable';

const LoadableComponent = (component) => Loadable({
  loader: component,
  loading: ()=>null,
});


export default LoadableComponent;
import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
   initialState: {
     schools: [
       { name: 'uOttawa', id: 1 },
       { name: 'Carleton University', id: 2 },
     ],
   },
 });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/schools').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

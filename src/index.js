import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
   initialState: {
     studentorgs: [
       { name: 'SESA', id: 1 },
       { name: 'CSSA', id: 2 },
     ],
   },
 });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/submit').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
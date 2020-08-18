---
title: Get started with Preact
description: 
date: 2020-08-18
tags:
    - preact
    - get-started
verse:
# /img/<IMAGE>.min.jpg
image:
---

Preact is a lightweight alternative to React. It provides the same^[Mostly.] modern API but at only 3kB minified and gzipped. For comparison, bundlephobia has `react` and `react-dom` at 38.5kB.

With many of the same features at a fraction of the size, Preact might be a better alternative for your simple client-side React app.

## Sandbox

### REPL

The [Preact website has a REPL](https://preactjs.com/repl) where you can test drive the library. The example as of writing using state and effect hooks and makes a request to the GitHub API with `fetch`:

```js
const [items, setItems] = useState([]);

useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=preact')
        .then(res => res.json())
        .then(data => setItems((data && data.items) || []));
}, []);
```

### CodeSandbox.io

CodeSandbox has 54,000+ templates^[Based on a template search for "preact". I did not verify this count.] for Preact, including [a starter template from the CodeSandbox Team](https://codesandbox.io/s/preact-preact). The code is similar to the official REPL, but with a class component:

```js
export default class App extends Component {
  componentDidMount() {
    fetch(`https://api.github.com/search/repositories?q=preact`)
      .then(r => r.json())
      .then(json => {
        this.setState({
          results: (json && json.items) || []
        });
      });
  }

  render(props, { results = [] }) {
    return (
      <div>
        <h1>Example</h1>
        <div class="list">
          {results.map(result => <Result result={result} />)}
        </div>
      </div>
    );
  }
}
```
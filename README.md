# use-api-fetch

use-api-fetch is a custom React hook designed to simplify data fetching from APIs. It handles loading, error, and data states efficiently, making it easy to integrate API requests into your React components.
## Installation

You can install the package via npm:

```bash
npm install use-api-fetch
```
## Usage

```javascript
import React from 'react';
import useApiFetch from 'use-api-fetch';

function TextDataFetcher() {
  const { data, loading, error } = useApiFetch('https://example.com/some-text-file.txt');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Text Content:</h1>
      <pre>{data}</pre>
    </div>
  );
}

export default TextDataFetcher;

```

```javascript
import React from 'react';
import useApiFetch from 'use-api-fetch';

function JsonDataFetcher() {
  const { data, loading, error } = useApiFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default JsonDataFetcher;

```
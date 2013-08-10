```sh
npm install dlite-jsonp
```

```javascript
require('dlite-jsonp')('http://example.com?a=b&callback=%3F', function(result){
  console.log(result)
})
```

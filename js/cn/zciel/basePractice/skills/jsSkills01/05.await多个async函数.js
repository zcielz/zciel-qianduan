// # 在使用async/await的时候，可以使用Promise.all来await多个async函数。
await Promise.all([anAsyncCall(), thisIsAlsoAsync(), oneMore()])
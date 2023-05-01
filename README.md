# Word Card
単語カード的なCLIアプリです

## How to use
1. `index.js`カレントディレクトリに`data.json`という名前の問題ファイルを作ります。
```json
[
    {"ex" : "問題文1", "word" : "答え1"},
    {"ex" : "問題文2", "word" : "答え2"},
    ...
]
```

2. nodeで`index.js`を実行すると`data.json`ファイルを読み込んで、動作し始めます。
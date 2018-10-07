#銭湯ぐらしテンプレート

## 使い方
yarn, gulpを使用しています

### clone
```
$ git clone git@github.com:sentogurashi/template.git
$ cd template
```
### install
```
$ yarn install
```

### watch & browsersync
```
$ yarn run watch
```

## gulpコマンド
### 個別

- `default (gulp)` clean, template/style/scriptの初期生成、watch
- `font` .ttfを [.ttf/.eot/.woff]にbuild出力
- `sketch` sketchファイルからslice出力（+image 実行）
- `image` standalone/に置いた通常画像（スプライトやエンコードなし）の圧縮&build出力
- `sprite` スプライト画像生成
- `deploy` 本番環境アップ（ftp）

### gulp (default)に通常含まれるもの

- `watch` ファイル監視（template, style, script）& browsersync起動
- `template` HTML生成
- `style` CSS生成
- `script` JS生成
- `bs` browsersync
- `clean` buildディレクトリのclean（template, style, scriptのみ）
- `yaml` サイトデータyamlをjson変換

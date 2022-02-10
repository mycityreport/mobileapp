# My City Report for Citizens Mobile App

## このソフトウェアについて
これは (My City Report)[https://www.mycityreport.jp/] として提供しているサービス "My City Report for Citiznes" のスマートフォン用アプリケーションです。

## 開発環境
- Node.js 16 or later
- yarn v1
- Expo SDK 44 or later

## lint の実行
一応 CI でもチェックしていますが、手元で事前に lint をかけておくと一手間減って便利です。

```bash
$ yarn fmt
$ yarn tsc
```

## 環境変数について
API のベースドメインなどは環境変数から渡すようになっています。dotenv を使って自動的に読み込まれるようになっていますので、サンプルファイルをコピーして `.env` ファイルを作成し、内容を各環境に合わせて編集してください。

```bash
$ cp example.env .env
$ vim .env
```

## ライセンス
ソースコードについては MIT ライセンスを適用しています。

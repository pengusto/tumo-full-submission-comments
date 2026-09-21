# TUMO Full Submission Comments

[English](../../README.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | **日本語** | [Հայերեն](README.hy.md)

TUMO Activity Manager 用の小さなユーザースクリプトです。アップロードされたファイルの下で省略されているコメントを、折り返して全文表示します。

[ユーザースクリプトをインストール](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)

## このスクリプトの機能

- Activity Manager の examiner ページだけで動作します。
- 1 行のコメント欄を、複数行に折り返すテキストブロックに置き換えます。
- 評価、フィードバック、提出内容は変更しません。
- データを送信せず、保存もしません。

## 必要なもの

Tampermonkey と、`activities.es.tumo.world` でユーザースクリプトを実行する権限が必要です。ファイル URL へのアクセスを有効にする必要はありません。

## インストール

### Google Chrome

1. [Chrome ウェブストアから Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) をインストールします。
2. Tampermonkey のアイコンを右クリックし、**拡張機能を管理**を選択します。
3. **ユーザースクリプトを許可する**を有効にします。Chrome 138 以降ではこのスイッチを利用できます。表示されない場合は、`chrome://extensions` で**デベロッパー モード**を有効にしてください。Tampermonkey 5.3 以降を Chromium ベースのブラウザで使うには、どちらかの設定が必要です。[Tampermonkey の説明](https://www.tampermonkey.net/faq.php?q=Q209)も参照してください。
4. [ユーザースクリプト](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)を開きます。
5. Tampermonkey のインストールページで**インストール**を選択します。
6. Activity Manager を再読み込みします。

### その他の Chromium ベースのデスクトップブラウザ

この手順は、Microsoft Edge、Vivaldi、Brave、Opera、Ecosia Desktop Browser など、Chromium ベースのデスクトップブラウザに共通して適用できます。Tampermonkey のインストールとユーザースクリプトの実行に対応していれば、その他の Chromium ベースのブラウザでも同じ方法で動作する可能性があります。

1. ブラウザの拡張機能ストアから Tampermonkey をインストールします。Edge では [Microsoft Edge アドオン](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)を利用できます。Vivaldi は [Chrome ウェブストア](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)の拡張機能に対応しています。
2. Tampermonkey の拡張機能詳細を開き、ブラウザに**ユーザースクリプトを許可する**が表示される場合は有効にします。表示されない場合は、拡張機能ページで**開発者モード**を有効にしてください。Tampermonkey は Chromium ベースのブラウザでの要件を [FAQ](https://www.tampermonkey.net/faq.php?q=Q209) で説明しています。
3. [ユーザースクリプト](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)を開きます。
4. Tampermonkey でインストールを確認します。
5. Activity Manager を再読み込みします。

Vivaldi、Brave、Opera は Chrome 拡張機能に対応しています。Ecosia Desktop Browser は Chromium ベースですが、Tampermonkey のインストールはまだ確認していません。Tampermonkey をインストールし、ユーザースクリプトの実行を許可できるブラウザでのみ、このユーザースクリプトを利用できます。

### Mozilla Firefox

1. [Mozilla Add-ons から Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) をインストールします。
2. [ユーザースクリプト](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)を開きます。
3. Tampermonkey でインストールを確認します。
4. Firefox が求めた場合は、`activities.es.tumo.world` へのアクセスを許可します。
5. Activity Manager を再読み込みします。

Firefox では Chrome の**ユーザースクリプトを許可する**や**デベロッパー モード**の設定は使用しません。

### macOS の Safari

1. [App Store から Tampermonkey](https://apps.apple.com/app/tampermonkey/id6738342400) をインストールします。現行版には macOS 11 以降が必要です。Tampermonkey の[公式 Safari ページ](https://www.tampermonkey.net/index.php?browser=safari&locale=ja)には、古い Safari 向けの Classic 版も掲載されています。
2. **Safari → 設定 → 機能拡張**を開き、Tampermonkey を有効にします。
3. Tampermonkey に `activities.es.tumo.world` へのアクセスを許可します。
4. [ユーザースクリプト](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)を開き、インストールを確認します。
5. Activity Manager を再読み込みします。

Safari ではまだ Activity Manager 上の動作を確認していません。このガイドはモバイルブラウザを対象としていません。

## 必要な権限

このスクリプトは `https://activities.es.tumo.world/dashboard/activities/examiner/` 以下の examiner ページだけで動作します。Tampermonkey にこのウェブサイトへのアクセスを許可してください。

このスクリプトでは**ファイルの URL へのアクセスを許可する**を有効にしないでください。この権限はローカルの `file://` ページ向けで、HTTPS の Activity Manager には関係ありません。[Tampermonkey FAQ](https://www.tampermonkey.net/faq.php?q=Q204) に別項目として説明があります。

このユーザースクリプトは `@grant none` を宣言しています。外部 API、トラッキングサービス、リモートサーバーは使用しません。

## インストールの確認

1. アップロードされたファイルの下にコメントがある Activity を開きます。
2. ブラウザのツールバーから Tampermonkey を開き、**TUMO Full Submission Comments** が有効になっていることを確認します。
3. 長いコメントが、追加のボタンや設定パネルなしで複数行に表示されます。

## 動作しない場合

1. Tampermonkey のダッシュボードで **TUMO Full Submission Comments** が有効か確認します。
2. ブラウザの拡張機能設定で、Tampermonkey に `activities.es.tumo.world` へのアクセスを許可します。
3. Chromium ベースのブラウザでは、**ユーザースクリプトを許可する**または**デベロッパー モード**が有効か確認します。Safari では Tampermonkey 機能拡張が有効か確認してください。
4. Activity Manager のタブを再読み込みします。
5. Tampermonkey に古いバージョンが表示される場合は、上のリンクから再インストールします。

## 無効化または削除

Tampermonkey のダッシュボードを開きます。スイッチで無効化し、ゴミ箱アイコンで削除できます。

## プライバシーと制限

このスクリプトは開いているブラウザタブ内だけで動作します。Activity Manager が表示済みのコメントを読み取り、その表示方法だけを変更します。

バージョン 1.0.3 は Chrome でテスト済みです。その他の Chromium ベースのブラウザ、Firefox、Safari では、このバージョンの実機テストをまだ行っていません。TUMO が Activity Manager のページ構造を変更した場合は、CSS セレクターの更新が必要になることがあります。

このプロジェクトは TUMO とは独立しており、TUMO による公開物ではありません。TUMO は各権利所有者の商標です。

## 開発用テスト

```bash
python3 -m http.server 8000
```

`http://localhost:8000/test/fixture.html` を開きます。ページに **Test bestanden** と表示されれば成功です。

## ライセンス

[Mozilla Public License 2.0](../../LICENSE) の下で公開しています。このスクリプトファイルを変更して配布する場合は、変更内容も MPL 2.0 の下で公開する必要があります。

翻訳版 README は機械支援で作成しました。英語の原文と一緒に更新してください。

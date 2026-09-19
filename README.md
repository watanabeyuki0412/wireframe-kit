# wireframe-kit

「Claudeで作る、ワイヤーフレーム生成キット」で作成したワイヤーフレームに、表紙・コメント機能・PNG書き出しを追加するスクリプトです。

キットが作る指示文に含まれる次の1行で読み込まれます。単体で使うものではありません。

```html
<script src="https://cdn.jsdelivr.net/gh/watanabeyuki0412/wireframe-kit@1/wireframe-kit.js" defer></script>
```

- コメントは閲覧しているブラウザ内（localStorage）にのみ保存され、外部には送信されません
- PNG書き出しでは html2canvas（cdnjs）を読み込みます

本スクリプトの再配布・転用はご遠慮ください。

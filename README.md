# Vite react playground

Vite×Reactにおけるライブラリや設計手法などをいろいろ試すリポジトリ。

## Vite

Viteは、近年のWebフロントエンド開発における生産性低下に対して、native ES modulesの活用といったアプローチでより高速に、快適に開発できることを目指して開発されているツールである。Nuxt.jsやNext.jsで中規模以上のアプリケーションを開発しており、dev serverへの反映が遅いといった不満をいだいたことがある開発者は少なくないだろう。

https://vitejs.dev/guide/

開発時にはesbuildを使って依存している多くのライブラリを事前にバンドルすることで、ものの数十ミリ秒〜数百ミリ秒で手元の更新内容がブラウザに反映されるHMRの仕組みを整えている。

https://esbuild.github.io/

プロダクションビルドではrollupを採用しており、プロダクションに向けた細かいバンドル設定はrollupを通して行うことができる。esbuildをプロダクションでも使わない理由は[ここ](https://vitejs.dev/guide/why.html#why-bundle-for-production)に記載されている。

https://rollupjs.org/

つまるところViteは、古くから使われているwebpackの課題点に対して、ノーバンドルツールであるesbuildにHot Module Replacementを組み合わせたら開発体験がめっちゃ改善されるのでは、というアプローチと、本番ビルド時はまだesbuildはアーリーだからrollupを使っておこうか、といったアプローチで解消を試みているツールということができる。

### CSS Modulesについて

esbuildだけではCSS Modulesに対応していないっぽい（https://github.com/evanw/esbuild/issues/20） が、Viteを通して利用すればCSS Modulesを使って開発ができる。

https://vitejs.dev/guide/features.html#css-modules

また、上記ドキュメントにも書いてあるが、CSS Modulesを使っているとき、キャメルケースに変換してほしければ以下のようにvite.config.tsに書けばいい。

```ts
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
```

### プラグイン機構

Viteはプラグイン機構を備えており、アーリーなゆえに足りない機能はプラグインを書くことで補うことができる。

https://github.com/vitejs/awesome-vite#plugins

実際、いくつかの機能はプラグインありきで進めなければならない。このへんは今後破壊的な変更が入る可能性もあり少々怖いが、一方で現時点ですでにある程度のエコシステムを形成できており、将来有望なツールということもできる。

## React

ViteでReactを書くためには、公式が用意しているcreate-vite-appといった仕組みを使えばいい。

```sh
yarn create @vitejs/app HOGE --template react-ts
```

ただし、執筆時点ではViteはReact17以降で対応した、`import React`が不要になった[Featureに対応していない](https://github.com/vitejs/vite/issues/712)。
したがって、以下のように`vite-react-jsx`プラグインをインストールし、設定する必要がある。

```ts
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteReactJsx from 'vite-react-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), viteReactJsx()],
})
```

https://github.com/alloc/vite-react-jsx

### rocon

本題とはそれるが、本リポジトリではルーティングライブラリにroconを利用している。

https://github.com/uhyo/rocon

NuxtやNextを利用している際のルーティング型安全には、[pathpida](https://github.com/aspida/pathpida)があるが、通常のReact SPAに対して類似のアプローチとして有力なものはまだ少ない。

roconを使えば、ルーティング関連の設定をTypeScriptと紐付けることができ、リンク切れやパラメータ名の手打ちミスなどを防ぐことができる。

## TypeScript

### エイリアス

筆者はTSプロジェクトでは基本的にエイリアスをソースのルートディレクトリに対して設定するが、これも少々設定が必要である。

tsconfigでbaseUrl, pathsを設定の上、以下のようにプラグイン`vite-tsconfig-paths`をインストールしてconfigも設定をする。

```diff
+ import tsconfigPaths from 'vite-tsconfig-paths';

-  plugins: [reactRefresh(), viteReactJsx()],
+  plugins: [reactRefresh(), viteReactJsx(), tsconfigPaths()],
```

## vanilla-extract

vanilla-extractはZeroランタイムでCSSをTypeScriptベースで書くことができるライブラリで、2021年5月末にメジャーバージョンをリリースしたアーリーなライブラリである。

https://github.com/seek-oss/vanilla-extract

筆者は以前からZeroランタイムなCSS記述手法としてlinariaを推していたが、linariaはstyled-componentsの競合といった立ち位置だった。こちらはどちらかというとCSS Modulesの対抗馬に感覚としては近い印象である。

`.css.ts`といった拡張子で記述すると、コンパイル後に.cssファイルに吐き出されたり、`<style></style>`タグ内に吐き出される寸法なようだ。

以下に簡単な記述例を示す。

```ts:Header.css.ts
import {style} from "@vanilla-extract/css";

export const styles = {
  headerContainer: style({
    paddingTop: 4,
    paddingBottom: 4,
    display: "flex",
    alignItems: 'center',
    paddingRight: 12,
    paddingLeft: 12,
    height: 56,
  }),
  logo: style({
    width: 40,
    height: 40,
  }),
  title: style({
    fontWeight: "bold",
    fontSize: 24,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    marginLeft: 8,
  })
}
```

```ts:Header.tsx
import vite from '~/assets/img/icons/vite.svg';
import { styles } from '~/components/layouts/common/Header.css';

export const Header = () => (
  <header className={styles.headerContainer}>
    <img className={styles.logo} src={vite} alt="Vite" />
    <span className={styles.title}>Vite+React+TS Playground</span>
  </header>
);
```

このように、CSS Modules感覚でType SageなCSSを書くことができる。ちなみにCSSをType Sageにする途方も無いであろう作業をこなしているのは[CSSTypes](https://github.com/frenic/csstype)というライブラリである。

Viteで動作させるためには、これまたプラグインが必要である。

```diff
+ import {vanillaExtractPlugin} from "@vanilla-extract/vite-plugin";

-   plugins: [reactRefresh(), viteReactJsx(), tsconfigPaths()],
+   plugins: [reactRefresh(), vanillaExtractPlugin(), viteReactJsx(), tsconfigPaths()],

筆者が試した範囲だと、`vanillaExtractPlugin()`を配列の前方に置かなければ動作しなかった（最後の要素に指定すると失敗した）。他にもViteを色々触っているなかで、Pluginの順番次第で動作結果の変わることがあり、しばらくの間はViteでPluginを必要とするようなライブラリを次々と入れるのは避けたほうがいいかもしれない。
```

### atoms

vanilla-extractにはatomsという機能があり、paddingXといったショートカット記法が使えたり、レスポンシブ対応などがよりスムーズに実装できるらしい。

らしい、というのは以下のパッケージをインストールして試してみたが使い方がよくわからなかったからである。使いこなすと便利な機能だと思うのでまた機を見て試してみたい。

https://github.com/seek-oss/vanilla-extract/tree/master/packages/sprinkles

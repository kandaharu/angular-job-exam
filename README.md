# AngularJobExam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

このプロジェクトは、 [JobTest](https://kirikak2.github.io/job-exam-for-frontend-engineer/) を実施するために作られました。
[github pages](https://kandaharu.github.io/angular-job-exam/) 上で閲覧することができます。

## やったこと

|  日付 | 時間(min) |
|-------|-----------|
|  初日 |       190 |
| 2日目 |       170 |
| 3日目 |        90 |
| 4日目 |       110 |
| 5日目 |       100 |
|    計 |       660 |

### 初日
- 10min angular-cli をインストールする
- 20min とりあえず作って動かそうとするが、Qiitaとかみてやろうとするがよくわからん
- 160min [Angular Docs](https://angular.io/docs) の TUTORIAL をやってみる
  - **1.Introduction** から **7.Routing** までやった
  - サーバサイドは今回の要素に必要ないので、 **8.HTTP** は今回は見送り

計 190min

### 2日目
- 120min 昨日学んだ Angular Docs の内容を参考に、とりあえず fizz-bazz generator の形だけ作った
- 20min bootstrap3 でスタイルをつけてみた
- 30min とりあえず require のバリデーションだけつけてみた
  - VSCodeの問題タブにエラーが出力しているけどいまんとこ動いているっぽいので一旦コミット
  
計 170min

### 3日目
- 20min [Angular - Testing](https://angular.io/guide/testing) の Service まで読む
  - とりあえずテストの勘所を掴む Service はだいたい RSpec と同じというとこまでわかったのでとりあえず書いてみる
- 70min CounterService のテストを書く。

計 90min

### 4日目

- 30min ResultService のテストを書く。
  - 「constructor の中でとあるメソッドを呼ぶこと」ってテストの書き方がわからず苦しむ。
  - とりあえず今回は無視して先に進むことにする。該当部分に FIXME コメントを書いて先に行く。
- 80min FizzBuzzComponent のテストを書く。
  - [Angular - Testing](https://angular.io/guide/testing) を参考に書いてみる
  - ひとまず Initialize まで

計 110min

### 5日目

- 60min ResultComponent のテストを書く
  - Service で書いたテストと同じような内容になってしまった…
- 10min Github に push 
- 30min Github Pages にホスティング

計 100min

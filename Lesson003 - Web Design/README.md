----- 請在上方下載課程範例檔及簡報 -----
# HTML、CSS 基礎課程
## 範例檔內含：
1. label_example(常用標籤介紹)
2. colorpalette_selector(色票板、選擇器介紹)
3. colorpalette_css_specificility(樣式權重說明範例)
## 課程概要：
1. 網頁介面的基本認識
2. HTML 標示語言
3. 常見標籤介紹
4. CSS 樣式表
5. 開發人員工具介紹
6. 樣式權重
## 重點回顧：
* HTML 為一**標示語言**，本質上是將網頁文檔內容建構成**樹狀結構**，也就是 **DOM(Document Object Model) 文件物件模型**，固有父子層、相鄰層的關係。 
* HTML 為**網頁骨架**，副檔名為 **.html**
* 利用`<開頭標籤>內容</結尾標籤>`組成樹狀結構。**標籤 + 內容 = 元素**。
* 為了方便撰寫，我們會將 HTML 寫成**巢狀結構**
* `<開頭標籤 屬性="值">內容</結尾標籤>`
* 基本結構：

    ```
    <!DOCTYPE html><!--宣告文件格式-->
    <html lang="zh-Hans-TW"><!--語言-->
    <head><!--通常放置網頁重要資訊-->
        <meta charset="UTF-8"><!--編碼-->
        <title>Document</title><!---->
    </head>
    <body><!--顯示內容-->

    </body>
    </html>
    ```
* 無結尾標籤 **Singleton tags** 會出現在樹狀模型的末端，也就是裡面**不會有內容**，常見的有：`<img>、<br>、<hr>、<link>等等`
* **相對路徑：** 從該文件位置出發到另一檔案的路徑
* **絕對路徑：** 透過 IP 到達的路徑
* HTML5 標籤增加了**語意化標籤、多媒體**
* 為了方便管理樣式，不太會將樣式寫在 style 屬性中
* **CSS(Cascading Style Sheets) 疊層樣式表**為一用來描述**樣式**的一份文件，透過**選擇器(selector)** 選取 HTML 結構上的元素做樣式的變化
* 一定要記得用 `<link rel="stylesheet" href="檔案路徑">` 將樣式加到 HTML 中
* 請善用**開發人員工具**作為除錯工具，對頁面按 右鍵 > 檢查！！
* 使用 **CSS 選擇器**原則：
    1. 若選擇器或樣式選取的元素相同，後寫的會蓋掉先寫的
    2. 多用**類別選擇器(.class)**
    3. 少用**元素選擇器(element)**，很容易有樣式重疊的問題
    4. 視情況使用 **id 選擇器(#id)**，同一頁面通常只會有一個，或留給其他語言操作的空間
    5. 注意**權重問題**：!important > style > #id > .class > element
        分數可註記為：0-0-0-0-0
    6. !important 有很高的權重，故要謹慎使用

### 外部資源參考：
-- 課程 --
* HTML 標籤 (W3C)：https://www.w3schools.com/tags/
* 無結尾標籤 Singleton：https://www.thoughtco.com/html-singleton-tags-3468620
* CSS 選擇器 (W3C)：https://www.w3schools.com/cssref/css_selectors.asp
* Emmet 快速鍵表：https://docs.emmet.io/cheat-sheet/
* 權重圖片說明：http://cssspecificity.com/

-- 設計靈感 --
* 色票靈感網站：http://colorhunt.co/
* Colors-canva's design：https://www.canva.com/colors/
* 設計師必讀的色彩心理學：https://buzzorange.com/techorange/2017/08/10/blue-is-most-important-color-for-ui-design/

-- 討論文章 --
* 一般網頁容量大小：https://buzzorange.com/techorange/2017/08/10/blue-is-most-important-color-for-ui-design/

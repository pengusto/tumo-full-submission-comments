# TUMO Full Submission Comments

[English](../../README.md) | [Deutsch](README.de.md) | [Français](README.fr.md) | [日本語](README.ja.md) | **Հայերեն**

Փոքր userscript՝ TUMO Activity Manager-ի համար։ Այն ամբողջությամբ ցուցադրում է վերբեռնված ֆայլերի տակ կրճատված մեկնաբանությունները և երկար տեքստը բաժանում է մի քանի տողի։

[Տեղադրել userscript-ը](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)

## Ինչ է անում սկրիպտը

- Աշխատում է միայն Activity Manager-ի examiner էջերում։
- Մեկ տողով մեկնաբանության դաշտը փոխարինում է տողադարձով տեքստային բլոկով։
- Չի փոխում գնահատականները, հետադարձ կապը կամ հանձնված աշխատանքները։
- Տվյալներ չի ուղարկում և ոչինչ չի պահպանում։

## Պահանջներ

Անհրաժեշտ է Tampermonkey և `activities.es.tumo.world` կայքում userscript-ներ գործարկելու թույլտվություն։ Ֆայլերի URL-ներին հասանելիությունը միացնելու կարիք չկա։

## Տեղադրում

### Google Chrome

1. Տեղադրեք [Tampermonkey-ը Chrome Web Store-ից](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)։
2. Աջ սեղմեք Tampermonkey-ի պատկերակի վրա և ընտրեք **Manage extension**։
3. Միացրեք **Allow User Scripts**։ Chrome 138 և ավելի նոր տարբերակներում այս անջատիչը հասանելի է։ Եթե այն չի երևում, միացրեք **Developer mode**-ը `chrome://extensions` էջում։ Chromium-ի վրա հիմնված դիտարկիչներում Tampermonkey 5.3 և ավելի նոր տարբերակները պահանջում են այս կարգավորումներից մեկը։ Տեսեք [Tampermonkey-ի բացատրությունը](https://www.tampermonkey.net/faq.php?q=Q209)։
4. Բացեք [userscript-ը](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)։
5. Tampermonkey-ի տեղադրման էջում ընտրեք **Install**։
6. Վերաբեռնեք Activity Manager-ը։

### Chromium-ի վրա հիմնված այլ աշխատասեղանի դիտարկիչներ

Այս բաժինը վերաբերում է Microsoft Edge-ին, Vivaldi-ին և Ecosia Desktop Browser-ին։

1. Տեղադրեք Tampermonkey-ը ձեր դիտարկիչի ընդլայնումների խանութից։ Edge-ի համար հասանելի է [Microsoft Edge Add-ons-ը](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)։ Vivaldi-ն աջակցում է [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)-ի ընդլայնումները։
2. Բացեք Tampermonkey-ի ընդլայնման մանրամասները և միացրեք **Allow User Scripts**, եթե դիտարկիչն առաջարկում է այդ անջատիչը։ Հակառակ դեպքում ընդլայնումների էջում միացրեք **Developer mode**։ Chromium դիտարկիչների այս պահանջը Tampermonkey-ը նկարագրում է իր [FAQ-ում](https://www.tampermonkey.net/faq.php?q=Q209)։
3. Բացեք [userscript-ը](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)։
4. Հաստատեք տեղադրումը Tampermonkey-ում։
5. Վերաբեռնեք Activity Manager-ը։

Vivaldi-ն պաշտոնապես աջակցում է Chrome-ի ընդլայնումները։ Ecosia Desktop Browser-ը հիմնված է Chromium-ի վրա, սակայն Tampermonkey-ի տեղադրումն այնտեղ դեռ չի ստուգվել։ Userscript-ը կարող է աշխատել միայն այն դեպքում, երբ դիտարկիչը թույլ է տալիս տեղադրել Tampermonkey-ը։

### Mozilla Firefox

1. Տեղադրեք [Tampermonkey-ը Mozilla Add-ons-ից](https://addons.mozilla.org/firefox/addon/tampermonkey/)։
2. Բացեք [userscript-ը](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js)։
3. Հաստատեք տեղադրումը Tampermonkey-ում։
4. Եթե Firefox-ը հարցնի, թույլատրեք հասանելիությունը `activities.es.tumo.world` կայքին։
5. Վերաբեռնեք Activity Manager-ը։

Firefox-ը չի օգտագործում Chrome-ի **Allow User Scripts** կամ **Developer mode** կարգավորումները։

### Safari-ն macOS-ում

1. Տեղադրեք [Tampermonkey-ը App Store-ից](https://apps.apple.com/app/tampermonkey/id6738342400)։ Ընթացիկ տարբերակը պահանջում է macOS 11 կամ ավելի նոր տարբերակ։ Tampermonkey-ի [Safari-ի պաշտոնական էջում](https://www.tampermonkey.net/index.php?browser=safari&locale=en) նշված է նաև Classic տարբերակը՝ Safari-ի ավելի հին տարբերակների համար։
2. Բացեք **Safari → Settings → Extensions** և միացրեք Tampermonkey-ը։
3. Tampermonkey-ին թույլատրեք հասանելիություն `activities.es.tumo.world` կայքին։
4. Բացեք [userscript-ը](https://raw.githubusercontent.com/pengusto/tumo-full-submission-comments/main/tumo-full-submission-comments.user.js) և հաստատեք տեղադրումը։
5. Վերաբեռնեք Activity Manager-ը։

Safari-ն դեռ չի փորձարկվել Activity Manager-ում։ Այս ուղեցույցը չի ներառում բջջային դիտարկիչները։

## Անհրաժեշտ թույլտվություններ

Սկրիպտն աշխատում է միայն `https://activities.es.tumo.world/dashboard/activities/examiner/` հասցեի տակ գտնվող examiner էջերում։ Tampermonkey-ը պետք է հասանելիություն ունենա այս կայքին։

Այս սկրիպտի համար մի միացրեք **Allow access to file URLs**։ Այդ թույլտվությունը վերաբերում է տեղային `file://` էջերին և կապ չունի HTTPS-ով աշխատող Activity Manager-ի հետ։ [Tampermonkey FAQ](https://www.tampermonkey.net/faq.php?q=Q204)-ն այն նկարագրում է առանձին։

Userscript-ը հայտարարում է `@grant none`։ Այն չի օգտագործում արտաքին API, հետևման ծառայություն կամ հեռակա սերվեր։

## Տեղադրման ստուգում

1. Բացեք որևէ Activity, որտեղ վերբեռնված ֆայլի տակ կա մեկնաբանություն։
2. Դիտարկիչի գործիքագոտուց բացեք Tampermonkey-ը և ստուգեք, որ **TUMO Full Submission Comments**-ը միացված է։
3. Երկար մեկնաբանությունը պետք է երևա մի քանի տողով՝ առանց լրացուցիչ կոճակի կամ կարգավորումների վահանակի։

## Եթե ոչինչ չի կատարվում

1. Tampermonkey-ի կառավարման էջում ստուգեք, որ **TUMO Full Submission Comments**-ը միացված է։
2. Դիտարկիչի extension կարգավորումներում Tampermonkey-ին թույլատրեք հասանելիություն `activities.es.tumo.world` կայքին։
3. Chromium-ի վրա հիմնված դիտարկիչում ստուգեք, որ **Allow User Scripts** կամ **Developer mode** կարգավորումը միացված է։ Safari-ում ստուգեք, որ Tampermonkey ընդլայնումը միացված է։
4. Վերաբեռնեք Activity Manager-ի ներդիրը։
5. Եթե Tampermonkey-ը ցույց է տալիս հին տարբերակ, վերատեղադրեք սկրիպտը վերևի հղումով։

## Սկրիպտի անջատում կամ հեռացում

Բացեք Tampermonkey-ի կառավարման էջը։ Անջատեք սկրիպտը անջատիչով կամ հեռացրեք աղբամանի պատկերակով։

## Գաղտնիություն և սահմանափակումներ

Սկրիպտն աշխատում է միայն բաց դիտարկիչի ներդիրում։ Այն կարդում է Activity Manager-ում արդեն ցուցադրված մեկնաբանությունը և փոխում միայն դրա տեսքը։

1.0.3 տարբերակը փորձարկվել է Chrome-ում։ Edge-ը, Vivaldi-ն, Ecosia-ն, Firefox-ը և Safari-ն այս տարբերակով դեռ գործնականում չեն փորձարկվել։ Եթե TUMO-ն փոխի Activity Manager-ի էջի կառուցվածքը, հնարավոր է անհրաժեշտ լինի թարմացնել CSS selector-ը։

Այս անկախ նախագիծը կապված չէ TUMO-ի հետ և չի հրապարակվել TUMO-ի կողմից։ TUMO-ն համապատասխան իրավատերերի ապրանքանիշն է։

## Մշակման թեստ

```bash
python3 -m http.server 8000
```

Բացեք `http://localhost:8000/test/fixture.html` հասցեն։ Էջը պետք է ցուցադրի **Test bestanden**։

## Լիցենզիա

Հրապարակված է [Mozilla Public License 2.0](../../LICENSE) լիցենզիայով։ Եթե տարածում եք այս սկրիպտի փոփոխված տարբերակը, ձեր փոփոխությունները նույնպես պետք է հասանելի դարձնեք MPL 2.0 լիցենզիայով։

Թարգմանված README-ները պատրաստվել են մեքենայական աջակցությամբ և պետք է թարմացվեն անգլերեն սկզբնաղբյուրի հետ միասին։

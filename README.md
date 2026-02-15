# Hotel Admin System

თანამედროვე, responsive სასტუმროს ადმინისტრაციული პანელი (`index.html`), Georgian UI-ით, Tailwind სტილით და Channex ინტეგრაციის საფუძვლით.

## რა შეიცვალა

- სრულად განახლდა დიზაინი:
1. Fixed Sidebar navigation
2. Sticky top bar
3. მრავალგვერდიანი admin ინტერფეისი
4. Tailwind based clean UI
5. Dark mode toggle

- დაინტეგრირდა SDK ინტერფეისები:
1. `/_sdk/element_sdk.js`
2. `/_sdk/data_sdk.js`

- ჩაემატა Channel Manager გვერდი:
1. OAuth რეჟიმი (რეკომენდებული)
2. API key რეჟიმი
3. Proxy URL მხარდაჭერა
4. კავშირის ტესტი
5. Rates / Reservations sync
6. Disconnect

## ფაილები

- `/Users/giorgiimedashvili/Documents/New project/hotel.github.io/index.html` - მთავარი აპლიკაცია
- `/Users/giorgiimedashvili/Documents/New project/hotel.github.io/README.md` - ეს აღწერა

## Channex OAuth ინტეგრაცია

Frontend-ში მზად არის შემდეგი flow:

1. Channel Manager გვერდზე შეავსე:
   - `Proxy URL`
   - `OAuth Start URL`
   - `OAuth Status URL`
2. დააჭირე `Channex OAuth ავტორიზაცია`
3. ავტორიზაციის დაბრუნების შემდეგ აპი ავტომატურად ამოწმებს სტატუსს
4. წარმატების შემთხვევაში `დაკავშირებულია` სტატუსი ირთვება

### Backend endpoints (აუცილებელია რეალური ინტეგრაციისთვის)

საჭიროა backend-ში არსებობდეს:

1. `GET /auth/channex/start` - იწყებს OAuth redirect-ს
2. `GET /auth/channex/status` - აბრუნებს კავშირის სტატუსს (JSON)
3. `proxy` endpoint Channex API-სთვის (CORS/secret უსაფრთხოებისთვის)

რეკომენდებული `status` პასუხი:

```json
{
  "connected": true,
  "property_id": "your_property_id"
}
```

## მონაცემთა ინტერფეისი (Data SDK)

კომპონენტი ელოდება ტიპებს:

- `room`
- `reservation`
- `guest`

მაგალითი:

```json
{
  "type": "room",
  "room_number": "101",
  "room_type": "standard",
  "status": "available",
  "price": 120
}
```

## შენიშვნები

- ეს ვერსია არის polished UI + სამუშაო ინტეგრაციის ფენა.
- production გამოყენებისთვის საჭიროა backend OAuth/proxy ლოგიკის დასრულება.
- Channel sync მოთხოვნები მუშაობს იმ შემთხვევაში, თუ proxy ან API წვდომა სწორად არის კონფიგურირებული.

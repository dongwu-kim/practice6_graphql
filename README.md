# practice6_graphql

movie

1. REST <> GraphQL

   - Over fetching
     단일 요청에서 사용하지 않는 DB 내 data를 호출하는 상황.
     이는 View에서 요구하지 않은 정보의 호출이므로, 네트워크 자원 사용으로 볼 수 있다.
   - Under fetching
     반대로 요구한 정보들의 세분화에서 발생하는 문제로 단일 요청만으로 원하는 정보를 가져올 수 없기에 다수의 Call을 발생시킨다.

   Over fetching의 경우 단일 요청 내 불필요한 네트워크 자원 제공,
   Under fetching의 경우 필요한 네트워크 자원을 위한 다수의 요청.

   이러한 차이를 가지고 있다.

   - Resolvers
